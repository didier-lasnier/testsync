import { createApp } from 'vue';
import { createPinia } from 'pinia';

import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense('ORg4AjUWIQA/Gnt2VFhhQlJBfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5Xd0xiXntac3dVRGde');
import { GridPlugin } from "@syncfusion/ej2-vue-grids";

import App from './App.vue';
import { router } from './helpers';
import { useAuthStore } from './stores';

// setup fake backend
import { fakeBackend } from './helpers';
fakeBackend();

startApp();

// async start function to enable waiting for refresh token call
async function startApp () {
    // On read the APP.Vue file and mount the component.
    const app = createApp(App);

    app.use(createPinia());
    app.use(router);
    app.use(GridPlugin);
    // attempt to auto refresh token before startup
    try {
        const authStore = useAuthStore();
        await authStore.refreshToken();
    } catch {
        // catch error to start app on success or failure
    }

    app.mount('#app');
}
