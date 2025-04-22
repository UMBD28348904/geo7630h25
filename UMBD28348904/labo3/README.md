# 📚GEO 7630 Laboratoire 3 : Optimisation de la densité d’implantation d’arbres dans les parcs de Montréal (problématique fictive)
## 🎯Objectif de laboratoire
Optimiser la densité d’implantation d’arbres dans les parcs de Montréal (problématique factice)

#### 1. Jeux des données disponibles :

- 🌲 Arbres (points) : fichier CSV. :https://www.donneesquebec.ca/recherche/dataset/34103a43-3712-4a29-92e1-039e9188e915/resource/13a51853-a5b5-4add-8791-02ccba5c1be7/download/vdq-arbrerepertorie.csv
- 🏞️ Parcs (polygones) : fichier GeoJSON. : 





#### 2. Lire les données sources dans FME

1. Ouvrez FME Workbench et créez un nouveau projet. 
3. Ajoutez un Reader pour  CSV pour les données des arbres  et Geojson pour les quartiers

![image](https://github.com/user-attachments/assets/d4d16fa7-32ab-48a9-a95f-eed213940bbb)

![image](https://github.com/user-attachments/assets/d104ed3f-4a19-4a9a-ab26-84f4aa6fe7fe)


#### 3. Reprojection des données

Utilisez le Reprojector pour projeter les deux jeux de données en EPSG:32188 MTM8

![image](https://github.com/user-attachments/assets/f9c700ad-0ee5-44d1-8879-698473a7da05)

![image](https://github.com/user-attachments/assets/7dcf4455-deb1-4cb8-9a93-b743f82b3aef)

#### 4. Jointure spatiale

1.Effectuez une jointure spatiale pour compter le nombre d'arbres par quartier :

 - Utilisez le transformer  PointOnAreaOverlayer pour associer chaque point (arbre) à un polygone (quartier).
 - Calculez la somme des arbres dans chaque quartier.

![image](https://github.com/user-attachments/assets/579dc0e5-3ccb-4282-b18d-16d8b68786b0)

![image](https://github.com/user-attachments/assets/8980fe1a-5de7-4c9c-b974-141c84203d63)


2. Nettoyez les attributs :
 - Gardez uniquement les attributs pertinents (ex. nom_quartier, nombre_arbres).
 - Utilisez le tansformer attributeManager  pour filtrer les colonnes inutiles.

![image](https://github.com/user-attachments/assets/e840161a-9f05-4db1-8533-d03530d99fc5)


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

