const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const fs = require('fs')
const yj = require('yieldable-json')

//app.disableHardwareAcceleration()

//process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
process.env['ELECTRON_ENABLE_LOGGING'] = 'true';

const createWindow = () => {
    const win = new BrowserWindow({
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        },
        autoHideMenuBar: true,//false for debugging (no need to change it anymore because F3 toggles the menu bar since version 0.4.4)
        width: 512,
        height: 384,//+ 18,
        show: false,
        title: "Vara",
        resizable: true,//This should probably be false
        useContentSize: true
    })

    win.once('ready-to-show', () => {
        //win.setAlwaysOnTop(true, "normal");
        win.setFullScreen(true);
        win.show();
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {

    createWindow()

    
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})