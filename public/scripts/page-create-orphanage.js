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

function addPhotoField() {
    //get photo container #images
    const container = document.getElementById('images');

    //get container to be duplicated .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload');

    //duplicate last added photo
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    const input = newFieldContainer.children[0];

    if(input.value === "")
        return;

    //clean value
    input.value = "";

    //add duplicated photo to the container
    container.appendChild(newFieldContainer);
}

function deletePhotoField(event) {
    const span = event.currentTarget;
    
    const fieldsContainer = document.querySelectorAll('.new-upload');

    if(fieldsContainer.length === 1) {
        span.parentNode.children[0].value = "";
        return;
    }

    container = span.parentNode;

    container.remove();

    console.log(event.currentTarget);
}

function toggleSelect(event) {
    //update .active
    const buttons = document.querySelectorAll(".button-select button");
    
    buttons.forEach(element => element.classList.remove("active")); /*arrow function não precisa de () nos parâmetros se apenas um for passado e não precisa de {} no corpo se apenas uma linha a ser executada*/

    //get clicked button
    const button = event.currentTarget;
    button.classList.add("active");

    //update hidden input value
    const input = document.querySelector("#open-on-weekends");
    
    input.value = button.dataset.value; /*dataset.x retorna valor de inserido na propriedade data-x do elemento*/

    console.log(input.value);
}