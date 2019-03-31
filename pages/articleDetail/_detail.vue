<template>
    <div class="article-container">
		<Myhead/>
		<div class="article">
            <div class="articleHead">
                <div class="title">{{articleData.title}}</div>
                <div class="info">
                    <span class="author">{{articleData.source}}</span>|<span class="date">{{articleData.publishTime}}</span>
                </div>
                <div class="summary">{{articleData.summary}}</div>
            </div>
            <div class="coverPhotoUrl">
                <img :src="articleData.coverPhotoUrl" alt="">
            </div>
            <div class="articleMain" v-html="articleData.content"></div>
		</div>
		<Myfoot/>
    </div>
</template>

<script>
  import Myfoot from '~/components/Myfoot.vue'
  import Myhead from '~/components/Myhead.vue'
  import MockData from '~/utils/mockData'

  export default {
    components: {
      Myfoot, Myhead
    },
    data () {
      return {
        articleData: {}
      }
    },
    methods: {

    },
    created () {
        const id = this.$route.params.detail
        this.articleData = MockData().getArticleData[id - 1]
    },
    mounted () {

    }
  }
</script>

<style lang="stylus" >
@media (min-width: 993px) 
  .article-container
    min-width: 1200px
    width: 100%
    padding-top: 220px
    margin 0 auto
    .article
        width 1200px
        margin 0 auto
        .articleHead
            text-align center
            .title
                line-height 46px
                font-size 32px
                color #222
                padding-bottom 10px
            .info
                line-height 28px
                font-size 19px
                color #222
                span
                    display inline-block
                    vertical-align top
                    margin 0 10px
            .summary
                color #666
                font-size 25px
                line-height 34px
                padding 40px 0 50px
                text-align left
        .coverPhotoUrl
            width 794px
            height 597px
            margin 0 auto 46px
            img
                width 100%
                height 100%
                display block
        .articleMain
            margin-bottom 80px
            .title
                color #222
                font-size 31px
                line-height 43px
                padding-bottom 20px
            .desc
                color #666
                font-size 25px
                line-height 34px
                padding-bottom 40px
            .img-title
                text-align center
                color #666
                font-size 18px
                line-height 32px
                padding 10px 0 30px
            img
                display block
                width 70%
                margin 0 auto


@media (max-width: 992px) 
  .article-container
    width: 100%
    padding-top: .4rem
    .article
        width 6.7rem
        margin 0 auto
        .articleHead
            text-align center
            .title
                line-height .44rem
                font-size .32rem
                color #222
                font-weight bold
            .info
                line-height .54rem
                font-size .24rem
                color #999
                padding .1rem 0 .4rem
                span
                    display inline-block
                    vertical-align top
                    margin 0 .1rem
            .summary
                color #666
                font-size .3rem
                line-height .42rem
                text-align left
        .coverPhotoUrl
            width 5.12rem
            height 3.84rem
            margin .2rem auto .48rem
            img
                width 100%
                height 100%
                display block
        .articleMain
            margin-bottom .8rem
            .title
                color #222
                font-size .32rem
                line-height .44rem
                padding-bottom .2rem
            .desc
                color #666
                font-size .3rem
                line-height .42rem
                padding-bottom .4rem
            .img-title
                text-align center
                color #666
                font-size .18rem
                line-height .32rem
                padding .1rem 0 .4rem
            img
                display block
                width 70%
                margin 0 auto

</style>