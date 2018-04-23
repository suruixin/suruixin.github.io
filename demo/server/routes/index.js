var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/index', function(req, res, next) {
	console.log(req.cookies)
	res.json({a:15})
});



module.exports = router;
