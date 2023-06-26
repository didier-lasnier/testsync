<template>
    <div id="app">
<!--        <ejs-grid ref='grid'  :dataSource="data" :query="query"
                  width="auto"
                  :allowPaging='true'
                  :pageSettings='pageSettings'
                  :toolbar='toolbar'
                  :allowGrouping='false'
                  :groupSettings='groupOptions'>
                  -->

            <ejs-grid ref='grid'
                      :dataSource="data"
                      width="auto"
                      height = "500"
                      :allowPaging="true"
                      :pageSettings="pageSettings"
                      :load = load
                      :toolbar="toolbar"
                      :toolbarClick = clickHandler
                      :editSettings = editSettings
            >
            <e-columns >
                <e-column v-for="col in cols" :key="col.field" :field=col.field :headerText=col.headerText :type=col.type :width=col.width ></e-column>
            </e-columns>
        </ejs-grid>

<!--        <ejs-grid  ref='grid'  :dataSource="data"
                  :allowPaging='true'
                  :pageSettings='pageSettings'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
                <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' type='date' width=120></e-column>
            </e-columns>
        </ejs-grid>-->
    </div>
</template>

<script>
import {
    DataManager, JsonAdaptor, UrlAdaptor,

} from '@syncfusion/ej2-data';
import {
    ColumnDirective,
    ColumnsDirective,
    Filter,
    GridComponent,
    Page,
    Group,
    Sort,
    Toolbar, Edit
} from "@syncfusion/ej2-vue-grids";

import { tbshistoriqueCols, toolbartbs, toobarregular } from '@/config/tabcolumn';
import {ref} from "vue";

export default {
    name: "tbs-historique",
    height: 500,
    initialGridLoad:false,
    mounted() {
        //this.$refs.grid.$el.toolbar.enableItems(['Add', 'Edit', 'Delete', 'Update', 'Cancel'])
        console.log(`the component is now mounted.`);
        console.log(this.$refs.grid.pageSettings);
        this.initialGridLoad = true;

    },
    data() {
        let SERVICE_URI =
            "https://www.reinsald-consulting.com:3001/tbs-historique/list";
        const mymanager = new DataManager({
            url: SERVICE_URI,
            adaptor: new UrlAdaptor(),
            crossDomain: true,
            offline: true
        });
        console.log(mymanager);
        return {
            data: mymanager,
            initialGridLoad: true,
            pageSettings: {pageSizes: true, pageSize: 10},
            toolbar: toolbartbs,
            editSettings: {allowEditing: true, allowAdding: true, allowDeleting: true},
            cols: ref(this.columns()),
            groupOptions: {columns: ['NAME']}
        };
    },
    provide: {
        grid: [Page, Edit, Sort, Filter, Group, Toolbar]
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
        /*        load: function() {
            if (this.initialGridLoad) {
                let rowHeight = this.$refs.grid.ej2Instances.getRowHeight();  //height of the each row
                let gridHeight = this.$refs.grid.height;  //grid height
                let pageSize = this.$refs.grid.pageSettings.pageSize;   //initial page size
                 let pageResize = (gridHeight - (pageSize * rowHeight)) / rowHeight; //new page size is obtained here

                this.$refs.grid.pageSettings = {pageSize: pageSize + Math.round(pageResize)};
                console.log('pageSettings', this.$refs.grid.pageSettings)
            }
        },*/
        dataBound: function () {
            console.log('dataBound function')
            if (this.initialGridLoad) {
                this.initialGridLoad = false;
                let pager = document.getElementsByClassName('e-gridpager');
                let topElement;
                console.log('allowGrouping n toolbar', this.$refs.grid);
                topElement = document.getElementsByClassName('e-toolbar');
                if (this.$refs.grid.allowGrouping || this.$refs.grid.toolbar) {
                    topElement = this.$refs.grid.allowGrouping ? document.getElementsByClassName('e-groupdroparea') :
                        document.getElementsByClassName('e-toolbar');
                } else {
                    topElement = document.getElementsByClassName('e-gridheader');
                }
                this.$refs.grid.ej2Instances.toolbarModule.toolbar.hideItem(2, true);

                console.log('insetBefore', this.$refs.grid.$el);
                this.$refs.grid.$el.insertBefore(pager[0], topElement[0]);
                this.$refs.grid.ej2Instances.toolbarModule.enableItems(['Grid_Collapse','Grid_Expand'],true);//Enable toolbar it

            } else { console.log('not initialized')}
        },
        clickHandler: function(args) {
            console.log(args.item.id);
              switch (args.item.id) {
                  case "rsdc-add" :{ break;}
                  case "rsdc-edit" :{ this.$refs.grid.ej2Instances.toolbarModule.toolbar.enableItems(2);
                      break;}

                  case "rsdc-update" :{ break;}
                  case "rsdc-delete" :{ break;}
                  case "rsdc-cancel" :{ break;}
                  case "rsdc-search" :{ break;}
                  case "rsdc-print" :{ break;}
                  case "rsdc-columnchooser" :{ break;}
                  case "rsdc-pdfexport" :{ break;}
                  case "rsdc-excelexport" :{ break;}
                  case "rsdc-csvexport":{ break;}
                  default: {
                      break;}
              }
    //         this.$refs.grid.ej2Instances.toolbarModule.toolbar.enableItems(2)
            ;
            //this.$refs.grid.ej2Instances.toolbarModule.toolbar.refreshOverflow();
            //console.log('toolbar',(this.$refs.grid.ej2Instances.toolbarModule.toolbar.items.find(element => element.properties.text==='Update')).properties)
            //alert("Custom Toolbar Click... "+currenttoolbar);
        },
        load: function () {

            JsonAdaptor.prototype.processQuery = function (dataManager, query) {
                let i;
                let result = dataManager.dataSource.json.result
                    ? dataManager.dataSource.json.result.slice(0)
                    : dataManager.dataSource.json.slice(0);

                let count = result.length;
                let countFlg = true;
                let ret;
                let lazyLoad = {};
                let key;
                let keyCount = 0;
                let group = [];
                let page;
                for (i = 0; i < query.lazyLoad.length; i++) {
                    keyCount++;
                    lazyLoad[query.lazyLoad[i].key] = query.lazyLoad[i].value;
                }
                let agg = {};
                for (i = 0; i < query.queries.length; i++) {
                    key = query.queries[i];
                    if (
                        (key.fn === "onPage" || key.fn === "onGroup") &&
                        query.lazyLoad.length
                    ) {
                        if (key.fn === "onGroup") {
                            group.push(key.e);
                        }
                        if (key.fn === "onPage") {
                            page = key.e;
                        }
                        continue;
                    }
                    ret = this[key.fn].call(this, result, key.e, query);
                    if (key.fn === "onAggregates") {
                        agg[key.e.field + " - " + key.e.type] = ret;
                    } else {
                        result = ret !== undefined ? ret : result;
                    }
                    if (
                        key.fn === "onPage" ||
                        key.fn === "onSkip" ||
                        key.fn === "onTake" ||
                        key.fn === "onRange"
                    ) {
                        countFlg = false;
                    }
                    if (countFlg) {
                        count = result.length;
                    }
                }
                if (keyCount) {
                    const args = {
                        query: query,
                        lazyLoad: lazyLoad,
                        result: result,
                        group: group,
                        page: page,
                    };
                    const lazyLoadData = this.lazyLoadGroup(args);
                    result = lazyLoadData.result;
                    count = lazyLoadData.count;
                }
                if (query.isCountRequired) {
                    result = {
                        result: result,
                        count: count,
                        aggregates: agg,
                    };
                }
                return result;
            };
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
