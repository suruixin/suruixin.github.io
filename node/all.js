const express = require('express');
const static = require('express-static');
const cookieParser =require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const multer = require('multer');
const consolidate = require('consolidate');
const mysql = require('mysql');
const urllib = require('url');

var keys = 'qweqweqwewqasdw';//密钥


const server = express();
const db = mysql.createPool({host:'localhost', port:3302, user:'root', password:'123456', database:'nodejs'})

server.listen(8080);

// 1、解析cookie
server.use(cookieParser(keys));

// 2、使用session
var arr = [];
for(var i = 0; i < 100000; i++){
	arr.push('keys_'+Math.random())
};
server.use(cookieSession({name:'srx',keys:arr,maxAge:20*3600000}));



// 3、post数据
server.use(bodyParser.urlencoded({extended:false}));  //extended:false关闭提示
server.use(multer({date:'./www/upload'}).any());

// 4、配置模板引擎
//输出
server.set('view engine', 'html');
//模板存放位置
server.set('views','./www/templay');
//那种模板引擎
server.engine('html',consolidate.ejs);

//接受用户请求
server.use('/', (req,res) => {
	var urls = urllib.parse(req.url,true);
	if(urls.pathname == '/user'){
		var srx = 'srx';
		console.log(`SELECT * FROM 'user_table' WHERE 'username' = '${srx}';`)
		db.query("SELECT * FROM 'user_table' WHERE 'username' = 'srx';", (err,data) => {
			console.log(err)
			console.log(data)
		});
	}
	res.render('index.ejs',{})
});

// 5、static数据
server.use(static('./www')) ;