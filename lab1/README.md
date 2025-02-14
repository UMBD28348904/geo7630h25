# 📚GEO 7630 Laboratoire 1 : Prise en main des outils

## 🎯Objectifs du laboratoire

- Se familiariser avec les outils essentiels pour le cours GEO 7630.
- Créer un environnement de travail collaboratif, accéder à une base de données, manipuler des données géospatiales et visualiser ces données dans un SIG.

### 📝Tâches a realiser
#### 1. Créer un compte GitHub
1. Se connecter sur https://github.com/ ou créer un compte.
2. Créer un nouveau dépôt (repository) et le nommer geo7630h25.
3. Lancer VSCode sur l'ordinateur.
4. Se connecter à notre compte GitHub à partir de VSCode.
5. Creons un dossier  nommez lab1
6. Creons fichier nommer  README.md
7. Ecrivons"Geo7630" dans le fichier README.md du fichier nouvellement cree
8. Commitez et poussez le fichier README.md sur GitHub

![image](https://github.com/user-attachments/assets/6ea31def-90a4-46ef-a56b-b53c0e314855)


9. Si nous recevons le message d'erreur lors de commit et pousser alors nous devons configurer notre VSCODE  avec notre nom d'utilisateur et l'adresse courriel  avant de pouvoir envoyer les donnees sur GitHub.
Appuyons le CTRL + J  et entrez la ligne ci-dessous pour configurer notre nom d'utilisateur et l'adresse couriel.

- Nom d'utilisateur :
git config --global user.name "UMBD28348904"
- Pour l'adresse courielle
git config --global user.email "umba.dady_dimabanza@courrier.uqam.ca"

#### 2. Lancer FME DESKTOP

![image](https://github.com/user-attachments/assets/99de0c2a-a45a-47af-b965-1299c46f647a)

##### 2.1 Lire une adresse depuis un fichier CSV hébergé avec lat/long
 Fichier d'entrée : ![Établissements alimentaires Mtl](https://donnees.montreal.ca/dataset/c1d65779-d3cb-44e8-af0a-b9f2c5f7766d/resource/28a4957d-732e-48f9-8adb-0624867d9bb0/download/businesses.csv)
 
![image](https://github.com/user-attachments/assets/7d334539-61e8-4824-b237-fe64df147055)

![image](https://github.com/user-attachments/assets/24cccd1a-0850-49a8-803e-d67537fb744c)

##### 2.2 Injecter la table dans votre schéma PostgreSQ
###### 2.2.1 Ajoutez un TRANSFORMER VertexCreator pour transformer les colonnes lat/long en géométrie.

1. Ajout d'un transformer AttributeFilter pour enlever les valeurs nulles, en suite ajouter le transformer vertexCreatoir

![image](https://github.com/user-attachments/assets/90575e94-ba33-46a2-a847-cc9a2a324143)

###### 2.2.2 Injection de la table dans  Postgres




