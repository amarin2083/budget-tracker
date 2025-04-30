const express = require('express');
const router = express.Router();
const reportsController = require('../controllers/reportsController');

// Route to get financial reports
router.get('/', reportsController.getFinancialReports);

// Route to get spending report
router.get('/spending', reportsController.getSpendingReport);

// Route to get saving report
router.get('/savings', reportsController.getSavingReport);

module.exports = router;