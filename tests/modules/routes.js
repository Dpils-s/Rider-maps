import axios from 'axios';


// Function to perform the Routes API call
export async function getRoute(origin, destination) {
    try {
        const response = await axios.get('https://maps.googleapis.com/maps/api/directions/json', {
            params: {
                origin,
                destination,
                key: 'YOUR_API_KEY',
            },
        });

        // Check if the API response contains an error
        if (response.data.status === 'OK') {
            // Extract and return the route
            const route = response.data.routes[0];
            return route;
        } else {
            // Handle API errors
            console.error('Directions API Error:', response.data.error_message);
            return null;
        }
    } catch (error) {
        // Handle request errors
        console.error('Request Error:', error.message);
        return null;
    }
}