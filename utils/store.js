const Store = require('electron-store');

const log = require('electron-log');

const { app } = require('electron');

const path = require('path');

const fs = require('fs');

const { nanoid } = require('nanoid');

const _ = require('lodash');



const ROOT_PATH = app ? app.getAppPath() : path.join(__dirname, '..');

const SOURCES_PATH = path.join(ROOT_PATH, 'sources');

const rooms = new Store({
	fileExtension: 'json',
	// encryptionKey: 'abc',
	cwd: path.join(ROOT_PATH, 'db'),
	name: 'rooms'
});

const sources = new Store({
	fileExtension: 'json',
	// encryptionKey: 'abc',
	cwd: path.join(ROOT_PATH, 'db'),
	name: 'sources'
});


rooms.findAll = () => {
	return rooms.get('root');
}

rooms.insert = ({ name, source }) => {
	const findRooms = rooms.findAll();
	const current = {
		id: nanoid(),
		name,
		source
	};
	console.log(findRooms, 'ffff')
	rooms.set('root', [...findRooms, current]);
	return current;
}

rooms.findOneById = (id) => {
	const findRooms = sources.findAll();

	return _.find(findRooms, { id });
}

rooms.updateOneById = (id, { name }) => {

	const findRooms = sources.findAll();

	const index = _.findIndex(findRooms, { id });
	findRooms[index]['name'] = name;
	return findRooms;
}




sources.findAll = () => {

	return sources.get('root');

}

sources.insert = ({ name }) => {
	const findSources = sources.findAll();
	const current = {
		id: nanoid(),
		name,
		path: SOURCES_PATH
	};
	sources.set('root', [...findSources, current]);
	return current;
}


function initDB() {
	const findSources = sources.findAll();
	if (!findSources || findSources.length === 0) {
		
		const sourcesFiles = fs.readdirSync(SOURCES_PATH);

		sources.set('root', sourcesFiles.map(name => {
			const [_n, ext] = path.extname(name).split('.');
			return {
				id: nanoid(),
				name,
				type: ext,
				path: SOURCES_PATH
			}
		}));

		log.info('初始化资源表完成')
	}

	const findRooms = rooms.findAll();

	if (!Array.isArray(findRooms)) {
		rooms.set('root', []);
		log.info('初始化直播间表完成')
	}
}

initDB();


module.exports = { rooms, sources };