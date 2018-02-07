var express = require('express');
var server = express();
server.get('/',function(){
	console.log('get')
})




server.listen(8080);