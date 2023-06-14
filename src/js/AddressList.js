import { getAllAddresses } from '@/DAL/AddressListDAL';
import MainPage from "@/components/MainPage.vue";
import MainLayout from "@/components/MainLayout.vue"; // Import the getAllAddresses function

export default {
    components: {MainLayout, MainPage},
    data() {
        return {
            addresses: [],
        };
    },
    mounted() {
        this.fetchAddresses();
    },
    methods: {
        async fetchAddresses() {
            try {
                // Fetch the addresses using the getAllAddresses function
                this.addresses = await getAllAddresses();
            } catch (error) {
                console.error('Error:', error);
            }
        },
        handleButtonClick(address) {
            // Convert the address object to a JSON string
            const addressJSON = JSON.stringify(address);

            // Store the address JSON in session storage
            sessionStorage.setItem('address', addressJSON);

            // Redirect to the RiderRoute page
            this.$router.push('/rider-route');
        },
    },
};