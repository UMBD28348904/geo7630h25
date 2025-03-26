map.on('load', function () {
    // Arrondissements
    map.addSource('arrondissementsSource', arrondissementsSource); // Ajout de la source
    map.addLayer(arrondissementsLayer); // Ajout de la couche des arrondissement
    map.addLayer(arrondissementsLabelsLayer);

    // Commerces
    map.addSource('commercesSource', commercesSource);
    map.addLayer(commercesLayer);
  });


