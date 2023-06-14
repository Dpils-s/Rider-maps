import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router'; // Updated import statement
import CustomerAddress from "@/components/CustomerAddress.vue";
import RiderRoute from "@/components/RiderRoute.vue";
import MainPage from "@/components/MainPage.vue";

// Import your components and createRouter

// Create the router instance and define your routes
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: MainPage },
        { path: '/address-selection', component: CustomerAddress },
        { path: '/rider-route', component: RiderRoute },
    ],
});

// Create a new Vue application instance and mount it to the '#app' element
createApp(App).use(router).mount('#app');