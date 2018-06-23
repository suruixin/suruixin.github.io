import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/compon/less/common.less';
import '@/compon/css/iconfont.css';
import store from './store/store';
import utils from '@/assets/js/utils.js';

Vue.use(ElementUI);
Vue.use(store);
Vue.use(utils);
store.commit('setmsg',{a:1})
console.log(store.state)
Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});