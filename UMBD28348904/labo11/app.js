
// Ajout des sources et des couches à la carte une fois qu'elle est chargée
    map.on('load', function () {
        map.addSource('commercesSource', commercesSource);
        map.addLayer(commercesLayer);

        //map.addSource('quartiersSource', quartiersSource);
        //map.addLayer(quartierLayer);
    });