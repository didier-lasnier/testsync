<template>
    <div id="app" style="display:block;height:100%; width:100%;">
        <ejs-accumulationchart class="chart-content" ref="accumulationInstance" style="display:block; height:100%; width:100%;" :legendSettings="legendSettings" :tooltip="tooltip">
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource="seriesData" xName="x" yName="y" innerRadius="40%" :dataLabel="dataLabel"> </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>`
</template>

<script>
import {
    AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective,
    AccumulationDataLabel,
    AccumulationTooltip,
    PieSeries
} from "@syncfusion/ej2-vue-charts";

export default {
    name: "PiePanel",
    components: {
        "ejs-accumulationchart": AccumulationChartComponent,
        "e-accumulation-series-collection": AccumulationSeriesCollectionDirective,
        "e-accumulation-series":  AccumulationSeriesDirective,

    },
    data() {
        return {
            seriesData:  [
                { x: 'TypeScript', y: 13, text: 'TS 13%' },
                { x: 'React', y: 12.5, text: 'Reat 12.5%' },
                { x: 'MVC', y: 12, text: 'MVC 12%' },
                { x: 'Core', y: 12.5, text: 'Core 12.5%' },
                { x: 'Vue', y: 10, text: 'Vue 10%' },
                { x: 'Angular', y: 40, text: 'Angular 40%' }
            ],
            legendSettings: { visible: false },
            dataLabel: { visible: true, position: 'Inside', name: 'value'},
            tooltip: {
                enable: true, header: '<b>${point.x}</b>', format: 'Composition: <b>${point.y}</b>'
            },
        };
    },
    provide: {
        accumulationchart: [PieSeries, AccumulationDataLabel, AccumulationTooltip]
    },
/*    mounted(){
        this.$refs.accumulationInstance.height ="100%";
        this.$refs.accumulationInstance.width ="100%";
    }*/
}

</script>

<style>

</style>
