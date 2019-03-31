<template>
  <div class="container">
    <Banner/>
    <CompanyProfile ref="screen_1" :screenState="screenState_1" />
    <News/>
    <ServiceIndustry ref="screen_2" :screenState="screenState_2"/>
    <ServiceDescription/>
    <Partner/>
    <Myfoot/>

    <div class="gototop" @click="goTop" v-show="goTopState"></div>
  </div>
</template>

<script>
  import Myfoot from '~/components/Myfoot.vue'
  import CompanyProfile from '~/components/index/CompanyProfile.vue'
  import News from '~/components/index/News.vue'
  import ServiceIndustry from '~/components/index/ServiceIndustry.vue'
  import ServiceDescription from '~/components/index/ServiceDescription.vue'
  import Partner from '~/components/index/Partner.vue'
  import Banner from '~/components/index/Banner.vue'
  import throttle from '~/utils/throttle'

  export default {
    components: {
      Myfoot,
      CompanyProfile,
      News,
      ServiceIndustry,
      ServiceDescription,
      Partner,
      Banner,
    },
    data () {
      return {
        goTopState: false,
        screenState_1: false,
        screenState_2: false,
        screenWidth: 0,
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
      // 滚动函数节流
      this.throttleScrollHandler = throttle.call(this, this.scrollHandler, 50)
    },
    mounted() {
      // 绑定scroll监听函数
      window.addEventListener('scroll', this.throttleScrollHandler)

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
      // 解除scroll监听函数
      window.removeEventListener('scroll', this.throttleScrollHandler)
    },
    methods: {
      goTop(){ //回到顶部
        window.scrollTo(0,0)
      },
      scrollHandler() {
        if(this.isMobile) return
        const clientHeight = document.documentElement.clientHeight || document.body.clientHeight
        const scrollY =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop
        const refs = this.$refs

        for (let i = 1; i < 3; i++) {
          const key = `screen_${i}`
          const top = refs[key].getOffsetTop() - scrollY - 300
          // 设置header样式
          if (top <= 0 && top > -clientHeight) {
            this['screenState_' + i] = true
          }
        }

        //回到首屏按钮
        if(scrollY > clientHeight){
          this.goTopState = true
        }else{
          this.goTopState = false
        }
      },
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

.container
  min-width: 1200px
  width: 100%
  background: #FBFBFC
  position: relative
  .gototop
    width: 60px
    height: 60px
    background: url(../assets/index/arrow-up.png) top center no-repeat
    background-size: 100% 100%
    position: fixed
    right: 100px
    bottom: 100px
    cursor: pointer;

@media (max-width: 992px) 
  .container
    min-width: 0
    width: 100%
    .gototop
      display: none
</style>
