import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router'; // Updated import statement
import HelloWorld from "@/components/HelloWorld.vue";
import CustomerAddress from "@/components/CustomerAddress.vue";
import AddressList from "@/components/AddressList.vue";
import RiderRoute from "@/components/RiderRoute.vue";

// Import your components and createRouter

// Create the router instance and define your routes
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HelloWorld },
        { path: '/address-selection', component: CustomerAddress },
        { path: '/address-list', component: AddressList },
        { path: '/rider-route', component: RiderRoute },
    ],
});

// Create a new Vue application instance and mount it to the '#app' element
createApp(App).use(router).mount('#app');
export default router;