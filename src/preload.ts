import { ipcRenderer, contextBridge } from 'electron'

contextBridge.exposeInMainWorld('core', {
  renderer: () => {
    require('../build/renderer.js')
  },
})
