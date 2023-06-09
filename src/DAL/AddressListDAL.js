import { AddressDTO, PlaceDTO, GeometryDTO, LocationDTO, ViewportDTO, AddressComponentDTO } from '@/DTO/AddressDTO'; // Import the DTO classes

async function getAllAddresses() {
    try {
        const response = await fetch('http://localhost:4080/places');
        const data = await response.json();

        const addresses = data.map(item => {
            const location = new LocationDTO(item.place.geometry.location.lat, item.place.geometry.location.lng);
            const viewport = new ViewportDTO(
                item.place.geometry.viewport.south,
                item.place.geometry.viewport.west,
                item.place.geometry.viewport.north,
                item.place.geometry.viewport.east
            );

            const geometry = new GeometryDTO(location, viewport);

            const addressComponents = item.place.address_components.map(component =>
                new AddressComponentDTO(component.long_name, component.short_name, component.types)
            );

            const place = new PlaceDTO(addressComponents, geometry, item.place.name);

            return new AddressDTO(item._id.$oid, place, item.description);
        });

        return addresses;
    } catch (error) {
        console.error('Error:', error);
        return []; // Return an empty array in case of an error
    }
}
export {getAllAddresses};
