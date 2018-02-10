const mysql = require('mysql');

//1、连接
//createConnection({那台服务器地址 ,用户名,密码,库}) 

var db = mysql.createConnection({host:'localhost',port:3302,user:'root',password:'123456',database:'nodejs'})
//console.log(db)

//2、查询
//query(职能,function(err,data){})

db.query("SELECT * FROM `user_table`;", (err,data) => {
	if(err){
		console.log(err)
	}else{
		console.log(JSON.stringify(data))
	}
})