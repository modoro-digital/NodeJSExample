var express = require('express');
var router = express.Router();
var controllers = require('../controllers/users');

router.get('/',controllers.index);
router.post('/create',controllers.create);
router.post('/add',controllers.add);
router.post('/delete', controllers.delete);
module.exports = router;



