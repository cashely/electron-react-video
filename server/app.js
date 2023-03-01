const express = require('express');
const log = require('electron-log');
const path = require('path')

express.static(path.join(__dirname, '../'));

const app = express();

app.use(express.static(path.join(__dirname, '../')))



log.info('服务启动成功');

app
	.get('/', (req, res) => {
		res.send('hello')
	})

app.listen(9012);