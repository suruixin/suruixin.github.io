var express = require('express');
var router = express.Router();

//https://music.163.com/    网易音乐首页顶部栏
router.get('/', (req, res, next) => {
	req.request.get('https://music.163.com/').end((err, data) => {
		var $ = req.cheerio.load(data.text, {
			decodeEntities: false
		});
		if(err) {//错误时的处理事件
			res.json({
				cade: 0,
				data: [],
				msg: '请求的数据不存在'
			});
			return
		}
		var dom = $('#g_nav2'),
		arr = [];
		dom.find('.nav').children().each(function(i, d) {
			arr.push({
				url: $(this).find('a').attr('href'),
				title: $(this).text()
			})
		})
		res.json({
			code: 1,
			data: arr,
			msg: '请求成功！',
			count: arr.length
		})
	})
});

router.use('/discover',require('./songList/recommend'))


//router.get('/playlist?id=823754244', function(req, res, next) {
//	req.request.get('http://music.163.com/playlist?id=823754244').end((err, data) => {
//		var $ = req.cheerio.load(data.text, {
//			decodeEntities: false
//		});
//		// 获得歌单 dom
//		var dom = $('#m-playlist');
//		var arr = [];
//		dom.find('#song-list-pre-cache').find('.f-hide').find('li').each((i, d) => {
//			arr.push({
//				title: $(d).text(),
//				url: $(d).find('a').attr('href')
//			})
//		});
//		res.json({
//			code: 1,
//			data: arr,
//			msg: '请求成功！',
//			count: arr.length
//		})
//	})
//});

module.exports = router;