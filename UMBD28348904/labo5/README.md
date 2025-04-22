# 📚GEO 7630 Laboratoire 5 : Intégration et visualisation de données 3D Lidar et tuiles 3D Vectorielles



####  Données 
- [Données]https://drive.google.com/file/d/1GNEDPSGwSdACGDY3BhyQMRrtKXjtsQb2/view?usp=drive_link


#### Étape 1 Importation et nettoyage des nuages de points

- Ajouter les 6 nuages de points suivante avec un LAS READER,Ajoutez sur chacun des reader un Thinner avec un filtre de 30 et Ensuite ajoutez y un pointcloudcombiner pour combiner les 6 nuages de points en 1 seul

http://depot.ville.montreal.qc.ca/geomatique/lidar_aerien/2015/301-5041_2015.laz

http://depot.ville.montreal.qc.ca/geomatique/lidar_aerien/2015/301-5040_2015.laz

http://depot.ville.montreal.qc.ca/geomatique/lidar_aerien/2015/301-5039_2015.laz

http://depot.ville.montreal.qc.ca/geomatique/lidar_aerien/2015/300-5041_2015.laz

http://depot.ville.montreal.qc.ca/geomatique/lidar_aerien/2015/300-5040_2015.laz

http://depot.ville.montreal.qc.ca/geomatique/lidar_aerien/2015/300-5039_2015.laz

![image](https://github.com/user-attachments/assets/07be5a79-bdd9-4e0b-92c5-d02785ac16e0)


- Puis un EsriReprojector (2950 to 3857)

![image](https://github.com/user-attachments/assets/e4b2cc46-c5d6-4e6b-add3-f3088974e6dd)


La première étape ressemble ca :

![image](https://github.com/user-attachments/assets/725b40e6-5ad7-4522-99aa-cc63bbf09c10)


![image](https://github.com/user-attachments/assets/792b23e5-6c11-47d8-adb4-461a797a35b7)


#### Etape 2. Importation des limites terrestres et découpage du nuage de points

- Ajoutez un GeoJSONReader (URL) puis un Reprojector 4326 vers 3857 

Datasource:

https://data.montreal.ca/dataset/b628f1da-9dc3-4bb1-9875-1470f891afb1/resource/92cb062a-11be-4222-9ea5-867e7e64c5ff/download/limites-terrestres.geojson

![image](https://github.com/user-attachments/assets/1fb6b50b-c699-4abe-9ffd-16dc39509fe9)


- Ajoutez un Clipper pour découper le nuage de puis avec la limites terrestres pour enlever les points superflus qui dépasse de notre zone de travail

![image](https://github.com/user-attachments/assets/fd668d9c-88ab-493e-a6a2-fb403af0cbdf)


#### Étape 3 Simplification du nuage de points

![image](https://github.com/user-attachments/assets/6af3091b-d05f-45cf-9025-3654f8156172)


#### Étape 4 Ajout de rasters géoréférencés 

![image](https://github.com/user-attachments/assets/1a5b62c5-2d50-40d7-aa98-bfcb199e4676)

- Ajoutez un reprojector 3857 vers 32188 (équivalent au 2950 mais au standard de reprojection FME)
-Ajouter un rasterMosaicker,la ramene à une seule image

![image](https://github.com/user-attachments/assets/02d4f4d4-0951-4ee0-83fd-66ca2750b7c3)

- Puis ajouter un RasterSelector pour choisir les 3 bandes RGB et supprimer la bande alpha
- Pour connaître sur quelle bande se situe quelle couleur vous pouvez ajouter un rasterbandPropertyExtractor et collez y un listExploder sur la propriété BAND
- Ajouter un EsriReprojector (2950 to 3857) avec les mêmes paramètres que celui de la première étape

![image](https://github.com/user-attachments/assets/16aa5825-c075-49ec-a909-8b90f1860340)


####  Etape 5 Jointure raster et nuage de points
 - Ajoutez la couleur dans votre nuage de point en ajoutant les valeur du raster avec un PointCloudOnRasterComponentSetter
 - Ensuite on va combiner le résultat en 1 seul nuage avec un PointCloudCombiner
 - Ensuite on va filtrer les valeurs du nuage de points dont le raster n’a pas donné de valeur avec un pointCloudFilter
 - Puis pour terminer nous allons transformer le nuage de points en couche de vecteurs ponctuels simple avec un PointCloudCoercer, en s’assurant de garder les composantes nécessaires pour la suite


