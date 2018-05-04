import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import '@/compon/less/common.less'
import '@/compon/css/iconfont.css'
import store from './store/store'

Vue.config.productionTip = false;

Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});