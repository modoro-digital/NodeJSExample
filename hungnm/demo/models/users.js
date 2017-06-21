var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/demo');

var userSchema = new mongoose.Schema({
    lastname: String,
    firstname: String,
    email: String,
    age:Number,
    address:String,
    mobile:String
});

var user = mongoose.model('user',userSchema);
