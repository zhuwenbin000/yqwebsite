<template>
  <div class="myFoot">
    <div class="footWrapper">
      <div class="footContent">
        <div class="contactCoo">
          <div class="ctitle">
            联系我们
          </div>
          <div class="cLine">
            客服电话：0571-85058088
          </div>
          <div class="cLine">
            工作时间：9:30-18:00
          </div>
          <div class="cLine">
            地址：杭州市文一西路588号西溪首座A1-3-631
          </div>
        </div>
        <div class="contactCoo">
          <div class="ctitle">
            商务合作
          </div>
          <div class="cLine">
            商务合作：bd@zhongxicz.com
          </div>
          <div class="cLine">
            人事招聘：hr@zhongxicz.com
          </div>
        </div>
        <div class="qrCode">
          <div class="qrWrapper">
            <img :src="weixin">
          </div>
          <p class="qrDes">扫描二维码 <br>关注中僖创智公众号</p>
        </div>
      </div>
      <div class="copyright">
          Copyright @2019 杭州中僖创智企业管理咨询有限公司<span> </span>浙ICP备19008332号
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        weixin: require('../assets/foot/weixin.png'),
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
    background: #F4F4F5
    min-width: 1200px
    .footWrapper
      width: 1160px
      margin: 0 auto
      .footContent
        position: relative
        width: 100%
        height: auto
        overflow: hidden
        .contactCoo
          float: left
          font-size: 14px
          color: #222
          padding-top: 50px
          padding-bottom: 48px
          margin-right: 130px
          .ctitle
            position: relative
            line-height: 36px
            font-weight: bold
          .cLine
            line-height: 28px
            white-space: nowrap
        .qrCode
          float: right
          padding-top: 50px
          .qrWrapper
            cursor: pointer
            width: 128px
            height: auto
            overflow: hidden
            text-align: center
            img
              display: block
              width: 88px
              margin: 0 auto
              height: auto
          .qrDes
            line-height: 20px
            text-align: center
            font-size: 14px
            color: #666
            padding-top: 10px
      .copyright
        width: 100%
        text-align: left
        line-height: 45px
        font-size: 14px
        color: #999
        padding-bottom: 10px
        text-align:center
        a
          &:hover
            text-decoration: underline
        .publicSec
          display: inline-block
          vertical-align: top
          margin-left: 12px
          .publicSecIcon
            display: inline-block
            vertical-align: top
            width: 20px
            height: 45px
            background-repeat: no-repeat
            background-position: center 12px
            background-size: 20px 20px
          .publicSecText
            display: inline-block
            vertical-align: top
            margin-left:2px
      .zzIcon
        display:inline-block;
        padding-bottom: 50px;
        padding-right: 35px;
        img 
          width:114px;

@media (max-width: 992px)
  .myFoot
    width: 100%
    padding-top: .8rem
    background-color: #F4F4F5
    .ctitle
      display: none
    .cLine
      width: 100%
      padding-bottom: .2rem
      font-size: .24rem
      line-height: .34rem
      text-align: center
    .qrCode
      padding-top: 40px
      .qrWrapper
        width: 1.2rem
        height: 1.2rem
        margin: 0 auto
        img
          width: 100%
          height: 100%
          display: block
      .qrDes
        color: #666
        font-size: .24rem
        line-height: .34rem
        padding-top: .2rem
        text-align: center
    .copyright
      padding: .8rem 0 1rem
      color: #999
      font-size: .24rem
      line-height: .34rem
      text-align: center
      span
        display:block
</style>
