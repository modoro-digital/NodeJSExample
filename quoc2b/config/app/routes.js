const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

router.get('/', controllers.index);
router.get('/get', controllers.get);
router.post('/add', controllers.add);
router.delete('/delete', controllers.delete);
router.put('/update', controllers.update);

module.exports = router;
