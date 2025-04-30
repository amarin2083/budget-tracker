const Goal = require('../models/goal');

// Create a new saving goal
exports.createGoal = async (req, res) => {
    try {
        const { targetAmount, currentSavings, description } = req.body;
        const newGoal = new Goal({ targetAmount, currentSavings, description });
        await newGoal.save();
        res.status(201).json(newGoal);
    } catch (error) {
        res.status(500).json({ message: 'Error creating goal', error });
    }
};

// Retrieve all saving goals
exports.getGoals = async (req, res) => {
    try {
        const goals = await Goal.find();
        res.status(200).json(goals);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving goals', error });
    }
};

// Update a saving goal
exports.updateGoal = async (req, res) => {
    try {
        const { id } = req.params;
        const { targetAmount, currentSavings, description } = req.body;
        const updatedGoal = await Goal.findByIdAndUpdate(id, { targetAmount, currentSavings, description }, { new: true });
        if (!updatedGoal) {
            return res.status(404).json({ message: 'Goal not found' });
        }
        res.status(200).json(updatedGoal);
    } catch (error) {
        res.status(500).json({ message: 'Error updating goal', error });
    }
};