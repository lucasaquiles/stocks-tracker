require('dotenv').config({
    path: process.env.NODE_ENV === "production" ? ".env.prod" : ".env"
})

import axios from 'axios'

export default () => {
  
  return axios.create({
    baseURL: process.env.FII_SOURCE_URL
  })
}