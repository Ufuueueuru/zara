const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

//app.disableHardwareAcceleration()

//process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
process.env['ELECTRON_ENABLE_LOGGING'] = 'true';

const createWindow = () => {
    const win = new BrowserWindow({
        webPreferences: {
            //preload: path.join(__dirname, 'preload.js')
        },
        autoHideMenuBar: false,
        width: 800,
        height: 512,//+ 18,
        show: false,
        title: "Zara",
        resizable: true,
        useContentSize: true
    })

    win.once('ready-to-show', () => {
        //win.setAlwaysOnTop(true, "normal");
        //win.setFullScreen(true);
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