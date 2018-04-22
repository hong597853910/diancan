import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import personalCenter from '../components/page/personalCenter/personalCenter'
import orders from '../components/page/orders/orders'
import index from '../components/page/index/index'

import goods from '../components/goods/goods'
import appointment from '../components/page/appointment/appointment'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '/orders',
      component: orders
    },
    {
      path: '/personalCenter',
      component: personalCenter
    },
    {
      path: '/goods',
      component: goods
    },
    {
      path: '/appointment',
      component: appointment
    },
  ],
  linkActiveClass:'active',
})

