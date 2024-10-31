if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var userLocation = [position.coords.latitude, position.coords.longitude];
        
        var map = L.map('map').setView(userLocation, 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker(userLocation).addTo(map)
            .bindPopup('Locația utilizatorului')
            .openPopup();

        
        var sellerLocation = [40.7128, -74.0060]; // replace with actual seller coordinates
        L.Routing.control({
             waypoints: [
                L.latLng(userLocation),
                L.latLng(sellerLocation)
             ],
             routeWhileDragging: true
         }).addTo(map);
    });
} else {
    alert("Geolocation is not supported by this browser.");
}
