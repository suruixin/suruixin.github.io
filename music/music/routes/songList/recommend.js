var express = require('express');
var router = express.Router();


router.post('/',(req,res,next) => {
	console.log(req.body)

	req.request(`https://music.163.com/${req.body.url}`).end((err,data)=>{
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
		switch(req.body.url){
			case '/discover':
				var dom = $('#discover-module');
				var hotArr = [],hotTitle= "热门推荐";
				//热门推荐
				dom.find('.m-cvrlst.f-cb').children().each((i,d)=>{//获取热门推荐歌曲
					hotArr.push({
						img:$(d).find('.u-cover').children('img').attr('src'),
						title: $(d).find('.u-cover').children('a').attr('title'),
						url: $(d).find('.u-cover').children('a').attr('href')
					})
				});
				var newArr = [],newTitle= "新碟上架";
				//新碟上架
				dom.find('.n-new').find('.f-pr').children('.f-cb').each((i,d)=>{//获取新碟上架
					$(d).children().each((j,e)=>{
						if(j == 0 || j == 2){
							return
						}
						var imgurl = $(e).find('.u-cover').find('.j-img').attr('data-src');
						if(imgurl.lastIndexOf('=') != -1){
							imgurl = imgurl.replace(imgurl.substring(imgurl.lastIndexOf('=')),'=140y140')
						}
						newArr.push({
							img: imgurl,
							title: $(e).find('.f-thide').find('a').attr('title'),
							url: $(e).find('.f-thide').find('a').attr('href'),
							singer: $(e).find('.f-thide.tit').attr('title')
						})
					})
				});
				res.json({
					code: 1,
					msg: '',
					data: [{
						title: hotTitle,
						data: hotArr
					}, {
						title: newTitle,
						data: newArr
					}]
				})
			break;
			default:
				res.json({
					code: -1,
					msg: '访问的页面不存在',
					data: {}
				})
			break;
		}
	})
})



module.exports = router