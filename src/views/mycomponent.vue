<script>
import {fetchWrapper as axios} from "@/helpers";

export default {
    props: ['rowData'],
    data() {
        return {
            data: null
        }
    },
    async created() {
        // GET request using axios with async/await

        const rowData = await axios.get("http://localhost:3001/session");
        console.log(rowData)
    }
}

</script>
<script setup>
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";
import { onMounted, onBeforeMount, onBeforeUnmount, onUnmounted } from "vue";
import {AgGridVue} from "ag-grid-vue3";

const  columnDefs =[
    {headerName:"InstId", field:"InstId"},
    {headerName:"Saddr", field:"Saddr"},
    {headerName:"Sid", field:"Sid"},
    {headerName:"Serial", field:"Serial"},
    {headerName:"Audsid", field:"Audsid"},
    {headerName:"Paddr", field:"Paddr"},
    {headerName:"User", field:"User"},
    {headerName:"Username", field:"Username"},
    {headerName:"Command", field:"Command"},
    {headerName:"Ownerid", field:"Ownerid"},
    {headerName:"Taddr", field:"Taddr"},
    {headerName:"Lockwait", field:"Lockwait"},
    {headerName:"Status", field:"Status"},
    {headerName:"Server", field:"Server"},
    {headerName:"Schema", field:"Schema"},
    {headerName:"Schemaname", field:"Schemaname"},
    {headerName:"Osuser", field:"Osuser"},
    {headerName:"Process", field:"Process"},
    {headerName:"Machine", field:"Machine"},
    {headerName:"Port", field:"Port"},
    {headerName:"Terminal", field:"Terminal"},
    {headerName:"Program", field:"Program"},
    {headerName:"Type", field:"Type"},
    {headerName:"SqlAddress", field:"SqlAddress"},
    {headerName:"SqlHashValue", field:"SqlHashValue"},
    {headerName:"SqlId", field:"SqlId"},
    {headerName:"SqlChildNumber", field:"SqlChildNumber"},
    {headerName:"SqlExecStart", field:"SqlExecStart"},
    {headerName:"SqlExecId", field:"SqlExecId"},
    {headerName:"PrevSqlAddr", field:"PrevSqlAddr"},
    {headerName:"PrevHashValue", field:"PrevHashValue"},
    {headerName:"PrevSqlId", field:"PrevSqlId"},
    {headerName:"PrevChildNumber", field:"PrevChildNumber"},
    {headerName:"PrevExecStart", field:"PrevExecStart"},
    {headerName:"PrevExecId", field:"PrevExecId"},
    {headerName:"PlsqlEntryObjectId", field:"PlsqlEntryObjectId"},
    {headerName:"PlsqlEntrySubprogramId", field:"PlsqlEntrySubprogramId"},
    {headerName:"PlsqlObjectId", field:"PlsqlObjectId"},
    {headerName:"PlsqlSubprogramId", field:"PlsqlSubprogramId"},
    {headerName:"Module", field:"Module"},
    {headerName:"ModuleHash", field:"ModuleHash"},
    {headerName:"Action", field:"Action"},
    {headerName:"ActionHash", field:"ActionHash"},
    {headerName:"ClientInfo", field:"ClientInfo"},
    {headerName:"FixedTableSequence", field:"FixedTableSequence"},
    {headerName:"RowWaitObj", field:"RowWaitObj"},
    {headerName:"RowWaitFile", field:"RowWaitFile"},
    {headerName:"RowWaitBlock", field:"RowWaitBlock"},
    {headerName:"RowWaitRow", field:"RowWaitRow"},
    {headerName:"TopLevelCall", field:"TopLevelCall"},
    {headerName:"LogonTime", field:"LogonTime"},
    {headerName:"LastCallEt", field:"LastCallEt"},
    {headerName:"PdmlEnabled", field:"PdmlEnabled"},
    {headerName:"FailoverType", field:"FailoverType"},
    {headerName:"FailoverMethod", field:"FailoverMethod"},
    {headerName:"FailedOver", field:"FailedOver"},
    {headerName:"ResourceConsumerGroup", field:"ResourceConsumerGroup"},
    {headerName:"PdmlStatus", field:"PdmlStatus"},
    {headerName:"PddlStatus", field:"PddlStatus"},
    {headerName:"PqStatus", field:"PqStatus"},
    {headerName:"CurrentQueueDuration", field:"CurrentQueueDuration"},
    {headerName:"ClientIdentifier", field:"ClientIdentifier"},
    {headerName:"BlockingSessionStatus", field:"BlockingSessionStatus"},
    {headerName:"BlockingInstance", field:"BlockingInstance"},
    {headerName:"BlockingSession", field:"BlockingSession"},
    {headerName:"FinalBlockingSessionStatus", field:"FinalBlockingSessionStatus"},
    {headerName:"FinalBlockingInstance", field:"FinalBlockingInstance"},
    {headerName:"FinalBlockingSession", field:"FinalBlockingSession"},
    {headerName:"Seq", field:"Seq"},
    {headerName:"EventN", field:"EventN"},
    {headerName:"Event", field:"Event"},
    {headerName:"P1Text", field:"P1Text"},
    {headerName:"P1", field:"P1"},
    {headerName:"P1Raw", field:"P1Raw"},
    {headerName:"P2Text", field:"P2Text"},
    {headerName:"P2", field:"P2"},
    {headerName:"P2Raw", field:"P2Raw"},
    {headerName:"P3Text", field:"P3Text"},
    {headerName:"P3", field:"P3"},
    {headerName:"P3Raw", field:"P3Raw"},
    {headerName:"WaitClassId", field:"WaitClassId"},
    {headerName:"WaitClassN", field:"WaitClassN"},
    {headerName:"WaitClass", field:"WaitClass"},
    {headerName:"WaitTime", field:"WaitTime"},
    {headerName:"SecondsInWait", field:"SecondsInWait"},
    {headerName:"State", field:"State"},
    {headerName:"WaitTimeMicro", field:"WaitTimeMicro"},
    {headerName:"TimeRemainingMicro", field:"TimeRemainingMicro"},
    {headerName:"TotalTimeWaitedMicro", field:"TotalTimeWaitedMicro"},
    {headerName:"HeurTimeWaitedMicro", field:"HeurTimeWaitedMicro"},
    {headerName:"TimeSinceLastWaitMicro", field:"TimeSinceLastWaitMicro"},
    {headerName:"ServiceName", field:"ServiceName"},
    {headerName:"SqlTrace", field:"SqlTrace"},
    {headerName:"SqlTraceWaits", field:"SqlTraceWaits"},
    {headerName:"SqlTraceBinds", field:"SqlTraceBinds"},
    {headerName:"SqlTracePlanStats", field:"SqlTracePlanStats"},
    {headerName:"SessionEditionId", field:"SessionEditionId"},
    {headerName:"CreatorAddr", field:"CreatorAddr"},
    {headerName:"CreatorSerial", field:"CreatorSerial"},
    {headerName:"Ecid", field:"Ecid"},
    {headerName:"SqlTranslationProfileId", field:"SqlTranslationProfileId"},
    {headerName:"PgaTunableMem", field:"PgaTunableMem"},
    {headerName:"ShardDdlStatus", field:"ShardDdlStatus"},
    {headerName:"ConId", field:"ConId"},
    {headerName:"ExternalName", field:"ExternalName"},
    {headerName:"PlsqlDebuggerConnected", field:"PlsqlDebuggerConnected"},
    ];


onMounted(() => {
    console.log('onMounted called!')
})

onBeforeMount(() => {
    console.log('onBeforeMount called!')
})

onBeforeUnmount(() => {
    console.log('onBeforeUnmount called!')
})

onUnmounted(() => {
    console.log('onUnmounted called!')
})
</script>
<template>
  <h1>
      ceci est mon composant
  </h1>
    <ag-grid-vue
            style="width: 500px; height: 200px"
            class="ag-theme-alpine"
            :columnDefs="columnDefs"
            :rowData="rowData"
    >
    </ag-grid-vue>
</template>
