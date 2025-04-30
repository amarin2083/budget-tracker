import React, { useState } from 'react';

const TaxCalculationPage = () => {
    const [income, setIncome] = useState('');
    const [taxRate, setTaxRate] = useState('');
    const [calculatedTax, setCalculatedTax] = useState(null);

    const handleCalculateTax = () => {
        const tax = (income * taxRate) / 100;
        setCalculatedTax(tax);
    };

    return (
        <div className="tax-calculation-page">
            <h1>Tax Calculation</h1>
            <div>
                <label>
                    Annual Income:
                    <input
                        type="number"
                        value={income}
                        onChange={(e) => setIncome(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Tax Rate (%):
                    <input
                        type="number"
                        value={taxRate}
                        onChange={(e) => setTaxRate(e.target.value)}
                    />
                </label>
            </div>
            <button onClick={handleCalculateTax}>Calculate Tax</button>
            {calculatedTax !== null && (
                <div>
                    <h2>Calculated Tax: ${calculatedTax.toFixed(2)}</h2>
                </div>
            )}
        </div>
    );
};

export default TaxCalculationPage;