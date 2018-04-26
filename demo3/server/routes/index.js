var express = require('express');
var router = express.Router();

router.use((req,res,next)=>{
	if(!req.session.status&&req.originalUrl != "/login"){
		res.json({state:2,msg:'未登录，无法进行操作',data:[]});
	}else{
		next();
	}
})


/* POST home page. */
router.post('/login', function(req, res, next) {
	if(!req.session.status){
		if(req.body.user == "srx"&&req.body.password == "123456"){
			if(req.session.status){
				req.session.status ++
			}else{
				req.session.status = 1
			}
			res.json({state:0,msg:'',data:[]});
			next();
		}else{
			res.json({state:1,msg:'账号密码不正确'});
		}
	}else{
		req.session.status ++
		res.json({state:0,msg:'',data:[]});
	}
});

router.post('/',(req,res)=>{
	var arr = [];
	for(var i = 0; i < 10; i++){
		arr.push({
			name: 'John Brown',
			age: i,
			address: `New York No. ${i} Lake Park`,
			img:'<img src="http://www.qqzhi.com/uploadpic/2014-09-23/000247589.jpg"/>'
		});
	}
	res.json({'response':arr,'state':1,'msg':''});
})



module.exports = router;
