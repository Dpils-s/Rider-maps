import { autocomplete } from './modules/autocomplete';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('Autocomplete', () => {
    // Create a new instance of the mock adapter
    const mock = new MockAdapter(axios);

    // Mock the Autocomplete API response for a specific request
    mock.onGet('https://maps.googleapis.com/maps/api/place/autocomplete/json').reply(200, {
        predictions: [
            { description: 'Place 1' },
            { description: 'Place 2' },
            { description: 'Place 3' },
        ],
    });

    it('should return correct suggestions for a given input', async () => {
        const input = 'New York';

        // Test the autocomplete function with the sample input
        const suggestions = await autocomplete(input);

        // Assertions
        expect(suggestions).toEqual(['Place 1', 'Place 2', 'Place 3']);
    });

    it('should handle API errors gracefully', async () => {
        // Mock an API error response
        mock.onGet('https://maps.googleapis.com/maps/api/place/autocomplete/json').reply(500);

        const input = '""';

        // Test the autocomplete function with the sample input
        const suggestions = await autocomplete(input);

        // Assertions
        expect(suggestions).toEqual([]);
    });
});
