// var map = L.map('map').setView([53.0752, 8.80777], 9);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

var map = L.map('map').setView([53.0752, 8.80777], 9);

// Добавляем темные тайлы от CartoDB

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
}).addTo(map);

map.scrollWheelZoom.disable();

var marker = L.marker([53.0752, 8.80777],
    {alt: 'Bremen'}).addTo(map) // "Kyiv" is the accessible name of this marker
    .bindPopup("mcdsklncklsncskl");

