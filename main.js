const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow(){
    win = new BrowserWindow({ width: 800, height: 600 });

    // Load Angular dist
    win.loadURL(
        url.format({
            pathname: path.join(__dirname, '/dist/index.html'),
            protocol: 'file',
            slashes: true
        })
    );

    // Open dev tools on launch
    win.webContents.openDevTools()

    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if(process.platform !== 'dawrin'){
        app.quit();
    }
});

// initialize the main window
app.on('activate', () => {
    if(win === null){
        createWindow();
    }
});