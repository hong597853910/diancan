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
.orderDetail
    border-bottom solid 1px #eee
    .back
        width 100px
        color #444
        font-weight: 500
        top 12px
        left 6px
        font-size 16px
        padding 10px
        float left
    .registerBtn
        position absolute
        color #999
        padding 10px
        right 20px
.nav
    margin-top 30px
    width 90%
    position absolute
    padding 10px 5%
    .nav-input
        padding 5px
    .nav-button
        padding 5px
    &.navChange-enter-active,&.navChange-leave-active{
        transition all 1s ease
    }
    &.navChange-enter{
        transform translate3d(100%,0,0)
        opacity 0
    }
    &.navChange-leave-to{
        transform translate3d(-100%,0,0)
        opacity 0
    }
</style>

<template lang="html">
  <transition name="move">
    <div class="detailWrapper" ref="detailWrapper" v-show="showInfoDetail">
      <div class="orderDetail">
        <div class="back" @click="loginShowToggle()">
            <i class="icon iconfont icon-xiangzuojiantou"></i>
            密码登录
        </div>
        <div class="registerBtn" @click="showRegister()">
            {{loginFlag}}
        </div>
      </div>
      <transition name="navChange">
        <div class="nav" v-if="loginToggle">
            <div class="nav-input">
                <el-input v-model="input" placeholder="账号"></el-input>
            </div> 
            <div class="nav-input">
                <el-input v-model="input" placeholder="密码"></el-input> 
            </div>   
            <div class="nav-button">
                <el-button class="change-value" style="width:100%"  type="primary" @onclick="login()">登录</el-button>
            </div>
        </div>
      </transition>
      <transition name="navChange" mode="out-in">
        <div class="nav" v-if="!loginToggle">
            <div class="nav-input">
                <el-input v-model="input" placeholder="账号"></el-input>
            </div> 
            <div class="nav-input">
                <el-radio v-model="radio" label="1" border size="medium">男</el-radio>
                <el-radio v-model="radio" label="2" border size="medium">女</el-radio>
            </div> 
            <div class="nav-input">
                <el-input v-model="input" placeholder="密码"></el-input> 
            </div>
            <div class="nav-input">
                <el-input v-model="input" placeholder="密码"></el-input> 
            </div>
            <div class="nav-input">
                <el-input v-model="input" placeholder="手机号码"></el-input> 
            </div> 
            <div class="nav-input">
                <el-input v-model="input" placeholder="邮箱"></el-input> 
            </div>    
            <div class="nav-button">
                <el-button class="change-value" style="width:100%"  type="primary" @onclick="login()">注册</el-button>
            </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  props: {
  },
  data() {
    return {
      input:'',
      loginToggle:true,
      loginFlag:'注册',
      showInfoDetail: false,
    }
  },
  methods: {
    loginShowToggle() {
      this.showInfoDetail = !this.showInfoDetail
    },
    showRegister(){
        this.loginToggle=!this.loginToggle;
        if(this.loginToggle){
            this.loginFlag='注册';
        }
        else{
            this.loginFlag='登录';
        }
    }
   },
    components: {
    },
}

</script>


