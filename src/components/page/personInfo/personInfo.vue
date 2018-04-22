<style lang="stylus" scoped>
.personInfo
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
.detail
  .back
    color #444
    font-weight: 600
    top 12px
    left 6px
    font-size 15px
    padding 10px
    background #fff
.person-info-body
  margin-top 10px
  font-size 14px
  width 100%
  .person-info-nav
    width 100%
    line-height 30px
    background #ffffff
    border solid 1px #eeeeee
    padding 10px
    .person-info-nav-value
      right 10px
      position absolute
    
</style>
<template lang="html">
  <transition name="move">
    <div class="personInfo" ref="personInfo" v-show="showDetail">
      <div class="detail">
        <div class="back" @click="showToggle()">
          <i class="icon iconfont icon-xiangzuojiantou"></i>
          个人信息
        </div>
      </div>
      <div class="person-info-body">
        <div class="person-info-nav">
          头像：
          <span class="person-info-nav-value" @click="toChangeInfo(`头像`,1)">
            Tomato
            <i class="icon iconfont icon-xiangyoujiantou"></i>
          </span>
        </div>
        <div class="person-info-nav">
          昵称：
          <span class="person-info-nav-value" @click="toChangeInfo(`昵称`,2)">
            Tomato
            <i class="icon iconfont icon-xiangyoujiantou"></i>
          </span>
        </div>
        <div class="person-info-nav" >
          性别：
          <span class="person-info-nav-value" @click="toChangeInfo(`性别`,3)">
            男
            <i class="icon iconfont icon-xiangyoujiantou"></i>
          </span>
        </div>
        <div class="person-info-nav">
          手机：
          <span class="person-info-nav-value" @click="toChangeInfo(`手机`,2)">
            13437899311
            <i class="icon iconfont icon-xiangyoujiantou"></i>
          </span>
        </div>
        <div class="person-info-nav">
          邮箱：
          <span class="person-info-nav-value" @click="toChangeInfo(`邮箱`,2)">
            597853911@qq.com
            <i class="icon iconfont icon-xiangyoujiantou"></i>
          </span>
        </div>
      </div>
      <detailWrapper :headTitle='headTitle' :type='type' ref="changeInfo"></detailWrapper>
    </div>
  </transition>
</template>

<script>
import BScroll from 'better-scroll'
import detailWrapper from '../../detailWrapper/detailWrapper'


export default {
  components: {
    detailWrapper,
  },
  props: {
    order: Object,
  },
  data() {
    return {
      showDetail: false,
      headTitle:'',
      type:0,
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
    toChangeInfo(headTitle,type){
        this.type = type
        this.headTitle=headTitle
        this.$nextTick(() => {
        this.$refs.changeInfo.detailShowToggle()
      })
    },
    // 滚轮初始化
    _initScroll() {
      if (!this.personInfo) {
        this.personInfo = new BScroll(this.$refs.personInfo, {
          click: true
        });
      } else {
        this.personInfo.refresh()
      }
    },
    
  }
}

</script>


