import {AddressDTO, AddressComponentDTO, ViewportDTO, PlaceDTO, LocationDTO, GeometryDTO} from "../src/DTO/AddressDTO";

describe('AddressDTO', () => {
    it('should initialize with correct values', () => {
        const id = 1;
        const place = '123 Main Street';
        const description = 'A residential address';

        const address = new AddressDTO(id, place, description);

        expect(address.id).toBe(id);
        expect(address.place).toBe(place);
        expect(address.description).toBe(description);
    });
});

describe('PlaceDTO', () => {
    it('should initialize with correct values', () => {
        const addressComponents = ['component1', 'component2'];
        const geometry = new GeometryDTO({ lat: 1, lng: 2 }, null);
        const name = 'Place';

        const place = new PlaceDTO(addressComponents, geometry, name);

        expect(place.addressComponents).toBe(addressComponents);
        expect(place.geometry).toBe(geometry);
        expect(place.name).toBe(name);
    });
});

describe('GeometryDTO', () => {
    it('should initialize with correct values', () => {
        const location = new LocationDTO(1, 2);
        const viewport = new ViewportDTO(1, 2, 3, 4);

        const geometry = new GeometryDTO(location, viewport);

        expect(geometry.location).toBe(location);
        expect(geometry.viewport).toBe(viewport);
    });
});

describe('LocationDTO', () => {
    it('should initialize with correct values', () => {
        const lat = 1;
        const lng = 2;

        const location = new LocationDTO(lat, lng);

        expect(location.lat).toBe(lat);
        expect(location.lng).toBe(lng);
    });
});

describe('ViewportDTO', () => {
    it('should initialize with correct values', () => {
        const south = 1;
        const west = 2;
        const north = 3;
        const east = 4;

        const viewport = new ViewportDTO(south, west, north, east);

        expect(viewport.south).toBe(south);
        expect(viewport.west).toBe(west);
        expect(viewport.north).toBe(north);
        expect(viewport.east).toBe(east);
    });
});

describe('AddressComponentDTO', () => {
    it('should initialize with correct values', () => {
        const longName = 'Long Name';
        const shortName = 'Short Name';
        const types = ['type1', 'type2'];

        const addressComponent = new AddressComponentDTO(longName, shortName, types);

        expect(addressComponent.longName).toBe(longName);
        expect(addressComponent.shortName).toBe(shortName);
        expect(addressComponent.types).toBe(types);
    });
});
