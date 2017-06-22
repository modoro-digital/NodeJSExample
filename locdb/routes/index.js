var express = require('express');
var index = require('../controllers/indexController');
var router = express.Router();
var Product = require('../models/product');
/* GET home page. */
router.get('/',index.getindex);

module.exports = router;
