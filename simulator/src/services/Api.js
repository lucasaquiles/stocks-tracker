import axios from 'axios'

export default () => {
  console.log('url: ', process.env)
  return axios.create({
    baseURL: process.env.VUE_APP_FII_SOURCE_URL
  })
}
