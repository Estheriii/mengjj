<template>
	<div class="addBox">
		<span class="iconfont icon-album"  @click="chose()"></span>
		<span class="iconfont icon-photo"  @click="tekep()"></span>

	</div>
</template>

<script>
	export default{
	data () {
    return {
      tempFilePaths:''
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
    takep(){
     wx.createCameraContext().takePhoto({    
      quality:'high',
      success:(res)=>{
      this.tempFilePaths=res.tempImagePath
      console.log(res.tempImagePath)
      }
     })
    }
  }
	}
</script>
<style>
.addBox{
	display:flex;
	justify-content:space-around;
	align-items:center;
}

.addBox  .iconfont{
    font-family: iconfont;
    font-size:80px;
    color:#ffaaa5;
  }
</style>