const {app, BrowserWindow} = require('electron')

const path = require('path')
const url = require('url')

let win

function createWindow(){
  win = new BrowserWindow({width: 800, height: 600})

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))


  //開啟debug mode
  win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', () => {
  console.log('ready')
  createWindow()
})

app.on('window-all-closed', () => {
  console.log('window-all-closed')
  console.log(process.platform);
  if(process.platform !== 'darwin'){
    app.quit();
  }
})

app.on('activate', () => {
  console.log('acvivate')
  if(win === null){
    createWindow()
  }
})