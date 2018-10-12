/* eslint-disable */
const local = localStorage;
import config from '../config.js'

const setKey = function( url, params, data, duration ) {
  var keys = url + (Object.keys(params).length > 0 ? JSON.stringify(params): '')
  if(typeof duration === 'boolean'){
    var time = (new Date().getTime() + 60*10*1000)
  } else if(typeof duration === 'number') {
    var time = (new Date().getTime() + (duration)*60*1000)
  }else if(typeof deration === 'function'){
    var time = duration() > 0 ? duration(): console.error('duration has no return value!')
  }else if(typeof deration === 'string'){
    var time = config.deration[deration] ? config.deration[deration] > 0 ? config.deration[deration]: console.error('duration has no return value!') : console.error(`config.deration.${duration} is undefined!`)
  }
  local.removeItem(getKey(keys).toString(32))
  local.setItem("'"+keys+"'", time)
  setVal(time.toString(32), data)
}

const setVal = function(keys, value) {
  local.setItem(keys, JSON.stringify(value))
}

const getVal = function(keys) {
  try {
    return JSON.parse(local.getItem(keys))
  } catch(e) {
    return local.getItem(keys)
  }
}

const getKey = function(keys){
  return local.getItem("'"+keys+"'")*1
}

const localhosts = function(url, params, duration, getData){
  var keys = url + (Object.keys(params).length > 0 ? JSON.stringify(params): '')
  if(getKey(keys) > 0 && getKey(keys)*1 > new Date().getTime() && duration)
    return new Promise((resolve, reject) => {
      if(getVal(getKey(keys).toString(32))){
        resolve(getVal(getKey(keys).toString(32)))
      }else{
        reject(getData(url, params, duration))
      }
    })
  else
    return getData(url, params, duration)
}

const clearVal = function(){
  local.clear()
}

document.onkeyup = function(e){
  if (e.ctrlKey && e.keyCode === 66) {
    clearVal()
  }
}


export {
  setKey,
  setVal,
  getVal,
  getKey,
  localhosts,
  clearVal
}
