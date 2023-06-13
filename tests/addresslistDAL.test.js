import { getAllAddresses } from '@/DAL/AddressListDAL'; // Replace with the actual file path
import {
    AddressComponentDTO,
    AddressDTO,
    GeometryDTO,
    LocationDTO,
    PlaceDTO,
    ViewportDTO
} from '@/DTO/AddressDTO';

describe('getAllAddresses', () => {
    const mockResponse = [
        {
            _id: { $oid: '1' },
            place: {
                geometry: {
                    location: { lat: 1, lng: 2 },
                    viewport: { south: 1, west: 2, north: 3, east: 4 }
                },
                address_components: [
                    {
                        long_name: 'Component 1',
                        short_name: 'C1',
                        types: ['type1']
                    }
                ],
                name: 'Place 1'
            },
            description: 'Description 1'
        },
        // Add more mock response items as needed
    ];

    beforeEach(() => {
        global.fetch = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue(mockResponse)
        });
    });

    afterEach(() => {
        global.fetch.mockReset();
    });

    it('should fetch addresses and return mapped DTO objects', async () => {
        const addresses = await getAllAddresses();

        expect(fetch).toHaveBeenCalledWith('http://localhost:4080/places');
        expect(addresses).toEqual([
            new AddressDTO(
                '1',
                new PlaceDTO(
                    [
                        new AddressComponentDTO('Component 1', 'C1', ['type1'])
                    ],
                    new GeometryDTO(
                        new LocationDTO(1, 2),
                        new ViewportDTO(1, 2, 3, 4)
                    ),
                    'Place 1'
                ),
                'Description 1'
            )
            // Add more expected AddressDTO objects based on the mock response
        ]);
    });

    it('should handle error and return an empty array', async () => {
        global.fetch.mockRejectedValueOnce(new Error('Network error'));

        const addresses = await getAllAddresses();

        expect(fetch).toHaveBeenCalledWith('http://localhost:4080/places');
        expect(addresses).toEqual([]);
    });
});
