/* eslint-disable */
import axios from 'axios'

const deletes = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.delete(url,{params}).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

export default deletes
