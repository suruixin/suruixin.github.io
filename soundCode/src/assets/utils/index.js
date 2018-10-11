/* eslint-disable */
var utils = {};

import request from './axios'
import axios from 'axios'

export default {
    install(Vue, options) {
    	Object.entries(request).map(m => {
    		Vue.prototype[`$${m[0]}`] = m[1]
    	})
      Vue.prototype.$axios = axios
    }
}
