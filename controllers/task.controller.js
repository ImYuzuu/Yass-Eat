const Task = require('../models/task'); // Vérifier le chemin

// Fonction pour créer une tâche
const createTask = async (req, res) => {
    try {
        const { title, description, completed } = req.body;

        const newTask = new Task({
            title,
            description,
            completed
        });

        await newTask.save();

        res.status(201).json({
            message: 'Tâche créée avec succès',
            task: newTask
        });
    } catch (error) {
        res.status(400).json({
            message: 'Erreur lors de la création de la tâche',
            error: error.message
        });
    }
};

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find(); // Récupère toutes les tâches
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({
            message: 'Erreur lors de la récupération des tâches',
            error: error.message
        });
    }
};

const getTask = async (req, res) => {
    try {
        const  taskId = req.params.id; 
        const tasks = await Task.findById(taskId); // Récupère la tache par ID
        
        if(!tasks) {
            return res.status(404).json({ message: 'Tâche non trouvée' });
        }
        
        res.status(200).json(tasks);
    } catch (error) {
        res.status(400).json({
            message: 'Erreur lors de la récupération de la tâche',
            error: error.message
        });
    }
};

const updateTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const updates = req.body;

        const updatedTask = await Task.findByIdAndUpdate(taskId, updates, {
            new: true, // Retourne la nouvelle version de la tâche
            runValidators: true // Valide les champs selon le schéma
        });

        if (!updatedTask) {
            return res.status(404).json({ message: 'Tâche non trouvée' });
        }

        res.status(200).json({
            message: 'Tâche mise à jour avec succès',
            task: updatedTask
        });
    } catch (error) {
        res.status(400).json({
            message: 'Erreur lors de la mise à jour',
            error: error.message
        });
    }
};

const deleteTask = async (req, res) => {
    try {
        const taskId = req.params.id;

        const deletedTask = await Task.findByIdAndDelete(taskId);

        if (!deletedTask) {
            return res.status(404).json({ message: 'Tâche non trouvée' });
        }

        res.status(200).json({ message: 'Tâche supprimée avec succès' });
    } catch (error) {
        res.status(400).json({
            message: 'Erreur lors de la suppression',
            error: error.message
        });
    }
};

module.exports = {
    createTask,
    getAllTasks,
    getTask,
    updateTask,
    deleteTask
};