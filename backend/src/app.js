const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const homeRoutes = require('./routes/home');
const incomeRoutes = require('./routes/income');
const expensesRoutes = require('./routes/expenses');
const goalsRoutes = require('./routes/goals');
const reportsRoutes = require('./routes/reports');
const taxRoutes = require('./routes/tax');
const alertsRoutes = require('./routes/alerts');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
db.connect();

// Routes
app.use('/api/home', homeRoutes);
app.use('/api/income', incomeRoutes);
app.use('/api/expenses', expensesRoutes);
app.use('/api/goals', goalsRoutes);
app.use('/api/reports', reportsRoutes);
app.use('/api/tax', taxRoutes);
app.use('/api/alerts', alertsRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});