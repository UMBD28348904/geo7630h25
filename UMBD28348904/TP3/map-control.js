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

    var commercesSource = {
        type: 'geojson',
        data: 'https://donnees.montreal.ca/dataset/c1d65779-d3cb-44e8-af0a-b9f2c5f7766d/resource/ece728c7-6f2d-4a51-a36d-21cd70e0ddc7/download/businesses.geojson'
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

    // Définition de la couche avec symbologie par type de commerce
var commercesLayer = {
    id: 'commerces',
    type: 'circle',
    source: 'commercesSource',

    paint: {
        // Rayon variable selon le type
        'circle-radius': [
          'match',
          ['get', 'type'],
          'Épicerie', 5,
          'Pâtisserie/Boulangerie', 7,
          'Distributrice automatique', 4,
          'Pharmacie', 6,
          'Restaurant', 5,
          3 // taille par défaut
        ],
        // Couleur variable selon le type
        'circle-color': [
          'match',
          ['get', 'type'],
          'Épicerie', 'orange',
          'Pâtisserie/Boulangerie', 'yellow',
          'Distributrice automatique', 'blue',
          'Pharmacie', 'green',
          'Restaurant', 'purple',
          'grey' // couleur par défaut
        ],
        'circle-stroke-color': '#fff',
        'circle-stroke-width': 1
      },  
      filter: ['==', ['get', 'statut'], 'Ouvert']
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

