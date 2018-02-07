var express = require('express');


var server = express()
server.listen(8080);

server.use('/',function(req,res){
	req.qurey //get数据
	req.body //post数据
})

