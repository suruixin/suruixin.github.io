var http=require('http');
var hostName = '127.0.0.1',port = 8080;
var fs = require('fs');
var urllie = require('url');
var obj = {};
http.createServer(function(req,res){
	var urls = urllie.parse(req.url,true);
	var json = urls.query;
	switch(urls.pathname){
		case '/user':
			switch(json.act){
				case 'signin':
					if(typeof obj[json.name] == 'undfined'){
						obj[json.name] = json.pass;
						res.write({msg:'注册成功',code:0})
					}else{
						res.write({msg:'用户已经存在',code:1})
					}
				break;
				case 'login':
					if(typeof obj[json.name] == 'undfined'){
						res.write({msg:'用户不存在',code:1})
					}else if(typeof obj[json.name] == json.pass){
						res.write({msg:'账号或者密码错误',code:1})
					}else{
						res.write({msg:'登录成功',code:0})
					}
				break;
				default:
					res.write({msg:'请求地址错误',code:1})
				break;
			};
			res.end();
		break;
		case '/favicon.ico':
		break;
		default:
			fs.readFile('www'+urls.pathname,function(err,data){
				if(err){
					res.write({msg:'404',code:1})
				}else{
					res.write(data)
				}
				res.end();
			});
		break;
	}
}).listen(8080,'127.0.0.1',function(){
	console.log(`服务器运行在http://${hostName}:${port}`);
});

//querystring.parse(要解析的 URL 查询字符串)