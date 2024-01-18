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

function generateControllerContent(projectPath) {
    const controllers = ['index', 'about', 'contact', '404'];

    controllers.forEach(controller => {
        const controllerFileName = `${controller}Controller.js`;
        const filePath = path.join(projectPath, 'controllers', controllerFileName);
        const fileContent = generateControllerFileContent(controller);
        fs.writeFileSync(filePath, fileContent);
        console.log(`Fichier contrôleur créé : ${controllerFileName}`);
    });
}

function generateControllerFileContent(controllerName) {
    const viewName = controllerName === '404' ? '404' : controllerName;
    const title = controllerName.charAt(0).toUpperCase() + controllerName.slice(1) + ' Page';

    return `
const ExampleModel = require('../models/model'); // Remplacer par le modèle approprié

exports.get${controllerName.charAt(0).toUpperCase() + controllerName.slice(1)} = (req, res) => {
    res.render('${viewName}', { title: '${title}' });
};
`;
}

module.exports = { generateControllerContent };
