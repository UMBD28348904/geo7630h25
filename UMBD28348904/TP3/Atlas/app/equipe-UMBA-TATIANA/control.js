const map = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/dataviz/style.json?key=JhO9AmIPH59xnAn5GiSj',
    center: [-73.55, 45.55],
    zoom: 10,
    hash: true
});


// 1. Curseur pointeur au survol des collisions
map.on('mouseenter', 'collisions', () => {
    map.getCanvas().style.cursor = 'pointer';
});
map.on('mouseleave', 'collisions', () => {
    map.getCanvas().style.cursor = '';
});

// 2. Compteur des collisions visibles à l'écran
function mettreAJourCompteur() {
    const compteurElement = document.getElementById('compteur');
    if (!compteurElement) return;

    // Vérification de la couche "collisions"
    const features = map.queryRenderedFeatures({ layers: ['collisions'] });
    compteurElement.innerText = `Collisions visibles : ${features.length}`;
}

// 3. Filtrage des collisions par gravité via le dropdown
const filtreTypeElement = document.getElementById('inondation-dropdown');
if (filtreTypeElement) {
    filtreTypeElement.addEventListener('change', () => {
        if (!collisionsData) {
            console.warn('Les données de collisions ne sont pas encore chargées.');
            return;
        }

        const type = filtreTypeElement.value.trim();

        if (!type) {
            map.setFilter('collisions', null);
        } else {
            // Vérification du champ 'GRAVITE'
            map.setFilter('collisions', ['==', ['get', 'GRAVITE'], type]);
        }

        mettreAJourCompteur();
    });
}

// 4. Mise à jour du compteur après navigation
map.on('moveend', mettreAJourCompteur);

// 5. Popup au clic sur une collision
map.on('click', 'collisions', (e) => {
    const feature = e.features?.[0];
    if (!feature) return;

    const props = feature.properties;
    const coords = feature.geometry.coordinates;

    // Vérification des propriétés avant d'afficher la popup
    new maplibregl.Popup()
        .setLngLat(coords)
        .setHTML(`
            <strong>Gravité :</strong> ${props.GRAVITE || 'Non spécifiée'}<br>
            <strong>Nombre de morts :</strong> ${props.NB_MORTS || 0}
        `)
        .addTo(map);
});
