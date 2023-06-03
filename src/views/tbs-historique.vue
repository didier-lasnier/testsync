<template>
    <div id="app">

            <ejs-grid ref='grid'  :dataSource="data"
                      width="auto"
                      height = "500"
                      :allowPaging='true'
                      :pageSettings='pageSettings'>
            <e-columns >
                <e-column v-for="col in cols" :key="col.field" :field=col.field :headerText=col.headerText :type=col.type :width=col.width ></e-column>
            </e-columns>
        </ejs-grid>

    </div>
</template>

<script>
import {
    DataManager,
    UrlAdaptor,

} from '@syncfusion/ej2-data';
import {
    ColumnDirective,
    ColumnsDirective,
    Filter,
    GridComponent,
    Page,
    Group,
    Sort,
    Toolbar
} from "@syncfusion/ej2-vue-grids";

import { tbshistoriqueCols} from '@/config/tabcolumn';
import {ref} from "vue";

export default {
    name: "tbs-historique.vue",
    height: 500,
    mounted() {
        //this.$refs.grid.$el.toolbar.enableItems(['Add', 'Edit', 'Delete', 'Update', 'Cancel'])
        console.log(`the component is now mounted.`);
        console.log(this.$refs.grid.pageSettings)
    },
    data() {
        let SERVICE_URI =
            //"https://services.odata.org/V4/Northwind/Northwind.svc/Orders/";
            "http://localhost:3001/tbs-historique/list";
        const mymanager = new DataManager({
            url: SERVICE_URI,
            adaptor: new UrlAdaptor(),
            crossDomain: true,
            offline:true
        });
        console.log(mymanager);
        return {
            data: mymanager,
            initialGridLoad: true,
            pageSettings: { pageSizes:true, pageSize: 10 },
            toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
            editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
            cols: ref(this.columns()),
            groupOptions: { columns: ['NAME'] }
        };
    },
    provide: {
        grid: [Page, Sort, Filter,Group, Toolbar]
    },
    components: {
        'ejs-grid': GridComponent,
        'e-columns': ColumnsDirective,
        'e-column': ColumnDirective
    },
    methods: {
        columns() {
            return tbshistoriqueCols
        },
        load: function() {
            if (this.initialGridLoad) {
                let rowHeight = this.$refs.grid.ej2Instances.getRowHeight();  //height of the each row
                let gridHeight = this.$refs.grid.height;  //grid height
                let pageSize = this.$refs.grid.pageSettings.pageSize;   //initial page size
                 let pageResize = (gridHeight - (pageSize * rowHeight)) / rowHeight; //new page size is obtained here

                this.$refs.grid.pageSettings = {pageSize: pageSize + Math.round(pageResize)};
                console.log('pageSettings', this.$refs.grid.pageSettings)
            }
        },

        dataBound: function() {
            if (this.initialGridLoad) {
                this.initialGridLoad = false;
                let pager = document.getElementsByClassName('e-gridpager');
                let topElement;
                console.log('allowGroping n toolbar', this.$refs.grid);
                topElement=document.getElementsByClassName('e-toolbar');
                // if (this.$refs.grid.allowGrouping || this.$refs.grid.toolbar) {
                //     topElement = this.$refs.grid.allowGrouping ? document.getElementsByClassName('e-groupdroparea') :
                //         document.getElementsByClassName('e-toolbar');
                // } else {
                //     topElement = document.getElementsByClassName('e-gridheader');
                // }
                //this.$refs.grid.ej2Instances.toolbarModule.toolbar.hideItem(2, true);

                console.log('insetBefore',this.$refs.grid.$el);
                this.$refs.grid.$el.insertBefore(pager[0], topElement[0]);

            }
        },
    }
}
</script>
<style>

@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-calendars/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";

</style>
