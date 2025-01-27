  # Travail pratique n°1 de l'Intégration et visualisation des données géographique (GEO7630)

Présentés par :

## Dady Umba Dimabanza
## Goncalves Tatiana Patricia



# 📒 Sujet : Modélisation géospatiale des zones à risque d’inondation dans la ville de Montréal

## 📚 I.	Mise en contexte

Les inondations sont, de toutes les catastrophes naturelles qui frappent le monde chaque année, les plus fréquentes, les plus dommageables et les plus mortelles (Pulvirenti et al., 2011b). Elles sont la source de près de la moitié des décès occasionnés par les catastrophes naturelles au cours des 50 dernières années, et sont responsables de près du tiers des pertes économiques au niveau mondial (James, 2008).

Au Canada, ce phénomène demeure l’aléa naturel le plus commun et le plus coûteux en termes de dommages matériels (Doberstein et al., 2019). L’identification des enjeux liés aux inondations a conduit à des efforts importants à travers le pays pour évaluer, cartographier et tenter de réduire les risques auxquels sont confrontés les propriétaires, les collectivités et les régions. Les efforts investis historiquement pour réduire les risques d’inondation n’ont cependant pas empêché les catastrophes de se produire dans le pays de manière générale (exemples canadiens de Winnipeg/Rivière Rouge en 1997, rivière Assiniboine en 2011, Nouveau-Brunswick en 2018 et Calgary et Toronto en 2013) et plus précisément au Québec, comme le rappellent les évènements de 2011, 2017 et 2019 (Doberstein et al., 2019), sans oublier les vingt-sept (27) inondations que la province a connu quelques années plutôt entre 1990 et 2010. Les inondations survenues en juillet 1996 au Saguenay-Lac-Saint-Jean, et plus récemment, d’avril à juin 2011 le long de la rivière Richelieu, en sont des illustrations marquantes. À ces phénomènes d’envergure s’ajoutent les inondations hivernales, causées par les embâcles et les débâcles de glace de rivière, de moindre intensité mais néanmoins récurrentes (Marion TANGUY, 2012).

Située dans la province du Québec, la ville de Montréal n’est pas en marge quant à ce phénomène, au contraire elle a déjà été confrontée à des événements d'inondations importants, notamment en 2017 et 2019. Plusieurs actions sont menées par la municipalité ainsi que des organismes communautaires afin d’apporter des solutions durables pour une meilleure gestion des risques d'inondations dans la métropole. C’est dans cette dynamique que le présent projet s’inscrit, et entrevoit apporter sa contribution par le biais des outils SIG.

## II.Problématique

Les connaissances actuelles et les progrès technologiques offrent aux décideurs et aux populations de plus en plus d’outils (nombreux modèles hydrologiques et hydrauliques) et d’informations utiles (données géospatiales à haute résolution) pour optimiser la gestion et l’aménagement sécuritaire du territoire (Metzger R. 2003). La demande croissante pour des connaissances de pointe issues de la recherche scientifique s’explique notamment par une forte hausse démographique, laquelle s’accompagne par la densification des zones urbaines et périurbaines dont plusieurs sont situées au sein de zones inondables à des fréquences variées. Pourtant, il existe des outils pour aider à mieux comprendre, gérer et appréhender le risque d’inondation, notamment la cartographie des zones inondables qui est fréquemment utilisée pour assurer la gestion sécuritaire des villes et des municipalités situées dans les zones sensibles. 
Les outils de cartographie du risque d’inondation en milieu urbain peuvent jouer un rôle très important dans l’optimisation des procédures de planification et d’implantation des mesures d’urgence visant à réduire les impacts d’une inondation en cours sur la population, mais sont encore peu développés et sont rarement opérationnels en phase de gestion de crise, Marion Tanguy, 2012.

En outre, le contexte climatique actuel a des impacts indéniables sur le régime hydrologique. On note une modification de la fréquence, de l’intensité et du type de précipitations, ce qui se traduit par une variabilité accrue du régime des inondations. 
Au cours des dernières années, plusieurs localités canadiennes dont la ville de Montréal ont été affectées sur une base récurrente. Cette ville est traversée par de nombreux cours d'eau (le fleuve Saint-Laurent, la rivière des Prairies, etc.), ce qui la rend encore plus vulnérable face aux risques d’inondations. Or les connaissances scientifiques quant aux causes et caractéristiques des inondations demeurent un défi, ce qui complique le rôle des décideurs, d’autant plus que la dimension humaine (vulnérabilité, résilience, adaptation, etc.) du risque d’inondation demeure encore peu documentée. Il va sans dire qu’il s’agit là d’un défi sérieux pour une saine gestion du territoire face aux inondations.

## 🎯III. Objectifs

- Identifier les zones vulnérables à l’inondation grâce aux données géospatiales.
- Élaborer des cartes des risques
- Création d’une application qui permettra d’informer le public sur les zones à risques d’inondation dans la ville

## 📝IV. Méthodologie
- Collecte des données géospatiales (Topographie, hydrologie, climatologie, pédologie)
- Utilisation des logiciels SIG pour l’analyse spatiale et création de modèle hydraulique, ainsi que Arcgis online pour la visualisation
- Utilisation de logiciel ETL pour l’extraction des données et leur traitement

- Analyse spatiale : 

Analyse topographique
-Création d’un modèle numérique de terrain (MNT)
-Analyse des pentes et des bassins versants 
-Détection des zones de rétention 

Analyse de l’occupation du sol
-Évaluation de l’imperméabilité 
  
 Analyse climatique et scénarios prédictifs
-Modélisation des scénarios de précipitations 
-Simulation de montées des eaux 
-Cartes des zones à risque

## 💡V. Données Géospatiales
V.1 Données Lidar 

Ces données fournissent le modèle numérique du terrain et le modèle numérique de surface.
Le MNT peut permettre de simuler le déplacement de l'eau, les zones de rétention et d’écoulement, et donc d'évaluer les risques d'inondation.

V.2 Données météorologiques et hydrologiques

-	Réseaux hydrographiques : Localisation des rivières, cours d’eau, lacs et zones humides.
-	Débits des cours d’eau : Données historiques des débits et niveaux d’eau pour estimer les scénarios de crues.
-	Précipitations : Données météorologiques historiques

V.3 Données sur la nature et l’occupation du sol

-	Cartes d’occupation des sol (Zones résidentielles, commerciales, agricoles etc.)
-	Données sur l’imperméabilisation
-	Données pédologiques
  
V.4 Données de télédétection

-	Imagerie thermique pour évaluer les zones où l’eau stagne (NDWI)

## 📉VI.	Intérêt du tableau de bord

-	Gestion des risques et planification urbaine : Aider les autorités municipales à mieux comprendre où les inondations pourraient se produire afin de renforcer la sécurité des habitants, améliorer les infrastructures et planifier les zones de construction.
-	Mise en place d’un système d’alerte des inondations (carte de vigilance des inondations) : Fournir des outils pour prédire les inondations futures, informer les citoyens et mettre en place des plans d'urgence (Possibilité de développer un algorithme qui permet de déclencher une alerte si la hauteur d’eau dépasse telle mm).
-	Amélioration de la résilience urbaine : Concevoir des systèmes d'évacuation, de drainage ou des infrastructures résilientes pour minimiser les impacts des inondations sur les vies humaines et les infrastructures essentielles.


## 📇Lien pour télécharger les données :

Rivière : https://www.naturalearthdata.com/http//www.naturalearthdata.com/download/10m/physical/ne_10m_rivers_north_america.zip

Lac et réservoir d’eau : 

https://www.naturalearthdata.com/http//www.naturalearthdata.com/download/10m/physical/ne_10m_lakes_north_america.zip

Occupation du sol Montréal :

https://donnees.montreal.ca/dataset/0eaea940-aafc-43bc-bab2-a87ac66a93ba/resource/c5dbe902-a587-4af5-ab97-d5182fa8ecba/download/affectationpu.zip

Modèle numérique du terrain 

-	https://www.donneesquebec.ca/recherche/dataset/vmtl-modele-numerique-de-terrain-mnt/resource/3b22f8f4-a5e3-4d12-9406-936b2e3a373f

-	https://www.donneesquebec.ca/recherche/dataset/vmtl-modele-numerique-de-terrain-mnt/resource/821302a3-1ac9-4cf4-8309-0e7bc07fb843


-	https://www.donneesquebec.ca/recherche/dataset/vmtl-modele-numerique-de-terrain-mnt/resource/bf58c58f-5c44-4788-a021-89db151920f3

-	https://www.donneesquebec.ca/recherche/dataset/vmtl-modele-numerique-de-terrain-mnt/resource/7857aec3-da55-418f-930f-77cfef07059c

-	https://www.donneesquebec.ca/recherche/dataset/vmtl-modele-numerique-de-terrain-mnt/resource/b5c78919-a0bb-4032-8146-292c67f3ea72

-	https://www.donneesquebec.ca/recherche/dataset/vmtl-modele-numerique-de-terrain-mnt/resource/a71c9a6b-abdc-4006-9b99-76d1ce7c2d91

-	https://www.donneesquebec.ca/recherche/dataset/vmtl-modele-numerique-de-terrain-mnt/resource/a95c4054-8039-426b-ae55-73ae23bcb382

Type de sols

https://www.donneesquebec.ca/recherche/dataset/vmtl-geologie-des-depots-meubles/resource/0b56a4a4-212f-4438-9681-657d1c004a5b
https://www.donneesquebec.ca/recherche/dataset/vmtl-cuvettes-retention-eau-ruissellement/resource/1e558f13-6532-4bcc-95fc-457643eda6f9

Débits cours d’eau et précipitations

https://www.donneesquebec.ca/recherche/dataset/donnees-hydrometeorologiques/resource/94b6ebfd-309f-4500-a5a1-9604001dd24f
https://www.donneesquebec.ca/recherche/dataset/donnees-hydrometeorologiques/resource/38d6d7d2-6dfc-46db-a395-f7c800b06805

## RÉFÉRENCES 

-	Cartographie du risque d’inondation en milieu urbain adaptée à la gestion de crise analyse préliminaire, Marion TANGUY (2012)
  
https://numerique.banq.qc.ca/patrimoine/details/52327/2316328

-	Cartographie dynamique du risque d’inondations en milieu urbain, rapport de recherche R1428, Jimmy Poulin et al., Septembre 2012
-	
https://espace.inrs.ca/id/eprint/1661/1/R001428.pdf

-	https://www.ouranos.ca/sites/default/files/2024-01/trousse-information-questions-reponses-innondations.pdf

-	https://unpointcinq.ca/sinspirer/geosapiens-un-logiciel-pour-prevenir-les-risques-dinondation/

-	https://journals.openedition.org/ideas/7999



