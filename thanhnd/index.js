const express = require("express");
const app = express();
app.use(express.static('public'));
//Port
app.listen(8081);
// Cau hinh ejs
app.set("view engine", "ejs");
app.set("views", "./views");
// POST 
var bodyParser = require('body-parser'); 
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// MongoDB
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
var name_dbs = "test";
var name_col = "sinhviens";
var url = "mongodb://127.0.0.1:27017/" + name_dbs;
var Schema = mongoose.Schema;
var svSchema = new Schema({
	mssv : String,
	name : String,
	sex : String,
	birthday : Number
});
var sinhvien = mongoose.model(name_col, svSchema);

function insert(data)
{
	mongoose.connect(url);
	var sv = new sinhvien(data);
	sv.save(function(err, data){
		if(err)
			console.log(err);
		console.log("Saved", data);
	});

}

app.get("/", function(req, res){
	res.render("main");	
});
app.get("/getdata", function(req, res){
	mongoose.connect(url);
	sinhvien.find({}, function(err, data){
  		if(err)
  			console.log(err);
  		res.send(data);
	});
});
app.post("/them", urlencodedParser, function(req, res){
	var data = req.body;
	insert(data);
	res.send(data);
});

app.get("/xoa/:id", function(req, res){
	var i = req.params.id;
	sinhvien.findByIdAndRemove(i, function(err) {
  		if (err) 
  			console.log("Error", err);
  		console.log('User deleted!');
		});
	res.send("deleted");
});

app.post("/sua",urlencodedParser, function(req, res){
	var i = req.body.id;
	var mssv1 = req.body.mssv;
	var name = req.body.name;
	var sex = req.body.sex;
	var birthday = req.body.birthday;
	sinhvien.findById(i, function(err, sv){
		sv.mssv = mssv1;
		sv.name = name;
		sv.sex = sex;
		sv.birthday = birthday;
		sv.save(function(err){
			if(err)
				console.log("Error", err);
			else
				console.log("Update Completed.");
		});
	});
	res.send("Completed");
});
