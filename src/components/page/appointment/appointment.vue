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
.nav
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
        <div class="back" @click="aptmShowToggle()">
            <i class="icon iconfont icon-xiangzuojiantou"></i>
            预约
        </div>
      </div>
        <div class="nav">
            <div class="nav-input">
                <el-input v-model="input" placeholder="姓名"></el-input>
            </div>
            <div class="nav-input">
                <el-input v-model="input" placeholder="手机号码"></el-input> 
            </div> 
            <div class="nav-input">
                人数：
                <el-select v-model="deskOpt" placeholder="请选择">
                    <el-option
                    v-for="item in desks"
                    :key="item"
                    :label="item"
                    :value="item">
                    </el-option>
                </el-select>
            </div>
             <div class="nav-input">
                 预约时间：
                 <el-date-picker
                    v-model="value1"
                    type="datetime"
                    placeholder="选择日期时间">
                </el-date-picker>
            </div>
            <div class="nav-button">
                <el-button class="change-value" style="width:100%"  type="primary" @onclick="login()">预约</el-button>
            </div>
        </div>
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
            showInfoDetail:true,
            desks:['两人桌','四人桌','六人桌','八人桌'],
            deskOpt:'',
            input:'',
            radio:'1',
        }
    },
    methods: {
        aptmShowToggle() {
            this.$router.go(-1);
            // this.showInfoDetail = !this.showInfoDetail
        },
    },
    components: {
    },
}
</script>


