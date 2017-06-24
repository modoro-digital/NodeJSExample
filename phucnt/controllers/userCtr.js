/**
 * Created by thanhphuc on 6/23/17.
 */

var mongoose = require('mongoose')
//var Video = require('../models/user');
module.exports = {

    /**
     * a home page route
     */
    index: function(req, res) {
        // any logic goes here
        res.render('users/signup')
    },

    /**
     * About page route
     */
    login : function(req, res) {
        // any logic goes here
        res.render('users/login')
    }

};