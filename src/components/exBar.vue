<template>
  <div class="bh">
    <transition name="fade">
      <input v-show="show">
    </transition>
    <span class="iconfont icon-xiaosousuo" @click="show=!show"></span>

  </div>
</template>

<script>
export default
{
  name:'bh',
    data()
  {
    return {
      show:false
    }
  }


}

</script>

<style>
  .iconfont{
    font-family: iconfont;
  }
  .icon-xiaosousuo{
    position: relative;
    left:10px;
    top:-2px; 
    font-size: 24px;
    color:#f98ec0;
  }

  .bh{
    width:100%;
  }

  input {
    border-bottom: 1px solid #f98ec0;
    line-height:24px;
    position: absolute;
    width: 200px;
    margin-left: 40px;
    font-size: 16px;
    color:#f98ec0;
  }


  .fade-enter-active, .fade-leave-active{
    transition: 0.5s all ease;
  }

  .fade-enter-active,.fede-leave{
    opacity:1;
    width: 35rem;
    line-height:4.5rem ;
  }
  .fade-leave-active{
    opacity:0;
    width: 0;
  }
  .fade-enter{
    opacity:0;
    width:0;

  }
</style>
