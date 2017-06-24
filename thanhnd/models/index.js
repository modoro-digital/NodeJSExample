var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var svSchema = new Schema({
	mssv : String,
	name : String,
	sex : String,
	birthday : Number
});
module.exports = mongoose.model("sinhviens", svSchema);