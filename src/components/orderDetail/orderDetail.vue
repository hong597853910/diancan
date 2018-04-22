<style lang="stylus" scoped>
.detailWrapper
  position fixed
  left 0
  top 0
  bottom 48px
  width 100%
  background #efefef
  transition all 0.4s ease
  &.move-enter-active,&.move-leave-active{
    transform translate3d(0,0,0)
  }
  &.move-enter,&.move-leave-active{
    transform translate3d(100%,0,0)
  }
.orderDetail
  .back
    color #444
    font-weight: 700
    top 12px
    left 6px
    font-size 20px
    padding 10px
  .thanks
    font-weight: 550
    font-size 16px 
    background #fff
    margin 3px 20px
    padding 10px
  .order-body
    font-size 16px 
    background #fff
    margin 8px 20px
    padding 10px
    .order-num
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
        width 50%
        font-size 15px
        line-height 20px
        margin-left 10px
      .food-consume
        line-height 50px
        font-size 14px
        .food-count
          color #444
          float left
        .food-price
          position absolute
          right 40px
          color #999
    .order-info
      font-weight 530
      font-size 14px
      padding-bottom 8px
      .order-sum
        text-align: right;
        padding-right: 10px;
        .order-price
          font-size 15px
      .order-time
        padding-right: 10px;
        
</style>
<template lang="html">
  <transition name="move">
    <div class="detailWrapper" ref="detailWrapper" v-show="showDetail">
      <div class="orderDetail">
        <div class="back" @click="showToggle()">
          <i class="icon iconfont icon-xiangzuojiantou"></i>
          订单已完成
        </div>
        <div class="thanks">
          感谢您的光顾，期待您的再次光临
        </div>
        <div class="order-body">
          <div class="order-num">
            订单号：1010239dfssdfi299
          </div>
          <div class="order-num" style='border-bottom:solid 2px #eee'>
            下单时间：2018年7月20日
          </div>
          <div class="food-body">
            <div class="food-nav">
              <div class="food-img">
                <img src="/static/img/food/food2.jpg"/>
              </div>
              <div class="food-name">
                红烧肉
              </div>
              <div class="food-consume">
                <div class="food-count">
                  x2
                </div>
                <div class="food-price">
                  ￥48
                </div>
              </div>
            </div>
            <div class="food-nav">
              <div class="food-img">
                <img src="/static/img/food/food2.jpg"/>
              </div>
              <div class="food-name">
                红烧肉
              </div>
              <div class="food-consume">
                <div class="food-count">
                  x2
                </div>
                <div class="food-price">
                  ￥48
                </div>
              </div>
            </div>
          </div>
          
          <div class="order-info">
            <div class="order-sum">
              实付
              <span class="order-price">￥60</span>
            </div>
            <div class="order-time">
              付款时间：2018年7月20日
            </div>
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
      showDetail: false
    }
  },
  methods: {
    showToggle() {
      this.showDetail = !this.showDetail
      if (this.showDetail) {
        this.$nextTick(() => {
          this._initScroll()
        })
      }
    },
    // 滚轮初始化
    _initScroll() {
      if (!this.detailWrapper) {
        this.detailWrapper = new BScroll(this.$refs.detailWrapper, {
          click: true
        });
      } else {
        this.detailWrapper.refresh()
      }
    },
  }
}

</script>


