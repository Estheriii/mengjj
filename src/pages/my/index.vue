<template>
	<div class="my">
    <div class="loginlogo" :style="{top:logotop+'px'}" v-show="nologin">
      <img  src="../../../static/pet.png">
    <button open-type="getUserInfo" @getuserinfo="bindGetUserInfo">点我登录</button>
    </div>

		<div class="userinfo" v-show="!nologin">
      		<div class="userinfo-avatar" background-size="cover" >
            <open-data type="userAvatarUrl"></open-data>            
          </div>
      		<div class="userinfo-detail">
            <div class="nm" >
              <open-data type="userNickName"></open-data>
              <span class="iconfont icon-message"></span>
            </div>
<!--         		<card :text="Estheriii"></card>
 -->        		<div class="post-fans-follow">
        			<div class="post" v-text="'动态 '+post"></div>
        			<div class="fans" v-text="'粉丝 '+fans"></div>
        			<div class="follow" v-text="'关注 '+follow"></div>
        		</div>
      		</div>
    	</div>
      <div class="dongtai" :style="{width:dtWidth+'px;',height:dtWidth+'px;'}" v-show="!nologin">
        <div v-for="(val,key) in list" class="dt-smallBox" :class="(key+1)%3==0?noRight:''" >
          <img  :src="val.src">
        </div>
      </div>
    	<div class="control-pad" v-show="!nologin">
    		<div class="item">    		
    			<span class="iconfont icon-shangcheng"></span>
    			<label>商城</label>
    		</div>
    		<div class="item">    		
    			<span class="iconfont icon-zhangben"></span>
    			<label>账本</label>
    		</div>
    	</div>
	</div>
</template>

<script>
import card from '@/components/card'
export default {
  data () {
    return {
      logotop:300,
      dtWidth:300,
      nologin:true,
      userInfo: {},
      post:39,
      fans:120,
      follow:150,
      hsrc:'',
      userNickName:'',
      list:[
          {src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528655747265&di=3ca8f70f77675e56e6708e58e0b2fd0a&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F5fdf8db1cb1349549b3cd9b15c4e9258d0094ac0.jpg'},
          {src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528655751606&di=21576ccc3671b8f9e1ba5d1bf8cfda03&imgtype=0&src=http%3A%2F%2Fimg4q.duitang.com%2Fuploads%2Fitem%2F201504%2F03%2F20150403H5455_wLePy.thumb.700_0.jpeg'},
          {src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528655751605&di=1d67453772b33a6ea95893f4eacd2ad7&imgtype=0&src=http%3A%2F%2Fimg.tuku.cn%2Ffile_thumb%2F201709%2Fm2017092708563853.jpg'},
          {src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528655751603&di=9b2870d719343c0112537a39cf3b3e7e&imgtype=0&src=http%3A%2F%2Fmvimg2.meitudata.com%2F56d99f540a34b373.jpg'},
          {src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528655751601&di=c6a7182c48cb6184ff775be864cbd572&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fe824b899a9014c082c26cf6f007b02087af4f4df.jpg'},
          {src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528655788765&di=768517b2f2ba564e8dfefe7247f0ab72&imgtype=0&src=http%3A%2F%2Fimg2.xiazaizhijia.com%2Fwalls%2F20160425%2F1024x768_4db3f1ca393d431.jpg'},
          {src:'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1528645748&di=f8ecf2add1288ecb295c5851aceb8606&src=http://img5.duitang.com/uploads/item/201509/30/20150930171714_K4iWc.jpeg'},
          {src:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2009703857,1717561993&fm=27&gp=0.jpg'},
          ]
    }
  },

  components: {
    card
  },

  methods: {
       bindGetUserInfo: function(e){
          var _this=this
          _this.nologin=false
          _this.hsrc = e.mp.detail.userInfo.avatarUrl
          _this.userNickName =e.mp.detail.userInfo.nickName
          wx.request({
              url:'http://localhost:3000/api/register',
              // header: {
              //   "Content-Type": "application/x-www-form-urlencoded"  
              // },
            method: "POST", 
            data:{
                username:_this.userNickName,
                userimg:_this.hsrc
            },success:function(res){
              console.log(res)
            }

          })

      }
  },

  mounted () {
    var _this=this
    // 调用应用实例的方法获取全局数据
    wx.getSystemInfo({
      success:function(res){
        _this.logotop=res.windowHeight/2-20
        _this.dtWidth=res.windowWidth*0.8
      }
    })

    wx.getUserInfo({
      success: function (res) {
        _this.nologin=false
      },
      fail: function () {
        _this.nologin=true
      }
    })

    wx.request({
      url:"http://localhost:3000/us",
      success:function(res){
          
          for(var i=0;i<res.data.result.list[1].postlist.length;i++){
              var a = res.data.result.list[1].postlist[i].postImg
              _this.list.push({src:'../../static/pic/'+a})

          }
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
    .noRight{
    margin-right: 0 !important;
  }
  .dongtai{
    display:flex;
    -webkit-display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    -webkit-flex-wrap:wrap;
    overflow: hidden;
    margin:0 auto;
    padding:10px;
    border:3px dashed #fceaea;
    border-radius:10px;
    -moz-box-shadow:0px 0px 30px #fceaea; 
    -webkit-box-shadow:0px 0px 30px #fceaea; 
    box-shadow:0px 0px 30px #fceaea;


  }

    .dt-smallBox{
    margin-right: 4px;
    margin-bottom:4px;
    flex:1;
    -webkit-flex:1;
    min-width:31%;
    max-width:31%;
    height:0;
    padding-bottom:32.30%;
    position: relative;

  }
 .dt-smallBox img{
    width:100%;
    height:100%;
    position:absolute;
  }

.nm{
  padding:0 10px 0 10px;
  display:flex;
  justify-content:space-between;
    align-items:baseline;
}
.nm .iconfont{
  font-size:30px;
  color:#999;
}
.userinfo {
  display: flex;
  margin: 20rpx;
}

.userinfo-avatar {

	display: -webkit-box;
  width: 120rpx;
  height: 120rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-detail {
  flex:1;
  color: #ff7a8a;
  align-items:center;

}


.post-fans-follow{
	width: 100%;
	display: flex;
	flex-flow:column||nowrap;
	align-items:center;



}
.post-fans-follow div{
	text-align: center;
	font-size:26rpx;
	margin: 0 auto;
	width: 33.3%;
	border: 1rpx solid #f9f9f9;
	border-radius: 10rpx;

}
.control-pad{
  margin-top:24px;
	display:flex;
	flex-wrap:wrap;
	margin-left: 90rpx;

}
.item{
	width: 25%;
	height: 180rpx;
	color:#a8e6cf;


}

.item>.iconfont{
	font-size:80rpx;
	line-height: 110rpx;
		position: absolute;

}

.item>label{	
	position: relative;
	font-size:23rpx;
	left:19rpx;
	top:85rpx;
	color:#ff7a8a;

}


</style>