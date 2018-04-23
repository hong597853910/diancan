<style lang="stylus" scoped>
.ordersWrapper
  bottom 48px
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
.order-manu
    padding 5px 13%
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
                font-size 14px
                padding 2px 20px
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
    <div class="ordersWrapper">
      <div class="order-manu" >
        <el-menu :default-active="cookedSelect" class="el-menu-demo" mode="horizontal" @select="cookSelect()">
            <el-menu-item index="1">未完成点单</el-menu-item>
            <el-menu-item index="2">已完成点单</el-menu-item>
        </el-menu> 
      </div>
      <transition name="navChange">
        <div class="nav">
            <div class="order-info">
                <div class="order-header">
                    <div class="order-name">
                        四号桌
                    </div>
                    <span class="order-status">
                        未接单
                    </span>
                </div>
                <div class="order-content">
                    <div class="food">
                        火锅肉
                        <span class="count">x2</span>
                        <span class="status">未完成</span>
                    </div>
                    <div class="food">
                        火锅肉2
                        <span class="count">x2</span>
                        <span class="status">未完成</span>
                    </div>
                </div>
                <div class="order-footer">
                    <el-button type="primary" style="float:left;" @click="goCoolDetail()">查看</el-button>
                    <div class="footer-btn">
                        <el-button type="warning">接单</el-button>
                        共 4 件
                    </div>
                </div>
            </div>
            <div class="order-info">
                <div class="order-header">
                    <div class="order-name">
                        三号桌
                    </div>
                    <span class="order-status">
                        已接单
                    </span>
                </div>
                <div class="order-content">
                    <div class="food">
                        火锅肉
                        <span class="count">x2</span>
                        <span class="status">未完成</span>
                    </div>
                    <div class="food">
                        火锅肉2
                        <span class="count">x2</span>
                        <span class="status">未完成</span>
                    </div>
                </div>
                <div class="order-footer">
                    <el-button type="primary" style="float:left;" @click="goCoolDetail()">查看</el-button>
                    <div class="footer-btn">
                        <el-button type="success">完成</el-button>
                        共 4 件
                    </div>
                </div>
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
      cookedSelect:'1',
      input:'',
      loginToggle:true,
      loginFlag:'注册',
      showInfoDetail: true,
      username:"Tomato"
    }
  },
  methods: {
    goCoolDetail(){
        console.log(3232);
        const self = this;
        self.$router.push('/cookDetail');
    },
    cookSelect(){

    }
   },
    components: {
    },
}

</script>


