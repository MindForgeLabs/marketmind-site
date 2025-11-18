param(
    [string]$Root = ".",
    [switch]$CheckExternal
)

# ---------- Helpers ----------

function Get-RoutesFromApp {
    param(
        [string]$ProjectRoot
    )

    $routes = [System.Collections.Generic.List[string]]::new()

    $appDirs = @("app", "src/app") |
        ForEach-Object {
            $full = Join-Path $ProjectRoot $_
            if (Test-Path $full) { $full }
        }

    if ($appDirs.Count -eq 0) {
        throw "No app or src/app directory found under $ProjectRoot"
    }

    foreach ($appDir in $appDirs) {
        # Look for page.* in app router
        $pages = Get-ChildItem -Path $appDir -Recurse -File -Include page.tsx,page.jsx,page.mdx,page.ts,page.js

        foreach ($page in $pages) {
            $rel = Resolve-Path $page.FullName -Relative

            # Normalize to use forward slashes and strip the leading app dir
            $normalized = $rel -replace '\\','/'
            $normalized = $normalized -replace '^\.?/?(app|src/app)/', ''

            # Root: page.tsx => "/"
            if ($normalized -match '^page\.(tsx|jsx|mdx|ts|js)$') {
                $routes.Add("/")
                continue
            }

            # e.g. "docs/quickstart/page.mdx" => "/docs/quickstart"
            $dir = Split-Path $normalized -Parent
            if ([string]::IsNullOrWhiteSpace($dir)) {
                $routes.Add("/")
            } else {
                $path = "/" + ($dir.Trim('/') -replace '\\','/')
                $routes.Add($path)
            }
        }
    }

    # Return unique routes
    return $routes | Sort-Object -Unique
}

function Test-InternalLink {
    param(
        [string]$Href,
        [string[]]$Routes
    )

    # Anchors and mailto/tel are allowed
    if ($Href -like "#*" -or $Href -like "mailto:*" -or $Href -like "tel:*") {
        return @{
            Status = "OK"
            Reason = "Anchor/mailto/tel link (not a route CTA)"
        }
    }

    if (-not $Href.StartsWith("/")) {
        return @{
            Status = "UnknownOrRelative"
            Reason = "Does not start with '/' (relative or external handled elsewhere)"
        }
    }

    # Strip query / fragment
    $clean = $Href.Split("?#".ToCharArray())[0]
    if ([string]::IsNullOrWhiteSpace($clean)) {
        $clean = "/"
    }

    if ($Routes -contains $clean) {
        return @{
            Status = "OK"
            Reason = "Exact route match"
        }
    }

    # Try with/without trailing slash
    $alt = if ($clean.EndsWith("/")) { $clean.TrimEnd("/") } else { $clean + "/" }

    if ($Routes -contains $alt) {
        return @{
            Status = "OK"
            Reason = "Match via trailing slash variant"
        }
    }

    return @{
        Status = "MissingRoute"
        Reason = "No matching route in app/src/app page files"
    }
}

function Test-ExternalLink {
    param(
        [string]$Href,
        [switch]$DoCheck
    )

    if (-not $DoCheck) {
        return @{
            Status = "UncheckedExternal"
            Reason = "External URL (checking disabled)"
        }
    }

    try {
        $resp = Invoke-WebRequest -Uri $Href -Method Head -TimeoutSec 5
        if ($resp.StatusCode -ge 200 -and $resp.StatusCode -lt 400) {
            return @{
                Status = "OK"
                Reason = "External URL responded with $($resp.StatusCode)"
            }
        }

        return @{
            Status = "ExternalError"
            Reason = "Status code $($resp.StatusCode)"
        }
    }
    catch {
        return @{
            Status = "ExternalError"
            Reason = "Request failed: $($_.Exception.Message)"
        }
    }
}

# ---------- Main ----------

$routes = Get-RoutesFromApp -ProjectRoot $Root
Write-Host "Discovered $($routes.Count) routes from app/src/app:" -ForegroundColor Cyan
$routes | ForEach-Object { Write-Host "  $_" }

# Files to scan
$files = Get-ChildItem -Path $Root -Recurse -File -Include *.tsx,*.jsx,*.mdx |
    Where-Object {
        $_.FullName -notmatch "\\node_modules\\" -and
        $_.FullName -notmatch "\\.next\\" -and
        $_.FullName -notmatch "\\storybook-static\\" -and
        $_.FullName -notmatch "\\dist\\"
    }

$hrefPattern = 'href\s*=\s*["'']([^"'']+)["'']'
$results = @()

foreach ($file in $files) {
    $text = Get-Content $file.FullName -Raw
    $matches = [regex]::Matches($text, $hrefPattern)

    foreach ($m in $matches) {
        $href = $m.Groups[1].Value

        $prefix = $text.Substring(0, $m.Index)
        $line = ($prefix -split "`r?`n").Count

        # Skip obvious placeholders we really don't want in CTAs
        if ($href -eq "#" -or $href -like "javascript:*") {
            $results += [pscustomobject]@{
                File   = $file.FullName
                Line   = $line
                Href   = $href
                Type   = "Internal"
                Status = "Placeholder"
                Reason = "href='#' or javascript:... (manual review)"
            }
            continue
        }

        if ($href -match '^https?://') {
            $check = Test-ExternalLink -Href $href -DoCheck:$CheckExternal
            $results += [pscustomobject]@{
                File   = $file.FullName
                Line   = $line
                Href   = $href
                Type   = "External"
                Status = $check.Status
                Reason = $check.Reason
            }
            continue
        }

        if ($href.StartsWith("/")) {
            $check = Test-InternalLink -Href $href -Routes $routes
            $results += [pscustomobject]@{
                File   = $file.FullName
                Line   = $line
                Href   = $href
                Type   = "Internal"
                Status = $check.Status
                Reason = $check.Reason
            }
            continue
        }

        # Relative or oddball stuff
        $results += [pscustomobject]@{
            File   = $file.FullName
            Line   = $line
            Href   = $href
            Type   = "UnknownOrRelative"
            Status = "NeedsReview"
            Reason = "Relative or non-http link; check manually or extend script."
        }
    }
}

# Only treat these as "broken" for exit code
$brokenStatuses = @("MissingRoute", "Placeholder", "ExternalError")
$broken = $results | Where-Object { $brokenStatuses -contains $_.Status }

if ($broken.Count -gt 0) {
    Write-Host "`nLinks that need attention (broken CTAs / URLs):" -ForegroundColor Yellow
    $broken | Sort-Object Type, Status, Href | Format-Table -AutoSize
} else {
    Write-Host "`nNo broken internal CTAs or external URLs detected." -ForegroundColor Green
}

# Optionally, if you want to see everything (for debugging), uncomment:
# $results | Sort-Object Type, Status, Href | Format-Table -AutoSize

if ($broken.Count -gt 0) {
    exit 1
}
