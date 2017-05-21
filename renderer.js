// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const BrowserWindow = require('electron').remote.BrowserWindow
const path = require('path')


// first demo >> create a new window
const newWindowBtn = document.getElementById('new-window')

newWindowBtn.addEventListener('click', function (event) {
  const modalPath = path.join('file://', __dirname, 'modal.html')
  console.log('modalPath='+modalPath);
  let win = new BrowserWindow({ width: 1400, height: 320 })
  win.on('close', function () { win = null })
  win.loadURL(modalPath)
  win.show()
})

// second demo >> manage window
const manageWindowBtn = document.getElementById('state-window');
manageWindowBtn.addEventListener('click', (event) => {
    const modalPath = path.join('file://', __dirname, 'modal.html')

    let win = new BrowserWindow({width: 600, height: 1000});

    win.on('resize', updateReply)
    win.on('move', updateReply)
    win.on('close', () => {win = null} )
    win.loadURL(modalPath)
    win.show()
    function updateReply(){
      const manageWindowsReply = document.getElementById('state-window-reply')
      const message = `
        Size: ${win.getSize()} Position: ${win.getPosition()}
      `
      manageWindowsReply.innerText = message
    }
})


// third demo >> focus window
const blurBtn = document.getElementById('blur-window')
const focusBtn = document.getElementById('focus-window')

blurBtn.addEventListener('click', () => {
  const modalPath = path.join('file://', __dirname, 'modal.html')

  win = new BrowserWindow({width: 100, height: 75})

  win.on('focus', hideFocusBtn)
  win.on('blur', showFocusBtn)

  win.on('close', () => {
    hideFocusBtn()
    win = null
  })

  win.loadURL(modalPath)
  win.show()

  function showFocusBtn(btn){
    if(!win) return
    focusBtn.classList.add('smooth-appear')
    focusBtn.classList.remove('disappear')
    focusBtn.addEventListener('click', () => {
      win.focus()
    })
  }

  function hideFocusBtn(){
    focusBtn.classList.add('disappear')
    focusBtn.classList.remove('smooth-appear')
  }
})


// forth demo >> frameless window

const framelessBtn = document.getElementById('frameless-window');

framelessBtn.addEventListener('click', (event) => {
  const modalPath = path.join('file://', __dirname, 'modal.html')
  win = new BrowserWindow({width: 1000, height: 200, transparent: false, frame: false})

  win.on('close', () => {win = null})
  win.loadURL(modalPath)
  win.show()

  alert(document.getElementById('off'))

})