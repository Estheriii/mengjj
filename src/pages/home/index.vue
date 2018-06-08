<template>
  <div class="boxHome">
    <mt-header fixed title="萌叽叽"></mt-header>

    <div class="toubu">
      <div role="button">
        <a class="userImg" href="">
          <img class="userImg" src="http://pic5.58cdn.com.cn/zhuanzh/n_v1bkuyfvltjuifpjbky4aq.jpg" alt="instagram 的头像">
        </a>
      </div>
      <div class="userName">
            <a title="instagram" href="">instagram</a>
      </div>
    </div>
    <div class="postContent">
      <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4198465617,4259583419&fm=200&gp=0.jpg" alt="a">
    </div>

    <div class="commentInfo">
      <div class="comment">
        <a>
          <span class="iconfont icon-xihuan"></span>
        </a>
        <a>
          <span class="iconfont icon-pinglun"></span>
        </a>
      </div>
      <div class="zan">12,335次赞</div>
      <div class="commentDetail" v-for="item in com">
        <div class="uName" v-text="item.name"></div><div class="uComment" v-text="item.detail">111</div>
      </div>
    </div>

    <div class="toubu">
      <div role="button">
        <a class="userImg" href="">
          <img class="userImg" src="http://pic5.58cdn.com.cn/zhuanzh/n_v1bkuyfvltjuifpjbky4aq.jpg" alt="instagram 的头像">
        </a>
      </div>
      <div class="userName">
        <a title="instagram" href="">instagram</a>
      </div>
    </div>
    <div class="postContent">
      <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4198465617,4259583419&fm=200&gp=0.jpg" alt="a">
    </div>

    <div class="commentInfo">
      <div class="comment">
        <a>
          <span class="iconfont icon-xihuan"></span>
        </a>
        <a>
          <span class="iconfont icon-pinglun"></span>
        </a>
      </div>
      <div class="zan">12,335次赞</div>
      <div class="commentDetail" v-for="item in com">
        <div class="uName" v-text="item.name"></div><div class="uComment" v-text="item.detail">111</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'boxHome',
      data (){
      return{
        com:[
          {name:'Estheriii',detail:'很喜欢哦，好可爱'},
          {name:'angelababy',detail:'炒喜欢哦，好可爱'},
          {name:'小小',detail:'棒棒哒'},
          {name:'葬爱家族',detail:'超级酷'},
          {name:'bbb',detail:'笔芯'}

        ]
      }
    }
  }

</script>

<style>
.boxHome{
    width:100%;
    position: absolute;
  }
.toubu {
    display: flex;
    border-bottom: 1px solid #efefef;
    height:40px;
    padding: 5px;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .userImg{
    display:block;
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }
  .userName{
    font-size: 16px;
  }
  .postContent{
    width: 100%;
    height:100%;
    left:0;
    right:0;
  }

  .postContent img{
    width: 100%;
  }

  .commentInfo{
    padding: 0 10px;
  }

  .comment{
    display: flex;
    height:35px;  
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
.comment a{
  padding: 0 5px 0 0;
}
.comment .iconfont{
  font-size:25px;
}
  .zan{
    font-size: 14px;
    margin-bottom:5px;

  }
  .commentDetail{
    display: flex;
    font-size: 14px;
    line-height: 12px;
    margin-top:6px;
    margin-bottom:6px;


  }
  .uName{
    margin-right:8px;
    font-weight: bold;
  }
</style>
