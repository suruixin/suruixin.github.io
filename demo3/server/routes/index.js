var express = require('express');
var router = express.Router();

/* POST home page. */
router.post('/login', function(req, res, next) {
	if(req.body.user == "srx"&&req.body.password == "123456"){
		console.log(req.session)
		req.session.user = "srx";
		req.session.password = "123456";
		req.session.state = "1"
		res.json({state:0,msg:'',data:req.session.state});
		next();
	}else{
		res.json({state:1,msg:'账号密码不正确'});
	}
});



module.exports = router;
