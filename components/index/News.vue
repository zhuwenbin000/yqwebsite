<template>
  <div class="news-content">
    <div class="title">
      新闻动态
      <div class="b-bar"></div>
    </div>
    <div class="desc-wrap" v-show="!this.$parent.isMobile">
      <div class="desc">
        掌握最新资讯
      </div>
      <div class="more" @click="moreNews">
        查看更多
      </div>
    </div>
    <div class="news-wrap" v-show="!this.$parent.isMobile">
      <div class="news" v-for="item in newsList" @click="goNewsDetail(item.id)">
        <img :src='item.img'>
        <p>{{item.desc}}</p>
        <div class="mask"></div>
      </div>
    </div>
    <div class="news-wrap" v-show="this.$parent.isMobile">
      <div class="news" v-for="item in newsList" @click="goNewsDetail(item.id)" v-show="item.id == activeId">
        <img :src='item.img'>
        <p>{{item.desc}}</p>
        <div class="mask"></div>
      </div>
    </div>
    <div class="slide-nav-wrap" v-show="this.$parent.isMobile">
      <div class="slide-nav">
        <span v-for="(item, index) in newsList" :class="activeId == index + 1 ? 'slide-nav-active' : '' "></span>
      </div>
      <div class="more"><span @click="moreNews">查看更多</span></div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        newsList:[
          {
            img:require('../../assets/news/1.png'),
            desc:"定了，总理明确4月1日就要减增值税，5月1日降社保费率！",
            id: 1
          },
          {
            img:require('../../assets/news/2.png'),
            desc:"国务院宣布！增值税起征点提至10万！小规模季度收入小于30万免交增值税！",
            id: 2
          },
          {
            img:require('../../assets/news/3.png'),
            desc:"中僖创智入驻典礼圆满成功，致力于用科技打破继承性不公！",
            id: 3
          }
        ],
        activeId: 1,
        slideTime: 0
      }
    },
    methods: {
      moreNews() {
        this.$router.push("/articleLists")
      },
      goNewsDetail(id) {
        this.$router.push("/articleDetail/" + id)
      },
      slideInit() {
        setInterval(()=>{
          this.slideTime++
          this.activeId = this.slideTime % 3 + 1
        },3000)
      },
    }, 
    mounted() {
      this.slideInit()
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

@media (min-width: 993px) 
  .news-content
    width: 1200px
    margin: 0 auto 180px
    height: auto
    overflow: hidden
    .title
      height: auto
      overflow: hidden
      font-size: 30px
      color: #1f1f1f
      line-height: 80px
      text-align: left
      position: relative
      .b-bar
        display:none
    .desc-wrap
      width: 100%
      line-height: 70px
      display: flex
      color: #222
      margin-bottom: 40px
      .desc
        width: 100%
        font-size: 24px
      .more
        width: 80px
        font-size: 16px
        color: #999
        cursor: pointer
        &:hover
          color: #C92E27
    .news-wrap
      width: 100%
      .news
        width: 390px
        height: 460px
        background-color: #fff
        float: left
        position:relative
        cursor: pointer;
        &:hover
          p
            color: #C92E27
          .mask
            display: block
        &:nth-child(2n)
          margin: 0 10px
        img
          display:block
          width:100%
        p
          padding: 30px 30px 0
          line-height: 28px
          color: #222
          font-size: 20px
        .mask
          display:none
          width: 100%
          height: 100%
          background-color: #C92E27
          opacity: 0.1
          position: absolute
          top: 0
          left: 0


@media (max-width: 992px) 
  .news-content
    width: 100%
    margin: 0 auto
    height: auto
    overflow: unset
    padding-top: .3rem
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
    .news-wrap
      width: 100%
      height: 8.46rem
      overflow: hidden
      position:relative
      .news
        width: 6.7rem
        height: 7.76rem
        margin: 0 auto .7rem
        background-color: #fff
        position:relative
        -moz-box-shadow: 0px 5px 20px #f5f5f5; /* 老的 Firefox */
        box-shadow: 0px 5px 20px #f5f5f5;
        img
          display:block
          width:100%
          height: 5.04rem
        p
          padding: .64rem .4rem 0
          line-height: .5rem
          color: #222
          font-size: .36rem
        .mask
          display:none
    .slide-nav-wrap
      width: 100%
      .slide-nav
        height: 0.04rem
        display: flex;
        display: -webkit-flex;
        align-items:center;
        justify-content:center;
        span
          width: .2rem
          height: 0.04rem
          background-color: #D8D8D8
          &:nth-child(2)
            margin: 0 .2rem
        .slide-nav-active
          background-color: #C92E27
      .more
        margin-top: .6rem
        font-size: .28rem
        line-height: .4rem
        color: #666
        text-align: center


</style>
