const http = require('http');
const server = http.createServer(require('./app'));
const db = require('./db');

const port = process.env.PORT || 3000;

if(process.env.SYNC){
	db.sync()
		.then(function(){
			console.log('synced');
		})
		.catch(function(err){
			console.log(err);
		});
}

server.listen(port, function(){
	console.log('listening on ' + port);
});
