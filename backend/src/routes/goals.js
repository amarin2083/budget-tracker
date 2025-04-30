const express = require('express');
const router = express.Router();
const goalsController = require('../controllers/goalsController');

// Route to create a new saving goal
router.post('/', goalsController.createGoal);

// Route to get all saving goals
router.get('/', goalsController.getGoals);

// Route to update a saving goal by ID
router.put('/:id', goalsController.updateGoal);

// Route to delete a saving goal by ID
router.delete('/:id', goalsController.deleteGoal);

module.exports = router;