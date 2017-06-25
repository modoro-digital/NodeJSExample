/**
 * Created by HungDeveloper on 24/06/2017.
 */
var DataModel = require('../models/users');
module.exports = {
    index: function(req, res) {
        // any logic goes here
        res.render('users', {lastname: 'Nguyễn Mạnh', firstname: 'Hùng' })
    },
    create: function(req,res){
        var Info = new DataModel;
        Info.lastname =req.body.lastname;
        Info.firstname =req.body.firstname;
        Info.email =req.body.email;
        Info.age =req.body.age;
        Info.address =req.body.address;
        Info.mobile =req.body.mobile;
            Info.save(function(err) {
                if(err){
                    console.log(err);
                }
                res.redirect("/");
            })
    }
};