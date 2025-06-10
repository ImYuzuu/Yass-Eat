const mongoose = require('mongoose');

// Définition du schéma
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, // Obligatoire
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

// Création du modèle
const Task = mongoose.model('Task', taskSchema);

// Export du modèle
module.exports = Task;