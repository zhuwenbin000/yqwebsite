<template>
  <div class="container">
    <Myhead/>
    <Banner/>
    <div class="summary-wrap">
      <div class="pointer">现在我们在这里</div>
      <div class="title"><span>现在释放你的想象</span></div>
      <div class="summary">创意是品牌和产品之间的纽带，我们希望通过我们的设计打开品牌大门，增加你的品牌价值，推广你的公司，这是我们实现这一点的巨大乐趣</div>
    </div>
    <Service/>
    <Myfoot/>
  </div>
</template>

<script>
  import Myhead from '~/components/Myhead.vue'
  import Myfoot from '~/components/Myfoot.vue'
  import Service from '~/components/index/Service.vue'
  import Banner from '~/components/index/Banner.vue'

  export default {
    components: {
      Myhead,
      Myfoot,
      Service,
      Banner,
    },
    data () {
      return {
        isMobile: false,
        mobileWidth: 992
      }
    },
    watch: {
      screenWidth (val) {
        if (!this.timer) {
          this.screenWidth = val
          this.timer = true
          setTimeout(()=> {
              this.checkDevice(this.screenWidth)
              this.timer = false
          }, 400)
        }
      }
    },
    created() {

    },
    mounted() {
      //获取宽度 根据宽度判断设备
      this.screenWidth = document.body.clientWidth
      this.checkDevice(this.screenWidth)
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth
          this.screenWidth = window.screenWidth
          })()
      }
    },
    destroyed() {

    },
    methods: {
      checkDevice(sw) {
        //如果小于mobileWidth就判定使用手机端布局
        if(sw < this.mobileWidth){
          this.isMobile = true
        }else{
          this.isMobile = false
        }
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

@media (min-width: 993px) 
  .container
    min-width 1200px
    width 100%
    background-color #ffffff
    position relative
    .summary-wrap
      width: 1200px
      margin: 0 auto 150px
      height: auto
      overflow: hidden
      .pointer
        font-size 18px
        font-family: NotoSansHansMedium
        padding 50px 0 100px
      .title
        font-size 30px
        font-family SourceHanSerifCNBold
        font-weight bold
        height 60px
        padding-left 50px
        background: url('~assets/design/t-icon.png') left center no-repeat
        background-size: 30px 30px
        span 
          display inline-block
          line-height 60px
          border-bottom 1px solid #dda60e
      .summary
        font-size 28px
        font-family NotoSansHansMedium
        padding-left 50px
        padding-top 35px

@media (max-width: 992px) 
  .container
    width 100%
    .summary-wrap
      width 100%
      margin-bottom 1rem
      padding 0 0.25rem
      .pointer
        font-size .28rem
        font-family: NotoSansHansMedium
        padding 0.3rem 0 2rem
      .title
        font-size 0.42rem
        font-family SourceHanSerifCNBold
        font-weight bold
        height 0.6rem
        padding-left 0.7rem
        background: url('~assets/design/t-icon.png') left center no-repeat
        background-size: 0.5rem 0.5rem
        span 
          display inline-block
          line-height 0.6rem
          border-bottom 1px solid #dda60e
      .summary
        font-size 0.28rem
        line-height 0.42rem
        font-family NotoSansHansMedium
        padding-left 0.7rem
        padding-top 0.7rem
</style>
