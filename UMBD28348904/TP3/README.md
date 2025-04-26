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






![image](https://github.com/user-attachments/assets/18065cc3-edc4-4642-acc0-a660c8998ab4)

# 1ère partie - Intégration couche d'affectation du sol ( Montréal)

### Étape 1
Reprojettons notre couche en EPSG : 3857

![image](https://github.com/user-attachments/assets/df90b3cc-aa31-4fc3-b5f0-ecacfce042c4)

![image](https://github.com/user-attachments/assets/e5974bf2-8c0c-4b08-aad3-a9c2af57bd83)

### Étape 2
Ajoutons un attribut de la surface de chaque polygône de l'occupation du sol

![image](https://github.com/user-attachments/assets/dd280a20-35cd-4624-816c-f991b0dff2df)
![image](https://github.com/user-attachments/assets/37cd9ccc-fafb-4379-ab2c-d16f2d7b8997)

### Étape 3
##### Filtrons les zones permeable et impermeable

###### Zones perméables et imperméables selon la catégorie

Dans notre configuration FME (Tester), certaines catégories de zones sont définies :
- Catégories sélectionnées (emplois, résidentiel, religieux, mixte, infrastructure, institution).
- Catégories exclues (activités diversifiées, conservation, parc).
  
###### Zones imperméables

•	Catégories sélectionnées comme emplois, résidentiel, infrastructure sont majoritairement imperméables.
Ces zones ont des surfaces en béton, asphalte ou bâtiments qui empêchent l’infiltration de l’eau, favorisant le ruissellement et les risques d’inondation.

###### Zones perméables

•	Catégories exclues (conservation, parc) sont perméables, car elles sont souvent végétalisées (espaces verts, forêts, zones naturelles).
Ces zones permettent l’infiltration de l’eau, réduisant le ruissellement et favorisant la recharge des nappes phréatiques.

![image](https://github.com/user-attachments/assets/24344491-ad12-4a0a-a6ac-9b2e57d01326)


### Étape 4
Importation des données dans la base  POSTGIS

![image](https://github.com/user-attachments/assets/fbc69ccc-d313-4149-8fa1-ea4ecb974bfc)

### Processus
![image](https://github.com/user-attachments/assets/802468ba-69bf-4600-bf24-13dc9da751f5)

# 2ère partie - Intégration couche d'hydrographie ( Montréal)

### Etape 1
Reprojettons notre couche en EPSG : 3857

![image](https://github.com/user-attachments/assets/c095979e-4d9a-4b9e-a214-548be00a0ac0)

### Étape 2 
Calcul des zones tampons ( Buffer)

![image](https://github.com/user-attachments/assets/55c40c6f-d9d4-4819-a865-5145932dcc09)

### Étape 3
Regrouper les surfaces

![image](https://github.com/user-attachments/assets/e96c01b1-e760-4ded-9ba7-c553469e315c)

### Étape 4
Gestion des attributs

![image](https://github.com/user-attachments/assets/aeae85c0-9433-42ac-9342-4981267721e3)

### Étape 5
importation dans la BD POSTGIS

![image](https://github.com/user-attachments/assets/ef9613e9-6375-447f-90f5-45baa1b3a65e)

### Processus

![image](https://github.com/user-attachments/assets/786cd85a-3289-4084-9642-fd1b9eec6d75)


# 3ème partie - Intégration couches MNT
### Etape 1
Création d'un nuage de points à partir des images MNT des arrondissements pour en faire une seule couche de points pour notre zone d'étude

![image](https://github.com/user-attachments/assets/9f2f732a-9ef8-4149-847c-fadbacb904fe)

### Etape 2

Utilisation du transformer PointCloudThinner pour réduire la taille du fichier

![image](https://github.com/user-attachments/assets/d99ebd11-b611-47ad-8ce7-6dea0769f64c)

### Etape 3
Reprojection de la couche obtenue

![image](https://github.com/user-attachments/assets/0b66e856-c06b-4a6f-843a-4acb070a41f3)


### Etape 4
Transformation des nuages des points en couche des vecteurs ponctuels

![image](https://github.com/user-attachments/assets/59b8ad5c-6fb5-4099-8a17-47886438f681)

### Etape 5
Génération du DEM_Raster

![image](https://github.com/user-attachments/assets/addfbcca-51f9-4140-9bea-227ea49950cb)

### Etape 6
Extraction des metadonnée du Raster

![image](https://github.com/user-attachments/assets/897150d5-4883-447f-9cb4-b44164a54b66)

### Etape 7
Supression des valeurs nulles ( Pour éliminer les endroits où les pentes sont nulles)

![image](https://github.com/user-attachments/assets/9430aa44-bc29-4f78-aad5-ea723e3f106b)

### Etape 8
Calcul de la pente

![image](https://github.com/user-attachments/assets/7a81f993-f1be-4b6c-a73c-a86439765466)

### Etape 9
#### Classification des pentes

La classification de la pense se présente de la manière suivante :

- Classe 1 : Pente ≤ 5% → plate
- Classe 2 : 5% < Pente ≤ 15% → Faible
- Classe 3 : 15% < Pente ≤ 30% → moderée
- Classe 4 : 30% < Pente ≤ 45% → forte
- Classe 5 : Pente > 45% → Très forte

![image](https://github.com/user-attachments/assets/da0e6bbc-65d3-4b53-86cd-6c607c7e7c13)

### Etape 10
Transformation de la couche raster en polygone

![image](https://github.com/user-attachments/assets/71c42c8c-173c-4535-b50d-52120f8a7d90)

### Etape 10
Gestion des attributs (Nous conservons les informations qui nous sont utiles pour la suite du processus)

![image](https://github.com/user-attachments/assets/93942b1e-1868-4b69-a237-088339ef4e88)

### Etape 11
Création des surfaces

![image](https://github.com/user-attachments/assets/e5d394b9-7dee-42fb-9c39-efdfd96108c2)

### Etape 12
Regroupement des surfaces

![image](https://github.com/user-attachments/assets/0a1d03c0-31c6-4761-991d-4cb726d14cbe)

### Etape 13
Lissage des polygones

![image](https://github.com/user-attachments/assets/ecec29e3-2b65-4264-9687-1577eca080fc)

### Etape 14
Importation des couches "MNT_POSTGIS_RASTER" et "MNT_Polygone_POSGIS" dans notre base de données POSTGIS

![image](https://github.com/user-attachments/assets/1f3d8578-6e33-4342-abe2-64bb07b435de)

![image](https://github.com/user-attachments/assets/cc5f7027-c7df-4a51-bd38-3272deb622a9)

### Processus

![image](https://github.com/user-attachments/assets/abc85247-2f79-4019-aeed-37eb195ed2b9)


# 4ème partie - Utilisation des couches de sortie des 3 premières parties
### Etape 1
Intersection des couches de sortie des 3 premières parties

![image](https://github.com/user-attachments/assets/6c3f17b6-df79-4eee-ae26-8ecfd89cabdc)

### Etape 2
Gestion des attributs

![image](https://github.com/user-attachments/assets/834b64bf-8c99-4e12-9d19-a39dde96ba5d)

### Etape 3
Elimination des données manquantes

![image](https://github.com/user-attachments/assets/20b2446c-628a-4a4c-8bfa-ae8c9af81171)

### Etape 4
Extraction des données avec des valeurs de pentes

![image](https://github.com/user-attachments/assets/0176f217-e3d2-49de-b624-c9539807119e)

### Etape 5
Filtrage des pentes de valeurs faibles (zones susceptibles de retenir les eaux)

![image](https://github.com/user-attachments/assets/7165f917-f4b5-4465-b8ae-561f7e18bd55)

### Etape 6
Création de surfaces

![image](https://github.com/user-attachments/assets/5ddf6a43-806a-4089-a69a-f81837ecd63f)

### Etape 7
Validation de la géométrie ( Correction de la géometrie)

![image](https://github.com/user-attachments/assets/36518902-5e1d-41bc-8c15-0e9c44df55bd)

### Etape 8
Importation dans la base de données POSTGIS

![image](https://github.com/user-attachments/assets/1df162fd-a3fe-4035-ab36-f22f5afc9b52)


## Processus

![image](https://github.com/user-attachments/assets/3549c006-3ba1-4e00-a272-0a1804a45e36)


## 5ème partie Visualisation dans QGIS

![image](https://github.com/user-attachments/assets/d1011d75-6fae-49e9-a84d-82f37ebb4133)











 # Travail pratique n°3 de l'Intégration et visualisation des données géographique (GEO7630)

Présentés par :

## Dady Umba Dimabanza
## Goncalves Tatiana Patricia
