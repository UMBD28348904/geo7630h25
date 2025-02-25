  # Travail pratique n°2 de l'Intégration et visualisation des données géographique (GEO7630)

Présentés par :

## Dady Umba Dimabanza
## Goncalves Tatiana Patricia



# 📒 Sujet : Modélisation géospatiale des zones à risque d’inondation dans la ville de Montréal

## Données disponible
Hydrographie Montréal  :  

- https://donnees.montreal.ca/dataset/ead1ac6f-f37c-4326-a9b9-4508d94bbc45/resource/73d4571c-fd7a-465a-aa19-05c3b24222cc/download/hydrographie-2020.zip
- https://donnees.montreal.ca/dataset/c128aff5-325c-4599-ab66-1c9d0b3abc94/resource/a37e11d4-f0a3-46a7-8636-76754fad72b3/download/prmhh_courseau_fosses.zip


Occupation du sol Montréal :

- https://donnees.montreal.ca/dataset/0eaea940-aafc-43bc-bab2-a87ac66a93ba/resource/c5dbe902-a587-4af5-ab97-d5182fa8ecba/download/affectationpu.zip

Modèle numérique du terrain (Format GML)

- https://donnees.montreal.ca/dataset/08a528e3-5bff-4bd8-b28d-85e584d5cc1d/resource/821302a3-1ac9-4cf4-8309-0e7bc07fb843/download/tin-2015-ahuntsic-cartierville.zip
- https://donnees.montreal.ca/dataset/08a528e3-5bff-4bd8-b28d-85e584d5cc1d/resource/14ec49aa-7fad-4a9c-a3f0-3bf7322b8c1d/download/tin-2015-mercier-hochelaga-maisonneuve.zip
- https://donnees.montreal.ca/dataset/08a528e3-5bff-4bd8-b28d-85e584d5cc1d/resource/adbd7f57-0e9a-4876-9e91-9624a56edbf4/download/tin-2015-pierrefonds-roxboro.zip
- https://donnees.montreal.ca/dataset/08a528e3-5bff-4bd8-b28d-85e584d5cc1d/resource/0a9733fd-3508-477d-9152-502523551182/download/tin-2015-riviere-des-prairies-pointe-aux-trembles.zip
- https://donnees.montreal.ca/dataset/08a528e3-5bff-4bd8-b28d-85e584d5cc1d/resource/50acb4b5-f0f2-4170-90fc-d51f7f2274e6/download/tin-2015-verdun.zip
- https://donnees.montreal.ca/dataset/08a528e3-5bff-4bd8-b28d-85e584d5cc1d/resource/7ff01ab1-5b81-43ff-933a-e18402c8b5e6/download/tin-2015-ile-bizard-sainte-genevieve.zip
- https://donnees.montreal.ca/dataset/08a528e3-5bff-4bd8-b28d-85e584d5cc1d/resource/022b28e5-9d4e-458e-af1f-e2efbc89b0bf/download/tin-2015-montreal-est.zip

Arrondissement Montréal

https://donnees.montreal.ca/dataset/9797a946-9da8-41ec-8815-f6b276dec7e9/resource/93385165-d849-418f-aaa3-0497ed9e4702/download/limites-administratives-agglomeration.zip

## Chargement des données

Nous utilisons AddReader dans FME pour l'ajout des differentes données

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

![image](https://github.com/user-attachments/assets/6bb096bb-206a-461f-aece-d83746b64d88)

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
Supression des valeurs nulles

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

![image](https://github.com/user-attachments/assets/3d2b07e7-b45d-486b-85d8-6623d4c18748)

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
Validation de la géométrie

![image](https://github.com/user-attachments/assets/36518902-5e1d-41bc-8c15-0e9c44df55bd)

### Etape 8
Importation dans la base de données POSTGIS

## Processus

![image](https://github.com/user-attachments/assets/3549c006-3ba1-4e00-a272-0a1804a45e36)












