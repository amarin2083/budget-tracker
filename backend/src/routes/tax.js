const express = require('express');
const router = express.Router();
const taxController = require('../controllers/taxController');

// Route to calculate tax
router.post('/calculate', taxController.calculateTax);

// Route to get tax reminders
router.get('/reminders', taxController.getTaxReminders);

module.exports = router;