
document.addEventListener('DOMContentLoaded', function() {
    // Initialisation de la carte MapLibre GL
    const map = new maplibregl.Map({
        container: 'map', // identifiant de l'élément HTML conteneur de la carte
        style: 'https://api.maptiler.com/maps/dataviz/style.json?key=JhO9AmIPH59xnAn5GiSj', // URL du style de la carte
        center: [-73.55, 45.55], // position centrale de la carte
        zoom: 11, // niveau de zoom initial
        hash: true // activation du hash pour la gestion de l'historique de la carte
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



      //Labels des arrondissements
    var arrondissementsLabelsLayer = {
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
      };

    // Ajout de la source et couche des arrondissements
    map.on('load', function () {
        map.addSource('arrondissementsSource', arrondissementsSource);
        map.addLayer(arrondissementsLayer);
        map.addLayer(arrondissementsLabelsLayer);
    });

    // Gestion de la case à cocher pour afficher/masquer les arrondissements
    document.getElementById('neighborhoods').addEventListener('change', function (e) {
        const visibility = e.target.checked ? 'visible' : 'none';
        map.setLayoutProperty('arrondissements', 'visibility', visibility);
        map.setLayoutProperty('arrondissements-labels', 'visibility', visibility);
    });
});
