  # Travail pratique n°3 de l'Intégration et visualisation des données géographique (GEO7630)

Présentés par :

## Dady Umba Dimabanza
## Goncalves Tatiana Patricia





# 📒 Sujet : Modélisation géospatiale des collisions routière à Montréal de 2012 à 2023

## I. Contexte 
Entre 2012 et 2023, Montréal a traversé une période de transformation urbaine marquée par une densification de la population, une diversification des modes de transport et une réorganisation des infrastructures. Cette évolution a entraîné une cohabitation difficile sur les routes, augmentant les risques de collisions.

Malgré des investissements en aménagements sécuritaires (pistes cyclables, rues apaisées) et l’adoption de la stratégie Vision Zéro en 2016, les résultats sont mitigés. Les décès ont culminé en 2022 avant de diminuer en 2023, mais les blessures légères sont en hausse. Les piétons demeurent les plus vulnérables.

Les principaux facteurs de risque incluent la vitesse, l’inattention, les facultés affaiblies, et des infrastructures parfois inadéquates. Montréal poursuit ses efforts, mais la sécurité routière reste un défi crucial dans un environnement urbain en constante mutation.

## II. Objectifs du projet 
 -Créer une application qui visualise le nombre d’accidents et de décès survenus à Montréal entre 2012 et 2023.

## III. Données disponible
Collision routière Montréal  :  

https://donnees.montreal.ca/fr/dataset/cd722e22-376b-4b89-9bc2-7c7ab317ef6b/resource/3957364a-f579-4bc4-987a-299708fefd3e/download/collisions_routieres.geojson


## IV. Fichiers du projet

- index.html
- main.js
- style.css


## V. Étape 1 Initialisation de la carte

    // Création de la carte avec Maplibre GL
    const map = new maplibregl.Map({
        container: 'map', // ID de l'élément HTML contenant la carte
        style: 'https://api.maptiler.com/maps/dataviz/style.json?key=JhO9AmIPH59xnAn5GiSj', // Style de carte
        center: [-73.55, 45.55], // Centre initial (Montréal)
        zoom: 9, // Niveau de zoom initial
        hash: true // Met à jour l'URL avec les coordonnées et le zoom
    });

    // Ajout des contrôles de navigation (zoom, rotation)
    map.addControl(new maplibregl.NavigationControl());

    // Ajout du contrôle d'attribution avec affichage compact
    map.addControl(new maplibregl.AttributionControl({ compact: true }));

    // Ajout d'une échelle métrique à la carte
    const scale = new maplibregl.ScaleControl({ unit: 'metric' });
    map.addControl(scale);







