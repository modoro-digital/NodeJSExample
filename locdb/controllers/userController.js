var User = require('../models/user');
var csrf = require('csurf');
var csrfProtection = csrf();

module.exports = {
    getsignup: function (req, res, next) {
        res.render('user/signup',{csrfToken: req.csrfToken()});
    },
    postsignup: function (req, res, next) {
        res.redirect('/');
    }
}