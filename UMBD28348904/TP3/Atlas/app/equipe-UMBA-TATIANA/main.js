document.addEventListener('DOMContentLoaded', function () {
    // Initialisation de la carte MapLibre GL
    const map = new maplibregl.Map({
        container: 'map',
        style: 'https://api.maptiler.com/maps/dataviz/style.json?key=JhO9AmIPH59xnAn5GiSj',
        center: [-73.55, 45.55],
        zoom: 10,
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

    // Données des arrondissements et collisions
    const arrondissementsSourceUrl = 'https://donnees.montreal.ca/dataset/9797a946-9da8-41ec-8815-f6b276dec7e9/resource/e18bfd07-edc8-4ce8-8a5a-3b617662a794/download/limites-administratives-agglomeration.geojson';
    const collisionurl = 'https://donnees.montreal.ca/fr/dataset/cd722e22-376b-4b89-9bc2-7c7ab317ef6b/resource/3957364a-f579-4bc4-987a-299708fefd3e/download/collisions_routieres.geojson'
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


    // Source des collisions
    map.addSource('collisionsSource', {
        type: 'geojson',
        data: collisionurl
    });

    // Couche de remplissage des collisions
    map.addLayer({
        id: 'collisions',
        type: 'circle',
        source: 'collisionsSource',
        paint: {
    // Couleur variable selon le gravité
      'circle-color': [
        'match',
        ['get', 'GRAVITE'],
        'Dommages matériels inférieurs au seuil de rapportage', 'orange',
        'Dommages matériels seulement', 'yellow',
        'Grave', 'blue',
        'Léger', 'green',
        'Mortel', 'purple',
        'grey' // couleur par défaut
      ],
      'circle-stroke-color': '#fff',
      'circle-stroke-width': 1
        }
    });


            
    });

 // Données des arrondissements
    // Afficher/masquer les arrondissements via la case à cocher
    document.getElementById('neighborhoods').addEventListener('change', function (e) {
        const visibility = e.target.checked ? 'visible' : 'none';
        map.setLayoutProperty('arrondissements', 'visibility', visibility);
        map.setLayoutProperty('arrondissements-labels', 'visibility', visibility);
    });


       // Filtrage des collisions en fonction de la gravité sélectionnée
       inondationdropdown.addEventListener('change', function (e) {
        const selectedValue = e.target.value.trim();

        // Si aucune valeur ou valeur par défaut, on réinitialise le filtre
        if (!selectedValue) {
            map.setFilter('collisions', null);
            return;
        }
        
        // Sinon, on filtre par la gravité choisie
        map.setFilter('collisions', ['==', ['get', 'GRAVITE'], selectedValue]);
    });

});


    // Filtrage des collisions en fonction de la gravité sélectionnée
    
