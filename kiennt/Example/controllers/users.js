var express = require('express');
var router = express.Router();
var data = require('../models/users');
module.exports = {
    index:function (req , res) {
        res.render('users');
    },

    create:function (req , res ) {

        var show = new data;
        show.lastname = req.body.lastname;
        show.firstname = req.body.firstname;
        show.email = req.body.email;
        show.address = req.body.address;
        show.save (function (err) {
            if (err){
                console.log('err');
            }
            res.redirect("/");
        })
    },

    add:function ( req , res) {

        var data = new UserData(item);
        data.save();
        res.redirect('/');
    },

    delete:function ( req , res) {

            var id= req.body.id;
            UserData.findByIdAndRemove(id).exec();
            res.redirect('/');

    }
}
