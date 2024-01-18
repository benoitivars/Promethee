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

function generateEJSContent(projectPath) {
    // Générer les fichiers EJS pour chaque page
    const pages = ['index', 'about', 'contact', '404'];
    pages.forEach(page => {
        const pagePath = path.join(projectPath, 'views', `${page}.ejs`);
        const pageTitle = page.charAt(0).toUpperCase() + page.slice(1);
        const pageContent = `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${pageTitle} Page</title>
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <%- include('partials/header') %>
    <h1>Bienvenue sur la page ${pageTitle}</h1>
    <!-- Contenu spécifique à la page ${pageTitle} -->
    <%- include('partials/footer') %>
</body>
</html>`
;
        fs.writeFileSync(pagePath, pageContent);
        console.log(`Fichier EJS créé : ${pagePath}`);
    });

    // Générer les partials (header et footer)
    const partials = ['header', 'footer'];
    partials.forEach(partial => {
        const partialPath = path.join(projectPath, 'views', 'partials', `${partial}.ejs`);
        const partialContent = partial === 'header' ? `
<header>
    <!-- Contenu du header -->
    <nav><!-- Liens de navigation --></nav>
</header>` : `
<footer>
    <p>&copy; ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
</footer>`;
        fs.writeFileSync(partialPath, partialContent);
        console.log(`Fichier EJS partiel créé : ${partialPath}`);
    });
}

module.exports = { generateEJSContent };