const Store = require('electron-store');

const { app } = require('electron');

const path = require('path');

const store = new Store({
	fileExtension: 'json',
	// encryptionKey: 'abc',
	cwd: path.join(app.getAppPath(), 'db'),
});


module.exports = store;