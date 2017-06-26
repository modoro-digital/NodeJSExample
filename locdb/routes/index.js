var express = require('express');
var index = require('../controllers/indexController');
var user = require('../controllers/userController');
var Product = require('../models/product');
var index = require('../controllers/index')
var csrf = require('csurf');
var csrfProtection = csrf();
var router = express.Router();
router.use(csrfProtection);
/* GET home page. */
// router.get('/',index.getindex);
// router.get('/user/signup', user.getsignup);
// router.post('user/signup', user.postsignup);

router.get('/', index.index);
router.get('/get', index.get);
router.post('/add', index.add);
router.delete('/delete', index.delete);
router.put('/update', index.update);
module.exports = router;
