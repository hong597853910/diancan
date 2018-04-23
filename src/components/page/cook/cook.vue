<style lang="stylus" scoped>
.cookWrapper
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
.cookDetail
    border-bottom solid 1px #eee
    height 50px
    .back
        width 200px
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
.user-info
    padding 10px 20px
    color #333
    font-weight 550
    border-bottom solid 1px #eee
.order-manu
    padding 5px 15%
.nav
    width 90%
    padding 5px 5%
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
    .order-info
        background #fff
        padding 10px
        border #eeeeee 1px solid
        .order-header
            padding 5px 15px
            height 30px
            .order-name
                font-size 16px
                font-weight 600
                float left
            .order-status
                color red
                position absolute
                right 10%
        .order-content
            padding 5px 15px
            .food
                padding 3px 20px
            .count
                position absolute
                right 30%
            .status
                position absolute
                right 10%
                color red
        .order-footer
            height 30px
            padding 10px 10px 20px 10px
            .footer-btn
                position absolute
                right 10%
</style>

<template lang="html">
  <transition name="move">
    <div class="cookWrapper" ref="cookWrapper">
        <div class="cookDetail">
            <div class="back" @click="loginShowToggle()">
                Hi! {{username}},欢迎使用系统!!
            </div>
            <div class="registerBtn" @click="showRegister()">
                注销
            </div>
        </div>
        <router-view></router-view>    
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
            username:"Tomato"
        }
    },
    methods: {
        
    },
    components: {
    },
}

</script>


