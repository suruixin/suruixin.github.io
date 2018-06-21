const request = require('superagent');
const cheerio = require('cheerio');
const express = require('express');
var app = express();
const songList = require('./routes/songList');

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
