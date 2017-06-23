/**
 * Created by chivo on 6/21/17.
 */
var DataModel = require('../models/index');
module.exports = {

/**
 * a home page route
 */
    index: function(req, res) {
      // any logic goes here
      res.render('index', { title: 'MVC' })
    },

    add: function(req, res) {
        var item = {
            name: req.body.name,
            age: req.body.age
        };

        var data = new DataModel(item);
        data.save();
        res.redirect('/');
    },

    get: function(req, res) {
        DataModel.find()
            .then(function (doc) {
                res.render('index', {item:doc, title:'Mongoose'})
            })
    },

    delete: function(req, res) {
        var id= req.body.id;
        Data.findByIdAndRemove(id).exec();
        res.redirect('/');
    },

    login: function(req, res) {
      // any logic goes here
      res.render('users/login')
    }

};
