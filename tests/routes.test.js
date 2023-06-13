import { getRoute } from './modules/routes';
import axios from 'axios';

jest.mock('axios');

describe('getRoute', () => {
    it('should get a route', async () => {
        const mockResponse = {
            data: {
                status: 'OK',
                routes: ['Route 1', 'Route 2'],
            },
        };

        axios.get.mockResolvedValue(mockResponse);

        const origin = 'New York';
        const destination = 'Los Angeles';
        const result = await getRoute(origin, destination);

        expect(result).toEqual('Route 1');
        expect(axios.get).toHaveBeenCalledWith('https://maps.googleapis.com/maps/api/directions/json', {
            params: {
                origin,
                destination,
                key: 'YOUR_API_KEY',
            },
        });
    });

    it('should handle API errors', async () => {
        const mockResponse = {
            data: {
                status: 'ERROR',
                error_message: 'API error',
            },
        };

        axios.get.mockResolvedValue(mockResponse);

        const origin = 'New York';
        const destination = 'Los Angeles';
        const result = await getRoute(origin, destination);

        expect(result).toBeNull();
    });

    it('should handle request errors', async () => {
        const mockError = new Error('Network error');
        axios.get.mockRejectedValue(mockError);

        const origin = 'New York';
        const destination = 'Los Angeles';
        const result = await getRoute(origin, destination);

        expect(result).toBeNull();
    });
});
