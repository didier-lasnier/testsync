<script setup>
import { onMounted, onBeforeMount, onBeforeUnmount, onUnmounted} from 'vue';
import { storeToRefs } from 'pinia';

import { useAuthStore, useUsersStore } from '@/stores';
//import TbsHistorique from "@/views/tbs-historique.vue";
//import LineChart   from "@/views/DashbrdCharts.vue";



const authStore = useAuthStore();
const { user: authUser } = storeToRefs(authStore);

const usersStore = useUsersStore();
const { users } = storeToRefs(usersStore);

usersStore.getAll();

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
    <tbs-historique></tbs-historique>
    <LineChart></LineChart>
<!--    <div>
        <h1>Hi {{authUser?.firstName}}!</h1>
        <p>You're logged in with Vue 3 + JWT with Refresh Tokens!!</p>
        <h3>Users from secure api end point:</h3>
        <ul v-if="users.length">
            <li v-for="user in users" :key="user.id">{{user.firstName}} {{user.lastName}}</li>
        </ul>
        <div v-if="users.loading" class="spinner-border spinner-border-sm"></div>
        <div v-if="users.error" class="text-danger">Error loading users: {{users.error}}</div>
    </div>
&lt;!&ndash;    <div>
        <SyncFusionGrid />
    </div>&ndash;&gt;
    <div><Paging /></div>-->
</template>
