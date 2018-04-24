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
