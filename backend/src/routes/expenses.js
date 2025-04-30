const express = require('express');
const router = express.Router();
const expensesController = require('../controllers/expensesController');

// Route to get all expenses
router.get('/', expensesController.getAllExpenses);

// Route to add a new expense
router.post('/', expensesController.addExpense);

// Route to update an existing expense
router.put('/:id', expensesController.updateExpense);

// Route to delete an expense
router.delete('/:id', expensesController.deleteExpense);

// Route to get an expense by ID
router.get('/:id', expensesController.getExpenseById);

module.exports = router;