const { contextBridge, ipcRenderer } = require('electron');


contextBridge.exposeInMainWorld('sdk', {
	dir(d = '') {
		return ipcRenderer.invoke('sdk.dir', d)
	},
	rooms: {
		findAll() {
			return ipcRenderer.invoke('sdk.rooms.findAll');
		},
		insert() {
			return ipcRenderer.invoke('sdk.rooms.insert');
		},
		updateOneById(id, body) {
			return ipcRenderer.invoke('sdk.rooms.updateOneById', id, body);
		},
		findOneById(id) {
			return ipcRenderer.invoke('sdk.rooms.findOneById', id);
		}
	},
	sources: {
		findAll() {
			return ipcRenderer.invoke('sdk.sources.findAll');
		}
	}
})