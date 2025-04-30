const express = require('express');
const router = express.Router();
const Alert = require('../models/alert'); // Assuming an Alert model exists

// Get alerts for budget limits
router.get('/budget-limits', async (req, res) => {
    try {
        const alerts = await Alert.find({ type: 'budget-limit' });
        res.json(alerts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get tax payment reminders
router.get('/tax-reminders', async (req, res) => {
    try {
        const reminders = await Alert.find({ type: 'tax-reminder' });
        res.json(reminders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add a new alert
router.post('/', async (req, res) => {
    const alert = new Alert({
        type: req.body.type,
        message: req.body.message,
        date: req.body.date
    });

    try {
        const newAlert = await alert.save();
        res.status(201).json(newAlert);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete an alert
router.delete('/:id', async (req, res) => {
    try {
        const alert = await Alert.findById(req.params.id);
        if (!alert) return res.status(404).json({ message: 'Alert not found' });

        await alert.remove();
        res.json({ message: 'Alert deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;