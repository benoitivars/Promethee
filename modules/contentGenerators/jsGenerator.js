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
const path = require('path');

function generateJSContent(projectPath) {
    // Noms des pages pour lesquelles générer des scripts JS
    const jsPages = ['index', 'about', 'contact', '404'];

    jsPages.forEach(page => {
        const filePath = path.join(projectPath, 'public', 'js', `${page}.js`);
        const fileContent = generateJSFileContent(page);
        fs.writeFileSync(filePath, fileContent);
        console.log(`Fichier JS créé : ${filePath}`);
    });
}

function generateJSFileContent(pageName) {
    // Structure de base pour le fichier JS de chaque page
    return `
document.addEventListener('DOMContentLoaded', () => {
    console.log('Script chargé pour la page ${pageName}');
    // Code spécifique à la page ${pageName} ici
});
`;
}

module.exports = { generateJSContent };