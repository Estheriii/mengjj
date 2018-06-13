var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema =  new Schema({
		username:String,
		userimg:String
		
});

module.exports = mongoose.model('MjjUser',userSchema);