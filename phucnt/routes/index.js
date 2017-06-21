var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var assert = require('assert');
var mongoose = require('mongoose');

var url = 'mongodb://localhost:27017/test';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/get-data', function (req, res, next) {
  var resultArray = []
  mongo.connect(url, function (err, db) {
      assert.equal(null, err);
      var cursor = db.collection('user-data').find();
      cursor.forEach(function (doc, err) {
         assert.equal(null, err);
         resultArray.push(doc);
      } , function () {
          db.close();
          res.render('index',{items: resultArray});

          });
  });
});

router.post('/insert', function (req, res, next) {
  var item = {
    username: req.body.username,
    email: req.body.email
  };

  mongo.connect(url, function (err, db) {
      assert.equal(null, err);
      db.collection('user-data').insertOne(item, function (err, result) {
         assert.equal(null, err);
         console.log('Item inserted');
         db.close();
      });
  });
  res.redirect('/');

});

router.post('/update', function (req, res, next) {

});

router.post('/delete', function (req, res, next) {

});

module.exports = router;
