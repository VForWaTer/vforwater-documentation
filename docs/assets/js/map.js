document.addEventListener("DOMContentLoaded", function () {

    const mapElement = document.getElementById("vfw-map");

    if (!mapElement) {
        return;
    }

    const map = L.map("vfw-map").setView(
        [49.0069, 8.4037],
        13
    );

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }
    ).addTo(map);

    const marker = L.marker(
        [49.0069, 8.4037]
    ).addTo(map);

    marker.bindPopup(
        "<strong>V-FOR-WaTer</strong><br>" +
        "Karlsruhe, Germany"
    ).openPopup();

});