// Définition de la source GeoJSON
var commercesSource = {
    type: 'geojson',
    data: 'https://donnees.montreal.ca/dataset/c1d65779-d3cb-44e8-af0a-b9f2c5f7766d/resource/ece728c7-6f2d-4a51-a36d-21cd70e0ddc7/download/businesses.geojson'
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
      }  
  };

  