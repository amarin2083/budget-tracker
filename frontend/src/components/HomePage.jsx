import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
    const [income, setIncome] = useState(0);
    const [expenses, setExpenses] = useState(0);
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const incomeResponse = await axios.get('/api/income');
                const expensesResponse = await axios.get('/api/expenses');
                
                const totalIncome = incomeResponse.data.reduce((acc, item) => acc + item.amount, 0);
                const totalExpenses = expensesResponse.data.reduce((acc, item) => acc + item.amount, 0);
                
                setIncome(totalIncome);
                setExpenses(totalExpenses);
                setBalance(totalIncome - totalExpenses);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="home-page">
            <h1>Budget Tracker</h1>
            <div className="summary">
                <h2>Summary</h2>
                <p>Total Income: ${income}</p>
                <p>Total Expenses: ${expenses}</p>
                <p>Remaining Balance: ${balance}</p>
            </div>
            {/* Additional components like charts can be added here */}
        </div>
    );
};

export default HomePage;