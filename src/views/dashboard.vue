<template>
    <div className="control-section" id="control_dash">

        <div className="content-wrapper">
<!--              DashboardLayout element declaration-->
            <ejs-dashboardlayout ref="DashbordInstance" :columns="6" id='edit_dashboard' :allowResizing="false" :allowDragging="true" >

                                <e-panels>
                                    <e-panel :row="0" :col="0" :sizeX="3" :sizeY="2"
                                             header="<div>Product usage ratio</div>" :content="pie1"></e-panel>
                                    <e-panel :row="0" :col="3" :sizeX="3" :sizeY="2" :content="pie1"></e-panel>
                                    <!--    <e-panel :row="1" :col="0" :sizeX="3" :sizeY="2" header="<div>Spline Chart</div>"
                                                                                    :content="spline"></e-panel>
                                                                            <e-panel :row="1" :col="3" :sizeX="3" :sizeY="2" header="<div>Table</div>"
                                                                                   :content="tbs"></e-panel>
                                     -->

                                </e-panels>
            </ejs-dashboardlayout>


            <!-- end of dashboardlayout element -->
        </div>
    </div>


</template>

<script>
// Import syncfusion dashboardlayout component from layouts package
import { createApp } from 'vue'
import {
    DashboardLayoutComponent,
    PanelDirective,
    PanelsDirective
} from "@syncfusion/ej2-vue-layouts";

import Pie1Panel from "@/views/dashboardpanel/pie1panel.vue";
import PiePanel from "@/views/dashboardpanel/pie-panel.vue";

const localapp = createApp()
const pietempalte = localapp.component('pie-panel',PiePanel);
const pie1tempalte = localapp.component('pie1-panel',Pie1Panel);

export default {
    name: "DashBoard",
    components: {
        "ejs-dashboardlayout": DashboardLayoutComponent,
        "e-panels":PanelsDirective,
        "e-panel":PanelDirective,


    },

    data: function() {
        return {
            spacing: [10,10],
            header:'Add a Content',
            target:'.control-section',
            showCloseIcon: true,
            pie: function (){
                return {template: pietempalte}
            },
            pie1: function() {
                return {template: pie1tempalte}
            }

        };
    }
}
</script>

<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-layouts/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";

/* DashboardLayout element styles  */
#dashboard_default .e-panel .e-panel-content {
    vertical-align: middle;
    font-weight: 600;
    font-size: 20px;
    text-align: center;
    line-height: 100px;
}

.chart-content{
    height: 100%;
    width:100%;
}

#container{
    width: 100%;
    height: 100%;
}

#dashboard_default .e-panel {
    transition:none !important;
}
</style>

