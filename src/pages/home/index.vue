<template>
  <div>
  <div class="boxHome" v-for="(val,key) in items">
    <mt-header fixed title="萌叽叽"></mt-header>
    <div class="toubu" :id="key">
      <div role="button">
        <div style="margin:0 5px">
        <a class="userImg" href="">
          <image class="userImg" :src="val.headsrc" ></image>
        </a>
      </div>
      </div>
      <div class="userName">
            <a title="instagram" href="" v-text="val.name"></a>
      </div>
    </div>
    <div class="postContent">
      <img mode="widthFix" :src="val.postImg">
    </div>

    <div class="commentInfo">
      <div class="comment">
        <a>
          <span class="iconfont icon-xihuan" :class="aaa?ccc:''" @click="!aaa"></span>
        </a>
        <a>
          <span class="iconfont icon-pinglun"></span>
        </a>
      </div>
      <div class="zan" v-text="val.zan">次赞</div>
      <div class="commentDetail" v-for="(v,k) in val.com">
        <div class="uName" v-text="v.name"></div><div class="uComment" v-text="v.detail"></div>
      </div>
    </div>

    
  </div>
</div>
</template>

<script>
  export default{
    name:'boxHome',
        methods:{


        },
      data (){
      return {
        aaa:false,
        wd:0,
        ht:0,
        items:[
          {
          zan:"12,345",
          headsrc:"http://pic5.58cdn.com.cn/zhuanzh/n_v1bkuyfvltjuifpjbky4aq.jpg",
          name:"aaa",
          postImg:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4198465617,4259583419&fm=200&gp=0.jpg",
          com:[
                {name:'Estheriii',detail:'很喜欢哦，好可爱'},
                {name:'angelababy',detail:'炒喜欢哦，好可爱'},
                {name:'小小',detail:'棒棒哒'},
                {name:'葬爱家族',detail:'超级酷'},
                {name:'bbb',detail:'笔芯'}
              ]
        },          {
          zan:"23,341",
          headsrc:"http://img.besoo.com/file/201705/25/1050098545908.png",
          name:"aaa",
          postImg:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1165352806,4057071978&fm=27&gp=0.jpg",
          com:[
                {name:'qqbbb',detail:'太棒啦'},
                {name:'zzz铲屎官',detail:'小心心'},
                {name:'大狗子',detail:'棒棒哒'},
                {name:'咪咪',detail:'超级酷'},
                {name:'Axiobtheraz',detail:'很可爱诶'}
              ]
        },         {
          zan:"9,884",
          headsrc:"http://upload.besoo.com/file/201611/23/1313336945908.jpg",
          name:"aaa",
          postImg:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4225703153,3721771360&fm=200&gp=0.jpg",
          com:[
                {name:'铲屎官大人',detail:'这么会这么凯爱'},
                {name:'小米',detail:'可爱+10086'},
                {name:'猪猪',detail:'棒棒哒'},
                {name:'qqqqxxxx',detail:'超级酷'},
                {name:'叫什么名字好呢',detail:'笔芯'}
              ]
        },          {
          zan:"234",
          headsrc:"http://pic5.58cdn.com.cn/zhuanzh/n_v1bkuyfvltjuifpjbky4aq.jpg",
          name:"aaa",
          postImg:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528654059438&di=a83914b252e236968a3d430f32c02f09&imgtype=0&src=http%3A%2F%2Fi8.download.fd.pchome.net%2Ft_960x600%2Fg1%2FM00%2F11%2F07%2FooYBAFXjyJaIMsCYAAFjEowMl4IAACqvQIQtyMAAWMq562.jpg",
          com:[
                {name:'你说',detail:'哪里能有这么可爱的小东西哦'},
                {name:'听听听~',detail:'真的假的哦'},
                {name:'啦啦啦',detail:'你太棒啦'},
                {name:'哟',detail:'666'},
                {name:'用户12309089',detail:'可爱'}
              ]
        }]

      }
    }
}
</script>

<style>
.ccc{
  color:#f67280;
}
.boxHome{
    width:100%;
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
    width: 40px;
    height: 40px;
  }
  .userName{
    font-size: 16px;
  }
  .postContent{
    width: 100%;
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
