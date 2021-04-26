import { app, BrowserWindow } from 'electron'
import path from 'path'

const createWindow = () => {
  const options: Electron.BrowserWindowConstructorOptions = {
    width: 400,
    height: 300,
    webPreferences: {
      // レンダラープロセスで Node.js 使えないようにする (XSS対策)
      nodeIntegration: false,
      nodeIntegrationInWorker: false,
      // preload で実行するときに、コンテキスト(this == window)を別なものとする
      contextIsolation: true,
      // process や Electron を windowオブジェクト に保存する処理。フルパスの指定が必要
      preload: path.join(__dirname, './preload.js'), // preload.js にビジネスロジックを記述する
    },
  }
  const win = new BrowserWindow(options)
  win.loadFile('public/index.html')

  win.webContents.openDevTools()
}

// Electron の初期化が完了したらウィンドウを作成
app.whenReady().then(createWindow)
