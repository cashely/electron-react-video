const fs = require('fs');

const path = require('path');

const { ipcMain, app } = require('electron');


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
}