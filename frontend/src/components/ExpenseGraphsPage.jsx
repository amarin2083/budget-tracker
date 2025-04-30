import React from 'react';
import { Line } from 'react-chartjs-2';

const ExpenseGraphsPage = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Expenses',
                data: [300, 400, 200, 500, 600, 700, 800],
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div>
            <h2>Expense Graphs</h2>
            <Line data={data} options={options} />
        </div>
    );
};

export default ExpenseGraphsPage;