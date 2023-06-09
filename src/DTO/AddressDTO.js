class AddressDTO {
    constructor(id, place, description) {
        this.id = id;
        this.place = place;
        this.description = description;
    }
}

class PlaceDTO {
    constructor(addressComponents, geometry, name) {
        this.addressComponents = addressComponents;
        this.geometry = geometry;
        this.name = name;
    }
}

class GeometryDTO {
    constructor(location, viewport) {
        this.location = location;
        this.viewport = viewport;
    }
}

class LocationDTO {
    constructor(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
}

class ViewportDTO {
    constructor(south, west, north, east) {
        this.south = south;
        this.west = west;
        this.north = north;
        this.east = east;
    }
}

class AddressComponentDTO {
    constructor(longName, shortName, types) {
        this.longName = longName;
        this.shortName = shortName;
        this.types = types;
    }
}

export {AddressDTO, PlaceDTO, GeometryDTO, LocationDTO, ViewportDTO, AddressComponentDTO}