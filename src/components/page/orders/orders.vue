<style scoped lang="stylus" >
    .orders-body
        margin-top 15px
    .order-info-nav
        width 100%
        height 80px
        margin 12px
        border-bottom solid 1px #eee
        .order-info-left
            float left
            width 50px
            height 81px
            background #fff
            .order-img
                // line-height 50px
                // font-weight 800
                // text-align center
                // background #eee
                // border 2px solid #999
                height 50px 
                width 100%
        .order-info-right
            margin-left 70px
            color #000
            overflow hidden
            font-size 14px
            .order-header
                float none
                .order-title
                    font-weight 500
                    margin-right 30px
                    .order-info-to-detail
                        position absolute
                        right 20px
                        font-size 13px
                        // background #eee
            .order-time
                margin 2px 0 5px 0
                color #999
                font-size 12px
            .order-price
                color #444
                float left
                font-size 13px
            .order-status
                color red
                position absolute
                right 20px
                font-size 13px
            .order-detail
                color #bbb
                font-size 14px
</style>

<template>
<div>
    <DheaderVue :title='title'></DheaderVue>
    <div class='orders-body'>
        <div class='order-info-nav' @click="toDetail('111')">
            <div class="order-info-left">
                <img class="order-img" src="/static/img/food/food3.jpg"/>
                <!-- <div class="order-img">1</div> -->
            </div>
            <div class="order-info-right"> 
                <div class="order-header">
                    <div class="order-title">
                        手撕鸡、叉烧肉..等5件商品
                        <i class="icon iconfont icon-xiangyoujiantou order-info-to-detail"></i>
                    </div>
                </div>
                <div class="order-time">2018年2月19日 19:20:10</div>
                <div class="order-footer">
                    <div class="order-price">价格：￥99</div>
                    <div class="order-status">已完成</div>
                </div>
            </div>
        </div>
        <div class='order-info-nav'>
            <div class="order-info-left">
                <img class="order-img" src="/static/img/food/food2.jpg"/>
            </div>
            <div class="order-info-right"> 
                <div class="order-title">手撕鸡、叉烧肉..等5件商品</div>
             
                <div class="order-time">2018年2月19日 19:20:10</div>
                <div class="order-footer">
                    <div class="order-price">价格：￥99</div>
                    <div class="order-status">已完成</div>
                </div>

            </div>
        </div>
        <div class='order-info-nav'>
            <div class="order-info-left">
                <img class="order-img" src="/static/img/food/food1.jpg"/>
            </div>
            <div class="order-info-right"> 
                <div class="order-title">手撕鸡、叉烧肉..等5件商品</div>
             
                <div class="order-time">2018年2月19日 19:20:10</div>
                <div class="order-footer">
                    <div class="order-price">价格：￥99</div>
                    <div class="order-status">已完成</div>
                </div>

            </div>
        </div>
        <orderDetail :order="selectedOrder" v-if="selectedOrder" ref="myOrder"></orderDetail>

    </div>

</div>
</template>

<script>
import DheaderVue from '../../common/Dheader/Dheader'
import orderDetail from '../../orderDetail/orderDetail'

export default {
    data(){
        return{
            title:"点单",
            selectedOrder:'',
        }
    },
    created() {
        
    },
    methods:{
        toDetail(order){
            this.selectedOrder = order
            this.$nextTick(() => {
                this.$refs.myOrder.showToggle()
            })
        }
    },
    components:{ 
        DheaderVue,
        orderDetail,
   },
}


</script>
