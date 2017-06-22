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

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Nodejs_test');
app.set('views', path.join(dir,'views'))
app.set('view engine', 'ejs');
app.response.message = function(msg){
    // reference `req.session` via the `this.req` reference
    var sess = this.req.session;
    // simply add the msg to an array for later
    sess.messages = sess.messages || [];
    sess.messages.push(msg);
    return this;
};
// log
if (!module.parent) app.use(logger('dev'));

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

// session support
app.use(session({
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret: 'some secret here'
}));
// parse request bodies (req.body)
app.use(bodyParser.urlencoded({ extended: true }));

// allow overriding methods in query (?_method=put)
app.use(methodOverride('_method'));

// expose the "messages" local variable when views are rendered
app.use(function(req, res, next){
    var msgs = req.session.messages || [];

    // expose "messages" local variable
    res.locals.messages = msgs;

    // expose "hasMessages"
    res.locals.hasMessages = !! msgs.length;

    /* This is equivalent:
     res.locals({
     messages: msgs,
     hasMessages: !! msgs.length
     });
     */

    next();
    // empty or "flush" the messages so they
    // don't build up
    req.session.messages = [];
});

// load controllers
require('./lib/boot')(app, { verbose: !module.parent });

app.use(function(err, req, res, next){
    // log it
    if (!module.parent) console.error(err.stack);

    // error page
    res.status(500).render('5xx');
});

// assume 404 since no middleware responded
app.use(function(req, res, next){
    res.status(404).render('404', { url: req.originalUrl });
});

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(require('./routes.js'));

module.exports = app;