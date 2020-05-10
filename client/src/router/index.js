import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Stocks from '@/components/Stocks'
import AddStock from '@/components/AddStock'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'HelloWorld',
      component: Login
    },
    {
      path: '/stocks',
      name: 'All Stocks',
      component: Stocks
    },
    {
      path: '/add',
      alias: '/stock/add',
      name: 'AddStock',
      component: AddStock
    }
  ]
})
