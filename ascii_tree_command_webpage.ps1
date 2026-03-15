$root = Resolve-Path ".\"

$ignoreDirs = @(
    ".git",
    ".next",
    "node_modules",
    ".vercel",
    "out",
    "coverage",
    ".turbo",
    ".cache",
    ".idea",
    ".vscode"
)

$ignoreFilePatterns = @(
    "*.log",
    "*.tmp",
    "*.cache",
    "*.tsbuildinfo",
    ".DS_Store",
    "Thumbs.db",
    ".env",
    ".env.local",
    ".env.development.local",
    ".env.test.local",
    ".env.production.local"
)

function Should-IgnoreFile {
    param (
        [string]$Name,
        [string[]]$Patterns
    )

    foreach ($pattern in $Patterns) {
        if ($Name -like $pattern) {
            return $true
        }
    }

    return $false
}

function Show-Tree {
    param (
        [string]$Path,
        [string]$Prefix = ""
    )

    $items = Get-ChildItem -LiteralPath $Path -Force |
        Where-Object {
            if ($_.PSIsContainer) {
                $ignoreDirs -notcontains $_.Name
            }
            else {
                -not (Should-IgnoreFile -Name $_.Name -Patterns $ignoreFilePatterns)
            }
        } |
        Sort-Object @{ Expression = { -not $_.PSIsContainer } }, Name

    for ($i = 0; $i -lt $items.Count; $i++) {
        $item = $items[$i]
        $isLast = ($i -eq $items.Count - 1)

        $connector = if ($isLast) { "└── " } else { "├── " }
        Write-Output ("{0}{1}{2}" -f $Prefix, $connector, $item.Name)

        if ($item.PSIsContainer) {
            $newPrefix = if ($isLast) { "$Prefix    " } else { "$Prefix│   " }
            Show-Tree -Path $item.FullName -Prefix $newPrefix
        }
    }
}

Show-Tree -Path $root