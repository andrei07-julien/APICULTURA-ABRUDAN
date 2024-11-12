navigator.geolocation.getCurrentPosition(function(position) {
    var userLocation = [position.coords.latitude, position.coords.longitude];
    var sellerLocation = [47.065948, 22.851891]; // Replace with actual seller coordinates

    var map = L.map('map').setView(userLocation, 13);

    var streetLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var satelliteLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)'
    });
    

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

    document.getElementById('toggleView').addEventListener('click', function() { 
        if (map.hasLayer(streetLayer)) {
            map.removeLayer(streetLayer);
            map.addLayer(satelliteLayer);
            document.getElementById('toggleView').textContent = 'Satellite View';
        }
        else {
            map.removeLayer(satelliteLayer);
            map.addLayer(streetLayer);
            document.getElementById('toggleView').textContent = 'Street View';
        }
    });
    
   
    
});
