const express = require('express');
const router = express.Router();
const alertsController = require('../controllers/alertsController');

// Route to get all alerts
router.get('/', alertsController.getAlerts);

// Route to create a new alert
router.post('/', alertsController.createAlert);

// Route to delete an alert
router.delete('/:id', alertsController.deleteAlert);

module.exports = router;