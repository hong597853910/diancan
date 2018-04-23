<template>
  <div id="app">
    <router-view style="margin-bottom:60px"></router-view>    
  </div>
</template>

<script>
import Dfooter from './components/common/Dfooter/Dfooter';
import BMap from 'BMap';
export default {
  name: 'App',
  components:{ 
    'Dfooter':Dfooter
   },
}
</script>

<style>
@import "../static/icon/iconfont.css";
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}
.Dfooter{
  
}
.hr{
  border-top: solid 1px #EEE; 
  margin: 0.2em;
  padding: 0;
  height: 0;
}
.active {
  color: rgb(255, 59, 59);
}
ul{
  list-style:none;
}
li{
  list-style:none;
}
</style>
