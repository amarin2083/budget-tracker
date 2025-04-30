import React, { useState } from 'react';

const IncomeExpensePage = () => {
    const [type, setType] = useState('income');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle form submission, e.g., sending data to the backend
        console.log({ type, amount, description });
    };

    return (
        <div>
            <h1>Add Income/Expense</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="income"
                            checked={type === 'income'}
                            onChange={() => setType('income')}
                        />
                        Income
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="expense"
                            checked={type === 'expense'}
                            onChange={() => setType('expense')}
                        />
                        Expense
                    </label>
                </div>
                <div>
                    <label>
                        Amount:
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Description:
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default IncomeExpensePage;