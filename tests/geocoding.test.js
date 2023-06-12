import {geocode} from "./modules/geocoding";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('Geocoding', () => {
    const mock = new MockAdapter(axios);

    it('should return the correct coordinates for a given address', async () => {
        const address = '1600 Amphitheatre Parkway, Mountain View, CA';

        mock
            .onGet('https://maps.googleapis.com/maps/api/geocode/json', {
                params: {
                    address: address,
                    key: process.env.API_KEY,
                },
            })
            .reply(200, {
                results: [
                    {
                        geometry: {
                            location: {
                                lat: 37.4224764,
                                lng: -122.0842499,
                            },
                        },
                    },
                ],
            });

        const coordinates = await geocode(address);

        expect(coordinates).toEqual({ lat: 37.4224764, lng: -122.0842499 });
    });
});
