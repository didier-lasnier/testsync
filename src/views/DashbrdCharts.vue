<template>
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis'>
        <e-series-collection>
            <e-series :dataSource='seriesData' type='Line' xName='month' yName='sales' name='Sales'> </e-series>
        </e-series-collection>
    </ejs-chart>
</template>

<script>
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, LineSeries, Legend, Category } from "@syncfusion/ej2-vue-charts";

export default {
    name: "LineChart",
    components: {
        'ejs-chart' : ChartComponent,
        'e-series-collection' : SeriesCollectionDirective,
        'e-series' : SeriesDirective
    },
    data() {
        return {
            primaryXAxis: {
                valueType: 'Category'
            },
            title: 'Sales Analysis',
            seriesData: [
                { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
                { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
                { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
                { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
                { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
                { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
            ]
        };
    },
    provide: {
        chart: [ LineSeries, Legend, Category ]
    },
};
</script>
