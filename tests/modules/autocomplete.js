import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import 'dotenv/config';

const mock = new MockAdapter(axios);

// Function to perform the Autocomplete API call
export async function autocomplete(input) {
    try {
        const response = await axios.get('https://maps.googleapis.com/maps/api/place/autocomplete/json', {
            params: {
                input: input,
                /* global process */
                key: process.env.API_KEY,
            },
        });

        return response.data.predictions.map(prediction => prediction.description);
    } catch (error) {
        // Handle the API error gracefully
        console.error('API error:', error);
        return [];
    }
}

// Mock the Autocomplete API response for a specific request
mock.onGet('https://maps.googleapis.com/maps/api/place/autocomplete/json').reply(200, {
    predictions: [
        { description: 'Place 1' },
        { description: 'Place 2' },
        { description: 'Place 3' },
    ],
});