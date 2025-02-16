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

## 1 ère partie - Intégration d’image aérienne standard

### Étape 1

- Reprojetter le raster image aerienne  en EPSG : 32188

![image](https://github.com/user-attachments/assets/9b3fd996-21cb-4ded-a4dd-e7e0a9aa6b4d)

### Étape 2

- Extraction des métadonnées du raster avec le RasterPropertyExtractor et redimensionner l'image avec le transformer rasterResampler

![image](https://github.com/user-attachments/assets/f24e6c28-4c0c-4b3f-a8cb-a54a86828a7a)

### Étape 3

- Utilisation de transformer " RasterPyramide" dans FME pour  la creation  de serie de pyramides raster, de resolution inferieure par rapport à l'original

![image](https://github.com/user-attachments/assets/7a5253c9-c0ec-4353-8c9d-4b2ebebb076a)


