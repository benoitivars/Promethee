/*LICENSE*/

// Copyright 2024 Benoît Ivars

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*CODE*/

const fs = require('fs');
const readline = require('readline');
const path = require('path');
const { execSync } = require('child_process');

const { createProjectStructure } = require('./modules/folderCreator');
const { generateEJSContent } = require('./modules/contentGenerators/ejsGenerator');
const { generateSCSSContent } = require('./modules/contentGenerators/scssGenerator');
const { generateJSContent } = require('./modules/contentGenerators/jsGenerator');
const { generateControllerContent } = require('./modules/contentGenerators/controllersGenerator');
const { generateRouteContent } = require('./modules/contentGenerators/routeGenerator');
const { generateModelContent } = require('./modules/contentGenerators/modelGenerator');
const { setupServer } = require('./modules/serverConfigurator');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Entrez le nom de votre projet : ', (projectName) => {
    try {
        const projectPath = path.join(__dirname, '..', projectName);

        // Création du dossier du projet
        createProjectStructure(projectPath);

        // Initialisation de package.json
        execSync(`npm init -y`, { cwd: projectPath });
        console.log('package.json initialisé avec succès.');

        // Installation des dépendances
        execSync(`npm install express ejs mongoose`, { cwd: projectPath });
        console.log('Dépendances Express, EJS et Mongoose installées avec succès.');

        // Initialisation de Git
        execSync(`git init`, { cwd: projectPath });
        console.log('Dépôt Git initialisé avec succès.');
        const gitignorePath = path.join(projectPath, '.gitignore');
        fs.writeFileSync(gitignorePath, 'node_modules/\n.env\n');

        // Génération des fichiers EJS, SCSS, JS, contrôleurs, et des routes
        generateEJSContent(projectPath);
        generateSCSSContent(projectPath);
        generateJSContent(projectPath);
        generateControllerContent(projectPath);
        generateRouteContent(projectPath);
        generateModelContent(projectPath);

        // Configuration du serveur
        setupServer(projectPath);

        console.log(`Projet ${projectName} créé avec succès.`);
    } catch (error) {
        console.error(`Erreur lors de la création du projet : ${error.message}`);
    } finally {
        rl.close();
    }
});