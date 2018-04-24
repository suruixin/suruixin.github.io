var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');


var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('1516asdqwe'));
// app.use(cookieSession({
// 	name: 'sessionName',
// 	keys:['aa','bb','cc'],
// 	maxAge:20*6000*1000
// }));
// app.use((req,res,next)=>{
// 	console.log(req.session)
// 	delete req.session
// });
app.use((req,res,next)=>{
	//1.发送cookie
	// req.signed = "1516asdqwe";//签名用的字符串
	// res.cookie('key','srx',{path:'/',maxAge: 20*60*1000,signed});//key 名字   srx值   maxAge 存储时间   signed  是否签名
	// //2.接收cookie
	// console.log(req.cookies);//获取未签名的cookie
	// console.log(req.signedCookies);//获取签名cookie
	// //3.删除cookie
	// res.clearCookie('keys');
	//cookie-encrypter   cookie加密
	next()
})

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
