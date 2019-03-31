<template>
  <div class="company-profile" ref="companyProfile">
    <div class="title">
      企业介绍
      <div class="b-bar"></div>
    </div>
    <div class="main">
      <div class="main-bg" :class="screenState ? 'main-bg-active' : ''"></div>
      <div class="main-con" :class="screenState ? 'main-con-active' : ''">
        <div class="logo"></div>
        <p class="con-title">用科技打破继承性不公 创造普惠价值</p>
        <p class="con-con">中僖创智是一家共享经济人群智能支付、税务、人力资源筹划综合解决方案服务商。它结合了中国当下相关政策及法规，为企业快速发展提供可落地执行的综合解决方案，在合理合规合法的前提下，为企业解决高额税赋、高额人才运营成本，协助、指引企业规避法律及运营风险，为企业保驾护航。</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['screenState'],
    data(){
      return {

      }
    },
    methods: {
      getOffsetTop(){
        return this.$refs.companyProfile.offsetTop
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

@media (min-width: 993px) 
  .company-profile
    width: 1200px
    margin: 0 auto 180px
    height: auto
    overflow: hidden
    padding-top: 190px
    .title
      height: auto
      overflow: hidden
      font-size: 32px
      color: #222
      line-height: 80px
      text-align: left
      position: relative
      margin-bottom: 60px
      .b-bar
        width: 120px
        height: 4px
        background-color: #DB231B
        position: absolute
        bottom: 0
    .main
      width: 100%
      height: 700px
      position: relative
      .main-bg
        width: 1200px
        height: 700px
        background: url(../../assets/index/bg1.png) top center no-repeat
        background-size: 100% 100%
        position: absolute
        top: 0
        left: -1200px
      .main-bg-active
        animation:mainBgActive 2s forwards;
        -moz-animation:mainBgActive 2s forwards; /* Firefox */
        -webkit-animation:mainBgActive 2s forwards; /* Safari and Chrome */
        -o-animation:mainBgActive 2s forwards; /* Opera */
      .main-con
        width: 780px
        height: 450px
        position: absolute
        bottom: -450px
        right: 0
        background-color: #fff
        .con-title
          padding: 100px 105px 45px
          line-height: 40px
          font-size: 24px
          color: #222
        .con-con
          padding: 0 105px
          font-size: 18px
          line-height: 27px
          color: #222
        .logo
          width: 140px
          height: 140px
          background: url(../../assets/index/logo.png) top center no-repeat
          background-size: 100% 100%
          position: absolute
          top: 0 
          left: -140px
      .main-con-active
        animation:mainConActive 2s 1s forwards;
        -moz-animation:mainConActive 2s 1s forwards; /* Firefox */
        -webkit-animation:mainConActive 2s 1s forwards; /* Safari and Chrome */
        -o-animation:mainConActive 2s 1s forwards; /* Opera */

  @keyframes mainBgActive
  {
  from {left:-1200px;}
  to {left:0;}
  }

  @-moz-keyframes mainBgActive 
  {
  from {left:-1200px;}
  to {left:0;}
  }

  @-webkit-keyframes mainBgActive 
  {
  from {left:-1200px;}
  to {left:0;}
  }

  @-o-keyframes mainBgActive
  {
  from {left:-1200px;}
  to {left:0;}
  }

  @keyframes mainConActive
  {
  from {bottom:-450px;}
  to {bottom:0;}
  }

  @-moz-keyframes mainConActive 
  {
  from {bottom:-450px;}
  to {bottom:0;}
  }

  @-webkit-keyframes mainConActive
  {
  from {bottom:-450px;}
  to {bottom:0;}
  }

  @-o-keyframes mainConActive
  {
  from {bottom:-450px;}
  to {bottom:0;}
  }



@media (max-width: 992px) 
  .company-profile
    width: 100%
    margin: 0 auto
    height: auto
    overflow: unset
    padding-top: .8rem
    padding-bottom: 4.56rem
    .title
      height: auto
      font-size: .56rem
      color: #222
      line-height: .8rem
      text-align: center
      position: relative
      margin-bottom: .58rem
      font-weight: bold
      overflow: initial;
      .b-bar
        width: 1.20rem
        height: .08rem
        background-color: #DB231B
        margin: 0.18rem auto
        position: relative
    .main
      width: 100%
      height: 4.38rem
      position: relative
      .main-bg
        width: 100%
        height: 100%
        background: url(../../assets/mobile/bg1.png) top center no-repeat
        background-size: 100% auto
        position: absolute
        top: 0
        left: 0
      .main-con
        width: 6.7rem
        height: 5.42rem
        position: absolute
        top: 2.82rem
        left: 50%
        margin-left: -3.35rem
        background-color: #fff
        -moz-box-shadow: 0px 5px 20px #f5f5f5; /* 老的 Firefox */
        box-shadow: 0px 5px 20px #f5f5f5;
        .con-title
          padding: .64rem .4rem .2rem
          line-height: .44rem
          font-size: .32rem
          color: #222
        .con-con
          padding: 0 .4rem
          font-size: .28rem
          line-height: .54rem
          color: #222
        .logo
          width: 1.2rem
          height: 1.2rem
          background: url(../../assets/mobile/logo.png) top center no-repeat
          background-size: 100% 100%
          position: absolute
          top: -0.96rem
          left: .4rem
</style>
