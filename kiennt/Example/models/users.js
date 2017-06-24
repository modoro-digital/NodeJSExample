var mongoose = require('mongoose');
mongoose.connect('127.0.0.1:27017/Nodejs_test');

var userSchema = new mongoose.Schema({
    lastname: String,
    firstname: String,
    email: String,
    address:String
});

module.exports = mongoose.model('users',userSchema);