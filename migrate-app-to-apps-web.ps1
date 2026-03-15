# marketmind-site\migrate-app-to-apps-web.ps1
# Run this from the repo root: c:\Users\Nalakram\Documents\GitHub\marketmind-site
# Idempotent where practical; safe to re-run.

$ErrorActionPreference = 'Stop'

Write-Host "== MarketMind: moving Next app into apps/web ==" -ForegroundColor Cyan

$repoRoot = Get-Location
$appsWebRoot = Join-Path $repoRoot 'apps\web'
$appsWebSrc  = Join-Path $appsWebRoot 'src'
$appsWebPub  = Join-Path $appsWebRoot 'public'

# Ensure target dirs exist
if (-not (Test-Path $appsWebRoot)) {
  Write-Host "Creating apps\web..." -ForegroundColor Yellow
  New-Item -ItemType Directory -Path $appsWebRoot | Out-Null
}

if (-not (Test-Path $appsWebSrc)) {
  Write-Host "Creating apps\web\src..." -ForegroundColor Yellow
  New-Item -ItemType Directory -Path $appsWebSrc | Out-Null
}

if (-not (Test-Path $appsWebPub)) {
  Write-Host "Creating apps\web\public..." -ForegroundColor Yellow
  New-Item -ItemType Directory -Path $appsWebPub | Out-Null
}

function Move-TreeContents {
  param(
    [string]$SourceDir,
    [string]$DestDir,
    [string]$Label
  )

  if (-not (Test-Path $SourceDir)) {
    Write-Host "[$Label] Source directory not found (already moved?): $SourceDir" -ForegroundColor DarkGray
    return
  }

  if (-not (Test-Path $DestDir)) {
    New-Item -ItemType Directory -Path $DestDir | Out-Null
  }

  $items = Get-ChildItem -LiteralPath $SourceDir -Force
  if ($items.Count -eq 0) {
    Write-Host "[$Label] Source directory is empty: $SourceDir" -ForegroundColor DarkGray
  } else {
    Write-Host "[$Label] Moving contents from $SourceDir -> $DestDir" -ForegroundColor Green
    foreach ($item in $items) {
      $destPath = Join-Path $DestDir $item.Name
      Move-Item -LiteralPath $item.FullName -Destination $destPath -Force
    }
  }

  # Remove source dir if now empty
  if ((Get-ChildItem -LiteralPath $SourceDir -Force | Measure-Object).Count -eq 0) {
    Write-Host "[$Label] Removing now-empty directory: $SourceDir" -ForegroundColor DarkGray
    Remove-Item -LiteralPath $SourceDir -Force
  } else {
    Write-Host "[$Label] Source directory not empty after move; leaving it in place: $SourceDir" -ForegroundColor Yellow
  }
}

function Move-FileCanonical {
  param(
    [string]$SourceFile,
    [string]$DestFile,
    [string]$Label
  )

  if (-not (Test-Path $SourceFile)) {
    if (Test-Path $DestFile) {
      Write-Host "[$Label] Source missing but destination exists; assuming already moved: $DestFile" -ForegroundColor DarkGray
    } else {
      Write-Host "[$Label] Source file not found (nothing to move): $SourceFile" -ForegroundColor DarkGray
    }
    return
  }

  $destDir = Split-Path -Parent $DestFile
  if (-not (Test-Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir | Out-Null
  }

  Write-Host "[$Label] Moving canonical file $SourceFile -> $DestFile (overwriting any scaffolded copy)" -ForegroundColor Green
  Move-Item -LiteralPath $SourceFile -Destination $DestFile -Force
}

# 1. Move app code trees into apps/web/src
$srcRoot = Join-Path $repoRoot 'src'

Move-TreeContents -SourceDir (Join-Path $srcRoot 'app')        -DestDir (Join-Path $appsWebSrc 'app')        -Label 'app'
Move-TreeContents -SourceDir (Join-Path $srcRoot 'components') -DestDir (Join-Path $appsWebSrc 'components') -Label 'components'
Move-TreeContents -SourceDir (Join-Path $srcRoot 'lib')        -DestDir (Join-Path $appsWebSrc 'lib')        -Label 'lib'
Move-TreeContents -SourceDir (Join-Path $srcRoot 'stories')    -DestDir (Join-Path $appsWebSrc 'stories')    -Label 'stories'
Move-TreeContents -SourceDir (Join-Path $srcRoot 'types')      -DestDir (Join-Path $appsWebSrc 'types')      -Label 'types'

# 2. Move public assets into apps/web/public
$publicRoot = Join-Path $repoRoot 'public'
if (Test-Path $publicRoot) {
  Write-Host "[public] Moving assets from $publicRoot -> $appsWebPub" -ForegroundColor Green
  $pubItems = Get-ChildItem -LiteralPath $publicRoot -Force
  foreach ($item in $pubItems) {
    $destPath = Join-Path $appsWebPub $item.Name
    Move-Item -LiteralPath $item.FullName -Destination $destPath -Force
  }

  if ((Get-ChildItem -LiteralPath $publicRoot -Force | Measure-Object).Count -eq 0) {
    Write-Host "[public] Removing now-empty directory: $publicRoot" -ForegroundColor DarkGray
    Remove-Item -LiteralPath $publicRoot -Force
  } else {
    Write-Host "[public] Root public directory not empty after move; leaving it in place: $publicRoot" -ForegroundColor Yellow
  }
} else {
  Write-Host "[public] Root public directory not found (already moved?): $publicRoot" -ForegroundColor DarkGray
}

# 3. Move canonical app-local config/helpers into apps/web (overwrite scaffolded copies)

Move-FileCanonical -SourceFile (Join-Path $repoRoot 'mdx-components.tsx')   -DestFile (Join-Path $appsWebRoot 'mdx-components.tsx')   -Label 'mdx-components'
Move-FileCanonical -SourceFile (Join-Path $repoRoot 'next-env.d.ts')       -DestFile (Join-Path $appsWebRoot 'next-env.d.ts')        -Label 'next-env'
Move-FileCanonical -SourceFile (Join-Path $repoRoot 'postcss.config.mjs')  -DestFile (Join-Path $appsWebRoot 'postcss.config.mjs')   -Label 'postcss'
Move-FileCanonical -SourceFile (Join-Path $repoRoot 'tailwind.config.ts')  -DestFile (Join-Path $appsWebRoot 'tailwind.config.ts')   -Label 'tailwind'

# 4. Delete obsolete root config files (only if they still exist)

$obsoleteRootFiles = @(
  'next.config.ts',
  'next.config.mjs',
  'postcss.config.mjs',
  'tailwind.config.ts',
  'mdx-components.tsx',
  'next-env.d.ts'
)

foreach ($rel in $obsoleteRootFiles) {
  $full = Join-Path $repoRoot $rel
  if (Test-Path $full) {
    Write-Host "[cleanup] Deleting obsolete root file: $rel" -ForegroundColor Yellow
    Remove-Item -LiteralPath $full -Force
  } else {
    Write-Host "[cleanup] Root file already absent (ok): $rel" -ForegroundColor DarkGray
  }
}

# 5. Final sanity messages

if (-not (Test-Path $appsWebSrc)) {
  Write-Host "WARNING: apps/web/src does not exist; something went wrong with the move." -ForegroundColor Red
} else {
  Write-Host "OK: apps/web/src exists and contains the moved app code." -ForegroundColor Cyan
}

if (-not (Test-Path $appsWebPub)) {
  Write-Host "WARNING: apps/web/public does not exist; static assets may not have moved correctly." -ForegroundColor Red
} else {
  Write-Host "OK: apps/web/public exists and contains public assets." -ForegroundColor Cyan
}

Write-Host "== Migration script finished. Review warnings above, then run verification commands. ==" -ForegroundColor Cyan