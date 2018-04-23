<template>
    <!--地图容器-->
    <div id="XSDFXPage" class="XSDFXPage">

    </div>
</template>
<script>
    import {MP} from '../../../map.js'
    export default {
        name:'',
        data () {
            return {
                x:'',
                y:'',
            }
        },
        created() {
            this.$nextTick(function(){  
              var _this = this;  
              MP(_this.ak).then(BMap => {  
                this.ready(); 
                })
            })
        },
        methods: {
            ready: function() {
                var map = new BMap.Map('XSDFXPage');
                
                var point = new BMap.Point(113.502405,23.159578);
                
                map.centerAndZoom(point, 12);
                // map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
                map.addControl(new BMap.NavigationControl());  //右下角放大放小  
                map.addControl(new BMap.ScaleControl());    //路径大小
                map.addControl(new BMap.OverviewMapControl());    
                // map.addControl(new BMap.MapTypeControl());   //地图、卫星、三维  
                // map.setCurrentCity("北京"); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用   
                var marker = new BMap.Marker(point);        // 创建标注    
                map.addOverlay(marker);                     // 将标注添加到地图中 
                
                // map.enableScrollWheelZoom(true)
                // map.enableDoubleClickZoom(true)
                var geolocation = new BMap.Geolocation()
                // geolocation.getCurrentPosition((r) => {
                //   if (r.point) {
                //     this.x = r.longitude
                //     this.y = r.latitude
                    
                //     let markers = new BMap.Marker(r.point)
                //     map.addOverlay(markers)
                //     map.panTo(r.point)
                //     map.centerAndZoom(r.point, 16)
                //     console.log('您的位置：'+r.point.lng+','+r.point.lat);
                //   }
                // }, { enableHighAccuracy: true })

                
                geolocation.getCurrentPosition(function(r){
                    if(this.getStatus() == BMAP_STATUS_SUCCESS){
                        var mk = new BMap.Marker(r.point);
                        map.addOverlay(mk);
                        map.panTo(r.point);

                        console.log('您的位置：'+r.point.lng+','+r.point.lat);
                        console.log(BMapLib.GeoUtils.getDistance(point, r.point));

                    }
                    else {
                        alert('failed'+this.getStatus());
                    }        
                });
            }
        }
    }
</script>
<style scoped>
    .XSDFXPage{
            width: 100%;
            height: 400px;
            margin: 0;
            font-family: "微软雅黑";
        }
</style>