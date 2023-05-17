<template>
    <div id="app">
        <ejs-grid ref='grid'  :dataSource="data" width="auto"  :allowPaging='true' :pageSettings='pageSettings' :toolbar='toolbar' :dataBound='dataBound'>

            <e-columns >
                <e-column v-for="col in cols" :key="col.field" :field=col.field :headerText=col.headerText :type=col.type :width=col.width ></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import {DataManager, ODataAdaptor} from '@syncfusion/ej2-data';
import {
    ColumnDirective,
    ColumnsDirective,
    Filter,
    GridComponent,
    Group,
    Page,
    Sort, Toolbar
} from "@syncfusion/ej2-vue-grids";

import { sessionCols} from '../config/tabcolumn';
import {ref} from "vue";

export default {
    mounted() {
        //this.$refs.grid.$el.toolbar.enableItems(['Add', 'Edit', 'Delete', 'Update', 'Cancel'])
        console.log(`the component is now mounted.`);
    },
    data() {
        let SERVICE_URI =
            //"https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders";
            "http://localhost:3001/gvsession";
        return {
            data: new DataManager({
                url: SERVICE_URI,
                adaptor: new ODataAdaptor(),
                crossDomain: true
            }),
            initialGridLoad: true,
            pageSettings: { pageSizes: true, pageSize: 9 },
            toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
            editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
            cols: ref(this.sessionCols())
        };
    },
    provide: {
        grid: [Page, Sort, Filter, Group,Toolbar]
    },
    components: {
        'ejs-grid': GridComponent,
        'e-columns': ColumnsDirective,
        'e-column': ColumnDirective
    },
    methods: {
        sessionCols() {
            return sessionCols
        },
        dataBound: function() {
            if (this.initialGridLoad) {
                this.initialGridLoad = false;
                let pager = document.getElementsByClassName('e-gridpager');
                let topElement;
                console.log('allowGroping n toolbar', this.$refs.grid);
                if (this.$refs.grid.allowGrouping || this.$refs.grid.toolbar) {
                    topElement = this.$refs.grid.allowGrouping ? document.getElementsByClassName('e-groupdroparea') :
                        document.getElementsByClassName('e-toolbar');
                } else {
                    topElement = document.getElementsByClassName('e-gridheader');
                }
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
