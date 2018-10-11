/* eslint-disable */
import axios from 'axios'
import qs from 'qs'
import {localhosts, setKey} from "./local";

var getData = function(url, params, duration){
  return new Promise((resolve, reject) => {
    axios.post(url,qs.stringify(params)).then(res => {
      if (config.request.intercept.call(res.data)) {
        return
      }
      resolve(res.data)
      if (duration) {
        setKey(url, params, res.data, duration)
      }
    }).catch(err => {
      reject(err)
    })
  })
}


const post = (url, params, duration) => {
  var param = params || '',durations = duration ? duration : false
  return localhosts(url, param, durations, getData)
}

export default post
