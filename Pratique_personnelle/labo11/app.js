map.on('load', function () {
    // Arrondissements
    map.addSource('arrondissementsSource', arrondissementsSource); // Ajout de la source
    map.addLayer(arrondissementsLayer); // Ajout de la couche des arrondissements
  });