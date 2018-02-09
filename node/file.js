const express = require('express');
// const expressStatic = require('express-static');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs')

var  file = multer({dest:'./www/upload/'});//寫入位置

var server = express();
server.listen(8080);

server.use(file.ahy());
// server.use('/',function(req,res){
// 	console.log(server.req.files)
// });