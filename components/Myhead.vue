<template>
  <div class="myHeader">
    <div class="myHeader-main">
      <div class="logo"></div>
      <div class="fonts" @click="changeFont">
        简&nbsp;&nbsp;&nbsp;繁
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      changeFont() {
        console.log('changeFont')
      }
    },
    mounted(){
      
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

@media (min-width: 993px) 
  .myHeader
    min-width: 1200px
    z-index: 1998
    height: 180px
    background: #fff
    .myHeader-main
      width 1200px
      margin 0 auto
      position relative
      .logo
        display: block
        width: 250px
        height: 150px
        background: url('~assets/design/logo.png') top center no-repeat
        background-size: 100% 100%
        margin: 0 auto 
      .fonts
        width 100px
        height: 180px
        line-height 180px
        font-size: 28px
        font-family: SourceHanSerifCNBold
        color: #999
        text-align center
        position absolute
        right 0 
        top 0
        cursor pointer

@media (max-width: 992px) 
  .myHeader
    width 100%
    height 2.1rem
    background: #fff
    .myHeader-main
      width 100%
      position relative
      .logo
        display: block
        width: 3rem
        height: 1.5rem
        background: url('~assets/design/logo.png') top center no-repeat
        background-size: 100% 100%
        margin: 0 auto 
      .fonts
        width 1.2rem
        height 2.1rem
        line-height 2.1rem
        font-size 0.28rem
        font-family SourceHanSerifCNBold
        color: #999
        text-align center
        position absolute
        right 0 
        top 0

</style>
