<template>
  <div class="service-desc">
    <div class="title">依法诚信纳税是中国公民义务</div>
    <div class="summary">中僖创智面向共享经济业态企业和自由职业者提供共享经济综合服务。</div>
    <div class="desc1">
      <span>&bull;</span>中僖创智对下述人员不予提供共享经济综合服务，包括：<br>
      <i>&nbsp;&nbsp;&nbsp;&nbsp;</i>军人、公职人员等国家法律法规和纪律规定禁止从事兼职或经商的人员；<br> 
      <i>&nbsp;&nbsp;&nbsp;&nbsp;</i>和客户公司主体具备劳动/劳务合同关系、或其他类似劳动人事法律关系并取得工资薪金所得的人员；<br> 
      <i>&nbsp;&nbsp;&nbsp;&nbsp;</i>客户公司法定代表人、股东、董事、监事等其他从所属公司取得收入的人员。<br>
    </div>
    <div class="desc2">
      <span>&bull;</span>一经发现涉嫌违法违规的行为，中僖创智会在12小时内上报相关国家机关，并保留追究责任主体相关法律责任的权利。
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
  .service-desc
    width: 1200px
    margin: 0 auto 180px
    height: 737px
    overflow: hidden
    background: url(../../assets/index/bg2.png) top center no-repeat
    background-size: 100% 100%
    .title
      font-size: 32px
      line-height: 45px
      color: #222
      padding-left: 40px
      padding-top: 194px
      font-wight: bold
    .summary
      font-size: 18px
      line-height: 27px
      color: #222
      padding-left: 40px
      padding-top: 20px
      padding-bottom: 73px
    .desc1
      font-size: 18px
      line-height: 27px
      color: #222
      padding-left: 60px
      padding-bottom: 39px
      position:relative
    .desc2
      font-size: 18px
      line-height: 27px
      color: #222
      padding-left: 60px
      position:relative
    span
      font-size: 50px
      line-height: 27px
      position: absolute
      top: -5px
      left: 35px

@media (max-width: 992px)
  .service-desc
    width: 100%
    height: 10.46rem
    overflow: hidden
    background: url(../../assets/mobile/bg2.png) top center no-repeat
    background-size: 100% 100%
    .title
      font-size: .4rem
      line-height: .56rem
      color: #222
      padding: .6rem .4rem .5rem
    .summary
      font-size: .32rem
      line-height: .54rem
      color: #222
      padding: 0 .4rem .22rem
    .desc1
      font-size: .22rem
      line-height: .54rem
      color: #222
      padding-left: .6rem
      padding-right: .4rem
      padding-bottom: .4rem
      position:relative
    .desc2
      font-size: .22rem
      line-height: .54rem
      color: #222
      padding-left: .6rem
      padding-right: .4rem
      position:relative
    span
      font-size: .5rem
      line-height: .27rem
      position: absolute
      top: .08rem
      left: .35rem
    i
      display: none
</style>
