<template>
	<div>
    <div class="loginlogo" :style="{top:logotop+'px'}" v-show="nologin">
      <img  src="../../../static/pet.png">
    <button open-type="getUserInfo" @getuserinfo="bindGetUserInfo">点我登录</button>
    </div>
    <div class="addBox"  v-show="!nologin">
    <div class="fz" >
      <span v-show="takep" class="iconfont icon-fanzhuanjingtou" @click='xz()'></span>
    </div>

    <camera v-show="takep" style="height:300px;width:100%":device-position="dp" flash="off" binderror="error" ></camera>
    <div>
    <image  v-show="!takep" style="width:100%" mode="widthFix" :src="tempFilePaths"></image>
    </div>
    <div class="ta">
        <textarea v-show="!takep" placeholder="分享您的心情..."></textarea>
    </div>
    <div class="comp" >
		  <span class="iconfont " :class="select?'icon-album':'icon-return'" @click="chose()"></span>
		  <span class="iconfont " :class="select?'icon-photoBtn':'icon-return'" :style="{color:cc2}" @click="take()"></span>
      <span  class="iconfont icon-ok" :style="{color:cc}" @click="upload()"></span>
    </div>
  </div>
	</div>
</template>

<script>
	export default{
    name:'addBox',
	data () {
    return {
      str:[],
      logotop:0,
      nologin:true,
      dp:'back',
      tempFilePaths:'',
      takep:true,
      select:true,
      times:0,
      xx:'block',
      cc:'#fff',
      cc2:'#bad7df'
      }
  },
  methods:{
       bindGetUserInfo: function(e){
      var _this=this
      _this.nologin=false
      },
  	chose(){
      var _this=this
      if(!_this.times){
      _this.xx='none'
      _this.takep=false
      console.log(_this.takep)
      _this.cc2='#fff'
      _this.cc='#bad7df'
      _this.times++
      _this.select=false
      wx.chooseImage({
      count:1,
      sizeType:['original','compressed'],
      sourceType:['album','camera'],
      success:function(res){
        console.log(res)
          var tempFilePaths = res.tempFilePaths
          _this.tempFilePaths=tempFilePaths


      }
      })

      }else{
        _this.xx='block'
        _this.takep=true
        _this.select=true
        _this.cc2='#bad7df'
        _this.cc='#fff'
        _this.select=true
        _this.times=0
        _this.tempFilePaths=''

      }
    },
    xz(){
      if(this.dp=='back'){
        this.dp='front'
      }else{
        this.dp='back'
      }

    }
    ,
    take(){
      if(!this.times){
        this.xx='none'
        this.times++
        this.cc='#bad7df'
      this.cc2='#fff'
      this.takep=false
      this.select=false
     wx.createCameraContext().takePhoto({    
      quality:'high',
      success:(res)=>{
      this.tempFilePaths=res.tempImagePath
      console.log(res)
      }
     })
    }else{

      }
    },
    upload(){
      var _this=this

        _this.str=_this.tempFilePaths[0].split(":")
 var path= 'C:\Users\wyy\AppData\Local\微信web开发者工具\User Data\WeappFileSystem\o6zAJs3zJYDumNcsK4iELymsQ4Cs\wx7bc7de89de9abb05'+_this.str[1]
      console.log(_this.tempFilePaths[0])
      wx.uploadFile({
      url: 'https://localhost:3000/api/upload',
      filePath: path,
      name: 'file',
      header: {
          'content-type': 'multipart/form-data'
        },
      success: function(res){
        var data = res.data
       // console.log(data)
      }
    })
    }
      
  },
  
      mounted () {
        this.takep=true;
        var _this=this
          wx.getSystemInfo({
            success:function(res){
              _this.logotop=res.windowHeight/2-20
            }
          })

          wx.getUserInfo({
              success: function (res) {
                _this.nologin=false
                this.userInfo = res.userInfo
              },
              fail: function () {
                _this.nologin=true
              }
          })
          
      }

	}
</script>
<style>
.loginlogo{
  width:100%;
  text-align:center;
  position:fixed;
}
.loginlogo>img{
  width:80px;
  height:80px;
}
.loginlogo>button{
 
  width:40%;
  -webkit-tap-highlight-color:transparent;
  overflow:hidden;
  color:#a8e6cf;
  background-color:#fff;

}
.addBox{
    height:100%;
    width:100%;
    flex-direction:column;
    align-items:flex-end;
    justify-content:space-between;
    box-sizing:border-box;
    margin-bottom:100px;

}

.addBox  .iconfont{
    font-family: iconfont;
    font-size:50px;
    color:#bad7df;
  }
.fz{
  display:fixed;
  text-align:right;
  margin-right:20px;
  line-height:80rpx;

}
.fz .iconfont{
      font-size:70rpx !important;

}


 .camera{
    width:100%; 
    display:block;
    overflow:hidden;
    height: 300px;


  }
  .comp{
    z-index:999;
    background-color:#fff;
    width:100%;
    position:fixed;
    display: flex;
    bottom:0
  }
  .comp>span{
    margin:0 auto;
  }

  image{
    margin:0 auto;
  }
  textarea{
    width:80%;
    font-size:16px;
    margin:0 auto;
    height:80px;
    overflow-y:visible;

  }

</style>