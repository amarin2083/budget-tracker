const Expense = require('../models/expense');

// Get all expenses
exports.getAllExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving expenses', error });
    }
};

// Add a new expense
exports.addExpense = async (req, res) => {
    const { amount, category, description, date } = req.body;
    const newExpense = new Expense({ amount, category, description, date });

    try {
        const savedExpense = await newExpense.save();
        res.status(201).json(savedExpense);
    } catch (error) {
        res.status(400).json({ message: 'Error adding expense', error });
    }
};

// Update an expense
exports.updateExpense = async (req, res) => {
    const { id } = req.params;
    const { amount, category, description, date } = req.body;

    try {
        const updatedExpense = await Expense.findByIdAndUpdate(id, { amount, category, description, date }, { new: true });
        if (!updatedExpense) {
            return res.status(404).json({ message: 'Expense not found' });
        }
        res.status(200).json(updatedExpense);
    } catch (error) {
        res.status(400).json({ message: 'Error updating expense', error });
    }
};

// Delete an expense
exports.deleteExpense = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedExpense = await Expense.findByIdAndDelete(id);
        if (!deletedExpense) {
            return res.status(404).json({ message: 'Expense not found' });
        }
        res.status(200).json({ message: 'Expense deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting expense', error });
    }
};