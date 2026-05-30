@echo off
chcp 65001 >nul
title College Discovery Platform

cd /d "%~dp0"

echo ========================================
echo    College Discovery Platform
echo ========================================
echo.
echo Project Directory:
echo %CD%
echo.
echo Starting Next.js Development Server...
echo.

npm run dev

echo.
echo ========================================
echo Server Stopped
echo ========================================
pause
