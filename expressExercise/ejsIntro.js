var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",function(req,res){
	res.render("home");
});

app.get("/fellinlovewith/:thing",function(req,res){
	var thing = req.params.thing;
	res.render("love",{thingVar: thing});
});

app.get("/posts",function(req,res){
	var posts = [
				{Title:"Thor : the god of thunder",Author:"Chris"},
				{Title:"Thor's Brother",Author:"liam"},
				{Title:"A Hobbit cast",Author:"luke"}
	];

	res.render("posts",{posts:posts});
});

app.listen(3000,function(){
	console.log('Server is ruuning on port 3000');
});