<template>
        <div>
            {{simulationResults}}
            <md-table-row v-for="item in simulationResults" :key="item.fiiCodeSelected">
                <md-table-cell>{{item.fiiCodeSelected}}</md-table-cell>
                <md-table-cell>{{item.price}}</md-table-cell>
                <md-table-cell>{{item.yeldValue}}</md-table-cell>
                <md-table-cell>{{item.contribution}}</md-table-cell>
                <md-table-cell>{{item.period}}</md-table-cell>
                <md-table-cell>{{item.totalYeld}}</md-table-cell>
            </md-table-row>
        </div>
</template>
<script>
    export default {
        name: 'SimulationResultRow',
        props: ["simulationResults"],
        data() {
            console.log(this)
            return this.simulationResults
        }
    }
</script>