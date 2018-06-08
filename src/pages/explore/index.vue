<template>
    <div class="box" ref="box">
      <div class="fixPros"></div>
        <div class="exBarBox" :style="{top:a+'px;display:'+dis}">
          <exBar></exBar>
        </div>
      <div v-for="(val,key) in list" class="smallBox" :class="(key+1)%3==0?'noRight':''">
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
          {alt:'ccc',src:''},
          {alt:'ddd',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528295955705&di=acdc5f8c62082ef5064898c03d3c1dcb&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201510%2F11%2F20151011223210_wxjQy.jpeg'},
          {alt:'eee',src:''},
          {alt:'fff',src:''},
          {alt:'ggg',src:''},
          {alt:'aaa',src:''},
          {alt:'bbb',src:''},
          {alt:'ccc',src:''},
          {alt:'ddd',src:''},
          {alt:'eee',src:''},
          {alt:'fff',src:''},
          {alt:'ggg',src:''},
          {alt:'aaa',src:''},
          {alt:'bbb',src:''},
          {alt:'ccc',src:''},
          {alt:'ddd',src:''},
          {alt:'eee',src:''},
          {alt:'fff',src:''},
          {alt:'ggg',src:''}



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

  .box{
    display:flex;
    -webkit-display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    -webkit-flex-wrap:wrap;
    overflow: hidden;

  }

  .fixPros{
    display: fixed;
    visibility: hidden;
  }

.exBarBox{
  z-index: 999;
  width:100%;
  position: relative;
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
