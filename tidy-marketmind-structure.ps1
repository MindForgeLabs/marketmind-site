[CmdletBinding()]
param()

$ErrorActionPreference = "Stop"

Write-Host "=== MarketMind repo tidy ===" -ForegroundColor Cyan

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $root
Write-Host "Repo root: $root"

function Ensure-Directory {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Path
    )

    if (-not (Test-Path $Path)) {
        New-Item -ItemType Directory -Path $Path | Out-Null
        Write-Host "Created directory: $Path" -ForegroundColor Green
    } else {
        Write-Host "Directory exists: $Path"
    }
}

# 1) Ensure tools/ exists
Write-Host "`n--- Ensuring tools/ directory ---" -ForegroundColor Cyan
$toolsDir = Join-Path $root "tools"
Ensure-Directory -Path $toolsDir

# 2) Move helper PS1 scripts into tools/
Write-Host "`n--- Moving helper scripts into tools/ ---" -ForegroundColor Cyan

$helperScripts = @(
    "scaffold-site.ps1",
    "setup-marketmind-structure.ps1",
    "Test-NextLinks.ps1"
)

foreach ($file in $helperScripts) {
    $srcPath  = Join-Path $root $file
    $destPath = Join-Path $toolsDir $file

    if (Test-Path $srcPath) {
        if ($srcPath -ne $destPath) {
            Move-Item -Path $srcPath -Destination $destPath -Force
            Write-Host "Moved $file -> tools\$file" -ForegroundColor Green
        } else {
            Write-Host "$file already in tools/"
        }
    } else {
        Write-Host "Not found at root (skipping): $file"
    }
}

# 3) Update .gitignore for build/patch junk
Write-Host "`n--- Updating .gitignore ---" -ForegroundColor Cyan

$gitignorePath = Join-Path $root ".gitignore"
if (-not (Test-Path $gitignorePath)) {
    New-Item -ItemType File -Path $gitignorePath -Value "# Git ignore (created by tidy script)`r`n" | Out-Null
    Write-Host "Created .gitignore" -ForegroundColor Green
}

$gitContent = Get-Content $gitignorePath -Raw

$entriesToAdd = @(
    "tsconfig.tsbuildinfo",
    "*.patch"
)

foreach ($entry in $entriesToAdd) {
    if ($gitContent -notmatch [regex]::Escape($entry)) {
        Add-Content -Path $gitignorePath -Value "`r`n# Generated / temp`r`n$entry"
        Write-Host "Added '$entry' to .gitignore" -ForegroundColor Green
    } else {
        Write-Host "'.gitignore' already contains '$entry'"
    }
}

# 4) Delete generated / scratch files we don't need to keep
Write-Host "`n--- Removing generated / scratch files ---" -ForegroundColor Cyan

$junkFiles = @(
    "tsconfig.tsbuildinfo",
    "unnamed.patch",
    "structure.txt",
    "versions.json"
)

foreach ($rel in $junkFiles) {
    $full = Join-Path $root $rel
    if (Test-Path $full) {
        Remove-Item -Path $full -Force
        Write-Host "Removed $rel" -ForegroundColor Yellow
    } else {
        Write-Host "Not present (ok): $rel"
    }
}

Write-Host "`nTidy complete. Core code and configs were left untouched." -ForegroundColor Cyan
