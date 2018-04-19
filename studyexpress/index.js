const express = require('express');
const app = express();

app.get('/',(req,res,next)=>{
	res.send('hello world!');
});


app.use(express.static('public'));

app.get('/admin',(req,res,next)=>{
	res.send('admin')
})

const server = app.listen(4000,()=>{
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http:\/\/%s:%s', host, port);
});

