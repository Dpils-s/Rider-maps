import { getRoute } from './modules/routes';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import expect from "expect";


describe('Routes', () => {
    // Create a new instance of the mock adapter
    const mock = new MockAdapter(axios);

    beforeEach(() => {
        mock.reset();
    });

    it('should return the correct route for a given origin and destination', async () => {
        const origin = 'New York';
        const destination = 'Los Angeles';

        // Mock the Routes API response for the specific request
        mock.onGet('https://maps.googleapis.com/maps/api/directions/json').reply(200, {
            status: "OK",
            routes: [
                { distance: { text: '2797 mi', value: 4490728 }, duration: { text: '1 day 17 hours', value: 149962 } },
            ],
        });

        // Test the getRoute function with the sample origin and destination
        const route = await getRoute(origin, destination);

        // Assertions
        expect(route.distance.text).toBe('2797 mi');
        expect(route.duration.text).toBe('1 day 17 hours');
    });

    it('should handle API errors gracefully', async () => {
        const origin = 'Invalid Origin';
        const destination = 'Invalid Destination';

        // Mock an API error response
        mock.onGet('https://maps.googleapis.com/maps/api/directions/json').reply(500, {
            error_message: 'Internal server error',
        });

        // Test the getRoute function with the sample origin and destination
        const route = await getRoute(origin, destination);

        // Assertions
        expect(route).toBeNull();
    });
});
