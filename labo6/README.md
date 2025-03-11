# 📚GEO 7630 Laboratoire 6 et 7 :ArcGIS Online, Dashboard et Experience Builder – Intégration de données
## 🎯Objectif de laboratoire
Ce laboratoire vous guidera à travers l’intégration de données dans ArcGIS Online (AGOL) et leur exploitation via Dashboard et Experience Builder. Vous apprendrez également à automatiser les mises à jour avec FME.

#### Etape 1. CSV Reader :
1. Créer un nouveau Workbench (WB) FME.
2. Ajouter un CSV Reader.
3. Utiliser l’URL suivante pour importer les données :
https://sitewebbixi.s3.amazonaws.com/uploads/docs/20220107-donnees-ouvertes-8aa623.zip
4. Vérifier l'importation des données.
![image](https://github.com/user-attachments/assets/b362f218-4e50-40c1-a450-ae35ca345c9b)

### Etape 2. Attribute filter
1.Ajouter un AttributeFilter.
2.Exclure les entités n’ayant pas de longitude.
3.Configurer un filtre pour identifier les stations mal géolocalisées.
4.Ajoutez -1 pour filtrer les stations qui ont des mauvaises coordonnées ou des coordonnées éronnées

![image](https://github.com/user-attachments/assets/ff1f22a2-76b9-487f-b87f-e7c2088cba7e)

### Etape 3. Calcul des statistique 
-Effectuer une analyse statistique pour calculer les arrivées et départs par station.
1.Ajouter un StatisticsCalculator sur le champ emplacement_pk_end sur le port Missing de sortie
2.Grouper les données pour obtenir le total des arrivées par station.
3.Répéter l’opération pour les départs. (emplacement_pk_start)

![image](https://github.com/user-attachments/assets/517a99bb-6ef9-431c-ae50-c5c06a3afb46)

![image](https://github.com/user-attachments/assets/babb8dfc-5274-4975-9f77-f711522ed18f)

### Étape 4 : Nettoyage et gestion des attributs (AttributeManager) pour les stations de Bixi

Pour Conserver uniquement les attributs nécessaires et garantir la cohérence des noms de champs.

![image](https://github.com/user-attachments/assets/2a53b052-5978-4d2e-863f-aa357a9914ae)

### Étape 5 : Jointure des données (FeatureJoiner)

--- >> Associer les coordonnées aux stations pour garantir leur localisation correcte.
1. Ajouter un FeatureJoiner pour relier les stations aux données de départ part stations
2. Configurer la clé de jointure sur l’identifiant unique des stations (PK pour Primary Key).
3. Attention de bien utiliser la jointure de type "Full"
   
![image](https://github.com/user-attachments/assets/d09abd81-4573-414a-b340-d6a15070127e)

Puis ajoutez un autre FeatureJoiner enchaîné sur le port de sortie "Joined" pour joindre les sommes des arrivées par stations

![image](https://github.com/user-attachments/assets/c5e0db28-8ec8-48d4-bca2-92d9a81deb82)

### Etape 6 AttributeManager
Puis ajoutez un AttributeManager pour faire le ménage et renommer les attributs

![image](https://github.com/user-attachments/assets/762dc9d0-69d1-4b91-b3eb-5bf3c69e623a)

### Rendue finale

![image](https://github.com/user-attachments/assets/e4863f46-0163-4343-83cd-355642d033dd)

### Étape 7 : Exportation des données vers ArcGIS Online

1. Accéder à ArcGIS Online et créer un dossier GEO7630.
Aller dans Contenu , puis Mes contenus et sur la gauche créer un Dossier

![image](https://github.com/user-attachments/assets/1cc4ffcd-b0d4-484a-b465-e4da6e2b26e6)

### Etape 8 Visualisation et exploitation des données dans ArcGIS Online

Web Map

![image](https://github.com/user-attachments/assets/5b8d019f-2766-44b5-96c7-5d7524d48166)

Dahboard

![image](https://github.com/user-attachments/assets/930ccce1-9097-4398-bfad-704cdf395700)





