import express from 'express';
import SocketController from './socket/controller.js';

let app = express();
let http = require('http').Server(app);
const PORT = 3001;
let socketController = new SocketController(http, app);


socketController.fireDummy();

http.listen(PORT, () => {
	console.log('listening on port : ' + PORT);
});
