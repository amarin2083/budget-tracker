import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import IncomeExpensePage from './components/IncomeExpensePage';
import SavingGoalsPage from './components/SavingGoalsPage';
import TaxCalculationPage from './components/TaxCalculationPage';
import FinancialReportsPage from './components/FinancialReportsPage';
import ExpenseGraphsPage from './components/ExpenseGraphsPage';
import AlertsPage from './components/AlertsPage';
import './styles/main.css';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/income-expense" component={IncomeExpensePage} />
          <Route path="/saving-goals" component={SavingGoalsPage} />
          <Route path="/tax-calculation" component={TaxCalculationPage} />
          <Route path="/financial-reports" component={FinancialReportsPage} />
          <Route path="/expense-graphs" component={ExpenseGraphsPage} />
          <Route path="/alerts" component={AlertsPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;