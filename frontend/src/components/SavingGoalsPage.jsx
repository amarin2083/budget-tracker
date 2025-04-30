import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SavingGoalsPage = () => {
    const [goals, setGoals] = useState([]);
    const [goalDescription, setGoalDescription] = useState('');
    const [targetAmount, setTargetAmount] = useState('');
    const [currentSavings, setCurrentSavings] = useState('');

    useEffect(() => {
        fetchGoals();
    }, []);

    const fetchGoals = async () => {
        try {
            const response = await axios.get('/api/goals');
            setGoals(response.data);
        } catch (error) {
            console.error('Error fetching goals:', error);
        }
    };

    const addGoal = async (e) => {
        e.preventDefault();
        try {
            const newGoal = { description: goalDescription, targetAmount, currentSavings };
            await axios.post('/api/goals', newGoal);
            fetchGoals();
            setGoalDescription('');
            setTargetAmount('');
            setCurrentSavings('');
        } catch (error) {
            console.error('Error adding goal:', error);
        }
    };

    return (
        <div>
            <h1>Saving Goals</h1>
            <form onSubmit={addGoal}>
                <input
                    type="text"
                    placeholder="Goal Description"
                    value={goalDescription}
                    onChange={(e) => setGoalDescription(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Target Amount"
                    value={targetAmount}
                    onChange={(e) => setTargetAmount(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Current Savings"
                    value={currentSavings}
                    onChange={(e) => setCurrentSavings(e.target.value)}
                    required
                />
                <button type="submit">Add Goal</button>
            </form>
            <h2>Your Goals</h2>
            <ul>
                {goals.map((goal) => (
                    <li key={goal.id}>
                        {goal.description} - Target: ${goal.targetAmount} - Current: ${goal.currentSavings}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SavingGoalsPage;