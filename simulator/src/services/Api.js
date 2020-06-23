import axios from 'axios'

require('dotenv').config({
  path: process.env.NODE_ENV === 'production' ? '.env.prod' : '.env'
})

export default () => {
  return axios.create({
    baseURL: process.env.FII_SOURCE_URL
  })
}
