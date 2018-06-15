const request = require('superagent');
const cheerio = require('cheerio');


request.get('http://music.163.com/playlist?id=823754244').end((err,data)=>{
 	var $ = cheerio.load(data.text,{decodeEntities: false});
    // 获得歌单 dom
    var dom = $('#m-playlist');
    var arr = [];
    dom.find('#song-list-pre-cache').find('.f-hide').find('li').each((i,d)=>{
    	arr.push({name:$(d).text(),id:$(d).find('a').attr('href')})
    })
    console.log(arr)
})




