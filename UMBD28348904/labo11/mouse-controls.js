// mouse-controls.js

map.on('mouseenter', 'commerces', (e) => {
    // Change le style du curseur comme indicateur d'interface utilisateur uniquement pour la couche 'commerces'.
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'commerces', () => {
    // Réinitialise le style du curseur lorsqu'il quitte la couche 'commerces'.
    map.getCanvas().style.cursor = '';
});

map.on('click', 'commerces', (e) => {
    // Vérifie si des entités ont été cliquées dans la couche 'commerces'
    if (e.features.length > 0) {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const properties = e.features[0].properties;

        // Crée le contenu HTML pour la popup du commerce (nom et type uniquement)
        const popupHTML = `<b>${properties.name}</b><br>Type: ${properties.type}`;

        // S'assure que si la carte est dézoomée de telle sorte que plusieurs
        // copies de l'entité sont visibles, la popup apparaît
        // au-dessus de la copie pointée.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(popupHTML)
            .addTo(map);
    }
});

// Pas besoin d'ajouter d'autres écouteurs d'événements pour le moment,
// car la demande était de se concentrer uniquement sur la couche 'commerces'
// pour afficher le nom et le type.