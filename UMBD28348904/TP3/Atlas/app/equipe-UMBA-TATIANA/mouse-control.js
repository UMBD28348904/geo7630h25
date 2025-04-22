// 1. Survol : curseur pointeur sur les commerces
map.on('mouseenter', 'commerces', () => {
    map.getCanvas().style.cursor = 'pointer';
  });
  
  map.on('mouseleave', 'commerces', () => {
    map.getCanvas().style.cursor = '';
  });
  
  // 2. Fonction compteur
  function mettreAJourCompteur() {
    const features = map.queryRenderedFeatures({ layers: ['commerces'] });
    const compteurElement = document.getElementById('compteur');
    if (compteurElement) {
        compteurElement.innerText = `Commerces visibles : ${features.length}`;
    }
  }
  
  // 3. Filtre + compteur dans le même bloc
  const filtreTypeElement = document.getElementById('filtreType');
  if (filtreTypeElement) {
    filtreTypeElement.addEventListener('change', function () {
        const type = this.value;
  
        if (type === 'Tous') {
            map.setFilter('commerces', ['==', ['get', 'statut'], 'Ouvert']);
        } else {
            map.setFilter('commerces', ['all',
                ['==', ['get', 'statut'], 'Ouvert'],
                ['==', ['get', 'type'], type]
            ]);
        }
  
        // 🔁 Mise à jour du compteur après filtrage
        mettreAJourCompteur();
    });
  }
  
  // 4. Mise à jour du compteur après déplacement/zoom
  map.on('moveend', mettreAJourCompteur);
  
  // 5. Clic sur un commerce = popup + zoom + panneau latéral
  map.on('click', 'commerces', (e) => {
    var feature = e.features[0];
    var props = feature.properties;
    var coords = feature.geometry.coordinates;
  
    new maplibregl.Popup()
        .setLngLat(coords)
        .setHTML(`<strong>${props.name}</strong><br>Type : ${props.type}`)
        .addTo(map);
  
    map.flyTo({
        center: coords,
        zoom: 15,
        speed: 0.8
    });
  
    const sidebarElement = document.getElementById('sidebar');
    if (sidebarElement) {
        sidebarElement.innerHTML = `
            <h3>${props.name}</h3>
            <p><strong>Type :</strong> ${props.type}</p>
            <p><strong>Statut :</strong> ${props.statut}</p>
        `;
    }
  });
  
  // Assurez-vous que ce bloc est exécuté APRÈS l'initialisation de la carte (`map`)
  // et que les éléments HTML avec les IDs 'compteur', 'filtreType' et 'sidebar' existent.
  map.on('load', () => {
    // Ajouter les sources à la carte
    if (!map.getSource('commercesSource')) {
        map.addSource('commercesSource', commercesSource);
    }
    if (!map.getSource('arrondissementsSource')) {
        map.addSource('arrondissementsSource', arrondissementsSource);
    }
  
    // Ajouter les couches à la carte
    if (!map.getLayer('commerces')) {
        map.addLayer(commercesLayer);
    }
    if (!map.getLayer('arrondissements')) {
        map.addLayer(arrondissementsLayer);
    }
    if (!map.getLayer('arrondissements-labels')) {
        map.addLayer(arrondissementsLabelsLayer);
    }
  
    // Appel initial du compteur après le chargement des données
    mettreAJourCompteur();
  });