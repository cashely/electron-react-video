const fs = require('fs');

const path = require('path');

const { ipcMain, app } = require('electron');

const { rooms, sources } = require('./store');


function readDir(p) {
	const dir = fs.readdirSync(p);
	return dir.map(name => {
		if (['node_modules'].includes(name)) {
			return { name };
		}
		const current = path.join(p, name);
		const stat = fs.statSync(current);
		if (stat.isDirectory()) {
			return { name, children: readDir(current)}
		}
		return { name }
	})
}

module.exports = (win) => {
	ipcMain.handle('sdk.dir', (_e, dir) => {
		const rootDir = path.join(app.getAppPath(), dir);
		return readDir(rootDir)
	})

	ipcMain.handle('sdk.sources.findAll', () => {
		return sources.findAll();
	})

	ipcMain.handle('sdk.sources.insert', (_e, body) => {
		return sources.insert(body);
	})

	ipcMain.handle('sdk.rooms.findAll', () => {
		return rooms.findAll();
	})

	ipcMain.handle('sdk.rooms.insert', (_e, body) => {
		return rooms.inset(body);
	})

	ipcMain.handle('sdk.rooms.updateOneById', (id, body) => {
		return rooms.updateOneById(id, body);
	})

	ipcMain.handle('sdk.rooms.findOneById', (_e, id) => {
		return rooms.findOneById(id);
	})
}