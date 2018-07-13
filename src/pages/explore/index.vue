<template>
    <div class="box" ref="box">
        <div class="exBarBox" :style="{display:dis}">
          <exBar></exBar>
        </div>
      <div v-for="(val,key) in list" class="smallBox" :class="{'noRight':(key+1)%3==0?true:false,'pt':key<3?true:false}" >
        <img :alt="val.alt" :src="val.src">
      </div>
    </div>
</template>
<script>
import exBar from '@/components/exBar'

  export default{
    name:'exp',
      data (){
      return{
        a:0,
        dis:'flex',
        sT:0,
        list:[
          {alt:'aaa',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528298073350&di=212a4d94e49ae48834d16087f560ddd7&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fcb8065380cd79123499f23a0a7345982b3b780e3.jpg'},
          {alt:'bbb',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528295955707&di=2154cd60cadee3d4bddefe2ac1dab916&imgtype=0&src=http%3A%2F%2Fimage.tianjimedia.com%2FuploadImages%2F2013%2F191%2FI0CHP56O61C5.jpg'},
          {alt:'ccc',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528655544037&di=c48db4c9181839f26e1f94d6f1188298&imgtype=0&src=http%3A%2F%2Fs14.sinaimg.cn%2Fmw690%2F001LVQHHgy6YgeIvN7f8d%26690'},
          {alt:'ddd',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528295955705&di=acdc5f8c62082ef5064898c03d3c1dcb&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201510%2F11%2F20151011223210_wxjQy.jpeg'},
          {alt:'eee',src:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1761053628,2890176749&fm=200&gp=0.jpg'},
          {alt:'fff',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528655344865&di=af23c868ab8d1bbded94152e60257b6f&imgtype=0&src=http%3A%2F%2Fp3.wmpic.me%2Farticle%2F2016%2F01%2F02%2F1451705414_FCsmpfEP.jpg'},
          {alt:'ggg',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528655344863&di=e440e7f71e0a716b7476b4475389fc35&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201508%2F26%2F20150826195235_xzB8K.jpeg'},
          {alt:'aaa',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528655344859&di=43f61454efc3f60de2f8928cd057d25c&imgtype=0&src=http%3A%2F%2Fl.b2b168.com%2F2015%2F10%2F22%2F14%2F201510221452093659724.jpg'},
          {alt:'bbb',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528655344857&di=0ae89c7a31b8c2b395f1d144f148af36&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201502%2F11%2F20150211192150_CV3cz.thumb.700_0.jpeg'},
          {alt:'ccc',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528655344856&di=c19109216d4e8540f80002be5da01f6c&imgtype=0&src=http%3A%2F%2Fmvimg1.meitudata.com%2F5513fa798667b3742.jpg'},
          {alt:'ddd',src:'http://img2.imgtn.bdimg.com/it/u=3516380272,3863985986&fm=27&gp=0.jpg'},
          {alt:'eee',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528655430029&di=1683b2cf998db01d9312228bd0346a8c&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D331108308%2C3515143535%26fm%3D214%26gp%3D0.jpg'},
          {alt:'fff',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528655344848&di=cfd116367c5866bf2482283ba321870d&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fd009b3de9c82d158b4cf4a788a0a19d8bd3e42ad.jpg'},
          {alt:'ggg',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528655344847&di=7150a0860697068e34824a29424c1eb3&imgtype=0&src=http%3A%2F%2Fa3.topitme.com%2Fc%2F4f%2F5b%2F118847526130e5b4fco.jpg'},
          {alt:'aaa',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528655443052&di=fade396d9510bff59972c76b28e00577&imgtype=0&src=http%3A%2F%2Fa3.topitme.com%2F7%2F56%2F7e%2F11905069978c07e567o.jpg'},
          {alt:'bbb',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528655443052&di=5a4230827ab970d29f7137c97a9f7b2b&imgtype=0&src=http%3A%2F%2Fp4.gexing.com%2Fshaitu%2F20130414%2F0329%2F5169b20f52158.jpg'},
          {alt:'ccc',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528655443051&di=4fa23b977614c3e317c8707d71c88276&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4ec2d5628535e5dde970e0297cc6a7efcf1b62e3.jpg'},
          {alt:'ddd',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528655490892&di=43285803cbdd6e21ee69eb12151ec8ab&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D2161815731%2C2863215023%26fm%3D214%26gp%3D0.jpg'},
          {alt:'eee',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528655443048&di=e9028e1b1821b0806667e16e362acc22&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D0a890f896e380cd7f213aaadc83cc858%2F8435e5dde71190efcc3162e6c51b9d16fcfa60c5.jpg'},
          {alt:'fff',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528655443044&di=bc8c55a388ce68e6abe82480e3498871&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F0eb30f2442a7d9331421d2a6a74bd11372f0015d.jpg'},
          {alt:'ggg',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528655512298&di=b958893ff69b0d55fbe3fa64ff49ab53&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D3454587615%2C1438759459%26fm%3D214%26gp%3D0.jpg'}



        ]
      }
    },
    components:{
      exBar
    },
    created(){

         // window.addEventListener('scroll', this.handleScroll,true)
        //var scrollTop=this.$refs.box.scroll

        // console.log(scrollTop);
      },
      onPageScroll(e){
                 this.a=e.scrollTop;

          // if (this.sT>e.scrollTop) {
          //       this.a=e.scrollTop;
          //       this.dis='flex';

          // }else{
          //   //this.dis='none';
          // }   console.log(e.scrollTop,this.sT)
          //     this.sT=e.scrollTop;
      },
      methods:{

      }
  }
</script>
<style>
  .pt{
    margin-top:30px !important;
  }
  .box{
    display:flex;
    -webkit-display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    -webkit-flex-wrap:wrap;
    overflow: hidden;

  }


.exBarBox{
  line-height:30px;
  z-index: 999;
  width:100%;
  position: fixed;
  background-color: #fff;
}
  .noRight{
    margin-right: 0 !important;
  }
  .smallBox{
    margin-right: 4px;
    margin-bottom:4px;
    flex:1;
    -webkit-flex:1;
    min-width:31%;
    height:0;
    padding-bottom:32.30%;
    position: relative;

  }
 .smallBox img{
    width:100%;
    height:100%;
    position:absolute;
  }
</style>
