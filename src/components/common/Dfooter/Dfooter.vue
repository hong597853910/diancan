<template>
    <div>
        <router-view style="margin-bottom:60px"></router-view>    
        <div class='dfooter'>
            <div class="footer-icondiv">
                <router-link to="/index">
                    <i class="icon iconfont icon-shouye1 footer-icon"></i>
                    <h5 class="footer-icon-font">首页</h5>
                </router-link>
            </div>
            <div class="footer-icondiv">
                <router-link to="/goods">
                    <i class="icon iconfont icon-canting footer-icon"></i>
                    <h5 class="footer-icon-font">点单</h5>
                </router-link>
            </div>
            <div class="footer-icondiv" >
                <router-link to="/orders">
                    <i class="icon iconfont icon-wodedingdan footer-icon"></i>
                    <h5 class="footer-icon-font">订单</h5>
                </router-link>
            </div>
            <div class="footer-icondiv">
                <router-link to="/personalCenter">
                    <i class="icon iconfont icon-wodejuhuasuan footer-icon"></i>
                    <h5 class="footer-icon-font">
                        我的资料
                    </h5> 
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Dfooter',
    data(){
        return{
            checkindex:1,
            resp:"",
            pages:['/','/goods','/orders','/personalCenter']
        }
    },
    methods: {
        footerclick(index,path){
            const self = this;
            self.checkindex=index;
            self.$router.push(path);
        }
    }
}
</script>

<style lang="stylus" scoped>
    .dfooter
        position:fixed;
        margin: 0;
        bottom:0;
        width: 100%;
        border-top: solid 1px #EEE;
        overflow: hidden;
        background: #fff;
        height: 60px;
        padding: 0;
        margin: 0;
    .footer-icondiv 
        width: 20%;
        margin: 1% 2% 1% 2%;
        float: left;
        text-align: center;
        .footer-icon
            width: 30%;
            margin: 0;
            font-size: 30px;
        .footer-icon-font
            margin: 0;
            font-size: 12px;
            display:block;
        a
            display:block;
            text-decoration: none;
            font-size:14px;
            color: #aaa;
            &.active
                color:rgb(240,20,20);
</style>
