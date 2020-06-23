<template>
    <div>
        <md-table>
            <md-table-row>
                <md-table-head>FII</md-table-head>
                <md-table-head>Valor da ação</md-table-head>
                <md-table-head>Dividendo pago por cota</md-table-head>
                <md-table-head>Quantidade de cotas</md-table-head>
                <md-table-head>Período (em meses)</md-table-head>
                <md-table-head>Dividendos</md-table-head>
                <md-table-head>Investimento total</md-table-head>
            </md-table-row>

            <md-table-row v-for="item in simulationResults" :key="item.fiiCodeSelected">
                <md-table-cell>{{item.fiiCodeSelected}}</md-table-cell>
                <md-table-cell>{{item.price.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })}}</md-table-cell>
                <md-table-cell>{{item.yeldValue.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })}}</md-table-cell>
                <md-table-cell>{{item.amount}}</md-table-cell>
                <md-table-cell>{{item.period}}</md-table-cell>
                <md-table-cell>{{item.totalYeld.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })}}</md-table-cell>
                <md-table-cell>{{item.totalInvestiment.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })}}</md-table-cell>
            </md-table-row>
        </md-table>
    </div>
</template>

<script>

export default {
  name: 'Calculator',
  props: ['simulationResults'],
  data () {
    this.simulationResults
  }
}
</script>
