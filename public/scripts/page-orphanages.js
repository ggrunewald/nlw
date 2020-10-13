//create array with gps coordinates of porto alegre
const poaCoord = [-30.0443455,-51.2201357]

//create map tied to the mapid element
const map = L.map('mapid').setView(poaCoord, 14);

//insert tile layer into map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//change standard marker's icon to the project logo
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],     //width height
    iconAnchor: [29, 68],   //what point will anchor on the map
    popupAnchor: [170,2]    //whar point popup will anchor on the icon
});

//create popup
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar de São José <a href="orphanage.html?id=1" class="choose-orphanage"><img src="./public/images/arrow-white.svg"></a>');

const larSaoJoseCoord = [-30.0502031,-51.2008241];

L.marker(larSaoJoseCoord, {icon: icon})
    .addTo(map)
    .bindPopup(popup);
