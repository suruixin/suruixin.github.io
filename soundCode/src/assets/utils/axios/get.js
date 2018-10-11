/* eslint-disable */
import axios from 'axios'
import {setKey, localhosts} from './local'
import config from '../config'
console.log(config)

var getData = function(url, params, duration){
  return new Promise((resolve, reject) => {
    axios.get(url,{params}).then(res => {
      if (config.request.intercept.call(res.data)) {
        return
      }
      console.log(1)
      resolve(res.data)
      if (duration) {
        setKey(url, params, res.data, duration)
      }
    }).catch(err => {
      reject(err)
    })
  })
}


const get = (url, params, duration) => {
  var param = params || '',durations = duration ? duration : false
  return localhosts(url, param, durations, getData)
}

export default get
