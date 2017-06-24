var express = require('express');
var router = express.Router();
var controllers = require('../controllers/index');
/* GET users listing. */
router.get('/', controllers.index);
router.get('/login', controllers.login);
router.post('/add', controllers.add);
router.get('/get', controllers.get);
router.post('/delete', controllers.delete);

module.exports = router;
