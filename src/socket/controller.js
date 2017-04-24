import socketIO from 'socket.io-client';

class SocketController {
	constructor(http, app) {
		this.socket = socketIO('http://localhost:3000/YMTeqkj0');
	}

	fireDummy() {
		this.socket.on('connect', () => {
			console.log(this.socket.id);
		});
	}
}

export default SocketController;
