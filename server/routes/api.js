var express =require ('express');
var router =express.Router();
var MjjUser =require('../models/MjjUser');

const multer = require('multer');  
let path = require("path"); 

var responseData;
router.use(function(req,res,next){
	responseData={
		code:0,
		message:''
	}
	next();
});

// app.use(bodyPaser.urlencoded({extended:true}));
router.post("/register",function(req,res,next){
	var username=req.body.username
	var userimg= req.body.userimg
	MjjUser.findOne({
		username:username
	}).then(function(userInfo){
		if(userInfo){
			responseData.code=4;
			responseData.message='已注册';
			res.json(responseData);
			return;
		}
		var mjjuser = new MjjUser({
			username:username,
			userimg:userimg
		});
		return mjjuser.save();
	}).then(function(newUserInfo){
		responseData.message='注册成功';
		res.json(responseData);	
	});

});

//上传文件
const storage = multer.diskStorage({  
  //文件存储位置  
  destination: (req, file, cb) => {  
    cb(null, path.resolve(__dirname, '../public/images/'));  
  },  
  //文件名  
  filename: (req, file, cb) => {  
    cb(null, `${Date.now()}_${Math.ceil(Math.random() * 1000)}_multer.${file.originalname.split('.').pop()}`);  
  }  
}); 

const uploadCfg = {  
  storage: storage,  
  limits: {  
    //上传文件的大小限制,单位bytes  
    fileSize: 1024 * 1024 * 20  
  }  
};

router.post("/upload", async (req, res) => {  
res.send(req.body)
  // let upload = multer(uploadCfg).any();  
  // upload(req, res, async (err) => {  
  //   if (err) {  
  //     res.json({ path: `//public/images/${uploadFile.filename}` });  
  //     console.log(err);  
  //     return;  
  //   };  
  //   console.log(req.files);  
  //   let uploadFile = req.files[0];  
  //   res.json({ path: `//public/images/${uploadFile.filename}` });  
  // });  
}) 

module.exports = router;