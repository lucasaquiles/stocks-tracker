<template>
  <div class="stocks">
    <h1>Your Stocks</h1>

    <div v-for="stock in stocks">
      <p>{{ stock.code }} - {{ stock.amount }}</p>
    </div>
  </div>
</template>

<script>

import StockService from '../services/stocksService'

export default {
  name: 'stocks',
  data () {
    return {
      stocks: []
    }
  },
  mounted () {
    this.getStocks()
  },
  methods: {
    async getStocks () {
      const response = await StockService.fetchStocks()
      this.stocks = response.data
    }
  }
}
</script>
