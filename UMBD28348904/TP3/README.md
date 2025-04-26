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


## Étape 1 Initialisation de la carte

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

## Étape 2 : Chargement de données depuis l'Api des données ouvertes de Québec

    // URL des données GeoJSON des arrondissements
    const arrondissementsSourceUrl = 'https://donnees.montreal.ca/dataset/9797a946-9da8-41ec-8815-f6b276dec7e9/resource/e18bfd07-edc8-4ce8-8a5a-3b617662a794/download/limites-administratives-agglomeration.geojson';

    // URL des données GeoJSON des collisions routières
    const collisionurl = 'https://donnees.montreal.ca/fr/dataset/cd722e22-376b-4b89-9bc2-7c7ab317ef6b/resource/3957364a-f579-4bc4-987a-299708fefd3e/download/collisions_routieres.geojson';

    // Variable pour stocker les données de collisions
    let collisionsData = null;

    // Événement déclenché lorsque la carte est chargée
    map.on('load', async function () {

        // Ajoute la source GeoJSON des arrondissements
        map.addSource('arrondissementsSource', {
            type: 'geojson',
            data: arrondissementsSourceUrl
        });

        // Ajoute une couche de remplissage pour les arrondissements
        map.addLayer({
            id: 'arrondissements',
            type: 'fill',
            source: 'arrondissementsSource',
            paint: {
                'fill-color': '#ccc',
                'fill-opacity': 0.5,
                'fill-outline-color': '#000'
            }
        });

        // Ajoute une couche d’étiquettes pour afficher les noms d’arrondissements
        map.addLayer({
            id: 'arrondissements-labels',
            type: 'symbol',
            source: 'arrondissementsSource',
            layout: {
                'text-field': ['get', 'NOM'],
                'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
                'text-size': 14,
                'text-anchor': 'center'
            },
            paint: {
                'text-color': '#111',
                'text-halo-color': '#fff',
                'text-halo-width': 2
            }
        });

        // Charge les données de collisions
        const response = await fetch(collisionurl);
        collisionsData = await response.json();

        // Ajoute la source des collisions à la carte
        map.addSource('collisionsSource', {
            type: 'geojson',
            data: collisionsData
        });

        // Ajoute une couche de points pour les collisions avec couleurs selon la gravité
        map.addLayer({
            id: 'collisions',
            type: 'circle',
            source: 'collisionsSource',
            
                'circle-stroke-color': '#fff',
                'circle-stroke-width': 1
            }
        });
    });
    
![image](https://github.com/user-attachments/assets/53abfeca-1313-476a-aefc-64315ea1d154)

## Étape 3 : Stylisation de la couche collision
paint: {
                'circle-color': [
                    'match',
                    ['get', 'GRAVITE'],
                    'Dommages matériels inférieurs au seuil de rapportage', 'orange',
                    'Dommages matériels seulement', 'yellow',
                    'Grave', 'blue',
                    'Léger', 'green',
                    'Mortel', 'purple',
                    'grey'
                ],
                
![image](https://github.com/user-attachments/assets/709d16d0-bcda-4283-915b-60cd6d2f32d6)
