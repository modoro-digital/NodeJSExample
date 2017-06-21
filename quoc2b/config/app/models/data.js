var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name  : String,
    address  : String,
    age   : Number
});

module.exports = mongoose.model('sinhviens', userSchema);