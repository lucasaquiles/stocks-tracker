<template>
    <md-card>
        <!-- {{simulation}} -->
        <md-card-header>
            <div class="md-title">Simulador de FIIs</div>
        </md-card-header>

        <md-card-content>
            <div class="md-layout-item md-layout md-gutter">
                <div class="md-layout-item">
                    <Calculator v-bind="store" />
                </div>
                
                <div class="md-layout-item">
                    <SimulationResults v-bind="store" />
                </div>
            </div>
        </md-card-content>
    </md-card>



</template>

<script>
    import Calculator from './Calculator.vue'
    import SimulationResults from './SimulationResults.vue'
    import store from "../model/store"

    export default {
        name: 'Simulator',
        components: {
            Calculator, SimulationResults
        },
        data() {
            return store
        }
    }
</script>