var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Nodejs_test');

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    address:String
});

var user = mongoose.model('users',userSchema);


router.post('/', urlencodedParser, function (req, res) {
    //res.send('welcome, ' + req.body.lastname + req.body.firstname + req.body.email + req.body.age + req.body.address + req.body.mobile);
    user.create({
        lastname: req.body.name,
        email: req.body.email,
        address:req.body.address
    });

});

module.exports = router;



