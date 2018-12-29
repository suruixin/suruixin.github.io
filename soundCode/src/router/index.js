import Vue from 'vue'
import Router from 'vue-router'
import '@/assets/less/template.less'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/home/index') 
    },
    {
      path: '/document/axios',
      name: 'axios',
      component: () => import('@/components/document/axios/index'),
      redirect: '/document/axios/introduction',
      children: [{
        path: 'introduction',
        name: 'axiosIntroduction',
        component: () => import ('@/components/document/axios/introduction')
      }, {
        path: 'install',
        name: 'axiosInstall',
        component: () => import ('@/components/document/axios/install')
      }, {
        path: 'api/:api',
        name: 'axiosApi',
        component: () => import ('@/components/document/axios/api')
      }, {
        path: '/document/axios/parameter/:parameter',
        name: 'parameter',
        component: () => import ('@/components/document/axios/parameter')
//       }, {
//         path: '/document/axios/example',
//         name: 'example',
//         component: () => import ('@/components/document/axios/example')
      }]
    },
  ]
})
