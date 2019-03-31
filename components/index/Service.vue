<template>
  <div class="service-content">
    <div class="title">
      我们提供的服务
    </div>
    <div class="service-wrap">
      <div class="item" v-for="item in serviceList">
        <img :src='item.img'>
        <p class="item-title">{{item.title}}</p>
        <p class="item-desc">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        serviceList:[
          {
            img:require('../../assets/design/s1.png'),
            title:'平面设计',
            desc:"提供完整的企业品牌系统设计方案，包括品牌标识（logo）、企业VI、品牌纪念品等设计方案；亦为企业提供全套高品质线下活动设计保障，全面提升企业品牌形象和传播度。",
          },
          {
            img:require('../../assets/design/s2.png'),
            title:'移动设计',
            desc:"为您的品牌提供最适合互联网新媒体时代的营销创意设计方案，主打最新奇最具传播力的H5传播设计，全面助力您的企业品牌运营活动。",
          },
          {
            img:require('../../assets/design/s3.png'),
            title:'网站设计',
            desc:"经典的企业网站设计服务，包含设计，文案，域名，建站的综合性一站式服务，用最短时间快速建立您品牌的基础。",
          },
          {
            img:require('../../assets/design/s4.png'),
            title:'3D/动画设计',
            desc:"为您的品牌量身定制3D渲染视觉动画效果、工业产品设计渲染、展览场景化设计，结合互联网技术让品牌形象更高级化、国际化、现代化。",
          }
        ],
      }
    },
    methods: {
      
    }, 
    mounted() {
      
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

@media (min-width: 993px) 
  .service-content
    width: 1200px
    margin: 0 auto 100px
    height: auto
    overflow: hidden
    .title
      font-size 42px
      padding-bottom 45px
      color: #000000
      line-height: 80px
      text-align: center
      font-family SourceHanSerifCNBold
    .service-wrap
      width: 100%
      .item
        width: 550px
        float: left
        position:relative
        margin-bottom 30px
        &:nth-child(2n)
          margin-left 100px
        img
          display:block
          width:100%
          height: 260px
        .item-title
          font-size: 28px
          padding: 35px 0 20px 
          color: #000000
          font-family SourceHanSerifCNBold
        .item-desc
          font-size: 18px
          color: #666666
          line-height 32px
          height 120px
          font-family NotoSansHansMedium

@media (max-width: 992px) 
  .service-content
    width: 100%
    .title
      width: 100%
      font-size 0.6rem
      padding-bottom 0.65rem
      color: #000000
      text-align: center
      font-family SourceHanSerifCNBold
    .service-wrap
      width: 100%
      overflow hidden
      .item
        width: 100%
        position:relative
        margin-bottom 1rem
        img
          display:block
          width:100%
        .item-title
          font-size: 0.4rem
          padding: 0.25rem 0.2rem
          color: #000000
          font-family SourceHanSerifCNBold
        .item-desc
          font-size: 0.28rem
          color: #666666
          line-height 0.4rem
          font-family NotoSansHansMedium
          padding: 0 0.2rem


</style>
