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

function createProjectStructure(projectPath) {
    const folders = [
        'controllers',
        'routes',
        'public',
        path.join('public', 'css'),
        path.join('public', 'js'),
        path.join('public', 'images'),
        'views',
        path.join('views', 'partials'),
        'models'
    ];

    folders.forEach(folder => {
        const fullPath = path.join(projectPath, folder);
        if (!fs.existsSync(fullPath)) {
            fs.mkdirSync(fullPath, { recursive: true });
            console.log(`Dossier créé : ${fullPath}`);
        }
    });
}

module.exports = { createProjectStructure };