<template>
  <div class="service-industry">
    <div class="title">
      合作伙伴
      <div class="b-bar"></div>
    </div>
    <div class="main">
      <p>如涵控股、环球捕手、贝店、达令家、云集、ABM、花间直播、冒泡、大通冰室、证优客、舒適堡、天夏智慧、青团社、弥茶、环球影视</p>
      <div class="img-wrap">
        <img :class="'img-' + index" :src="item.logo" v-for="(item, index) in logoList">
      </div>
      <img class="img-partner" :src="partner" >
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        partner: require("../../assets/mobile/partner.png"),
        logoList:[
          {
            logo:require("../../assets/partner/1@2x.png")
          },
          {
            logo:require("../../assets/partner/2@2x.png")
          },
          {
            logo:require("../../assets/partner/3@2x.png")
          },
          {
            logo:require("../../assets/partner/4@2x.png")
          },
          {
            logo:require("../../assets/partner/5@2x.png")
          },
          {
            logo:require("../../assets/partner/6@2x.png")
          },
          {
            logo:require("../../assets/partner/7@2x.png")
          },
          {
            logo:require("../../assets/partner/8@2x.png")
          },
          {
            logo:require("../../assets/partner/9@2x.png")
          },
          {
            logo:require("../../assets/partner/10@2x.png")
          },
          {
            logo:require("../../assets/partner/11@2x.png")
          },
          {
            logo:require("../../assets/partner/12@2x.png")
          },
          {
            logo:require("../../assets/partner/13@2x.png")
          },
          {
            logo:require("../../assets/partner/14@2x.png")
          },
          {
            logo:require("../../assets/partner/15@2x.png")
          }
        ]
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
      margin-bottom: 40px
      .b-bar
        width: 120px
        height: 4px
        background-color: #DB231B
        position: absolute
        bottom: 0
    .main
      width: 100%
      position: relative
      .img-partner
        display: none
      p
        font-size: 18px 
        line-height: 27px
        color: #222
        padding-bottom: 70px
      .img-wrap
        display: block
        width: 1190px
        height: 700px
        margin: 0 auto
        position: relative
        img
          display: block
          position: absolute
          &:hover{
            zoom:1;
            transform: scale(1.2);
          }
        .img-0
          width: 160px
          height: 160px
          top: 270px
          left: 500px
        .img-1
          width: 122px
          height: 122px
          top: 40px
          left: 330px
        .img-2
          width: 128px
          height: 128px
          top: 40px
          left: 740px
        .img-3
          width: 130px
          height: 130px
          top: 320px
          left: 1060px
        .img-4
          width: 124px
          height: 124px
          top: 140px
          left: 1040px
        .img-5
          width: 120px
          height: 120px
          top: 70px
          left: 70px
        .img-6
          width: 122px
          height: 122px
          top: 230px
          left: 240px
        .img-7
          width: 144px
          height: 144px
          top:  580px
          left: 820px
        .img-8
          width: 141px
          height: 141px
          top: 480px
          left: 260px
        .img-9
          width: 148px
          height: 148px
          top: 530px
          left: 1010px
        .img-10
          width: 140px
          height: 140px
          top: 320px
          left: 10px
        .img-11
          width: 137px
          height: 137px
          top: 390px
          left: 830px
        .img-12
          width: 128px
          height: 128px
          top: 560px
          left: 60px
        .img-13
          width: 137px
          height: 137px
          top: 540px
          left: 510px
        .img-14
          width: 120px
          height: 120px
          top: 200px
          left: 800px


@media (max-width: 992px)
  .service-industry
    width: 100%
    overflow: hidden
    padding-top: .8rem
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
      position: relative
      p
        font-size: .28rem 
        line-height: .54rem
        color: #222
        padding: .4rem
      .img-wrap
        display: none
      .img-partner
        display:block
        width: 100%
</style>
