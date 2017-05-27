# Electron private PlayGround

### Reading List

- [ ] Electron API Demos
- [ ] [quick-start](https://github.com/electron/electron-quick-start)

- [ ] [document](https://electron.atom.io/docs/api/browser-window/)

### [Quick Start](https://electron.atom.io/docs/tutorial/quick-start/)

#### basic file struction
* package.json

    1. "name": "your-app"
    2. "version": "0.1.0"
    3. "main": "main.js"

* main.js

    ```javascript
    var {app, BrowserWindow} = require('electron')
    ```

    > [remote](https://github.com/electron/electron/blob/master/docs/api/remote.md)
    > 這邊有remote的說明，因為如果直接用`document`還是會出現「未宣告」的錯誤
    > 所以，可能需要透過`remote`拿到資源之後再進行取用？？！！
    
    > going after ...
    > 結果全部有關document的物件都必須要前端裡描述`rednerer.js`
    > 我們以為要寫在main process, 結果應該是寫在render process
    > render process才會認得所有前端的元件

* index.html

    ```html
    <script></script>
    ```