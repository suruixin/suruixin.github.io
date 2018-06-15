var express = require('express');
var router = express.Router();
const superagent = require('superagent')


/* GET home page. */
router.get('/plan_lists', function(req, res, next) {
	superagent.post('http://b.com/index/plan_lists').send({
		
	}).then((data)=>{
		res.json(JSON.parse(data.text))
	});
})
module.exports = router;
