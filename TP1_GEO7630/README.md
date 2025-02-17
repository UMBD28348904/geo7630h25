  # Travail pratique n°1 de l'Intégration et visualisation des données géographique (GEO7630)

Présentés par :

## Dady Umba Dimabanza
## Goncalves Tatiana Patricia



# 📒 Sujet : Modélisation géospatiale des zones à risque d’inondation dans la ville de Montréal

## 📚 I.	Mise en contexte

Les inondations sont, de toutes les catastrophes naturelles qui frappent le monde chaque année, les plus fréquentes, les plus dommageables et les plus mortelles (Pulvirenti et al., 2011b). Elles sont la source de près de la moitié des décès occasionnés par les catastrophes naturelles au cours des 50 dernières années, et sont responsables de près du tiers des pertes économiques au niveau mondial (James, 2008).

Au Canada, ce phénomène demeure l’aléa naturel le plus commun et le plus coûteux en termes de dommages matériels (Doberstein et al., 2019). L’identification des enjeux liés aux inondations a conduit à des efforts importants à travers le pays pour évaluer, cartographier et tenter de réduire les risques auxquels sont confrontés les propriétaires, les collectivités et les régions. Les efforts investis historiquement pour réduire les risques d’inondation n’ont cependant pas empêché les catastrophes de se produire dans le pays de manière générale (exemples canadiens de Winnipeg/Rivière Rouge en 1997, rivière Assiniboine en 2011, Nouveau-Brunswick en 2018 et Calgary et Toronto en 2013) et plus précisément au Québec, comme le rappellent les évènements de 2011, 2017 et 2019 (Doberstein et al., 2019), sans oublier les vingt-sept (27) inondations que la province a connu quelques années plutôt entre 1990 et 2010. Les inondations survenues en juillet 1996 au Saguenay-Lac-Saint-Jean, et plus récemment, d’avril à juin 2011 le long de la rivière Richelieu, en sont des illustrations marquantes. À ces phénomènes d’envergure s’ajoutent les inondations hivernales, causées par les embâcles et les débâcles de glace de rivière, de moindre intensité mais néanmoins récurrentes (Marion TANGUY, 2012).

Située dans la province du Québec, la ville de Montréal n’est pas en marge quant à ce phénomène, au contraire elle a déjà été confrontée à des événements d'inondations importants, notamment en 2017 et 2019. Plusieurs actions sont menées par la municipalité ainsi que des organismes communautaires afin d’apporter des solutions durables pour une meilleure gestion des risques d'inondations dans la métropole. C’est dans cette dynamique que le présent projet s’inscrit, et entrevoit apporter sa contribution par le biais des outils SIG.

## 🔎II.Problématique

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

- Utilisation des logiciels SIG pour l’analyse spatiale et spécifiquement Arcgis online pour la visualisation

- Utilisation de logiciel ETL pour l’extraction des données et leur traitement

- Simulation de l’écoulement des eaux à partir de modèles hydraulique et hydrologique existants (modélisation hydraulique et hydrologique) dans SIG

- Analyse spatiale :
  
  -Analyse topographique
  
  -Analyse de l’occupation du sol
  
  -Évaluation de l’imperméabilité
  
  -Identification des zones à risque
  
  -Simulation de montées des eaux


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

-	Gestion des risques et planification urbaine : Aider les autorités municipales à mieux comprendre où les inondations 
 pourraient se produire afin de renforcer la sécurité des habitants, améliorer les infrastructures et planifier les zones 
 de construction.

 Le modèle d'un tableau de bord

![figure-c-13-fra](https://github.com/user-attachments/assets/ec92ffca-2241-4ba8-b79b-009295db6022)


## 📇Lien pour télécharger les données :

Hydrographie Montréal  :  

- https://donnees.montreal.ca/dataset/ead1ac6f-f37c-4326-a9b9-4508d94bbc45/resource/73d4571c-fd7a-465a-aa19-05c3b24222cc/download/hydrographie-2020.zip
- https://donnees.montreal.ca/dataset/c128aff5-325c-4599-ab66-1c9d0b3abc94/resource/a37e11d4-f0a3-46a7-8636-76754fad72b3/download/prmhh_courseau_fosses.zip


Occupation du sol Montréal :

- https://donnees.montreal.ca/dataset/0eaea940-aafc-43bc-bab2-a87ac66a93ba/resource/c5dbe902-a587-4af5-ab97-d5182fa8ecba/download/affectationpu.zip

Modèle numérique du terrain (Format GML)

- https://donnees.montreal.ca/dataset/08a528e3-5bff-4bd8-b28d-85e584d5cc1d/resource/821302a3-1ac9-4cf4-8309-0e7bc07fb843/download/tin-2015-ahuntsic-cartierville.zip
- https://donnees.montreal.ca/dataset/08a528e3-5bff-4bd8-b28d-85e584d5cc1d/resource/7857aec3-da55-418f-930f-77cfef07059c/download/tin-2015-anjou.zip
- https://donnees.montreal.ca/dataset/08a528e3-5bff-4bd8-b28d-85e584d5cc1d/resource/a71c9a6b-abdc-4006-9b99-76d1ce7c2d91/download/tin-2015-cote-des-neiges-notre-dame-de-grace.zip
- https://donnees.montreal.ca/dataset/08a528e3-5bff-4bd8-b28d-85e584d5cc1d/resource/54cb894b-551d-47ba-9cd5-0caf2a200ab1/download/tin-2015-lachine.zip
- https://donnees.montreal.ca/dataset/08a528e3-5bff-4bd8-b28d-85e584d5cc1d/resource/47d5af84-e2c7-414f-bf17-517b7f47c423/download/tin-2015-lasalle.zip
- https://donnees.montreal.ca/dataset/08a528e3-5bff-4bd8-b28d-85e584d5cc1d/resource/14ec49aa-7fad-4a9c-a3f0-3bf7322b8c1d/download/tin-2015-mercier-hochelaga-maisonneuve.zip
- https://donnees.montreal.ca/dataset/08a528e3-5bff-4bd8-b28d-85e584d5cc1d/resource/07e341e3-dcd6-4ce0-9799-a45aaabc28d5/download/tin-2015-montreal-nord.zip
- https://donnees.montreal.ca/dataset/08a528e3-5bff-4bd8-b28d-85e584d5cc1d/resource/b15dfc66-8bee-462c-b229-d0051ff3ce12/download/tin-2015-outremont.zip
- https://donnees.montreal.ca/dataset/08a528e3-5bff-4bd8-b28d-85e584d5cc1d/resource/adbd7f57-0e9a-4876-9e91-9624a56edbf4/download/tin-2015-pierrefonds-roxboro.zip
- https://donnees.montreal.ca/dataset/08a528e3-5bff-4bd8-b28d-85e584d5cc1d/resource/8ce62b82-9703-4891-b038-029fe47a2e2e/download/tin-2015-plateau-mont-royal.zip
- https://donnees.montreal.ca/dataset/08a528e3-5bff-4bd8-b28d-85e584d5cc1d/resource/0a9733fd-3508-477d-9152-502523551182/download/tin-2015-riviere-des-prairies-pointe-aux-trembles.zip
- https://donnees.montreal.ca/dataset/08a528e3-5bff-4bd8-b28d-85e584d5cc1d/resource/785aff49-933c-424b-8c44-72084d2a4cde/download/vcarto_basedtmmntmnt-2015citygml-2015-lidar-mkptin-2015-rosemont-la-petite-patrie.zip
- https://donnees.montreal.ca/dataset/08a528e3-5bff-4bd8-b28d-85e584d5cc1d/resource/5c3f658c-d2d8-4c73-aa79-026ac5cfbccc/download/tin-2015-saint-laurent.zip
- https://donnees.montreal.ca/dataset/08a528e3-5bff-4bd8-b28d-85e584d5cc1d/resource/5c3f658c-d2d8-4c73-aa79-026ac5cfbccc/download/tin-2015-saint-laurent.zip
- https://donnees.montreal.ca/dataset/08a528e3-5bff-4bd8-b28d-85e584d5cc1d/resource/08b5026f-6f90-4e0e-9d80-d86ce97d665f/download/tin-2015-saint-leonard.zip








## 📙RÉFÉRENCES 

-	Cartographie du risque d’inondation en milieu urbain adaptée à la gestion de crise analyse préliminaire, Marion TANGUY (2012)
  
- https://numerique.banq.qc.ca/patrimoine/details/52327/2316328

-	Cartographie dynamique du risque d’inondations en milieu urbain, rapport de recherche R1428, Jimmy Poulin et al., 
  Septembre 2012
  
- https://espace.inrs.ca/id/eprint/1661/1/R001428.pdf

-	https://www.ouranos.ca/sites/default/files/2024-01/trousse-information-questions-reponses-innondations.pdf

-	https://unpointcinq.ca/sinspirer/geosapiens-un-logiciel-pour-prevenir-les-risques-dinondation/

-	https://journals.openedition.org/ideas/7999
-	https://dominic.tech/articles/inondations-au-quebec-une-nouvelle-application-web-pour-reperer-les-zones-a-risques.html



