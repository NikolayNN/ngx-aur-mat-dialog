@echo off

echo Building ngx-aur-mat-dialog...
call ng build ngx-aur-mat-dialog
if errorlevel 1 goto error

echo Navigating to dist/ngx-aur-mat-dialog...
cd dist/ngx-aur-mat-dialog
if errorlevel 1 goto error

echo Publishing to npm...
npm publish
if errorlevel 1 goto error

echo Done!
exit /b 0

:error
echo Failed at step above.
exit /b 1
