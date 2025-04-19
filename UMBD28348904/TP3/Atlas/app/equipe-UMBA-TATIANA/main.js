document.addEventListener('DOMContentLoaded', function () {
    // Initialisation de la carte MapLibre GL
    const map = new maplibregl.Map({
        container: 'map',
        style: 'https://api.maptiler.com/maps/dataviz/style.json?key=JhO9AmIPH59xnAn5GiSj',
        center: [-73.55, 45.55],
        zoom: 11,
        hash: true
    });

    map.addControl(new maplibregl.NavigationControl());
    map.addControl(new maplibregl.AttributionControl({ compact: true }));
    const scale = new maplibregl.ScaleControl({ unit: 'metric' });
    map.addControl(scale);

    // Activation différée de la liste déroulante
    const inondationdropdown = document.getElementById('inondation-dropdown');
    setTimeout(() => {
        inondationdropdown.disabled = false;
    }, 1000);

    // Données des arrondissements
    const arrondissementsSourceUrl = 'https://donnees.montreal.ca/dataset/9797a946-9da8-41ec-8815-f6b276dec7e9/resource/e18bfd07-edc8-4ce8-8a5a-3b617662a794/download/limites-administratives-agglomeration.geojson';

    // Chargement des sources et couches après le chargement de la carte
    map.on('load', function () {
        // Source des arrondissements
        map.addSource('arrondissementsSource', {
            type: 'geojson',
            data: arrondissementsSourceUrl
        });

        // Couche de remplissage des arrondissements
        map.addLayer({
            id: 'arrondissements',
            type: 'fill',
            source: 'arrondissementsSource',
            paint: {
                'fill-color': '#ccc',
                'fill-opacity': 0.5,
                'fill-outline-color': '#000'
            }
        });

        // Couche de labels des arrondissements
        map.addLayer({
            id: 'arrondissements-labels',
            type: 'symbol',
            source: 'arrondissementsSource',
            layout: {
                'text-field': ['get', 'NOM'],
                'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
                'text-size': 14,
                'text-anchor': 'center'
            },
            paint: {
                'text-color': '#111',
                'text-halo-color': '#fff',
                'text-halo-width': 2
            }
        });

        // Chargement de la couche de risque d'inondation
        fetch('https://services6.arcgis.com/133a00biU9FItiqJ/arcgis/rest/services/inondation_sortie_(2)/FeatureServer/0/query?where=1=1&outFields=*&f=geojson')
            .then(response => response.json())
            .then(data => {
                map.addSource('risque_inondation', {
                    type: 'geojson',
                    data: data
                });

                map.addLayer({
                    id: 'risque_inondation',
                    type: 'fill',
                    source: 'risque_inondation',
                    paint: {
                        'fill-color': 'black',
                        'fill-opacity': 0.4,
                        'fill-outline-color': '#880000'
                    }
                });
            })
            
    });

    // Afficher/masquer les arrondissements via la case à cocher
    document.getElementById('neighborhoods').addEventListener('change', function (e) {
        const visibility = e.target.checked ? 'visible' : 'none';
        map.setLayoutProperty('arrondissements', 'visibility', visibility);
        map.setLayoutProperty('arrondissements-labels', 'visibility', visibility);
    });
});
