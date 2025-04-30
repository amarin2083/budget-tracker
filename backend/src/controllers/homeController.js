const HomeController = require('../models/home'); // Adjust the path as necessary

exports.getHomeSummary = async (req, res) => {
    try {
        const totalIncome = await HomeController.getTotalIncome();
        const totalExpenses = await HomeController.getTotalExpenses();
        const remainingBalance = totalIncome - totalExpenses;

        res.status(200).json({
            totalIncome,
            totalExpenses,
            remainingBalance
        });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving home summary', error });
    }
};