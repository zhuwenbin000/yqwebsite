<template>
  <div class="service-industry" ref="serviceIndustry">
    <div class="title">
      服务行业
      <div class="b-bar"></div>
    </div>
    <div class="main">
      <img :src='serviceImg' :class="screenState ? 'serviceImg-active' : ''">
      <div class="desc-wrap" :class="screenState ? 'desc-wrap-active' : ''">
        <p class="desc-title">为各行业提供解决方案</p>
        <p class="desc-con">服务于大交通、大文娱、金融科技、社交电商、网红直播、保险代理、知识付费、本地生活等十大行业60余类细分领域的自由职业者，基本实现了对共享经济全领域覆盖。针对企业兼职、销售推广、行政后勤、低端技术、物流搬运、客服中心、基础蓝领等岗位的服务外包/项目外包方案。</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['screenState'],
    data(){
      return {
        serviceImg: require("../../assets/index/serviceImg.png")
      }
    },
    methods: {
      getOffsetTop(){
        return this.$refs.serviceIndustry.offsetTop
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

@media (min-width: 993px)
  .service-industry
    width: 1200px
    margin: 0 auto 180px
    height: auto
    overflow: hidden
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
      position: relative
      height: 676px
      img
        width: 676px 
        height: 676px
        display: block
        position:absolute
        right: -676px
        top: 0
      .serviceImg-active
        animation:serviceImgActive 2s forwards;
        -moz-animation:serviceImgActive 2s forwards; /* Firefox */
        -webkit-animation:serviceImgActive 2s forwards; /* Safari and Chrome */
        -o-animation:serviceImgActive 2s forwards; /* Opera */
      .desc-wrap
        width: 780px
        height: 455px
        background-color: #C92E27
        position: absolute
        left: -780px
        top: 123px
        p
          padding: 0 108px
          color: #fff
        .desc-title
          padding: 110px 108px 50px
          font-size: 24px
          line-height: 33px
        .desc-con
          font-size: 18px
          line-height: 27px
      .desc-wrap-active
        animation:descWrapActive 2s 1s forwards;
        -moz-animation:descWrapActive 2s 1s forwards; /* Firefox */
        -webkit-animation:descWrapActive 2s 1s forwards; /* Safari and Chrome */
        -o-animation:descWrapActive 2s 1s forwards; /* Opera */

@keyframes serviceImgActive
{
from {right: -676px;}
to {right:0;}
}

@-moz-keyframes serviceImgActive
{
from {right: -676px;}
to {right:0;}
}

@-webkit-keyframes serviceImgActive
{
from {right: -676px;}
to {right:0;}
}

@-o-keyframes serviceImgActive
{
from {right: -676px;}
to {right:0;}
}


@keyframes descWrapActive
{
from {left: -780px;}
to {left:0;}
}

@-moz-keyframes descWrapActive
{
from {left: -780px;}
to {left:0;}
}

@-webkit-keyframes descWrapActive
{
from {left: -780px;}
to {left:0;}
}

@-o-keyframes descWrapActive
{
from {left: -780px;}
to {left:0;}
}

@media (max-width: 992px)
  .service-industry
    width: 100%
    margin: 0 auto
    height: auto
    padding-top: .82rem
    padding-bottom: 2.72rem
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
      height: 7.5rem
      position: relative
      img
        width: 100%
        display: block
        position:absolute
        right: 0
        top: 0
      .desc-wrap
        width: 6.7rem
        height: 6.6rem
        background-color: #C92E27
        position: absolute
        left: 50%
        top: 2.42rem
        margin-left: -3.35rem
        p
          color: #fff
        .desc-title
          padding: .60rem .4rem .4rem
          font-size: .4rem
          line-height: .56rem
        .desc-con
          padding: 0 .4rem
          font-size: .28rem
          line-height: .54rem
</style>
