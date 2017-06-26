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
        res.redirect('/get');
    },

    update: function(req, res) {
        var id= req.body.id;
        DataModel.findById(id, function (err, doc) {
            if (err){
                console.log('Error! ID not found !!');
            }
            doc.name = req.body.name;
            doc.age = req.body.age;
            doc.save();
        })
        res.redirect('/get');
    },

    get: function(req, res) {
        DataModel.find()
            .then(function (doc) {
                res.render('index', {item:doc, title:'Mongoose'})
            })
    },

    delete: function(req, res) {
        var id= req.body.id;
        DataModel.findByIdAndRemove(id).exec();
        res.redirect('/get');
    },

    login: function(req, res) {
      // any logic goes here
      res.render('users/login')
    }

};
