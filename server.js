const http = require('http');
const server = http.createServer(require('./app'));
const _db = require('./db').db;

const port = process.env.PORT || 3000;

if(process.env.SYNC){
	_db.sync()
		.then(function(){
			console.log('synced')
		})
		.catch(function(err){
			console.log(err);
		})
}

server.listen(port, function(){
	console.log('listening on ' + port);
});