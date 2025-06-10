require('dotenv').config()

const express = require('express')
const taskRoutes = require('./routes/task.routes.js');
const app = express()
const port = process.env.PORT;


app.use(express.json())

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI)
  
    .then(() => console.log('Connexion à MongoDB réussie !'))
  
    .catch(() => console.log('Connexion à MongoDB échouée !'));

// --- Utilisation des routes ---
// Toutes les routes définies dans task.routes.js seront préfixées par /api/tasks
app.use('/api/tasks', taskRoutes);

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});

// app.listen(process.env.PORT, () => {
//   console.log(`Example app listening on port ${port}`)
// })

