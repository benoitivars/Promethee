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

function generateSCSSContent(projectPath) {
    // Création des fichiers SCSS de base
    const scssFiles = ['_101', '_base', '_layout', '_mixins', '_variables'];
    scssFiles.forEach(file => {
        const filePath = path.join(projectPath, 'public', 'css', `${file}.scss`);
        const fileContent = generateSCSSFileContent(file);
        fs.writeFileSync(filePath, fileContent);
        console.log(`Fichier SCSS créé : ${filePath}`);
    });

    // Création du fichier style.scss qui importe tous les autres
    const styleScssPath = path.join(projectPath, 'public', 'css', 'style.scss');
    const styleScssContent = scssFiles.map(file => `@import '${file}';`).join('\n');
    fs.writeFileSync(styleScssPath, styleScssContent);
    console.log(`Fichier SCSS principal créé : ${styleScssPath}`);
}

function generateSCSSFileContent(fileName) {
    // Contenu par défaut pour certains fichiers SCSS spécifiques
    switch (fileName) {
        case '_101':
            return `
* {
    margin: 0;
    box-sizing: border-box;
}
img {
    width: 100%;
}
ul {
    list-style: none;
    padding: 0;
}
a {
    text-decoration: none;
}`;
        case '_base':
        case '_layout':
        case '_mixins':
        case '_variables':
            return `// Contenu pour ${fileName}`;
        default:
            return '';
    }
}

module.exports = { generateSCSSContent };