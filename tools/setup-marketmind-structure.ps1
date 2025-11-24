[CmdletBinding(SupportsShouldProcess = $true)]
param(
    # If supplied, the script will delete .idea and .vs directories after
    # adding them to .gitignore
    [switch]$CleanIDEDirs
)

$ErrorActionPreference = "Stop"

Write-Host "=== MarketMind repo layout helper ===" -ForegroundColor Cyan

# Use the folder where this script lives as the repo root
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

# 1) Ensure core directories exist
Write-Host "`n--- Ensuring directory structure ---" -ForegroundColor Cyan

$dirsToEnsure = @(
    "packages",
    "packages\analytics",
    "packages\config",
    "packages\docs-engine",
    "packages\docs-engine\content",
    "packages\viz-core",
    "packages\ui",
    "docs",
    "infra",
    "tools"
)

foreach ($rel in $dirsToEnsure) {
    $full = Join-Path $root $rel
    Ensure-Directory -Path $full
}

# 2) Update .gitignore to ignore IDE folders
Write-Host "`n--- Updating .gitignore ---" -ForegroundColor Cyan

$gitignorePath = Join-Path $root ".gitignore"
if (-not (Test-Path $gitignorePath)) {
    New-Item -ItemType File -Path $gitignorePath -Value "# Git ignore (created by setup script)`r`n" | Out-Null
    Write-Host "Created .gitignore"
}

# Read entire file as a single string
$gitContent = Get-Content $gitignorePath -Raw

$entriesToAdd = @(
    ".idea/",
    ".vs/"
)

$modified = $false

foreach ($entry in $entriesToAdd) {
    if ($gitContent -notmatch [regex]::Escape($entry)) {
        Add-Content -Path $gitignorePath -Value "`r`n# IDE artifacts`r`n$entry"
        Write-Host "Added '$entry' to .gitignore" -ForegroundColor Green
        $modified = $true
    } else {
        Write-Host "'.gitignore' already contains '$entry'"
    }
}

if (-not $modified) {
    Write-Host "No changes to .gitignore"
}

# 3) Optionally remove IDE folders
Write-Host "`n--- IDE folders (.idea, .vs) ---" -ForegroundColor Cyan

$ideDirs = @(
    ".idea",
    ".vs"
)

foreach ($rel in $ideDirs) {
    $full = Join-Path $root $rel
    if (Test-Path $full) {
        if ($CleanIDEDirs) {
            if ($PSCmdlet.ShouldProcess($full, "Remove IDE directory")) {
                Remove-Item -Recurse -Force -Path $full
                Write-Host "Removed IDE dir: $full" -ForegroundColor Yellow
            }
        } else {
            Write-Host "Found IDE dir: $full (leave it in place; use -CleanIDEDirs to remove)" -ForegroundColor DarkYellow
        }
    } else {
        Write-Host "IDE dir not present: $full"
    }
}

# 4) Create docs/README.md as a home for architecture reports
Write-Host "`n--- docs/README.md ---" -ForegroundColor Cyan

$docsReadme = Join-Path $root "docs\README.md"
if (-not (Test-Path $docsReadme)) {
    $docsContent = @"
# MarketMind Architecture Docs

This folder is the home for high-level design and architecture documents.

Suggested files (based on current design work):

- \`01-performance-stack.md\` – MarketMind Web Stack & Performance Goals
- \`02-blazing-docs-and-viz.md\` – Building a Blazing-Fast Documentation & Visualization Site (2025)
- \`03-web-experience-blueprint.md\` – MarketMind Web Experience & Implementation Blueprint
- \`04-telemetry-pipeline.md\` – MarketMind Telemetry & Data Pipeline Blueprint

You can convert your existing .docx reports to Markdown and store them here.
"@
    New-Item -ItemType File -Path $docsReadme -Value $docsContent | Out-Null
    Write-Host "Created docs/README.md"
} else {
    Write-Host "docs/README.md already exists"
}

# 5) Create infra/README.md as a home for future IaC/ops
Write-Host "`n--- infra/README.md ---" -ForegroundColor Cyan

$infraReadme = Join-Path $root "infra\README.md"
if (-not (Test-Path $infraReadme)) {
    $infraContent = @"
# MarketMind Infrastructure & Ops

This folder is reserved for infrastructure-as-code (IaC) and operational configs.

Examples of what may live here in the future:

- Terraform/Pulumi for non-Vercel resources (e.g., S3 buckets, data warehouse)
- Monitoring & alerting configs
- CDN rules, security policies, etc.
"@
    New-Item -ItemType File -Path $infraReadme -Value $infraContent | Out-Null
    Write-Host "Created infra/README.md"
} else {
    Write-Host "infra/README.md already exists"
}

Write-Host "`nDone. Repo structure normalized. No app code was moved or deleted." -ForegroundColor Cyan
Write-Host "If you want to also remove .idea/.vs next time, run: `n  .\$(Split-Path -Leaf $MyInvocation.MyCommand.Path) -CleanIDEDirs" -ForegroundColor DarkCyan
