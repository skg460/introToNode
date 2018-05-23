var express = require("express");
var app = express();



app.get("/",function(req,res){
	res.send("Hi there, welcome to my assignment");
});
app.get("/speak/:animal",function(req,res){
	var voices = {
	pig:'Oink',
	cow:'Moo',
	dog:'Woof Woof'
};
	var animalName = req.params.animal;
	res.send("The " + animalName + " says '" + voices[animalName] + "'");
});

app.get("/repeat/:message/:num",function(req,res){
	var message = req.params.message;
	var num = req.params.num;
	var str = "";
	for(var i=0;i<num;i++){
		str = str+message+" ";
	}
	res.send(str);
});

app.listen(3000,function(){
	console.log('Server has started on port 3000');
});