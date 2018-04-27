const http = require('http');

http.get('http://www.zxit8.com/forum-2-1.html',(res)=>{
	var arr = [];
	setTimeout(()=>{
		res.on('data',(data)=>{
			arr.push(data)
		})
	},2000);
	res.on('end',()=>{
		console.log(arr.toString())
	})
});