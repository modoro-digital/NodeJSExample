var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/demo');

var userSchema = new mongoose.Schema({
  lastname: String,
  firstname: String,
  email: String,
  age:Number,
  address:String,
  mobile:String
});

var user = mongoose.model('user',userSchema);

/* GET users listing. */

router.get('/', function(req, res, next) {
  res.render("users", {lastname:"Nguyễn Mạnh", firstname:"Hùng"});
});

router.post('/', urlencodedParser, function (req, res) {
  //res.send('welcome, ' + req.body.lastname + req.body.firstname + req.body.email + req.body.age + req.body.address + req.body.mobile);
  user.create({
    lastname: req.body.lastname,
    firstname: req.body.firstname,
    email: req.body.email,
    age:req.body.age,
    address:req.body.address,
    mobile: req.body.mobile
});

  //user.find().exec(function (err, users) {
  //  console.log(users);
  //});
});

module.exports = router;



