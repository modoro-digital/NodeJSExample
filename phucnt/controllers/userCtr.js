/**
 * Created by thanhphuc on 6/23/17.
 */

var mongoose = require('mongoose');
var DataModel = require('../models/userModel');
module.exports = {

    /**
     * a home page route
     */
    index: function(req, res) {
        // any logic goes here
        res.render('users/signup')
    },

    home: function(req, res) {
        // any logic goes here
        res.render('index')
    },

    getdata: function(req, res) {
        DataModel.find()
            .then(function (doc) {
                res.render('index', {item:doc, title:'Mongoose'})
            })
    },

    insert: function(req, res) {
        var item = {
            username: req.body.username,
            email: req.body.email
        };

        var data = new DataModel(item);
        data.save();
        res.redirect('/getdata');
    },

    delete: function(req, res) {
        var id= req.body.id;
        DataModel.findByIdAndRemove(id).exec();
        res.redirect('/getdata');
    },

    update: function(req, res) {
        var id= req.body.id;
        DataModel.findById(id, function (err, doc) {
            if (err){
                console.error('error, no entry found')
            }
            doc.username = req.body.username;
            doc.email = req.body.email;
            doc.save();
            res.redirect('getdata');
        })

    },
    /**
     * About page route
     */
    login : function(req, res) {
        // any logic goes here
        res.render('users/login')
    }

};