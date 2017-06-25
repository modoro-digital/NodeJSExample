var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({extended: false});


//port 3000
app.listen(3000,function(){
    console.log('Node server running @ http://localhost:3000')
});

app.use('/node_modules',  express.static(__dirname + '/node_modules'));


//define the default route
app.set("view engine", "ejs");
app.set("views", "./public")

//define the routes to show the sign in page and the sign up page
app.get('/showSignInPage',function(req,res){
    res.sendFile('signin.html',{'root': __dirname + '/config/views'});
})

app.get('/showSignUpPage',function(req,res){
  res.sendFile('signup.html',{'root':__dirname + '/config/views'})
})

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var name_dbs = "test";
var name_col = "test";
var url = "mongodb://localhost:27017" + name_dbs;
var Schema = mongoose.Schema;
var svSchema = new Schema({
  mssv: String,
  name: String,
  gt: String,
  birthday: Number,
});

var sinhvien = mongoose.model(name_col, svSchema);

function insert(data)
{
  mongoose.connect(url);
  var sv = new sinhvien(data);
  sv.save(function(err, data){
    if(err)
      console.log(err);
    console.log("Data was saved!", data);
  });
}

//Xu lý
app.get("/", function(req, res){
  mongoose.connect(url);
  sinhvien.find({}, function(err, data){
    if(err)
      console.log(err);
    else {
      {
        res.render("index", {data});
      }
    }
  });
});

app.post("/add", urlencodeParser, function(req, res){
  var data = req.body;
  insert(data);
  return res.redirect('/');
});

app.get("/delete/:id", function(req, res){
  var i = req.params.id;
  sinhvien.findByIdAndRemove(i, function(err){
    if(err)
      throw err;
      //We have deleted the urlencodeParser
      console.log('Data was deleted!');
  });
  return res.redirect('/');
});

app.get("/update/:id", function(req, res){
  var i = req.params.id;
  sinhvien.findByIdAndUpdate(i, function(err, data){
    if(err)
      console.log(err);
    else {
      {
        console.log('Data was updated!');
      }
    }
  });
  return res.redirect('/');
});
