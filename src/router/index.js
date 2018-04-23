import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Dfooter from '../components/common/Dfooter/Dfooter'
import personalCenter from '../components/page/personalCenter/personalCenter'
import orders from '../components/page/orders/orders'
import index from '../components/page/index/index'
import goods from '../components/goods/goods'
import appointment from '../components/page/appointment/appointment'


import cook from '../components/page/cook/cook'
import cookDetail from '../components/page/cookDetail/cookDetail'
import cookOrders from '../components/page/cookOrders/cookOrders'

import map from '../components/common/map/map'

Vue.use(Router)


export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/Dfooter',
      component: Dfooter,
      children:[
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
      ]
    },
    {
      path: '/cook',
      redirect: '/cookOrders',
      component: cook,
      children:[
        {
          path: '/cookDetail',
          component: cookDetail
        },
        {
          path: '/cookOrders',
          component: cookOrders
        },
      ]
    },
    {
      path: '/map',
      component: map
    },
  ],
  linkActiveClass:'active',
})

