//Tao server
//Module express
const express = require('express');
const fs = require('fs');
var app = express();
//Cong lang nghe
app.listen(3000, function(req, res){
  console.log('Ket noi thanh cong!');
});

var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({extended: false});

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

//Cau hinh ejs tro den thu muc chua file ejs
app.set("view engine", "ejs");
app.set("views", "./views")

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

app.post("/them", urlencodeParser, function(req, res){
  var data = req.body;
  insert(data);
  return res.redirect('/');
});

app.get("/xoa/:id", function(req, res){
  var i = req.params.id;
  sinhvien.findByIdAndRemove(i, function(err){
    if(err)
      throw err;
      //We have deleted the urlencodeParser
      console.log('User was deleted!');
  });
  return res.redirect('/');
});

app.get("/sua/:id", function(req, res){
  var i = req.params.id;
  sinhvien.findByIdAndRemove(i, function(err, data){
    if(err)
      console.log(err);
    else {
      {
        res.render("edit ", {data});
      }
    }
  });
  return res.redirect('/');
});
