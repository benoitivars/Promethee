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

function generateRouteContent(projectPath) {
    const routePages = ['index', 'about', 'contact', '404'];

    routePages.forEach(page => {
        const filePath = path.join(projectPath, 'routes', `${page}Routes.js`);
        const fileContent = generateRouteFileContent(page);
        fs.writeFileSync(filePath, fileContent);
        console.log(`Fichier de route créé : ${filePath}`);
    });
}

function generateRouteFileContent(pageName) {
    // Pour la route 404, on utilise '*' comme chemin. Pour les autres, on utilise '/'.
    const routePath = pageName === '404' ? '*' : '/';
    const controllerName = pageName.charAt(0).toUpperCase() + pageName.slice(1);
    const importPath = pageName === '404' ? '404Controller' : `${controllerName}Controller`;

    return `
const express = require('express');
const router = express.Router();
const { get${controllerName} } = require('../controllers/${importPath}');

router.get('${routePath}', get${controllerName});

module.exports = router;
`;
}

module.exports = { generateRouteContent };
