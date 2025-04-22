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
- Host : geo7630h25.cvwywmuc8u6v.us-east-1.rds.amazonaws.com
- Port : 5432
- Database : geo7630
- Schéma : votre code permanent.


#### 10. Visualisation des résultats


![image](https://github.com/user-attachments/assets/9dbd24d1-5f9a-45f0-8518-7d3e42e2d9a5)


#### 11. Analyse de la densité arboricole avec une grille H3

Les grilles H3 permettent une analyse uniforme et adaptable grâce à leurs cellules hexagonales, idéales pour comparer des zones géographiques.

1.Connecter les données des parcs à un H3HexagonalIndexer.
2.Configurer la taille des hexagones.


![image](https://github.com/user-attachments/assets/11efc5ee-b4d1-439e-beae-12688acd5048)








