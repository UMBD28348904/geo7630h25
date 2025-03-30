// création de la carte Mapbox GL
var map = new maplibregl.Map({
    container: 'map', // identifiant de l'élément HTML conteneur de la carte
    style: 'https://api.maptiler.com/maps/dataviz/style.json?key=JhO9AmIPH59xnAn5GiSj', // URL du style de la carte
    center: [-73.55, 45.55], // position centrale de la carte
    zoom: 9, // niveau de zoom initial
    hash: true // activation du hash pour la gestion de l'historique de la carte
});

var nav = new maplibregl.NavigationControl({
    showCompass: true,
    showZoom: true,
    visualizePitch: true
});
map.addControl(nav, 'top-right');

var geolocateControl = new maplibregl.GeolocateControl({
    positionOptions: { enableHighAccuracy: true },
    trackUserLocation: true
});
map.addControl(geolocateControl, 'bottom-right');

var scale = new maplibregl.ScaleControl({ unit: 'metric' });
map.addControl(scale);




// Récupération de la liste déroulante
const inondationdropdown = document.getElementById('inondation-dropdown');

// activation de la liste déroulante (à adapter selon votre logique)
setTimeout(() => {inondationdropdown.disabled = false;}, 1000); // Simule un chargement avant d'activer


const arrondissementsSource = {
    type: 'geojson',
    data: 'https://donnees.montreal.ca/dataset/9797a946-9da8-41ec-8815-f6b276dec7e9/resource/e18bfd07-edc8-4ce8-8a5a-3b617662a794/download/limites-administratives-agglomeration.geojson'
};

const vulnerabiliteSource = {
    type: 'geojson',
    data: 'https://donnees.montreal.ca/dataset/3603f75a-1963-4130-9fc5-ab3e7272211a/resource/01afc867-11f2-4a3b-b77e-d5e9ee853c87/download/vulnerabilite-crues-polygones-simplifies-2022.geojson'
};

map.on('load', function () {
    map.addSource('arrondissements', arrondissementsSource);
    map.addLayer({
        id: 'arrondissements',
        type: 'fill',
        source: 'arrondissements',
        paint: {
            'fill-color': '#ccc',
            'fill-opacity': 0.5,
            'fill-outline-color': '#000'
        },
        layout: { 'visibility': 'visible' }
    });

    map.addSource('vulnerabilite', vulnerabiliteSource);
    map.addLayer({
        id: 'vulnerabilite',
        type: 'fill',
        source: 'vulnerabilite',
        paint: {
            'fill-color': [
                'match', ['get', 'CruesCat'],
                'Non significative', 'orange',
                'Mineure', 'yellow',
                'Modéré', 'blue',
                'Élevée', 'green',
                'Majeure', 'purple',
                'S.O.', '#ec7063',
                'grey'
            ],
            'fill-outline-color': '#fff',
            'fill-opacity': 0.7
        },
        layout: { 'visibility': 'visible' }
    });
    generateLegend();
});

const categories = [
    { label: 'Non significative', color: 'orange' },
    { label: 'Mineure', color: 'yellow' },
    { label: 'Modéré', color: 'blue' },
    { label: 'Élevée', color: 'green' },
    { label: 'Majeure', color: 'purple' },
    { label: 'S.O.', color: '#ec7063' }
];

function generateLegend() {
    const legend = document.getElementById('legend');
    legend.innerHTML = '';

    categories.forEach(category => {
        const legendItem = document.createElement('div');
        legendItem.classList.add('legend-item');

        const colorBox = document.createElement('div');
        colorBox.classList.add('legend-color');
        colorBox.style.backgroundColor = category.color;

        const label = document.createElement('span');
        label.classList.add('legend-label');
        label.textContent = category.label;

        legendItem.appendChild(colorBox);
        legendItem.appendChild(label);
        legendItem.addEventListener('click', function () {
            inondationDropdown.value = category.label;
            updateMapLayer();
        });

        legend.appendChild(legendItem);
    });
}

function updateMapLayer() {
    const selectedCategory = inondationDropdown.value;
    map.setFilter('vulnerabilite', selectedCategory ? ['==', ['get', 'CruesCat'], selectedCategory] : null);
}

inondationDropdown.addEventListener('change', updateMapLayer);

document.getElementById('neighborhoods').addEventListener('change', function () {
    map.setLayoutProperty('arrondissements', 'visibility', this.checked ? 'visible' : 'none');
});

// Appliquer le filtre lors de la sélection dans le dropdown
inondationDropdown.addEventListener('change', function () {
    updateMapLayer();
});
