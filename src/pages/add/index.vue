<template>
	<div class="addBox">
    <camera v-show="takep" device-position="back" flash="off" binderror="error" ></camera>
    <div :style="{height:vv+'px'}"></div>
    <div class="comp" >
		  <span class="iconfont icon-album"  @click="chose()"></span>
		  <span class="iconfont icon-photo"  @click="take()"></span>
    </div>
    <image mode="widthFix" :src="tempFilePaths"></image>
	</div>
</template>

<script>
	export default{
	data () {
    return {
      tempFilePaths:'',
      takep:false,
      vv:0
      }
  },
  methods:{
  	chose(){
      var _this=this;
      wx.chooseImage({
      count:1,
      sizeType:['original','compressed'],
      sourceType:['album','camera'],
      success:function(res){
          var tempFilePaths = res.tempFilePaths
          _this.tempFilePaths=tempFilePaths
      }
      })

      }
    ,
    take(){

     wx.createCameraContext().takePhoto({    
      quality:'high',
      success:(res)=>{
      this.tempFilePaths=res.tempImagePath
      console.log(res.tempImagePath)
      }
     })
    }
  },
  created(){
      this.vv=wx.getSystemInfoSync().windowHeight-80-50
      //console.log(this.vh)
      this.takep=true;
  }
	}
</script>
<style>
.addBox{
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    padding:100rpx 0;
    box-sizing:border-box;

}

.addBox  .iconfont{
    font-family: iconfont;
    font-size:50px;
    color:#ffaaa5;
  }
  camera{
    position:relative;
    width:100%;
    display:block;
    overflow:hidden;
    height: 300px;


  }
  .comp{
    display: flex;
  }
</style>