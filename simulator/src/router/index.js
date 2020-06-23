import Vue from 'vue'
import Router from 'vue-router'
import Simulator from '@/components/Simulator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Simulator',
      component: Simulator
    }
  ]
})
