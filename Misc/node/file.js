const express = require('express');
const expressStatic = require('express-static');
const bodyParser = require('body-parser');//解析post数据
const multer = require('multer');//上传文件
const fs = require('fs');
const path = require('path');//获取文件名

var  file = multer({ dest: 'www/upload/'});//寫入位置

var server = express();

server.post('/',file.any(),function(req,res,next){
	// 1.获取文件名
	for(var i = 0; i < req.files.length; i++){
		var name = req.files[i];
		var ext = path.parse(name.originalname).ext;
		fs.rename(name.path,name.path+ext,function(err){
			if(err){
				res.send('上传失败！失败原因:'+err+',请截图给负责人！')
			}else{
				res.send('上传成功111')
			}
			res.end();
		})
	}
	// 2.修改文件名；W
});


server.listen(8080);