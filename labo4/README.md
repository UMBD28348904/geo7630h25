# 📚GEO 7630 Laboratoire 4 : Intégration Matricielle : FME + QGIS

## 🎯Objectifs de laboratoire
- Lire et traiter un ou plusieurs types de rasters : TIF, GeoTIFF, PNG.
- Extraire des valeurs des rasters pour les transformer en vecteurs.
- Stocker des rasters non tuilés dans PostgreSQL/PostGIS.
- Générer des tuiles raster pour une manipulation et diffusion efficaces.
- Créer des pyramides de tuiles raster pour une visualisation web optimisée.
- Associer les valeurs Z des rasters à des vecteurs.

#### 1. Données 
- [Données](https://drive.google.com/drive/folders/1iRcyRWS_JiTciNdonm8leC7Nq03hRY5_?usp=sharing)

#### 2. Démarrage du laboratoire #4

- Drag and drop chacun des 3 fichiers suivant pour ajouter un READER

PNG Reader pour l'image aérienne (donc le fichier .png)

![image](https://github.com/user-attachments/assets/f31e0546-3980-4111-9ce0-df4542b3e967)

COG ou TIF Reader les ilôts de chaleur (donc le fichier .tif)

![image](https://github.com/user-attachments/assets/f3c9c84a-8eb1-4508-a8d8-8dbe2a2837bb)


COG ou TIF Reader le modèle numérique de surface (MNS) (donc le 2eme fichier .tif)

![image](https://github.com/user-attachments/assets/66ddb060-c44f-4af6-9c69-e2ef4ebb970f)


Créez 1 bookmark pour chacun des READERs (ctrl+b)

- Raster analytique - Îlots de chaleurs

- Image aérienne - Ville Marie

- MNS - Ville Marie - 1m res

![image](https://github.com/user-attachments/assets/3f9e26a9-34fa-4cd4-9639-6af6aece06ab)

# 1 ère partie - Intégration d’image aérienne standard

### Étape 1

- Reprojetter le raster image aerienne  en EPSG : 32188

![image](https://github.com/user-attachments/assets/9b3fd996-21cb-4ded-a4dd-e7e0a9aa6b4d)

### Étape 2

- Extraction des métadonnées du raster avec le RasterPropertyExtractor et redimensionner l'image avec le transformer rasterResampler

![image](https://github.com/user-attachments/assets/f24e6c28-4c0c-4b3f-a8cb-a54a86828a7a)

### Étape 3

- Utilisation de transformer " RasterPyramide" dans FME pour  la creation  de serie de pyramides raster, de resolution inferieure par rapport à l'original

![image](https://github.com/user-attachments/assets/7a5253c9-c0ec-4353-8c9d-4b2ebebb076a)

![image](https://github.com/user-attachments/assets/f4d3ef6f-933f-4145-a81d-0b91155ddc40)


### Étape 4

Ajoutons un feature writer pour sauvegarde ces rasters dans postGis Raster

![image](https://github.com/user-attachments/assets/fa7c4169-618b-452d-aad2-976303209fed)

### Étape 5  Visualisation QGIS

![image](https://github.com/user-attachments/assets/1119272b-309f-4e81-8e9a-a4812384cd98)

### Étape 5  Ajoutons un SQLExecuter à la suite du FeatureWritter_Summary

![image](https://github.com/user-attachments/assets/66d1c8f4-0d81-42f3-9267-cafa0c9b5df2)

# 2eme partie - Intégration de raster analytique - Ilôts de chaleur

### Étape 1

- Reprojetter le raster image aerienne  en EPSG : 32188
  
![image](https://github.com/user-attachments/assets/d722b5fa-f4fe-47e8-a77a-87b9b0ec9f03)

### Étape 2
- Ajoutons un transformer RasterToPolygonCoercer dans FME  pour convertir des images rasters en entités vectorielles polygonales
  
![image](https://github.com/user-attachments/assets/f03c550d-33f5-43f1-8293-a3f75615f88a)

### Étape 3
- Ajoutons un feature writer pour sauvegarde ces polygones dans postGis

![image](https://github.com/user-attachments/assets/cca2f8b8-490c-4c40-afca-bf090164c9e9)

### Étape 4  Visualisation QGIS

![image](https://github.com/user-attachments/assets/d9e7646e-27d0-44fc-9593-296f2021d944)

![image](https://github.com/user-attachments/assets/c9f6d886-989a-44a6-8e86-3b05d9764744)


### Étape 5  Utilisons le transformer "RasterDiffuser" pour ameliorer la netteté de l'image , tout en accentuant les bords et les détails pour la rendre plus claire et plus définie.

1. connectons  ce transformer au transformer reprojector
   
![image](https://github.com/user-attachments/assets/69760d0a-45d0-4c9d-a7da-e0c5fa180c42)

### Étape 6 

- Ajoutons un transformer " RasterCellValueRounder", 
   - Decimal places = 1

![image](https://github.com/user-attachments/assets/ea3b47fe-79b5-41fe-80b5-c3e233e635be)

### Étape 7
- Ajoutons un RasterToPolygonCoercer
     - (_label = Classification )
 
### Étape 8  Visualisation QGIS

![image](https://github.com/user-attachments/assets/b6c41c77-9756-49d1-bc26-ba5db96b0aef)

### Étape 9  
- Ajoutez un transformeur RasterCellCoercer  pour extraire le z et connectez-la avec la couche re-projetée
-  Ecrivons dans la BD (POSTGIS)

![image](https://github.com/user-attachments/assets/eb95a95e-8742-4b22-b450-767ee6ad45f0)

![image](https://github.com/user-attachments/assets/48b8311b-df1e-4d5c-b810-da49ae8f7a08)

### Étape 10  Visualisation QGIS

![image](https://github.com/user-attachments/assets/47b9c022-7330-4714-8a5e-72ae9efcfbc2)


# 3eme partie Intégration de raster (MNS)

### Étape1 
Ajouter un transformer contourGenerator pour creer des lignes de contour avec une interval de 10 m

![image](https://github.com/user-attachments/assets/03679e1d-9d66-4494-a18b-11fb11cdd286)

### Étape2 
Ajoutons le transformer  "Generalizer" pour lisser le contour "

![image](https://github.com/user-attachments/assets/48579322-49f5-41d2-b13e-f0b52b23e53a)

### Étape3
Ajoutons un transformer AreaBuilder pour creer des polygônes (Zones) à partir des lignes et écrivons le dans un PostGis


