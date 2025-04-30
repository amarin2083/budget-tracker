const Income = require('../models/income');

// Get all income records
exports.getAllIncome = async (req, res) => {
    try {
        const incomeRecords = await Income.find();
        res.status(200).json(incomeRecords);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving income records', error });
    }
};

// Add a new income record
exports.addIncome = async (req, res) => {
    const { amount, source, date } = req.body;
    const newIncome = new Income({ amount, source, date });

    try {
        const savedIncome = await newIncome.save();
        res.status(201).json(savedIncome);
    } catch (error) {
        res.status(400).json({ message: 'Error adding income record', error });
    }
};

// Update an existing income record
exports.updateIncome = async (req, res) => {
    const { id } = req.params;
    const { amount, source, date } = req.body;

    try {
        const updatedIncome = await Income.findByIdAndUpdate(id, { amount, source, date }, { new: true });
        res.status(200).json(updatedIncome);
    } catch (error) {
        res.status(400).json({ message: 'Error updating income record', error });
    }
};

// Delete an income record
exports.deleteIncome = async (req, res) => {
    const { id } = req.params;

    try {
        await Income.findByIdAndDelete(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting income record', error });
    }
};