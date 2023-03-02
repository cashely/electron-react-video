const express = require('express');
const log = require('electron-log');
const path = require('path');

const { rooms, sources } = require('../utils/store');

express.static(path.join(__dirname, '../'));

const app = express();

app.use(express.static(path.join(__dirname, '../')))



log.info('服务启动成功');

app
	.get('/', (req, res) => {
		res.send('hello')
	})
	.get('/rooms', (req, res) => {
		res.json(rooms.findAll());
	})
	.post('/room', (req, res) => {
		const { name, source } = req.body;
		res.json(rooms.insert({ name, source }));
	})
	.get('/sources', (req, res) => {
		res.json(sources.findAll());
	})

app.listen(9012);