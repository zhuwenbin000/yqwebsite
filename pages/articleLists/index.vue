<template>
  <div class="articleListsWrapper">
    <Myhead/>
    <div class="hotNew">
        热点新闻
    </div>
    <div class="articleListsCon">
        <div class="articleItem" v-bind:key="'articleList' + key" v-for="(item,key) in articleLists">
            <nuxt-link :to="'/articleDetail/' + item.id">
                <div class="itemLeft">
                    <img :src="item.coverPhotoUrl" alt="">
                </div>
                <div class="itemRight">
                    <div class="title">{{item.title}}</div>
                    <div class="time">{{item.source}} | {{item.publishTime}}</div>
                    <div class="summary">{{item.summary}}</div>
                </div>
            </nuxt-link>
        </div>
        <div class="page" unselectable="on" style="-moz-user-select:none;" onselectstart="return false;" v-show="show"> 
            <div class="pagelist"> 
                <span class="jump" v-show="current_page > 1" @click="jumpPrevPage()">上一页</span> 
                <span v-show="current_page > 5" class="jump" @click="jumpPage(1)">1</span> 
                <span class="ellipsis"  v-show="efont">...</span> 
                <span class="jump jumpNum" v-bind:key="'articleList' + key" v-for="(num,key) in indexs" :class="{bgprimary:current_page == num}" @click="jumpPage(num)">{{num}}</span> 
                <span class="ellipsis"  v-show="efont && current_page < pages - 4">...</span> 
                <span class="jump" v-show="current_page < pages" @click="jumpNextPage()">下一页</span> 
                <span v-show="current_page > pages" class="jump" @click="jumpPage(pages)">{{pages}}</span> 
            </div>
        </div> 
        <div class="more" v-show="moreState"><span @click="clickMore">点击加载更多</span></div>
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
    data(){
      return {
        current_page: 1, //当前页 
        pages: 1, //总页数 
        changePage:'',//跳转页 
        nowIndex:0,
        articleLists:[],
        moreState: true
      }
    },
   computed:{ 
      show:function(){ 
          return this.pages && this.pages !=1 
      }, 
      efont: function() { 
        if (this.pages <= 7) return false; 
        return this.current_page > 5 
      }, 
      indexs: function() {
  
        var left = 1, 
          right = this.pages, 
          ar = []; 
        if (this.pages >= 7) {
          if (this.current_page > 5 && this.current_page < this.pages - 4) { 
            left = Number(this.current_page) - 3; 
            right = Number(this.current_page) + 3; 
          } else { 
            if (this.current_page <= 5) { 
             left = 1; 
              right = 7; 
            } else { 
             right = this.pages; 
  
              left = this.pages - 6; 
            } 
          } 
        } 
        while (left <= right) {
          ar.push(left); 
          left++; 
        } 
        return ar; 
      }, 
    }, 
    methods: {
      jumpPage: function(id) {
        this.current_page = id || '1'; 
        const pagination = {
          pageSize: 5,
          pageIndex: this.current_page,
        }
        window.scrollTo(0,0)
        const articleData = MockData().getArticleData
        this.articleLists = articleData.slice((pagination.pageIndex - 1) * pagination.pageSize,(pagination.pageIndex - 1) * pagination.pageSize + pagination.pageSize)
        this.pages = Math.ceil(articleData.length/pagination.pageSize)
      }, 
      jumpPrevPage: function() {
        this.current_page--
        this.jumpPage(this.current_page)
      },
      jumpNextPage: function() {
        this.current_page++
        this.jumpPage(this.current_page)
      },
      clickMore: function() {
        this.current_page++
        const articleData = MockData().getArticleData
        this.articleLists = articleData.slice( 0, this.current_page * 5)
        if(this.current_page * 5 >= articleData.length){
            this.moreState = false
        }
      },
    }, 
    mounted() {
        this.jumpPage()
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@media (min-width: 993px) 
  .articleListsWrapper
    min-width 1200px
    width 100%
    padding-top 200px
    background #F6F6F6
    .hotNew
        display: none
    .more
        display: none
    .articleListsCon
      width 1200px
      margin 0 auto
      min-height 580px
      .articleItem
        width 100%
        height: 388px
        background-color #fff
        margin-bottom 30px
        overflow hidden
        .itemLeft
          float left
          width 500px
          height 388px
          img
            display block
            width 100%
            height: 100%
        .itemRight
          padding 0 35px
          width 630px
          height 388px
          float left
          .time
            color #999
            font-size 17px
            padding-top 10px
            padding-bottom 21px
            line-height 23px
          .title
            color #222
            font-size 25px
            padding-top: 66px
            line-height 34px
            overflow:hidden; 
            text-overflow:ellipsis;
            display:-webkit-box; 
            -webkit-box-orient:vertical;
            -webkit-line-clamp:2; 
          .summary
            color #666
            font-size 19px
            line-height 28px
            overflow:hidden; 
            text-overflow:ellipsis;
            display:-webkit-box; 
            -webkit-box-orient:vertical;
            -webkit-line-clamp:3; 
        &:hover
          background-color #F1F1F1

@media (max-width: 992px) 
  .articleListsWrapper
    width 100%
    background-color: #FBFBFC
    .hotNew
        padding:.2rem 0
        width 6.7rem
        color: #222
        font-size: .36rem
        line-height: .54rem
        margin 0 auto
    .more
        margin .6rem auto 1rem
        color: #999
        font-size: .28rem
        line-height: .4rem
        text-align center
    .articleListsCon
      width 100%
      .page
        display none
      .articleItem
        width 6.7rem
        height 2.1rem
        background-color #fff
        margin 0 auto .2rem
        overflow hidden
        .itemLeft
          float left
          width 2.4rem
          height 2.1rem
          img
            display block
            width 1.99rem
            height: 1.5rem
            margin .3rem .2rem
        .itemRight
          padding .3rem 0
          width 4rem
          height 2.1rem
          float left
          .time
            color #999
            font-size .24rem
            line-height .34rem
            padding-top .36rem
          .title
            color #222
            font-size .28rem
            line-height .4rem
            overflow:hidden; 
            text-overflow:ellipsis;
            display:-webkit-box; 
            -webkit-box-orient:vertical;
            -webkit-line-clamp:2; 
          .summary
            display none

</style>

<style>
.page { 
  font-weight: 900; 
  height: 40px; 
  text-align: center; 
  color: #333; 
  margin: 60px auto 138px; 
} 
 
.pagelist { 
  font-size: 0; 
  height: 50px; 
  line-height: 50px; 
} 
 
.pagelist span { 
  font-size: 14px; 
  cursor: pointer; 
} 
 
.pagelist .jump { 
  padding: 15px 20px;
  cursor: pointer; 
  margin-left: 15px; 
  background: #fff;
  border-radius:4px;
  border:1px solid rgba(153,153,153,1);
} 
.pagelist .jumpNum:hover {
  background: #222;
  color: #fff

}
.pagelist .bgprimary { 
  cursor: default; 
  color: #fff; 
  background: #222; 
} 
 
.jumpinp input { 
  width: 55px; 
  height: 26px; 
  font-size: 13px; 
  border: 1px solid #ccc; 
  -webkit-border-radius: 4px; 
  -moz-border-radius: 4px; 
  border-radius: 4px; 
  text-align: center; 
} 
 
.ellipsis { 
  padding: 0px 8px; 
} 
 
.jumppoint { 
  margin-left: 30px; 
} 
 
</style>
