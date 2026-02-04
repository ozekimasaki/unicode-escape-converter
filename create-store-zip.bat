@echo off
chcp 65001 >nul
echo ========================================
echo Unicode Escape Converter
echo Chromeウェブストア 提出用ZIP作成
echo ========================================
echo.

:: バージョン確認
set /p VERSION="バージョン番号（例: 1.0.0）: "

:: 一時ディレクトリ作成
set TEMP_DIR=unicode-escape-converter-%VERSION%
set ZIP_FILE=unicode-escape-converter-%VERSION%.zip

echo.
echo 一時ディレクトリを作成中...
mkdir "%TEMP_DIR%" 2>nul

:: ファイルコピー
echo ファイルをコピー中...
copy manifest.json "%TEMP_DIR%\" >nul
copy popup.html "%TEMP_DIR%\" >nul
copy popup.css "%TEMP_DIR%\" >nul
copy popup.js "%TEMP_DIR%\" >nul
xcopy /E /I icons "%TEMP_DIR%\icons" >nul

:: ZIP作成
echo ZIPファイルを作成中...
powershell -Command "Compress-Archive -Path '%TEMP_DIR%/*' -DestinationPath '%ZIP_FILE%' -Force"

:: 一時ディレクトリ削除
echo 一時ディレクトリを削除中...
rmdir /S /Q "%TEMP_DIR%"

echo.
echo ========================================
echo 完了！
echo ========================================
echo 作成されたファイル: %ZIP_FILE%
echo.
echo このファイルをChromeウェブストアにアップロードしてください。
echo.
pause
