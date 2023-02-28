const { contextBridge, app, ipcRenderer } = require('electron');


contextBridge.exposeInMainWorld('sdk', {
	dir(d = '') {
		return ipcRenderer.invoke('sdk.dir', d)
	}
})