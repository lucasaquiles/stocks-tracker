import Api from './Api'

export default {
  fetchStocks() {
    return Api().get('stocks')
  },
  addStock(data) {
    return Api().post('stocks', data)
  }
}
