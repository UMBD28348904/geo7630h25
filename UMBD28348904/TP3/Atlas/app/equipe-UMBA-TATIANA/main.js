
document.addEventListener('DOMContentLoaded', function() {
    // Initialisation de la carte MapLibre GL
    const map = new maplibregl.Map({
        container: 'map',
        style: {
            'version': 8,
            'sources': {
                'esri-light-gray': {
                    'type': 'raster',
                    'tiles': [
                        'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
                    ],
                    'tileSize': 256,
                    'attribution': 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
                }
            },
            'layers': [
                {
                    'id': 'esri-light-gray',
                    'type': 'raster',
                    'source': 'esri-light-gray'
                }
            ]
        },
        center: [-73.55, 45.55], // Coordonnées de Montréal [longitude, latitude]
        zoom: 10
    });

    // Ajouter les contrôles de navigation (zoom, rotation)
    map.addControl(new maplibregl.NavigationControl());

    // Attribution compacte
    map.addControl(new maplibregl.AttributionControl({ compact: true }));

    // Echelle
    var scale = new maplibregl.ScaleControl({ unit: 'metric' });
    map.addControl(scale);

    // Activation différée de la liste déroulante
    const inondationdropdown = document.getElementById('inondation-dropdown');
    setTimeout(() => {
        inondationdropdown.disabled = false;
    }, 1000);

    // Source et couche des arrondissements
    var arrondissementsSource = {
        type: 'geojson',
        data: 'https://donnees.montreal.ca/dataset/9797a946-9da8-41ec-8815-f6b276dec7e9/resource/e18bfd07-edc8-4ce8-8a5a-3b617662a794/download/limites-administratives-agglomeration.geojson'
    };

    var arrondissementsLayer = {
        id: 'arrondissements',
        type: 'fill',
        source: 'arrondissementsSource',
        paint: {
            'fill-color': '#ccc',
            'fill-opacity': 0.5,
            'fill-outline-color': '#000'
        }
    };

    // Ajout de la source et couche des arrondissements
    map.on('load', function () {
        map.addSource('arrondissementsSource', arrondissementsSource);
        map.addLayer(arrondissementsLayer);
    });

    // Gestion de la case à cocher pour afficher/masquer les arrondissements
    document.getElementById('neighborhoods').addEventListener('change', function (e) {
        map.setLayoutProperty('arrondissements', 'visibility', e.target.checked ? 'visible' : 'none');
    });
});
