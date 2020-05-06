import Api from './Api'

export default {
  fetchStocks () {
    return Api().get('stocks')
  }
}
