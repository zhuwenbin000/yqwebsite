<template>
  <div>
    <div class="banner-wrap">
      <div class="banner"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

@media (min-width: 993px) 
  .banner-wrap
    position: relative
    width: 100%
    height: 1000px
    overflow: hidden
    .banner
      position: absolute
      width: 1980px
      left: 50%
      margin-left: -990px
      height: 100%
      background: url('../../assets/design/banner.png') top center no-repeat
      background-size: auto 100%

@media (max-width: 992px) 
  .banner-wrap
    height: 5rem
    .banner
      width: 100%
      height: 100%
      background: url('../../assets/design/banner.png') top center no-repeat
      background-size: auto 100%

</style>
