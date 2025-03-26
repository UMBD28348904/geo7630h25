 var arrondissementsSource = {
    type: 'geojson',
    data: 'https://donnees.montreal.ca/dataset/9797a946-9da8-41ec-8815-f6b276dec7e9/resource/e18bfd07-edc8-4ce8-8a5a-3b617662a794/download/limites-administratives-agglomeration.geojson'
  };
   
  var arrondissementsLayer = {
    id: 'arrondissements',
    type: 'fill',
    source: 'arrondissementsSource', // Assurez-vous que le nom de la source correspond ici
    paint: {
      'fill-color': '#ccc',
      'fill-opacity': 0.3,
      'fill-outline-color': '#000'
    }
  };
   