param(
    [Parameter(Mandatory=$true)]
    [string]$Directory,

    [Parameter(Mandatory=$false)]
    [int]$Port = 8088
)

if (!(Test-Path $Directory)) {
    Write-Error "Directory not found: $Directory"
    exit 1
}

Write-Host "Starting static web server"
Write-Host "Directory: $Directory"
Write-Host "Port: $Port"
Write-Host "URL: http://localhost:$Port"

Set-Location $Directory

# Prüfen ob python oder python3 verfügbar ist
$python = Get-Command python -ErrorAction SilentlyContinue
if (!$python) {
    $python = Get-Command python3 -ErrorAction SilentlyContinue
}

if (!$python) {
    Write-Error "Python not found in PATH."
    exit 1
}

& $python.Source -m http.server $Port