var sinhvien = require("../models/index");
module.exports = {

	main : function(req, res){
		res.render("main");
	},

	getdata : function(req, res){
		sinhvien.find({}, function(err, data){
	  		if(err)
	  			console.log(err);
	  		res.send(data);
		});
	},

	add : function(req, res){
		var data = req.body;
		var sv = new sinhvien(data);
		sv.save(function(err, data){
			if(err)
				console.log(err);
			console.log(data);
		});
		res.send("Saved");
	},

	delete : function(req, res){
		var i = req.params.id;
		sinhvien.findByIdAndRemove(i, function(err) {
  			if (err) 
  				console.log("Error", err);
  			console.log('User deleted!');
		});
		res.send("deleted");
	},

	edit : function (req, res){
		var i = req.body.id;
		var mssv = req.body.mssv;
		var name = req.body.name;
		var sex = req.body.sex;
		var birthday = req.body.birthday;
		sinhvien.findById(i, function(err, sv){
			sv.mssv = mssv;
			sv.name = name;
			sv.sex = sex;
			sv.birthday = birthday;
			sv.save(function(err){
				if(err)
					console.log("Error", err);
				console.log("Update Completed.");
			});
		});
		res.send("Completed");
	}	
}