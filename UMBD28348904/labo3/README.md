# 📚GEO 7630 Laboratoire 3 : Optimisation de la densité d’implantation d’arbres dans les parcs de Montréal (problématique fictive)
## 🎯Objectif de laboratoire
Optimiser la densité d’implantation d’arbres dans les parcs de Montréal (problématique factice)

#### 1. Jeux des données disponibles :

- 🌲 Arbres (points) : https://donnees.montreal.ca/fr/dataset/arbres/resource/64e28fe6-ef37-437a-972d-d1d3f1f7d891/download

- 🏞️ Parcs (polygones) : fichier GeoJSON. : https://donnees.montreal.ca/fr/dataset/grands-parcs-parcs-d-arrondissements-et-espaces-publics/resource/35796624-15df-4503-a569-797665f8768e/download

#### 2. Chargement des données dans FME

1. Ouvrez FME Workbench et créez un nouveau projet. 
3. Ajoutez un Reader pour  CSV pour les données des arbres  et Geojson pour les parcs
   
![image](https://github.com/user-attachments/assets/4e9a9c20-2d52-43da-9514-dbfdb4933340)

#### 3. Reprojection des données

Utilisez le Reprojector pour projeter les deux jeux de données en EPSG:32188 MTM8

![image](https://github.com/user-attachments/assets/00cdfc6e-fa99-4897-acae-375ef019282d)

#### 4. Jointure spatiale

- Effectuer une jointure spatiale pour associer chaque arbre à un parc.
- Utiliser le transformer PointOnAreaOverlayer.

![image](https://github.com/user-attachments/assets/b289f90d-e270-4044-91dd-4d952ff12343)


#### 5.Nettoyage et validation des données

- Supression des doublons ainsi que les latitudes et longitudes avec des valeurs nulles
- Utilisez le transformer ATTRIBUTEKEEPER pour conserver uniquement les champs essentiels dans la nouvelle couche de données. Cela simplifie l’analyse et réduit la taille des données.


  ![image](https://github.com/user-attachments/assets/a9061892-0afc-4898-b310-0ab0ae0810b7)


#### 6. Calcul de la médiane de densité
Calculer la médiane pour les variables tree_count et tree_density permet d’identifier les valeurs centrales et de mieux comprendre la répartition des arbres dans les parcs.

1. Ajouter un StatisticsCalculator au flux de travail.
2. Configurer les paramètres pour calculer la médiane de variable suivante :

- point_count (nombre d’arbres).
  
![image](https://github.com/user-attachments/assets/069315a3-713b-4aa1-90ad-8ecc4d906f97)


#### 7. Calcul de l’index par rapport à la moyenne

Calculer l’index par rapport à la moyenne permet de normaliser les données et d’identifier les parcs ayant une densité ou un nombre d’arbres significativement au-dessus ou en dessous de la moyenne.

1. Ajouter un AttributeManager au flux de travail.

2. Configurer une nouvelle formule pour calculer l’index :

 -Exemple : index = valeur actuelle / moyenne.

![image](https://github.com/user-attachments/assets/ffcbb140-03d1-4d48-877b-8417b6771d88)


#### 8. Nettoyage des données

Consiste à supprimer les valeurs nulles.
Ajouter un NullAttributeManager au flux de travail.

![image](https://github.com/user-attachments/assets/2a6e2f28-443a-4ef4-9c38-0c7a9b0f40bf)


#### 9. Exportation des résultats

1.Enregistrer les résultats dans une base de données PostGIS.
2.Paramètres de connexion :
Host : geo7630h25.cvwywmuc8u6v.us-east-1.rds.amazonaws.com
Port : 5432
Database : geo7630
Schéma : votre code permanent.














#### 5. Calcul d'une statistique supplémentaire

Ajoutez une colonne avec la densité d'arbres par quartier :
 - Utilisez le transformer  AttributeCreator pour créer un champ densite_arbres.
 - Formule : nombre_arbres / superficie_quartier (en hectares).

![image](https://github.com/user-attachments/assets/b3e95c9a-6e00-4f7f-be6e-501ea23c3757)

![image](https://github.com/user-attachments/assets/8bed0db3-5913-4e0f-a7aa-aefc81241c96)


- Filtrons la densite  de telle en sorte qu'on puisse avoir que celle  dont  le nombre d'arbre commence par 1000
- Utilisons le transformer attributerangefilter

![image](https://github.com/user-attachments/assets/cd547649-3288-4c4b-b010-177103e3aa81)

#### 6. Écrire les données dans PostgreSQL

1. Ajoutez un Writer PostgreSQL pour exporter le résultat dans la base de données :
- Schéma : Utilisez votre code MS comme nom de schéma.
- Nom de la table : densite_arbres_quartiers.

![image](https://github.com/user-attachments/assets/8b47a6b4-cc1c-48b5-81d5-bcb298eb770a)

 #### 7. Visualiser et appliquez la symbologie les données dans QGIS

- Connectez-vous à votre base de données PostgreSQL depuis QGIS.
- Chargez la table densite_arbres_quartiers.
- Appliquer la symbologie
  
![image](https://github.com/user-attachments/assets/0a1739bf-746a-4995-8c5c-9e06764a261d)

  
#### 8. Exportez le style pour le sauvegarder dans votre base de données

![image](https://github.com/user-attachments/assets/5bfe5cc4-c412-4f42-a918-0a12f8b86213)

