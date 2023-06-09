/* global google */

import {Loader} from "@googlemaps/js-api-loader";

let position;

const loader = new Loader({
    apiKey: 'AIzaSyCKoPmcyA19rfq0dT8CiMOHkkLYYamEsp8',
    version: 'weekly',
    libraries: ['places'],
});

loader.load().then(() => {
    initMap();
}).catch((error) => {
    console.error('Failed to load Google Maps API:', error);
});

function initMap() {
    const CONFIGURATION = {
        "ctaTitle": "Save",
        "mapOptions": {"center":{"lat":51.43990423697764,"lng":5.477415699040112},"fullscreenControl":true,"mapTypeControl":false,"streetViewControl":true,"zoom":14,"zoomControl":true,"maxZoom":22,"mapId":""},
        "mapsApiKey": "AIzaSyCKoPmcyA19rfq0dT8CiMOHkkLYYamEsp8", // Replace with your Google Maps API key
        "capabilities": {"addressAutocompleteControl":true,"mapDisplayControl":true,"ctaControl":true}
    };

    const componentForm = [
        'location',
        'locality',
        'administrative_area_level_1',
        'country',
        'postal_code',
    ];

    const getFormInputElement = (component) => document.getElementById(component + '-input');

    const map = new google.maps.Map(document.getElementById("gmp-map"), {
        zoom: CONFIGURATION.mapOptions.zoom,
        center: { lat: CONFIGURATION.mapOptions.center.lat, lng: CONFIGURATION.mapOptions.center.lng },
        mapTypeControl: false,
        fullscreenControl: CONFIGURATION.mapOptions.fullscreenControl,
        zoomControl: CONFIGURATION.mapOptions.zoomControl,
        streetViewControl: CONFIGURATION.mapOptions.streetViewControl
    });

    const marker = new google.maps.Marker({ map: map, draggable: false });

    const autocompleteInput = getFormInputElement('location');
    const options = {
        componentRestrictions: {
            country: 'nl'
        },
        fields: ["address_components", "geometry", "name"],
        types: ["address"],
        strictBounds: true,
        bounds: new google.maps.LatLngBounds(
            new google.maps.LatLng(51.415996, 5.352832), // South west corner of Eindhoven
            new google.maps.LatLng(51.498414, 5.486059)  // North east corner of Eindhoven
        )
    };

    const autocomplete = new google.maps.places.Autocomplete(autocompleteInput, options);

    autocomplete.addListener('place_changed', function () {
        marker.setVisible(false);
        const place = autocomplete.getPlace();

        if (!place.geometry) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
            window.alert('No details available for input: \'' + place.name + '\'');
            return;
        }
        renderAddress(place);
        fillInAddress(place);
    });

    function fillInAddress(place) {
        const addressNameFormat = {
            'street_number': 'short_name',
            'route': 'long_name',
            'locality': 'long_name',
            'administrative_area_level_1': 'short_name',
            'country': 'long_name',
            'postal_code': 'short_name',
        };

        const getAddressComp = function (type) {
            for (const component of place.address_components) {
                if (component.types[0] === type) {
                    return component[addressNameFormat[type]];
                }
            }
            return '';
        };

        getFormInputElement('location').value = getAddressComp('street_number') + ' '
            + getAddressComp('route');

        for (const component of componentForm) {
            // Location field is handled separately above as it has different logic.
            if (component !== 'location') {
                getFormInputElement(component).value = getAddressComp(component);
            }
        }
    }

    function renderAddress(place) {
        map.setCenter(place.geometry.location);
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);
        position = place;
    }
}

async function saveAddress() {
    const place = position;
    const description = document.getElementById('description').value;

    try {
        const response = await fetch('http://localhost:4080/places', {
            method: 'POST',
            body: JSON.stringify({ place, description }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}

export { initMap, saveAddress };
