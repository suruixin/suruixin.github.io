var express/* [ɪk'spres; ek-] */ = require('express');
var bodyParser = require('body-parserver');

var server/* ['sɜːvə] */ = express();
server.listen/*  ['lɪs(ə)n] */(8080);

server.use(bodyParser.urlencoded({
	extended:true/* [ɪk'stendɪd; ek-] */,//扩展模式
	limit:200/*  ['lɪmɪt] */ //限制   默认100k
}))   //解析post数据  如果没有req.body报undefined


server.use('/',functionreq,res){
	//console.log(req.query) //获取get数据
	//console.log(req.body)  //获取post数据
})
