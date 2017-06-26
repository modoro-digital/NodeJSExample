/**
 * Created by chivo on 6/21/17.
 */
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/test');
var userSchema = mongoose.Schema( {
          name: {type: String, required: true},
          age: Number
      });
module.exports = mongoose.model('userdata', userSchema);

