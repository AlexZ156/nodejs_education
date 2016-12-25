let clients = [];

exports.subscribe = (req, res) => {
	console.log('subscribe');

	clients.push(res);
};

exports.publish = message => {
	console.log("message '%s'", message);

	clients.forEach(res => {
		res.end(message);
	})
	clients = [];
};
