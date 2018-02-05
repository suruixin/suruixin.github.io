const http = require('http');
const fs = require('fs');
const urllist = require('url');
const querystring = require('querystring');
http.createServer(function(req, res) {
	console.log(1)
	req.on('data', function(data) {
		console.log(data)
	});
	req.on('end', function() {

		var obj = urllist.parse(req.url, true);
		console.log(obj)
	})
}).listen(8010);
console.log(2);