# LICENSE

Copyright 2024 Benoît Ivars

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

# Prométhée - Version 0.1

## Présentation

Prométhée est un générateur de projet web conçu pour simplifier et accélérer le développement d'applications web. Il est actuellement en version 0.1 et est principalement développé en français.

Prométhée est pensé comme une approche fullstack du développement, centrée pour l'instant autour du langage JavaScript dont on se sert tant pour l'aspect front-end que back-end, avec la plateforme Node.js. 

## Configuration Requise

- Node.js (https://nodejs.org/en/docs)
- NPM (https://docs.npmjs.com/)
- Nodemon (https://nodemon.io/)
- MongoDB, Compass et/ou Atlas (https://www.mongodb.com/docs/)
- Un éditeur de texte ou un IDE (par exemple, VSCode : https://code.visualstudio.com/)
- Il est conseillé d'utiliser Git Bash pour Prométhée, assurant la compatibilité des commandes sur Windows et Unix. Les instructions sont basées sur cette utilisation (Git Bash disponible lors de l'installation de Git : https://git-scm.com/downloads).

## Technologies utilisées

Prométhée utilise toute une série de technologies, installées à l'initialisation de tout projet comme dépendances :
-  Express
-  ejs
-  Mongoose

De plus, Prométhée initialise d'avance un dépot Git pour votre projet.

## Fonctionnalités

- Génération automatique de la structure de base d'une application suivant le modèle MVC (Modèle-Vue-Contrôleur).
- Support initial pour Express.js avec EJS comme moteur de vue.
- Génération des fichiers de route et de contrôleur pour les pages index, about, contact et une page 404.
- Configuration initiale de MongoDB pour le stockage de données.


## Installation

Clonez le dépôt sur votre machine locale en utilisant `git clone`. Ensuite, naviguez dans le dossier Prométhée et exécutez `node projectGenitor.js`.

## Utilisation

Après avoir généré votre projet, vous devez effectuer quelques configurations manuellement :

### Configuration de la Base de Données

- Ouvrez le fichier `server.js`.
- Choissiez entre l'utilisation de MongoDB en local avec Compass, ou en ligne avec Atlas, en choisissant la variable" `URL` ou `URI`. Veillez à insérer les bons identifiants et/ou nom de base de données en fonction de l'option que vous aurez choisie.
- Si vous ne voulez pas utiliser de base de donnée dans un premier temps, contentez-vous de commenter cette partie du code. 

### Compilation SCSS
- Le SCSS doit être compilé manuellement en CSS. Utilisez un outil de votre choix pour compiler les fichiers SCSS dans le dossier `public/css`.

### Lancement du projet en local

- Pour lancer votre projet en local, allez dans le dossier de votre projet et exécutez `nodemon server.js`
- Si vous utilisez VSCode et utilisez l'extension `Live server`, `http://127.0.0.1:5500/` ne vous affichera qu'une arborescence du projet. Préférez passer par l'adresse suivante :`http://127.0.0.1:3000/`
- Les fichiers JavaScript dédiés à la manipulation du DOM ne sont pas automatiquement connectés aux fichiers EJS correspondants. Pour créer ce lien, il suffit d'ajouter la balise <script> dans votre fichier EJS. Vous la placez dans la section <head>, comme ceci : `<script src="/chemin/vers/votre/script.js"></script>`. 

## Prochaine Étape (Version 0.2)

- Intégration de l'authentification avec les tokens JWT.

## Intégrations ultérieures

- Choix entre mongoDB et mySQL comme systèmes de bases de données
- Inclusion du framework React dans le projet
- Proposition d'autres langages et frameworks back-end
- Proposition de Prométhée en anglais
- Interface graphique

## Contribution
Les contributions au projet sont les bienvenues. Veuillez suivre les conventions de codage établies et soumettre des pull requests pour toute modification ou amélioration.

Pour tout contact, question ou remarque, vous pouvez me contacter sur mon profil GitHub : https://github.com/benoitivars
---

Prométhée - Le feu sacré du développement web.