const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
let win

const tryMainBtn = document.getElementById('try');


function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600, show: false, backgroundColor: '#2e2c29'})

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  //test the 'ready-to-show
  mainWindow.once('ready-to-show',() =>{
    mainWindow.show();
  })

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })


  tryMainBtn.addEventListener('click', function(){
    alert('ha!');
  })
}


/**
 * This is for my first to create a child window
 */
function createChild(){

  //win = new BrowserWindow({parent: mainWindow});
  win = new BrowserWindow({width: 1000, height: 200, parent: mainWindow});
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index2.html'),
    protocol: 'file:',
    slashes: true
  }));

  win.once('ready-to-show', ()=>{
    win.show();
  })

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
  console.log(win);
  if (win === null){
    // createChild()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

