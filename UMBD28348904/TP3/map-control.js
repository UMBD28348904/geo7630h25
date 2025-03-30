var map = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/dataviz/style.json?key=JhO9AmIPH59xnAn5GiSj',
    center: [-73.55, 45.55],
    zoom: 10,
    hash: true
});

map.addControl(new maplibregl.NavigationControl());
map.addControl(new maplibregl.AttributionControl({ compact: true }));

var scale = new maplibregl.ScaleControl({ unit: 'metric' });
map.addControl(scale);

const inondationdropdown = document.getElementById('inondation-dropdown');
setTimeout(() => { inondationdropdown.disabled = false; }, 1000);

var arrondissementsSource = {
    type: 'geojson',
    data: 'https://donnees.montreal.ca/dataset/9797a946-9da8-41ec-8815-f6b276dec7e9/resource/e18bfd07-edc8-4ce8-8a5a-3b617662a794/download/limites-administratives-agglomeration.geojson'
};

var vulnerabiliteSource = {
    type: 'geojson',
    data: 'https://donnees.montreal.ca/dataset/3603f75a-1963-4130-9fc5-ab3e7272211a/resource/01afc867-11f2-4a3b-b77e-d5e9ee853c87/download/vulnerabilite-crues-polygones-simplifies-2022.geojson'
};

var arrondissementsLayer = {
    id: 'arrondissements',
    type: 'fill',
    source: 'arrondissementsSource',
    paint: {
        'fill-color': '#ccc',
        'fill-opacity': 0.5,
        'fill-outline-color': '#000'
    },
    layout: { 'visibility': 'visible' }
};

var vulnerabiliteLayer = {
    id: 'vulnerabilite',
    type: 'fill',
    source: 'vulnerabiliteSource',
    paint: {
        'fill-color': [
          'match',
          ['get', 'CruesCat'],
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
};

function generateLegend() {
    const legend = document.getElementById('legend');
    legend.innerHTML = '';
    const categories = [
        { label: 'Non significative', color: 'orange' },
        { label: 'Mineure', color: 'yellow' },
        { label: 'Modéré', color: 'blue' },
        { label: 'Élevée', color: 'green' },
        { label: 'Majeure', color: 'purple' },
        { label: 'S.O.', color: '#ec7063' }
    ];

    categories.forEach(category => {
        const legendItem = document.createElement('div');
        legendItem.classList.add('legend-item');

        const colorBox = document.createElement('div');
        colorBox.classList.add('legend-color');
        colorBox.style.backgroundColor = category.color;
        colorBox.dataset.value = category.label;

        const label = document.createElement('span');
        label.classList.add('legend-label');
        label.textContent = category.label;

        legendItem.appendChild(colorBox);
        legendItem.appendChild(label);
        legendItem.addEventListener('click', function () {
            inondationdropdown.value = category.label;
            updateMapLayer();
        });

        legend.appendChild(legendItem);
    });
}

function updateMapLayer() {
    const selectedCategory = inondationdropdown.value;
    if (selectedCategory) {
        map.setFilter('vulnerabilite', ['==', ['get', 'CruesCat'], selectedCategory]);
    } else {
        map.setFilter('vulnerabilite', null);
    }
}

inondationdropdown.addEventListener('change', updateMapLayer);

document.getElementById('neighborhoods').addEventListener('change', function () {
    const visibility = this.checked ? 'visible' : 'none';
    map.setLayoutProperty('arrondissements', 'visibility', visibility);
});

map.on('load', function () {
    map.addSource('arrondissementsSource', arrondissementsSource);
    map.addLayer(arrondissementsLayer);
    map.addSource('vulnerabiliteSource', vulnerabiliteSource);
    map.addLayer(vulnerabiliteLayer);
    generateLegend();
});
