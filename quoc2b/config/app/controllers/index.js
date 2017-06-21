var Data = require('../models/data');

module.exports = {
	index: function (req, res) {
		res.setHeader('Content-Type', 'text/html');
		res.setHeader('cache-control', 'privte no-cache no-store');
		res.render('index');
	},
	get: function (req, res) {
		Data.find(function(err, docs) {
			if(err)
				throw err;
			res.json(docs);
		})
	},
	add: function (req, res) {
		var Docs = new Data;
		Docs.name = req.body.name;
		Docs.address = req.body.address;
		Docs.age = req.body.age;
		Docs.save(function(err) {
			if(err){
				console.log(err);
			}
			res.redirect("/");
		})
	},
	delete: function (req, res) {
		var id = req.body.id;
		Data.remove({_id: id}, function(err) {
			if(err)
				console.log(err);
			res.send("ok");
		})
	},
	update: function (req, res) {
		var id = req.body.id;
		Data.update(
			{_id: id},
			{
				$set: {
				  	name: req.body.name,
				    address: req.body.address,
				    age: req.body.age
		  		}
		 	}, function(err) {
				if(err){
					console.log(err);
				}
				res.send("ok");
			}
		)
	}
}
