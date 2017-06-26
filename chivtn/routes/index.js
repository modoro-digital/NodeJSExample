var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/test');
var Schema = mongoose.Schema;

var userDataSchema = new Schema({
    name: {type: String, required: true},
    age: String

}, {collection: 'userdata'});

var UserData = mongoose.model('UserData', userDataSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/get-data', function (req, res, next) {
   UserData.find()
       .then(function (doc) {
           res.render('index', {item:doc, title:'Mongoose'})
       })
});

router.post('/insert', function (req, res, next) {
  var item = {
      name: req.body.name,
      age: req.body.age
  };

 var data = new UserData(item);
 data.save();
 res.redirect('/');
});

router.post('/delete', function (req, res, next) {
    var id= req.body.id;
    UserData.findByIdAndRemove(id).exec();
    res.redirect('/');
})
module.exports = router;
