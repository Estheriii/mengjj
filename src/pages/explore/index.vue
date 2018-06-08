<template>
    <div class="box" ref="box">
        <div class="exBarBox">
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
        list:[
          {alt:'aaa',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528298073350&di=212a4d94e49ae48834d16087f560ddd7&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fcb8065380cd79123499f23a0a7345982b3b780e3.jpg'},
          {alt:'bbb',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528295955707&di=2154cd60cadee3d4bddefe2ac1dab916&imgtype=0&src=http%3A%2F%2Fimage.tianjimedia.com%2FuploadImages%2F2013%2F191%2FI0CHP56O61C5.jpg'},
          {alt:'ccc',src:''},
          {alt:'ddd',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528295955705&di=acdc5f8c62082ef5064898c03d3c1dcb&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201510%2F11%2F20151011223210_wxjQy.jpeg'},
          {alt:'eee',src:'555'},
          {alt:'fff',src:'666'},
          {alt:'ggg',src:'777'},
          {alt:'aaa',src:''},
          {alt:'bbb',src:'222'},
          {alt:'ccc',src:'333'},
          {alt:'ddd',src:'444'},
          {alt:'eee',src:'555'},
          {alt:'fff',src:'666'},
          {alt:'ggg',src:'777'},
          {alt:'aaa',src:''},
          {alt:'bbb',src:'222'},
          {alt:'ccc',src:'333'},
          {alt:'ddd',src:'444'},
          {alt:'eee',src:'555'},
          {alt:'fff',src:'666'},
          {alt:'ggg',src:'777'}



        ]
      }
    },
    components:{
      exBar
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

.exBarBox{
  width:100%;
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
