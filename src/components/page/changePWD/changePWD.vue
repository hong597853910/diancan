<style lang="stylus" scoped>
.detailWrapper
  position fixed
  left 0
  top 0
  bottom 48px
  width 100%
  background #fff
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
    border-bottom solid 1px #eee

.password-nav
  padding 8px 20px
  
  .submit-button
    float right 
    margin 10px
</style>
<template lang="html">
  <transition name="move">
    <div class="detailWrapper" ref="detailWrapper" v-show="showDetail">
      <div class="detail">
        <div class="back" @click="showToggle()">
          <i class="icon iconfont icon-xiangzuojiantou"></i>
          修改密码
        </div>
      </div>
      <div>
        <div class="password-nav">
          旧密码：
          <el-input v-model="input" placeholder="旧密码" type="password" ></el-input>
        </div>
        <div class="password-nav">
          新密码：
          <el-input v-model="input" placeholder="新密码" type="password" ></el-input>
        </div>
        <div class="password-nav">
          确认密码：
          <el-input v-model="input" placeholder="确认密码" type="password" ></el-input>
        </div>
        <div class="password-nav">
          <el-button class="submit-button"  type="primary" @onclick="submitChangePWD()">确定</el-button>
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
      showDetail: false,
      input:''
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
    submitChangePWD(){

    },
  }
}

</script>


