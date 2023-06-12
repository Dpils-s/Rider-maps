// geocoding.js
import axios from 'axios';

export async function geocode(address) {
    try {
        const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
            params: {
                address: address,
                key: process.env.API_KEY,
            },
        });

        const { lat, lng } = response.data.results[0].geometry.location;
        return { lat, lng };
    } catch (error) {
        console.error('Geocoding API error:', error);
        return null;
    }
}
