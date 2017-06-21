const express = require('express')
const app = express()
const serveStatic = require('serve-static')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const dir = path.dirname(__dirname)
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://127.0.0.1:27017/test')
app.use(serveStatic(path.dirname(dir) + '/public'))
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false ,limit: '5mb'}));
app.use(bodyParser.json());
app.use(session({
	name: 'ssID',
	secret: 'ilovescotchscotchyscotchscotch',
  	resave: false,
  	saveUninitialized: true
}))
app.set('views', path.join(dir,'views'))
app.set('view engine', 'ejs');
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(require('./routes.js'));

module.exports = app;
