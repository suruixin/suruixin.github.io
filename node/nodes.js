var http=require('http');
var hostName = '127.0.0.1',port = 8080;
var fs = require('fs');
var urllie = require('url');
http.createServer(function(req,res){
	console.log(urllie)
}).listen(8080,'127.0.0.1',function(){
	console.log(`服务器运行在http://${hostName}:${port}`);
});