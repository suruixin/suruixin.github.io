/* eslint-disable */
import get from './get'
import sync from './sync'
import post from './post'
import deletes from './delete'

const axios = {
  get,
  sync,
  post,
  delete: deletes
}

export default axios

