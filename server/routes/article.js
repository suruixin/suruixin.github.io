var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', (req, res, next) => {
	if(req.body.type){//删除文章
		return;
	}
  	if(req.body.title&&req.body.content){
  		if(req.body.id){//修改文章

  		}else{//新增文章
  			req.connection.query(`INSERT INTO article (title,content) VALUES ('${req.body.title}','${req.body.content}')`,(error, results, fields)=>{
				console.log('err',error)
  				if(error){
  					res.json({'status':2,'msg':'内部错误，请联系管理员','data':[]}).end();
  				}else{
  					res.json({'status':0,'msg':'','data':[]}).end();
  				}
  			})
  		}
  	}else{//文章为空
  		res.json({'status':1,'msg':'文章和标题不可为空','data':[]}).end();
  	}
});

module.exports = router;