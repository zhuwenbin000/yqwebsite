<template>
  <div class="myFoot">
    <div class="footWrapper">
      <div class="footContent">
        <div class="contactCoo">
          <p class="contact">CONTANT US</p>
          <p class="mail">LINKDOOR@163.COM</p>
        </div>
        <div class="qrCode">
            <img :src="qrcode">
        </div>
      </div>
      <div class="copyright">
          @2019 Linkdoor Design Company. All right reserved. 
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        qrcode: require('../assets/design/qrcode.png'),
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

@media (min-width: 993px)
  .myFoot
    position: relative
    width: 100%
    height: auto
    overflow: hidden
    background: #f1f1f1
    min-width: 1200px
    padding 105px 0 45px
    .footWrapper
      width: 1200px
      margin: 0 auto
      .footContent
        position: relative
        width: 430px
        height 85px
        margin 0 auto 80px
        overflow: hidden
        .contactCoo
          width 100%
          height 100%
          .contact
            font-size 18px
            line-height 32px
            padding 10px 0
            color #999999
            font-family TimesNewRomanPSBoldMT
          .mail
            font-size 18px
            line-height 32px
            color #333333
            font-family TimesNewRomanPSBoldMT
        .qrCode
          width 85px
          height 85px
          position absolute
          right 0
          top 0
          img
            display: block
            width: 100%
            height 100%
      .copyright
        width: 100%
        line-height: 45px
        font-size: 14px
        color: #999
        text-align:center
        font-family TimesNewRomanPSBoldMT

@media (max-width: 992px)
  .myFoot
    position: relative
    width: 100%
    height: auto
    overflow: hidden
    background: #f1f1f1
    padding 0.65rem 0.5rem
    .footWrapper
      .footContent
        .contactCoo
          text-align center
          .contact
            font-size 0.24rem
            line-height 0.42rem
            padding-bottom 0.6rem
            color #999999
            font-family TimesNewRomanPSBoldMT
          .mail
            font-size 0.24rem
            line-height 0.42rem
            padding-bottom 0.5rem
            color #333333
            font-family TimesNewRomanPSBoldMT
        .qrCode
          width 1.3rem
          height 1.3rem
          margin 0 auto 1.2rem
          img
            display: block
            width: 100%
            height 100%
      .copyright
        width: 100%
        font-size: 0.18rem
        color: #999
        text-align:center
        font-family TimesNewRomanPSBoldMT
</style>
