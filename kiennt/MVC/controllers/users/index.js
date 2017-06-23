var Data = require('../../db');


exports.add = function (req, res) {
    var show = new Data;
    show.name = req.body.name;
    show.address = req.body.address;
    show.age = req.body.age;
    show.save(function(err) {
        if(err){
            console.log(err);
        }
        res.redirect("/");
    })
};
