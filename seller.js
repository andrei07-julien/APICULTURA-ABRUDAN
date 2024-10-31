navigator.geolocation.getCurrentPosition(function(position) {
    var userLocation = [position.coords.latitude, position.coords.longitude];
    var sellerLocation = [47.065948, 22.851891]; // Replace with actual seller coordinates

    var map = L.map('map').setView(userLocation, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker(userLocation).addTo(map)
        .bindPopup('Locația utilizatorului')
        .openPopup();

    // Add seller marker
    L.marker(sellerLocation).addTo(map)
        .bindPopup('Locația vânzătorului')
        .openPopup();

    L.Routing.control({
        waypoints: [
            L.latLng(userLocation),
            L.latLng(sellerLocation)
        ],
        routeWhileDragging: true
    }).addTo(map);
});
