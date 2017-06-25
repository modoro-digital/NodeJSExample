var express = require('express');
var router = express.Router();
var controllers = require('../controllers/users');

router.get('/',controllers.index);
router.post('/create', controllers.create);
module.exports = router;
