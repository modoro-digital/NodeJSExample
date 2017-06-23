const express = require('express');
const router = express.Router();
const users = require('./users');

router.post('/add', users.add);