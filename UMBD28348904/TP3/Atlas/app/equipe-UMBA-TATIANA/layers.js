// Création de la carte MapLibre GL
var map = new maplibregl.Map({
    container: 'map', // ID de l'élément HTML où la carte sera affichée
    style: 'https://api.maptiler.com/maps/dataviz/style.json?key=JhO9AmIPH59xnAn5GiSj', // Style de la carte (MapTiler)
    center: [-73.55, 45.55], // Centre initial de la carte (longitude, latitude)
    zoom: 10, // Niveau de zoom initial
    hash: true // Active la synchronisation de l'URL avec l'état de la carte (centre, zoom)
});

// Ajout des contrôles de navigation (zoom, rotation)
var nav = new maplibregl.NavigationControl({
    showCompass: true, // Affiche la boussole
    showZoom: true, // Affiche les boutons de zoom
    visualizePitch: true // Permet de visualiser l'inclinaison de la carte
});
map.addControl(nav, 'top-right'); // Ajoute les contrôles en haut à droite de la carte

// Ajout du contrôle de géolocalisation
var geolocateControl = new maplibregl.GeolocateControl({
    positionOptions: { enableHighAccuracy: true }, // Options de géolocalisation (précision élevée)
    trackUserLocation: true // Suit la position de l'utilisateur
});
map.addControl(geolocateControl, 'bottom-right'); // Ajoute le contrôle en bas à droite de la carte

// Ajout du contrôle d'échelle
var scale = new maplibregl.ScaleControl({ unit: 'metric' }); // Échelle en unités métriques
map.addControl(scale); // Ajoute le contrôle d'échelle à la carte