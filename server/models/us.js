var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var userSchema =  new Schema({
		"userId":Number,
		"userName":String,
		"userImg":String,
		"postlist":
		[{
			"postId":Number,
			"postImg":String,
			"postBody":String,
			"postDate":Date,
			"likelist":[{'likeUname':String}],
			"commentslist":
			[{
				"cId":Number,
				"uname":String,
				"body":String,
				"date":Date
			}]	
		}],				
		"fans":[{faUname:String}],
		"follow":[{foUname:String}]
});

module.exports = mongoose.model('User',userSchema);