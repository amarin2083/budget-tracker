import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1>Budget Tracker</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/income-expense">Add Income/Expense</Link></li>
                <li><Link to="/saving-goals">Saving Goals</Link></li>
                <li><Link to="/tax-calculation">Tax Calculation</Link></li>
                <li><Link to="/financial-reports">Financial Reports</Link></li>
                <li><Link to="/expense-graphs">Expense Graphs</Link></li>
                <li><Link to="/alerts">Alerts</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;