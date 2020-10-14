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
    iconAnchor: [29, 68]   //what point will anchor on the map
});
/*
const larSaoJoseCoord = [-30.0502031,-51.2008241];

L.marker(larSaoJoseCoord, {icon: icon})
    .addTo(map);
*/

let marker;

//create and add marker
map.on("click", (event) => {
    const newCoord = event.latlng;

    //save current coordinates to hidden inputs for later use when submit
    document.querySelector('[name=lat]').value = newCoord.lat;
    document.querySelector('[name=lng]').value = newCoord.lng;

    //remove current marker
    if(marker)
        map.removeLayer(marker);

    //create new marker
    marker = L.marker(newCoord, {icon: icon});

    //insert new marker
    marker.addTo(map);
});


