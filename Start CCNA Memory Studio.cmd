@echo off
setlocal
cd /d "%~dp0"
start "CCNA Memory Studio" "%~dp0node_modules\electron\dist\electron.exe" .
endlocal
