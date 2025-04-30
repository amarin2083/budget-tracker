const Report = require('../models/report');

// Function to retrieve spending report
exports.getSpendingReport = async (req, res) => {
    try {
        // Logic to fetch spending data from the database
        const spendingData = await Report.find({ type: 'spending' });
        res.status(200).json(spendingData);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving spending report', error });
    }
};

// Function to retrieve saving report
exports.getSavingReport = async (req, res) => {
    try {
        // Logic to fetch saving data from the database
        const savingData = await Report.find({ type: 'saving' });
        res.status(200).json(savingData);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving saving report', error });
    }
};