// Importer Express pour utiliser son routeur
const express = require('express');
const router = express.Router();

// Importer le contrôleur des tâches
// Assurez-vous que le chemin vers votre fichier de contrôleur est correct.
const taskController = require('../controllers/task.controller.js');

// Définir les routes pour les opérations CRUD

// Route pour créer une nouvelle tâche
// Correspond à la méthode POST sur /api/tasks/
router.post('/', taskController.createTask); // Fonction de votre controller

// Route pour récupérer toutes les tâches
// Correspond à la méthode GET sur /api/tasks/
router.get('/', taskController.getAllTasks); // Fonction de votre controller

// Route pour récupérer une seule tâche par son ID
// Correspond à la méthode GET sur /api/tasks/:id
router.get('/:id', taskController.getTask); // Fonction de votre controller

// Route pour mettre à jour une tâche par son ID
// Correspond à la méthode PUT sur /api/tasks/:id
router.put('/:id', taskController.updateTask); // Fonction de votre controller

// Route pour supprimer une tâche par son ID
// Correspond à la méthode DELETE sur /api/tasks/:id
router.delete('/:id', taskController.deleteTask); // Fonction de votre controller

// Exporter le routeur pour qu'il puisse être utilisé dans index.js
module.exports = router;