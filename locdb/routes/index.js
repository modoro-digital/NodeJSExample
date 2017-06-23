var express = require('express');
var index = require('../controllers/indexController');
var user = require('../controllers/userController');
var Product = require('../models/product');
var csrf = require('csurf');
var csrfProtection = csrf();
var router = express.Router();
router.use(csrfProtection);
/* GET home page. */
router.get('/',index.getindex);
router.get('/user/signup', user.getsignup);
router.post('user/signup', user.postsignup);
module.exports = router;
