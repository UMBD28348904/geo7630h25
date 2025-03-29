// Ajout des sources et des couches à la carte une fois qu'elle est chargée

map.on('load', function () {
    map.addSource('arrondissementsSource', arrondissementsSource);
    map.addLayer(arrondissementsLayer);
    map.addLayer(arrondissementsLabelsLayer);


});

