var express = require('express');
var router = express.Router();
var controllers = require('../controllers/userCtr.js');
/* GET users listing. */
router.get('/', controllers.home);
router.get('/login', controllers.login);
router.get('/signup', controllers.index);
router.post('/insert', controllers.insert);
router.get('/getdata', controllers.getdata);
router.post('/delete', controllers.delete);
router.post('/update', controllers.update);




module.exports = router;
