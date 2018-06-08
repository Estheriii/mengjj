<template>
	<div class="my">
		<div class="userinfo">
      		<img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      		<div class="userinfo-detail">
        		<card :text="userInfo.nickName"></card>
        		<div class="post-fans-follow">
        			<div class="post" v-text="'动态 '+post"></div>
        			<div class="fans" v-text="'粉丝 '+fans"></div>
        			<div class="follow" v-text="'关注 '+follow"></div>
        		</div>
      		</div>
    	</div>

    	<div class="control-pad">
    		<div class="item">    		
    			<span class="iconfont icon-shangcheng"></span>
    			<label>商城</label>
    		</div>
    		<div class="item">    		
    			<span class="iconfont icon-zhangben"></span>
    			<label>账本</label>
    		</div>
    		<div class="item">    		
    			<span class="iconfont icon-album"></span>
    			<label></label>

    		</div>
    		<div class="item">    		
    			<span class="iconfont icon-album"></span>
    			<label></label>
    		</div>
    		 <div class="item">    		
    			<span class="iconfont icon-album"></span>
    			<label></label>
    		</div>
    	</div>
	</div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      userInfo: {},
      post:39,
      fans:120,
      follow:150
    }
  },

  components: {
    card
  },

  methods: {
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style>
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
	display:flex;
	flex-wrap:wrap;
	margin-left: 60rpx;

}
.item{
	width: 25%;
	height: 180rpx;
	color:#a8e6cf;


}

.item>.iconfont{
	font-size:110rpx;
	line-height: 110rpx;
		position: absolute;

}

.item>label{	
	position: relative;
	font-size:26rpx;
	left:26rpx;
	top:85rpx;
	color:#ff7a8a;

}


</style>