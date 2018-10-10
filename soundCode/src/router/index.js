import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/index'
import axio from '@/components/document/axios'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/document/axios',
      name: 'axios',
      component: axio
    },
  ]
})
