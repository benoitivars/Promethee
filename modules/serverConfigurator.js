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

function setupServer(projectPath) {
    const serverFilePath = path.join(projectPath, 'server.js');
    const serverFileContent = `
    const express = require('express');
    const mongoose = require('mongoose');
    const path = require('path');
    const app = express();
    
    // Configuration du moteur de vues EJS
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'));
    
    // Dossiers statiques
    app.use(express.static(path.join(__dirname, 'public')));
    
    // Configuration de MongoDB
    
    // Attention, vous devez préciser les onnées recquises pour assurer la connexion
    
    const uri = "mongodb+srv://votreidentifiant:votremotdepasse@cluster0.nctiqxg.mongodb.net/?retryWrites=true&w=majority";
    const url = "mongodb://127.0.0.1:27017/yourDBName";
    
    
    //Choisissez ici manuellement si vous voulez travailler avec l'url en local ou l'uri sur Atlas
    mongoose.connect(url)
        .then(() => console.log('Connexion à MongoDB réussie'))
        .catch(err => console.error('Erreur de connexion à MongoDB', err));
    
    // Routes
    const indexRouter = require('./routes/indexRoutes');
    const aboutRouter = require('./routes/aboutRoutes');
    const contactRouter = require('./routes/contactRoutes');
    const notFoundRouter = require('./routes/404Routes');
    
    app.use('/', indexRouter);
    app.use('/about', aboutRouter);
    app.use('/contact', contactRouter);
    app.use('*', notFoundRouter);
    
    // Lancement du serveur
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(\`Serveur lancé sur le port \${PORT}\`);
    });
`;

    fs.writeFileSync(serverFilePath, serverFileContent);
    console.log(`Fichier serveur configuré : ${serverFilePath}`);
}

module.exports = { setupServer };