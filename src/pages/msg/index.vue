<template>
  <div class="boxmsg" >
    <div class="loginlogo" :style="{top:logotop+'px'}" v-show="nologin">
      <img  src="../../../static/pet.png">
    <button open-type="getUserInfo" @getuserinfo="bindGetUserInfo">点我登录</button>
    </div>
    <div class="msg" v-show="list.length && !nologin">
        <div style="margin:0 5px">
        <a class="mImg">
          <image class="mImg" :src="mSrc" ></image>
        </a>
      </div>
      <div class="mDetail">
        <div class="mName">
          <n v-text="name"></n><d v-text="what"></d>
        </div>
        <div class="mBody" v-text="body">
        </div>
        <div class="mDate" v-text="date">
        </div>
      </div>
      <div class="pDetail">
          <image :src="dSrc" ></image>
      </div>
    </div>

    <div class="msgNone" v-show="!list.length && !nologin">
      您还没有消息哦 :)
    </div>
  </div>
</template>

<script>

  export default{

    data() {
      return{
        logotop:300,
        nologin:true,
        list:[]
      }
    },
    methods:{
       bindGetUserInfo: function(e){
          var _this=this
          _this.nologin=false
      }
    },
      mounted () {
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
.msgNone{
  text-align:center;
  color:#999;
}
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
.msg{
  display:flex;
  flex-flow: column || norwap;
  font-size:16px;
  border-bottom:1px solid #ffe2e2;
}

.mImg{
    display:block;
    border-radius: 50%;
    width: 60px;
    height: 60px;
  }


n {
  margin-right:7px;
  color:#fb97a1;
}
.mBody{
  color:#666;
}
.mDetail{
  width:70%;
}
.mDate{
  color:#999;
  font-size:14px;
}
.pDetail{
  margin:0 10px;
}
.pDetail>image{
width:70px;
height:70px;

}
</style>
