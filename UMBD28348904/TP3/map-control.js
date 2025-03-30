// Création de la carte MapLibre GL
var map = new maplibregl.Map({
    container: 'map', // ID de l'élément HTML où la carte sera affichée
    style: 'https://api.maptiler.com/maps/dataviz/style.json?key=JhO9AmIPH59xnAn5GiSj', // Style de la carte (MapTiler)
    center: [-73.55, 45.55], // Centre initial de la carte (longitude, latitude)
    zoom: 9, // Niveau de zoom initial
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

// Récupération de l'élément dropdown pour la sélection des catégories d'inondation
const inondationDropdown = document.getElementById('inondation-dropdown');
if (inondationDropdown) {
    // Désactive le dropdown pendant 1 seconde (pour éviter les interactions avant le chargement des données)
    setTimeout(() => { inondationDropdown.disabled = false; }, 1000);
} else {
    // Gestion de l'erreur si l'élément n'est pas trouvé
    console.error('L\'élément inondation-dropdown n\'a pas été trouvé.');
}

// Définition de la source de données pour les arrondissements
const arrondissementsSource = {
    type: 'geojson',
    data: 'https://donnees.montreal.ca/dataset/9797a946-9da8-41ec-8815-f6b276dec7e9/resource/e18bfd07-edc8-4ce8-8a5a-3b617662a794/download/limites-administratives-agglomeration.geojson'
};

// Définition de la source de données pour la vulnérabilité aux inondations
const vulnerabiliteSource = {
    type: 'geojson',
    data: 'https://donnees.montreal.ca/dataset/3603f75a-1963-4130-9fc5-ab3e7272211a/resource/01afc867-11f2-4a3b-b77e-d5e9ee853c87/download/vulnerabilite-crues-polygones-simplifies-2022.geojson'
};

// Liste des catégories d'inondation et leurs couleurs associées
const categories = [
    { label: 'Non significative', color: 'orange' },
    { label: 'Mineure', color: 'yellow' },
    { label: 'Modéré', color: 'blue' },
    { label: 'Élevée', color: 'green' },
    { label: 'Majeure', color: 'purple' },
    { label: 'S.O.', color: '#ec7063' }
];

// Fonction pour générer la légende de la carte
function generateLegend() {
    const legend = document.getElementById('legend');
    if (!legend) return; // Vérifie si l'élément de légende existe
    legend.innerHTML = ''; // Efface le contenu précédent de la légende

    categories.forEach(category => {
        // Création d'un élément pour chaque catégorie dans la légende
        const legendItem = document.createElement('div');
        legendItem.classList.add('legend-item');

        // Création d'un élément pour la couleur de la catégorie
        const colorBox = document.createElement('div');
        colorBox.classList.add('legend-color');
        colorBox.style.backgroundColor = category.color;

        // Création d'un élément pour le label de la catégorie
        const label = document.createElement('span');
        label.classList.add('legend-label');
        label.textContent = category.label;

        // Ajout de la couleur et du label à l'élément de la légende
        legendItem.appendChild(colorBox);
        legendItem.appendChild(label);

        // Ajout d'un écouteur d'événements pour mettre à jour le filtre de la carte lors du clic sur une catégorie
        legendItem.addEventListener('click', function () {
            if (inondationDropdown) {
                inondationDropdown.value = category.label;
                updateMapLayer();
            }
        });

        // Ajout de l'élément de la légende à la légende
        legend.appendChild(legendItem);
    });
}
generateLegend();

// Fonction pour mettre à jour le filtre de la couche de vulnérabilité en fonction de la catégorie sélectionnée
function updateMapLayer() {
    if (inondationDropdown) {
        const selectedCategory = inondationDropdown.value;
        // Applique un filtre à la couche de vulnérabilité en fonction de la catégorie sélectionnée
        map.setFilter('vulnerabilite', selectedCategory ? ['==', ['get', 'CruesCat'], selectedCategory] : null);
    }
}

// Ajout d'un écouteur d'événements pour mettre à jour la couche lorsque la catégorie change dans le dropdown
if(inondationDropdown){
    inondationDropdown.addEventListener('change', updateMapLayer);
}

// Gestion des cases à cocher pour afficher/masquer les couches
document.getElementById('neighborhoods').addEventListener('change', function (e) {
    // Modifie la visibilité des couches des arrondissements et de leurs labels en fonction de l'état de la case à cocher
    map.setLayoutProperty('arrondissements', 'visibility', e.target.checked ? 'visible' : 'none');
    map.setLayoutProperty('arrondissements-labels', 'visibility', e.target.checked ? 'visible' : 'none');
});

// Écouteur d'événements pour le chargement de la carte
map.on('load', function () {
    // Ajout de la source de données pour les arrondissements
    map.addSource('arrondissements', arrondissementsSource);
    // Ajout de la couche pour les polygones des arrondissements
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

    // Ajout de la couche pour les labels des arrondissements
    map.addLayer({
        id: 'arrondissements-labels',
        type: 'symbol',
        source: 'arrondissements',
        layout: {
            'text-field': ['get', 'NOM'],
            'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
            'text-size': 12,
            'visibility': 'visible'
        },
        paint: {
            'text-color': '#000'
        }
    });

    // Ajout de la source de données pour la vulnérabilité aux inondations
    map.addSource('vulnerabilite', vulnerabiliteSource);
    // Ajout de la couche pour les polygones de vulnérabilité
    map.addLayer({
        id: 'vulnerabilite',
        type: 'fill',
        source: 'vulnerabilite',
        paint: {
            'fill-color': [
                'match', ['get', 'CruesCat'], // Associe les couleurs aux catégories de vulnérabilité
                'Non significative', 'orange',
                'Mineure', 'yellow',
                'Modéré', 'blue',
                'Élevée', 'green',
                'Majeure', 'purple',
                'S.O.', '#ec7063',
                'grey' // Couleur par défaut
            ],
            'fill-outline-color': '#fff',
            'fill-opacity': 0.7
        },
        layout: { 'visibility': 'visible' }
    });
});