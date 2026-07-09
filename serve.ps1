# Launches the al-folio site locally.
# Usage:  right-click > "Run with PowerShell"   OR   in a terminal:  .\serve.ps1
# Then open http://127.0.0.1:4000/  (Ctrl+C to stop)
# Note: live-reload is OFF — refresh the browser manually after changes.

$ErrorActionPreference = "Stop"

# Put the convert->magick shim FIRST so ImageMagick is used instead of Windows' System32\convert.exe,
# then the machine/user PATH, then Python's user Scripts dir (for `jupyter nbconvert`).
$env:Path = (Join-Path $PSScriptRoot ".devtools\bin") + ";" +
            [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" +
            [System.Environment]::GetEnvironmentVariable("Path","User") + ";" +
            "$env:APPDATA\Python\Python314\Scripts"

# Allow Bundler to read its cached git gem (jekyll-terser) on this machine.
$env:GIT_CONFIG_VALUE_0 = "all"

Set-Location $PSScriptRoot
bundle exec jekyll serve --port 4000
