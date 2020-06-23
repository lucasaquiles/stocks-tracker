import Api from './Api'

export default {
  findStock (name) {
    console.log('finding: ', name)
    return Api().get('/stocks/' + name)
  }
}
