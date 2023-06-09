/* global google */

import { Loader } from '@googlemaps/js-api-loader';


const loader = new Loader({
    apiKey: 'AIzaSyCKoPmcyA19rfq0dT8CiMOHkkLYYamEsp8',
    version: 'weekly',
    libraries: ['places'],
});

loader.load().then(() => {
}).catch((error) => {
    console.error('Failed to load Google Maps API:', error);
});

function initMap() {
    const CONFIGURATION = {
        "ctaTitle": "Save",
        "mapOptions": {"center":{"lat":51.43990423697764,"lng":5.477415699040112},"fullscreenControl":true,"mapTypeControl":false,"streetViewControl":true,"zoom":14,"zoomControl":true,"maxZoom":22,"mapId":""},
        "mapsApiKey": 'AIzaSyCKoPmcyA19rfq0dT8CiMOHkkLYYamEsp8',
        "capabilities": {"addressAutocompleteControl":true,"mapDisplayControl":true,"ctaControl":true}
    };
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: CONFIGURATION.mapOptions.zoom,
        center: { lat: CONFIGURATION.mapOptions.center.lat, lng: CONFIGURATION.mapOptions.center.lng },
        mapTypeControl: false,
        fullscreenControl: CONFIGURATION.mapOptions.fullscreenControl,
        zoomControl: CONFIGURATION.mapOptions.zoomControl,
        streetViewControl: CONFIGURATION.mapOptions.streetViewControl,
        bounds: new google.maps.LatLngBounds(
            new google.maps.LatLng(51.415996, 5.352832), // South west corner of Eindhoven
            new google.maps.LatLng(51.498414, 5.486059)  // North east corner of Eindhoven
        )
    });

    directionsRenderer.setMap(map);
    calculateAndDisplayRoute(directionsService, directionsRenderer);
}

function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    const selectedMode = "BICYCLING"
    const storedAddress = JSON.parse(sessionStorage.getItem('address'));
    sessionStorage.clear();


    document.getElementById("description").innerText = "Description: " + storedAddress.description;


    let origin = {
        lat: 51.45167379230297, lng: 5.479739331419246
    };
    let destination = {
        lat: storedAddress.place.geometry.location.lat, lng: storedAddress.place.geometry.location.lng
    };
    directionsService
        .route({
            origin: { lat: parseFloat(origin.lat), lng: parseFloat(origin.lng)},
            destination: { lat: parseFloat(destination.lat), lng: parseFloat(destination.lng)},
            // Note that Javascript allows us to access the constant
            // using square brackets and a string value as its
            // "property."
            travelMode: google.maps.TravelMode[selectedMode],
        })
        .then((response) => {
            directionsRenderer.setDirections(response);
        })
        .catch(() => window.alert("Directions request failed due to " + status));

    const directionsRequest = {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.BICYCLING, // Change to your preferred mode of transportation
        unitSystem: google.maps.UnitSystem.IMPERIAL, // Change to your preferred unit system
    };
    directionsService.route(directionsRequest, function(response, status) {
        if (status === 'OK') {
            // Extract travel time from response
            const travelTime = response.routes[0].legs[0].duration.text;

            // Display travel time to user
            document.getElementById("time").innerText = `Estimated drive time: ${travelTime}`;
        } else {
            document.getElementById("time").innerText = `Directions request failed due to ${status}`;
        }
    });
}
export { initMap };