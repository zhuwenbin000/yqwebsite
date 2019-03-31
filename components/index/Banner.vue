<template>
  <div>
    <div class="banner-wrap">
      <div class="logo"></div>
      <div class="banner">
        <div class="arrow">
          <img :src="arrow">
        </div>
        <div class="summary"><span>共享经济人群</span><span>智能支付解决方案</span><br> 一站式人力资源及财税筹划综合服务</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        arrow: require('../../assets/index/arrow-down.png')
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

.banner-wrap
  position: relative
  width: 100%
  height: 980px
  overflow: hidden
  .logo
    width: 180px
    height: 52px
    position: absolute
    top: 40px
    left: 50px
    background: url(../../assets/index/logo-banner.png) top center no-repeat
    background-size: 100% 100%
    z-index: 10
  .banner
    position: absolute
    width: 1980px
    left: 50%
    margin-left: -990px
    height: 980px
    background: url(../../assets/index/banner.png) top center no-repeat
    background-size: 100% 100%
    .arrow
      width: 100%
      position: absolute
      bottom:24px
      height: 60px
      img
        display: block
        width: 60px
        height: 60px
        margin: 0 auto
    .summary
      width: 100%
      padding-top: 390px
      font-size: 68px
      line-height: 95px
      text-align: center
      color: #fff

@media (max-width: 992px) 
  .banner-wrap
    height: 10.12rem
    .logo
      width: 1.98rem
      height: 0.58rem
      position: absolute
      top: 0.4rem
      left: 0.4rem
      background: url(../../assets/index/logo-banner.png) top center no-repeat
      background-size: 100% 100%
      z-index: 10
    .banner
      position: relative
      width: 100%
      left: 0
      margin-left: 0
      height: 100%
      background: url(../../assets/mobile/banner.png) top center no-repeat
      background-size: 100% 100%
      display: flex;
      display: -webkit-flex;
      align-items:center;
      justify-content:center;
      .arrow
        width: 100%
        position: absolute
        bottom: .4rem
        height: .6rem
        img
          display: block
          width: .6rem
          height: .6rem
          margin: 0 auto
      .summary
        width: 100%
        font-size: .32rem
        line-height: .44rem
        text-align: center
        color: #fff
        padding-top: 0
        span
          display:block
          font-size: .48rem
          line-height: .66rem

</style>
