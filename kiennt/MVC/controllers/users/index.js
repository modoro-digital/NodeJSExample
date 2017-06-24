var Data = require('../../db');


exports.add = function (req, res) {
    var show = new Data;
    show.name = req.body.name;
    show.address = req.body.email;
    show.age = req.body.address;
    show.save(function(err) {
        if(err){
            console.log(err);
        }
        res.redirect("/");
    })
};
