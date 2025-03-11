# 📚GEO 7630 Laboratoire 6 et 7 :ArcGIS Online, Dashboard et Experience Builder – Intégration de données
## 🎯Objectif de laboratoire
Ce laboratoire vous guidera à travers l’intégration de données dans ArcGIS Online (AGOL) et leur exploitation via Dashboard et Experience Builder. Vous apprendrez également à automatiser les mises à jour avec FME.

#### 1. CSV Reader :
1. Créer un nouveau Workbench (WB) FME.
2. Ajouter un CSV Reader.
3. Utiliser l’URL suivante pour importer les données :
https://sitewebbixi.s3.amazonaws.com/uploads/docs/20220107-donnees-ouvertes-8aa623.zip
4. Vérifier l'importation des données.
![image](https://github.com/user-attachments/assets/b362f218-4e50-40c1-a450-ae35ca345c9b)

### 2. Attribute filter
1.Ajouter un AttributeFilter.
2.Exclure les entités n’ayant pas de longitude.
3.Configurer un filtre pour identifier les stations mal géolocalisées.
4.Ajoutez -1 pour filtrer les stations qui ont des mauvaises coordonnées ou des coordonnées éronnées
