const request = require('superagent');
const cheerio = require('cheerio');
const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");  
const ejs = require('ejs');
const songList = require('./routes/songList');


var app = express();

//解析post请求
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//设置输出模板
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//全局方法添加
app.use((req,res,next)=>{
	req.request = request;
	req.cheerio = cheerio;
	next();
})

// 请求歌单列表   网易音乐排行榜等
app.use('/songList',songList);


// 错误处理程序404
app.use(function(req, res, next) {
  next(createError(404));
});

// 错误处理程序500
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error');
});

const server = app.listen(5000,() => {
	console.log('服务已启动！')
});
