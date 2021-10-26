const { app, BrowserWindow } = require('electron');
const open = require("open")
function createWindow () {
    const win = new BrowserWindow({ 
        width: 800,   
        height: 600,
        icon: "img/favicon.png" 
    })
    win.loadFile('index.html')
}
app.on('window-all-closed', function () {  if (process.platform !== 'darwin') app.quit()})
app.whenReady().then(() => {  createWindow()})