<template>
    <div id="app1" style='display:block;height:100%; width:100%;'>
    <ejs-accumulationchart class="chart-content" ref="accumulationInstance" style="display:block;height:100%; width:100%;" :legendSettings="legendSettings" :tooltip="tooltip">
        <e-accumulation-series-collection>
            <e-accumulation-series  :dataSource="seriesData" xName="x" yName="y" innerRadius="40%" :dataLabel="dataLabel"> </e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>
  </div>`,
</template>

<script>

import {
    AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective,
    AccumulationDataLabel,
    AccumulationTooltip,
    PieSeries
} from "@syncfusion/ej2-vue-charts";

export default  {
    components: {
        "ejs-accumulationchart": AccumulationChartComponent,
        "e-accumulation-series-collection": AccumulationSeriesCollectionDirective,
        "e-accumulation-series":  AccumulationSeriesDirective
    },

    data() {
        return {
            seriesData:  [
                { 'x': 'Chrome', y: 37, text: '37%' },
                { 'x': 'UC Browser', y: 17, text: '17%' },
                { 'x': 'iPhone', y: 19, text: '19%' },
                { 'x': 'Others', y: 4, text: '4%' },
                { 'x': 'Opera', y: 11, text: '11%' },
                { 'x': 'Android', y: 12, text: '12%' }
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
