/* script.js */
// Création de la carte Mapbox GL
var map = new maplibregl.Map({
    container: 'map', // Identifiant de l'élément HTML conteneur de la carte
    style: 'https://api.maptiler.com/maps/dataviz/style.json?key=JhO9AmIPH59xnAn5GiSj', // URL du style de la carte
    center: [-73.55, 45.55], // Position centrale de la carte
    zoom: 10, // Niveau de zoom initial
    hash: true // Activation du hash pour la gestion de l'historique de la carte
});

// Ajouter les contrôles de navigation (zoom, rotation)
map.addControl(new maplibregl.NavigationControl());

// Désactiver l'affichage des attributions par défaut (car inclus dans la source)
map.addControl(new maplibregl.AttributionControl({
    compact: true
}));

// Échelle
var scale = new maplibregl.ScaleControl({ unit: 'metric' });
map.addControl(scale);

// Définition des sources GeoJSON
var arrondissementsSource = {
    type: 'geojson',
    data: 'https://donnees.montreal.ca/dataset/9797a946-9da8-41ec-8815-f6b276dec7e9/resource/e18bfd07-edc8-4ce8-8a5a-3b617662a794/download/limites-administratives-agglomeration.geojson'
};

var vulnerabiliteSource = {
    type: 'geojson',
    data: 'https://donnees.montreal.ca/dataset/3603f75a-1963-4130-9fc5-ab3e7272211a/resource/01afc867-11f2-4a3b-b77e-d5e9ee853c87/download/vulnerabilite-crues-polygones-simplifies-2022.geojson'
};

// Définition des couches arrondissement
var arrondissementsLayer = {
    id: 'arrondissements',
    type: 'fill',
    source: 'arrondissementsSource',
    paint: {
        'fill-color': '#ccc',
        'fill-opacity': 0.5,
        'fill-outline-color': '#000'
    },
    layout: {
        'visibility': 'visible' // Affiché par défaut
    }
};

// Couches labels des arrondissements
var arrondissementsLabelsLayer = {
    id: 'arrondissements-labels',
    type: 'symbol',
    source: 'arrondissementsSource',
    layout: {
        'text-field': ['get', 'NOM'],
        'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
        'text-size': 12,
        'text-anchor': 'center'
    },
    paint: {
        'text-color': '#111',
        'text-halo-color': '#fff',
        'text-halo-width': 1.5
    }
};

var vulnerabiliteLayer = {
    id: 'vulnerabilite',
    type: 'fill',
    source: 'vulnerabiliteSource',
    paint: {
        // Couleur variable selon le type de crue
        'fill-color': [
          'match',
          ['get', 'CruesCat'],
          'Non significative', 'orange',
          'Mineure', 'yellow',
          'Modéré', 'blue',
          'Élevée', 'green',
          'Majeure', 'purple',
          'S.O.', '#ec7063 ',
          'grey' // couleur par défaut
        ],
        'fill-outline-color': '#fff', // Correction de fill-stroke-color (propriété inexistante)
        'fill-opacity': 0.7 // Ajout d'une opacité pour une meilleure visibilité
    }, 
    layout: {
        'visibility': 'visible' // Affiché par défaut
    }
};


// Ajout des sources et des couches à la carte une fois qu'elle est chargée
map.on('load', function () {
    map.addSource('arrondissementsSource', arrondissementsSource);
    map.addLayer(arrondissementsLayer);
    map.addLayer(arrondissementsLabelsLayer);

    map.addSource('vulnerabiliteSource', vulnerabiliteSource);
    map.addLayer(vulnerabiliteLayer);
});
