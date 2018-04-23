<style lang="stylus" scoped>
.detailWrapper
  width 100%
  background #fff
  transition all 0.4s ease
  &.move-enter-active,&.move-leave-active{
    transform translate3d(0,0,0)
  }
  &.move-enter{
    transform translate3d(-100%,0,0)
  }
  &.move-leave-active{
    transform translate3d(100%,0,0)
  }
.orderDetail
  .back
    color #444
    font-weight: 600
    font-size 17px
    padding 10px
    .order-status
      color red
      font-weight: 500
      margin-left 20px
  .thanks
    font-weight: 550
    font-size 16px 
    background #fff
    margin 3px 20px
    padding 10px
  .order-body
    font-size 16px 
    background #fff
    margin 0px 20px
    padding 5 10px
    .order-num
      text-align right
      font-weight 530
      font-size 14px
      padding-bottom 8px 
    .food-nav
      height 50px
      padding 2px
      margin 10px 0
      padding-bottom 10px 
      border-bottom solid 1px #eee
      .food-img
        width 50px
        height 50px
        float left
        img 
          width 100%
          height 100%
      .food-name
        float left
        height 50px
        width 30%
        font-size 14px
        line-height 20px
        margin-left 10px
        .food-status
          font-size 13px
          margin-top 10px
          color red
      .food-consume
        line-height 50px
        font-size 14px
        .food-count
          color #444
          float left
        .food-btn
          position absolute
          right 40px
          color #999
          .order-operation
            padding 8px 10px
</style>
<template lang="html">
  <transition name="move">
    <div class="detailWrapper" ref="detailWrapper" v-show="showDetail">
      <div class="orderDetail">
        <div class="back" @click="showCookDetail()">
          <i class="icon iconfont icon-xiangzuojiantou"></i>
          四号桌   
          <span class="order-status">未完成</span>
        </div>
        <div class="order-body">
          <div class="food-body">
            <div class="food-nav">
              <div class="food-img">
                <img src="/static/img/food/food2.jpg"/>
              </div>
              <div class="food-name">
                红烧肉
                <div class="food-status">
                  未完成
                </div>
              </div>
              <div class="food-consume">
                <div class="food-count">
                  x2
                </div>
                <div class="food-btn">
                  <el-button class="order-operation" type="info">退单</el-button>
                  <el-button class="order-operation" type="warning">接单</el-button>
                </div>
              </div>
            </div>
            <div class="food-nav">
              <div class="food-img">
                <img src="/static/img/food/food2.jpg"/>
              </div>
              <div class="food-name">
                红烧肉
                <div class="food-status">
                  未完成
                </div>
              </div>
              <div class="food-consume">
                <div class="food-count">
                  x2
                </div>
                <div class="food-btn">
                  <el-button class="order-operation" type="info">退单</el-button>
                  <el-button class="order-operation" type="warning">接单</el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="order-num">
            <el-button type="success">完成</el-button>
          </div>
          <div class="order-num">
            订单号：1010239dfssdfi299
          </div>
          <div class="order-num" style='border-bottom:solid 2px #eee'>
            下单时间：2018年7月20日
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  components: {
  },
  props: {
    order: Object
  },
  data() {
    return {
      showDetail: true
    }
  },
  methods: {
    showCookDetail() {
      this.$router.go(-1);
    },
  }
}

</script>


