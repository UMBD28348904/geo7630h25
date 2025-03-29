/* script.js */
    // création de la carte Mapbox GL
    var map = new maplibregl.Map({
        container: 'map', // identifiant de l'élément HTML conteneur de la carte
        style: 'https://api.maptiler.com/maps/dataviz/style.json?key=JhO9AmIPH59xnAn5GiSj', // URL du style de la carte
        center: [-73.55, 45.55], // position centrale de la carte
        zoom: 10, // niveau de zoom initial
        hash: true // activation du hash pour la gestion de l'historique de la carte
        });


    // Ajouter les contrôles de navigation (zoom, rotation)
        map.addControl(new maplibregl.NavigationControl());

    // Désactiver l'affichage des attributions par défaut (car inclus dans la source)
        map.addControl(new maplibregl.AttributionControl({
        compact: true
    }));

    //  Echelle
    var scale = new maplibregl.ScaleControl({ unit: 'metric' });
        map.addControl(scale);

    // Récupération de la liste déroulante
    const inondationdropdown = document.getElementById('inondation-dropdown');

    // Exemple d'activation de la liste déroulante (à adapter selon votre logique)
    setTimeout(() => {
        inondationdropdown.disabled = false;
    }, 1000); // Simule un chargement avant d'activer

    // Définition des sources de données
    var arrondissementsSource = {
        type: 'geojson',
        data: 'https://donnees.montreal.ca/dataset/9797a946-9da8-41ec-8815-f6b276dec7e9/resource/e18bfd07-edc8-4ce8-8a5a-3b617662a794/download/limites-administratives-agglomeration.geojson'
    };





    // Définition des couches

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


  


      //Definitions de Label

      // Arrondissement

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

