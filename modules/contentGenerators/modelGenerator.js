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

function generateModelContent(projectPath) {
    const modelName = 'Example'; // Nom du modèle
    const modelFileName = 'model.js'; // Modification ici pour le nom du fichier
    const filePath = path.join(projectPath, 'models', modelFileName);
    const fileContent = `
const mongoose = require('mongoose');

const ${modelName}Schema = new mongoose.Schema({
    // Définition du schéma
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
    // Ajoutez d'autres champs selon les besoins
});

module.exports = mongoose.model('${modelName}', ${modelName}Schema);
`;

    fs.writeFileSync(filePath, fileContent);
    console.log(`Fichier modèle créé : ${modelFileName}`);
}

module.exports = { generateModelContent };
