/**
 * Created by thanhphuc on 6/24/17.
 */

var mongoose = require('mongoose');
mongoose.connect('localhost:27017/test');
var userSchema = mongoose.Schema( {
    username: {type: String, required: true},
    email: String
});
module.exports = mongoose.model('userdata', userSchema);