<template>
  <div id="index">

    <div class="block place">
      <el-carousel trigger="click" height="160px">
        <el-carousel-item v-for="item in imgUrl" :key="item">
          <img :src="item"/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- <div class="place">
      <img src="./img/place2.jpg"/>
    </div> -->
    <div class="place-info">
      <div class="place-info-left">
        <div class="place-info-nav">
          <div class="place-name">蒸美味</div>
          <div><i class="icon iconfont icon-dianhua"/>13437899312</div>
        </div >
        <div class="place-info-nav">
          <div><i class="icon iconfont icon-shouhuodizhi"/>广东省广州市萝岗区</div>
        </div>
      </div>
      <div class="place-info-right">
        <div class="place-detail">
          <i class="icon iconfont icon-xiangyoujiantou"></i>
        </div>
      </div>
    </div>
    <div class="alDiv">
      <el-button class="btn-appointment"  type="warning" @click="toAppointment()" round>预约</el-button>
      <el-button class="btn-line" type="danger" @click="line()" round>排队</el-button>
    </div>
    <div class="food-guide">
      <div class="scroll-guide">
        <div> 
          <div class="scroll-guide-nav" :class="{'active':1 ==scrollNav }" @click="scrollNavClick(1,'/index')" >
          <i class="icon iconfont icon-wancan"></i>最新菜品</div>  
          <div class="scroll-guide-nav" :class="{'active':2 ==scrollNav }" @click="scrollNavClick(2,'/index')" >
          <i class="icon iconfont icon-wancan"/>招牌菜推荐</div>
          <div class="scroll-guide-nav" :class="{'active':3 ==scrollNav }" @click="scrollNavClick(3,'/index')" >
          <i class="icon iconfont icon-wancan"/>好评菜品</div>
        </div>
      </div>
      <div class="food-info">
        <div class="food-info-nav">
          <div class="food-img">
            <img src="/static/img/food/food2.jpg"/>
          </div>
          <div class="food-detail">
            <div class="food-detail-nav name">东坡肉</div>
            <div class="food-detail-nav name">
              <div class="food-userlike">
                <i class="icon iconfont icon-zan"/>用户推荐数：100
                </div>
            </div>
            <div class="food-detail-nav">
              <div class="food-price">￥35</div>
              <div class="food-sale" >销量：88</div>
            </div>
          </div>
        </div>
        <div class="hr"></div>
        <div class="food-info-nav">
          <div class="food-img">
            <img src="/static/img/food/food1.jpg"/>
          </div>
          <div class="food-detail">
            <div class="food-detail-nav name">咕噜肉</div>
            <div class="food-detail-nav">
              <div class="food-userlike">
                <i class="icon iconfont icon-zan"/>用户推荐数：100
                </div>
            </div>
            <div class="food-detail-nav">
              <div class="food-price">￥35</div>
              <div class="food-sale" >销量：88</div>
            </div>
            <div class="cartcontrol-wrapper">
              <!-- <cartcontrol :food="food"></cartcontrol> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <cart :deliveryPrice="seller.deliveryPrice" :minPrice = "seller.minPrice" :selectFoods="selectFoods"></cart> -->
    <!-- <foodDetail :food="selectedFood" v-if="selectedFood" ref="myFood"></foodDetail> -->
    <!-- <appointment v-if="selectedOrder" ref="appointmentRef"></appointment>  -->
  </div>
</template>

<script>
  import cartcontrol from '../../cartcontrol/cartcontrol'
  import foodDetail from '../../foodDetail/foodDetail'
  import cart from '../../cart/cart'
  import appointment from '../appointment/appointment'
  import axios from 'axios'

  let scan = null;


  export default{
    data(){
      return{
        selectedOrder:'1',
        scrollNav : 1,
        goods:'',
        imgUrl:[require("./img/place1.jpg"),require("./img/place2.jpg")],
        codeUrl: '',
      }
    },
    created() {
        
    },
    methods: {
        scrollNavClick(index,path){
            const self = this;
            self.scrollNav=index;
            self.$router.push(path);
        },
        toAppointment(){
            const self = this;
            self.checkindex=index;
            self.$router.push('/appointment');
            // this.$nextTick(() => {
            //     this.$refs.appointmentRef.aptmShowToggle()
            // })
        },

    },
    components:{
      cartcontrol,
      cart,
      foodDetail,
      appointment,
    }
  }
</script>

<style scoped>
.place {
  width: 100%;
  height: 160px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
} 
.place img {
  width: 100%;
  height: 100%;
} 
.place-info{
  border-left: 3px solid #d9dde1;
  border-bottom: 1px solid #eeeeee;
  width: 100%;
  height: 50px;
  color:#999; 
  padding-top:5px; 
  padding-left:5px; 
  font-size:16px;
}
.place-name{
  float: left;
  margin-right: 32px;
  color:#666; 
  font-weight: 595;
  font-size:16px;
}
.place-info-nav{
  width: 100%;
  float: left;
  margin-left: 17px;
}
.place-info-left{
  width: 80%;
  float: left;
}
.place-info-right{
  width: 20%;
  float: left;
  height: 100%;
  color: #666;
  overflow: hidden;
}
.place-detail{
  font-weight: bold;
  margin-left: 40%;
  margin-top: 15%;
}
.alDiv{
  margin: 10px 20%;
}
.scroll-guide{
  padding-left: 5px;
  border-top: 1px #eee solid;
  color:#777;
  font-size:15px; 
}
.scroll-guide-nav{
  overflow: hidden;
  display: inline-block;
  padding: 0 10px;
  line-height: 35px;
}
.index-coupon{
  margin-top: 10px;
  width: 100%;
  height: 180px;
}
.index-coupon-nav{
  margin-top: 20rxp;
  margin-left: 5%;
  width: 40%;
  height: 160px;
  float: left;
}
.coupon{
  width: 100%;
  height: 100%;
}
.food-info{
  width: 100%;
}
.food-info-nav{
  background: #ffffff;
  padding:5px 20px ;
  width: 100%;
}
.food-img{
  float: left;
  width: 65px;
  height: 65px;
  overflow: hidden;
}
.food-img img{
  width: 100%;
}
.food-detail{
  margin-left:80px;
  color: #666;
}
.cartcontrol-wrapper{
  position: absolute;
  right: 0;
  bottom:12px;
  z-index:20;
}
.food-detail-nav{
  font-size: 14px;
  margin-bottom: 6px;
}
.name{
  font-size: 15px;
  color: #07111b;
}
.food-userlike{
  font-size: 12px;
  color: #777;
}
.food-price{
  font-size: 14px;
  float: left;
  margin-right: 16px;
  color: #f01414;
}
.food-sale{
  font-size: 12px;
  color: #999;
}
.active{
  border-bottom: solid #f01414 1px; 
}

</style>
