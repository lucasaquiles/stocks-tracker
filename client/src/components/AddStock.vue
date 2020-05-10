<template>
  <div id="add-new-stock">
    <a href="javascript:window.history.back();">list stocks</a>
    <div v-if="submited">{{flashMessage}}</div>
    <div>
      <div>
        <label for="stock">Stock name</label>
      </div>
      <div>
        <input type="text" id="stock" v-model="stock.name" />
      </div>
    </div>

    <div>
      <div>
        <label for="amount">Amount</label>
      </div>
      <div>
        <input type="text" id="amount" v-model="stock.amount" />
      </div>
    </div>

    <div>
      <div>
        <label for="purchase-date">Purshcase date</label>
      </div>
      <div>
        <input type="text" id="purchcase-date" v-model="stock.purchaseDate" />
      </div>
    </div>

    <div>
      <button>Cancel</button>
      <button @click="addNewStock">Add new</button>
    </div>
  </div>
</template>

<script>
import StockService from "../services/stocksService";

export default {
  name: "AddStock",
  data() {
    return {
      stock: {
        amount: 0,
        name: ""
      },
      flashMessage: "",
      submited: false
    };
  },
  methods: {
    addNewStock() {
      const stockData = {
        name: this.stock.name,
        amount: this.stock.amount,
        purchaseDate: this.purchaseDate
      };

      this.addStock(stockData);
    },
    async addStock(data) {
      const response = await StockService.addStock(data);
      this.stock = response.data;
      this.submited = true;
      this.flashMessage = JSON.stringify(response.data);
    }
  }
};
</script>