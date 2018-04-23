const express = require('express');
const static = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const multer = require('multer');
const consolidate = require('consolidate');

var server = express();
server.listen(3000);

//1.解析cookie
server.use(cookieParser('sssssa'));

//2.使用session
var arr = [];
for(var i = 0; i< 10000; i++){
	arr.push('key_'+Math.random());
  
}
server.use(cookieSession({name:'srx',keys:arr,maxAge:20*3600*1000}));

//3.post请求处理
//post数据
server.use(bodyParser.urlencoded({extended:false}));
//post文件
server.use(multer({dest:'./www/upload'}).any());

//4.配置模板引擎
server.set('views','./nodepage');
server.set('view engine','ejs');
server.engine('ejs',consolidate.ejs)

//5.用户请求
server.post('/index',(req,res,next)=>{
	res.send({a:15})
})