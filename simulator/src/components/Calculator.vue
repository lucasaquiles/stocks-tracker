<template>
  <div class="hello">
    <md-card>

      <md-card-header>
        <div class="md-title">Simulador de FIIs</div>
      </md-card-header>

      <md-card-content>

        <p>Dividendos <strong>{{ totalYeld }}</strong> em <strong>{{period}}</strong> meses</p>
        
        <md-field>
          <md-input v-model="fiiCodeSelected" v-on:keyup="getFiis"></md-input>
            <label>Código da ação</label>
          
        </md-field>

        <md-field>
          <label>Valor</label>
          <md-input v-model="value"></md-input>
        </md-field>

        <md-field>
          <label>Tempo de aplicação (meses)</label>
          <md-input v-model="period" v-on:keyup="update"></md-input>
        </md-field>

        <md-field>
          <label>Aporte mensal</label>
          <md-input v-model="contribution"></md-input>
        </md-field>

        <!-- <md-button class="md-raised md-primary" v-on:click="add()">Simular</md-button> -->
      </md-card-content>
    </md-card>

  </div>
</template>

<script>

  import crawler from "../services/Crawler"

  export default {
    name: 'Calculator',
    props: {
      msg: String
    },
    data() {
      console.log("caramba, em");
      return {
        fiiCodeSelected: "",
        value: 0.0,
        period: 0,
        contribution: 0.0,
        yeldValue: 0.0,
        totalYeld: 1
      }
    },
    methods: {
      clear(data) {
          data.currentTarget.value = ""
      },
      update() {
        this.totalYeld = this.yeldValue * this.period
      },
      async getFiis() {
        if(this.fiiCodeSelected.length > 3){

          const response = await crawler.findStock(this.fiiCodeSelected);
          this.yeldValue = response.data.lastDividend
          this.value = response.data.value
          
          this.totalYeld = 1;
          this.totalYeld = this.totalYeld * this.yeldValue
          
          console.log( response.data);
        }
      }
    }
  }
</script>
