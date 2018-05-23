var express = require('express');
var app = express();

app.get("/",function(req,res){
	res.send("Hi there");
});

app.get("/r/:subredditName",function(req,res){
	module = req.params['subredditName'];
	res.send("Hey welcome to " + module);
})

app.get("*",function(req,res){
	res.send("You are a star");
});
app.listen(3000,function(){
	console.log("Port running on 3000");
});