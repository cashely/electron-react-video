const express = require('express');
const log = require('electron-log');

const app = express();


log.info('服务启动成功');

app
	.get('/', (req, res) => {
		res.send('hello')
	})

app.listen(9012);