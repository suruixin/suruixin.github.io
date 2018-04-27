const express = require('express');
const expressStatic = require('express-static');
const bodyParser = require('body-parser');
const multer = require('multer');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bug = require('bug');
const ejs = require('ejs');

var  file = multer({dest:'./www/upload/'});//寫入位置

var server = express();
server.listen(8080);


//1、解析cookie
server.use(cookieParser('zaq1xsw2'));//cookieParser('密钥')

//2、使用session
var arr = [];
for(var i = 0; i < 100000000; i++){
	arr.push(Math.random())
}
server.use(cookieSession({name:'user',keys:arr,maxAge:20*3600*1000}));//name名字   keys越多越好保证数据安全，maxAge  登录保持时间
//3、请求数据
server.use(bodyParser.urlencoded({extended:false}));
server.use(file.any());
//用户请求
server.use('',function(req,res,next){
	console.log(req.files);
	console.log(ewq.query,req.body,req.cookies,req.sesstion)
})
//4、static数据
server.use(static('./www'))