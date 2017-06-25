var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var assert = require('assert');


var url = 'mongodb://localhost:27017/test';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/insert', function (req, res, next) {

});

router.post('/update', function (req, res, next) {

});

router.post('/delete', function (req, res, next) {

});

module.exports = router;
