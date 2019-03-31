<template>
  <div class="myHeader">
    <div class="myHeader-main">
      <div class="logo"></div>
      <div class="menu" @click="goIndex">
        首页
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      goIndex() {
        this.$router.push("/")
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
    position: fixed
    left: 0
    top: 0
    width: 100%
    height: 137px
    background: #fff
    border-bottom: 1px solid #d0d0d0
    .myHeader-main
      width: 1200px
      margin: 0 auto
      .logo
        float: left
        display: block
        width: 186px
        height: 55px
        background: url('~assets/head/logo.png') top center no-repeat
        background-size: 100% 100%
        margin: 41px
      .menu
        float: right
        height: 37px
        padding: 0 20px
        font-size: 25px
        color: #222
        line-height: 37px
        margin-top: 50px
        cursor: pointer

@media (max-width: 992px) 
  .myHeader
    display: none

</style>
