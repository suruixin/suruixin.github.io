var express = require('express');
var router = express.Router();


/* POST home page. */
router.post('/login', function(req, res, next) {
	if(!req.session.status){
		if(req.body.user == "srx"&&req.body.password == "123456"){
			if(req.session.status){
				req.session.status ++
			}else{
				req.session.status = 1
			}
			res.json({state:0,msg:'',data:[]}).end();
		}else{
			res.json({state:1,msg:'账号密码不正确'}).end();
		}
	}else{
		req.session.status ++
		res.json({state:0,msg:'',data:[]}).end();
	}
});



module.exports = router;
