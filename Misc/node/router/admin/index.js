 //模板存放位置
server.set('views','./www/public/views');
//输出
server.set('view engine', 'html');
//那种模板引擎
server.engine('html',consolidate.ejs);


 (req,res) => {
	var urls = urllib.parse(req.url,true);
	if(urls.pathname == '/user'){
		var name = urls.query.name;
		var pass = urls.query.pass;
		if(urls.query.act == 'signin'){
			if(name === ''){
				res.send({code:2,msg:'不可为空'})
			}else if(name.length < 6){
				res.send({code:2,msg:'用户名不可小于6位'})
			}else if(name.length > 18){
				res.send({code:2,msg:'用户名不可大于18位'})
			}else{
				db.query(`SELECT * FROM user_table WHERE username = '${name}';`, (err,data) => {
					if(err){
						res.send({code:1,msg:'内部错误'})
					}else{
						// console.log(data)
						// if(data.length === 0){
						// 	// res.send({code:})
						// }else{
						// 	res.send({code:2,msg:'用户名已存在'})
						// }
					}	
				})
			}
		}else if(urls.query.act == 'login'){

		}
		console.log(urls.query)
		//var srx = ;
		// db.query(`SELECT * FROM \`user_table\` WHERE \`username\` = '${srx}';`, (err,data) => {
		// 	console.log(err)
		// 	console.log(data)
		// });
	}else{
		switch(req.url){
			case '/':
				res.render('index.ejs',{});
			break;
		}
	}
	res.end();
}