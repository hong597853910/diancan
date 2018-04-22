<style lang="stylus" scoped>
    .personalCenter
        color #444
        ul
            margin 0
            padding 0
            a
               color #444 
               text-decoration none 
        li
            margin 0
            padding 0
        .to-right
            position absolute
            right 30px
        .person-body
            .person-header
                background url("/static/img/personBackground.jpg")
                background-size 100% 100%
                height 100px
                .person-img
                    border-radius 50%
                    margin 20px 20px 20px 40px
                    width 60px
                    float left
                    overflow hidden
                    img 
                        width 100%
                .person-name
                    width 50
                    position absolute
                    margin 30px 20px 20px 20px
            .person-tab
                width 100%
                .person-tab-nav
                    line-height 30px
                    margin 3px
                    padding 10px 30px
                    border-bottom solid 1px #eee
</style>

<template>
<div class="personalCenter">
    <DheaderVue :title='title'></DheaderVue>
    <div class="person-body">
        <div class="person-header">
            <div class="person-img">
                <img src="/static/img/user.jpg"/>
            </div>
            <span class="person-name" @click="toLogin()">
                立即登录
            </span>
            <!-- <span class="person-name">
                Tomato
            </span> -->
        </div>
        <div class="person-tab">
            <ul>
                <li class="person-tab-nav" @click="toPersonInfo()">
                    <i class="icon iconfont icon-wodejuhuasuan"></i>
                    &nbsp个人信息
                    <i class="icon iconfont icon-xiangyoujiantou to-right"></i>
                </li>
                <router-link to="/orders">
                    <li class="person-tab-nav">
                        <i class="icon iconfont icon-wodedingdan-copy"></i>
                        &nbsp我的点单
                        <i class="icon iconfont icon-xiangyoujiantou to-right"></i>
                    </li>
                </router-link>
                <li class="person-tab-nav" @click="toChangePWD()">
                    <i class="icon iconfont icon-xiugaimima"></i>
                    &nbsp修改密码
                    <i class="icon iconfont icon-xiangyoujiantou to-right"></i>
                </li>
            </ul>
        </div>
    </div>
    <personInfo v-if="selectedOrder" ref="personref"></personInfo> 
    <changePWD v-if="selectedOrder" ref="changeref"></changePWD> 
    <login v-if="selectedOrder" ref="loginRef"></login> 
</div>
</template>

<script>

import DheaderVue from '../../common/Dheader/Dheader'
import personInfo from '../personInfo/personInfo'
import changePWD from '../changePWD/changePWD'
import login from '../login/login'

export default {
    data(){
        return{
            title:"个人中心",
            selectedOrder:'1',
        }
    },
    methods:{
        toPersonInfo(){
            // this.selectedOrder = "order"
            this.$nextTick(() => {
                this.$refs.personref.showToggle()
            })
        },
        toChangePWD(){
            // this.selectedOrder = "order"
            this.$nextTick(() => {
                this.$refs.changeref.showToggle()
            })
        },
        toLogin(){
            console.log(111);
            this.$nextTick(() => {
                this.$refs.loginRef.loginShowToggle()
            })
        },
    },
    components:{ 
        DheaderVue,
        personInfo,
        changePWD,
        login,
   },  
}


</script>
