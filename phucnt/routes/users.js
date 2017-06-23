var express = require('express');
var router = express.Router();
var controllers = require('../controllers/userCtr.js');
/* GET users listing. */
router.get('/', controllers.index);
router.get('/login', controllers.login);
router.get('/signup', controllers.index);




module.exports = router;
