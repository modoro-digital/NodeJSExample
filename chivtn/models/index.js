/**
 * Created by chivo on 6/21/17.
 */
var mongoose = require('mongoose');
var userSchema = mongoose.Schema( {
          name: {type: String, required: true},
          age: String
      });
module.exports = mongoose.model('userdata', userSchema);

