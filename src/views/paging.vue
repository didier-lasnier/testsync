<template>
    <div id="app">
        <ejs-grid ref='grid'
                  :dataSource="data"
                  :allowPaging="true"
                  :pageSettings='pageSettings'
>

            <e-columns >
<!--                <e-column v-for="col in cols" :key="col.field" :field=col.field :headerText=col.headerText :type=col.type :width=col.width ></e-column>-->
                <e-column field = "Rtime"              headerText = "date"                              type = "string" width = "100"   > </e-column>
                <e-column field = "USED"               headerText = "Espace Utilisé"                     type = "number" width = "80"   > </e-column>
                <e-column field = "NAME"                headerText = "Nom"                                type = "number" width = "200" > </e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>

<script>

import {
    ColumnDirective,
    ColumnsDirective,
    GridComponent,
    Page, Toolbar,
} from "@syncfusion/ej2-vue-grids";

import { data } from "@/assets/data";

export default{
    name: "tbs-historique.vue",
    data() {
             return {
            data: data.result,
            pageSettings: { currentPage: 1, pageSize: 12, pageSizes: true},

        };
    },
   provide: {
        grid: [Page,Toolbar]
    },
    components: {
        'ejs-grid': GridComponent,
        'e-columns': ColumnsDirective,
        'e-column': ColumnDirective
    },
}
</script>
<style>

@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";

</style>
