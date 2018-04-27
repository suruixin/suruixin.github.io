var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');

var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));
app.use(cookieParser('1516asdqwe'));
var arr = [];
for(var i = 0; i<10000; i++){
	arr.push('srx_'+Math.random())
}
app.use(cookieSession({
	name: 'srxId',
	keys:arr,
	maxAge: 20 * 60 *1000
}))
// 	console.log(req.session)
// 	delete req.session



app.use((req,res,next)=>{
	if(!req.session.status&&req.originalUrl != "/login"){
		res.json({state:2,msg:'未登录，无法进行操作',data:[]}).end();;
	}else{
		next();
	}
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