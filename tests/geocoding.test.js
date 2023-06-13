import { geocode } from './modules/geocoding';
import axios from 'axios';

jest.mock('axios');

describe('geocode', () => {
    it('should geocode an address', async () => {
        const mockResponse = {
            data: {
                results: [
                    {
                        geometry: {
                            location: {
                                lat: 123,
                                lng: 456,
                            },
                        },
                    },
                ],
            },
        };

        axios.get.mockResolvedValue(mockResponse);

        const address = 'New York, USA';
        const result = await geocode(address);

        expect(result).toEqual({ lat: 123, lng: 456 });
        expect(axios.get).toHaveBeenCalledWith('https://maps.googleapis.com/maps/api/geocode/json', {
            params: {
                address: address,
                key: process.env.API_KEY,
            },
        });
    });

    it('should return null on Geocoding API error', async () => {
        const mockError = new Error('API error');
        axios.get.mockRejectedValue(mockError);

        const address = 'Invalid address';
        const result = await geocode(address);

        expect(result).toBeNull();
    });
});
