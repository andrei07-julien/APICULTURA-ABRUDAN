// Coordonatele locațiilor
var userLocation = [44.4328, 26.1043]; // Exemplu de coordonate pentru utilizator
var sellerLocation = 47.0680, 22.8631]; // Exemplu de coordonate pentru vânzător

// Inițializează harta
var map = L.map('map').setView(userLocation, 13);

// Adaugă tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Adaugă marcatori
L.marker(userLocation).addTo(map)
    .bindPopup('Locația utilizatorului')
    .openPopup();

L.marker(sellerLocation).addTo(map)
    .bindPopup('Locația vânzătorului')
    .openPopup();

// Adaugă direcții de mers
L.Routing.control({
    waypoints: [
        L.latLng(userLocation),
        L.latLng(sellerLocation)
    ],
    routeWhileDragging: true
}).addTo(map);
