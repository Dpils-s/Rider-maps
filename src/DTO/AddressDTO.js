export class AddressDTO {
    constructor(id, place, description) {
        this.id = id;
        this.place = place;
        this.description = description;
    }
}

export class PlaceDTO {
    constructor(addressComponents, geometry, name) {
        this.addressComponents = addressComponents;
        this.geometry = geometry;
        this.name = name;
    }
}

export class GeometryDTO {
    constructor(location, viewport) {
        this.location = location;
        this.viewport = viewport;
    }
}

export class LocationDTO {
    constructor(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
}

export class ViewportDTO {
    constructor(south, west, north, east) {
        this.south = south;
        this.west = west;
        this.north = north;
        this.east = east;
    }
}

export class AddressComponentDTO {
    constructor(longName, shortName, types) {
        this.longName = longName;
        this.shortName = shortName;
        this.types = types;
    }
}