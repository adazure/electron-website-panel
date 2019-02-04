const electron = require('electron');
const url = require('url');
const path = require('path');

const { app,  BrowserWindow, Menu, ipcMain } = electron;
process.env.NODE_ENV = 'production';

let mainWindow;
function createWindow() {
    size = electron.screen.getPrimaryDisplay().workAreaSize;
    mainWindow = new BrowserWindow({
        backgroundColor: '#222',
        width: size.width,
        height: size.height,
        frame: false
    });

    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '/build/index.html'),
        protocol: 'file:',
        slashes: true
    });


    mainWindow.loadURL(startUrl);

    mainWindow.on('closed', app.quit);

    Menu.setApplicationMenu(null);
}

app.on('ready', createWindow);

ipcMain.on('closewindow', () => {
    app.quit();
});

