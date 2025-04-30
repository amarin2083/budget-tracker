const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Mock data (แทนฐานข้อมูลจริง)
let incomes = [
  { id: 1, user_id: 1, amount: 5000, source: 'Salary', date: '2025-05-01' }
];
let expenses = [
  { id: 1, user_id: 1, amount: 200, category: 'Food', description: 'Lunch', date: '2025-05-01' }
];
let goals = [
  { id: 1, user_id: 1, target_amount: 10000, current_savings: 2000, goal_description: 'Vacation' }
];
let reports = [
  { id: 1, user_id: 1, report_date: '2025-05-01', total_income: 5000, total_expenses: 200, savings: 4800 }
];

// Home
// app.get('/', (req, res) => {
//   res.send('Budget Tracker App is running!');
// });

// --- Income ---
app.get('/income', (req, res) => {
  res.json(incomes);
});
app.post('/income', (req, res) => {
  const newIncome = { id: incomes.length + 1, ...req.body };
  incomes.push(newIncome);
  res.status(201).json(newIncome);
});
app.delete('/income/:id', (req, res) => {
  incomes = incomes.filter(i => i.id !== parseInt(req.params.id));
  res.status(204).send();
});

// --- Expenses ---
app.get('/expenses', (req, res) => {
  res.json(expenses);
});
app.post('/expenses', (req, res) => {
  const newExpense = { id: expenses.length + 1, ...req.body };
  expenses.push(newExpense);
  res.status(201).json(newExpense);
});
app.delete('/expenses/:id', (req, res) => {
  expenses = expenses.filter(e => e.id !== parseInt(req.params.id));
  res.status(204).send();
});

// --- Goals ---
app.get('/goals', (req, res) => {
  res.json(goals);
});
app.post('/goals', (req, res) => {
  const newGoal = { id: goals.length + 1, ...req.body };
  goals.push(newGoal);
  res.status(201).json(newGoal);
});
app.delete('/goals/:id', (req, res) => {
  goals = goals.filter(g => g.id !== parseInt(req.params.id));
  res.status(204).send();
});

// --- Reports ---
app.get('/reports', (req, res) => {
  res.json(reports);
});
app.post('/reports', (req, res) => {
  const newReport = { id: reports.length + 1, ...req.body };
  reports.push(newReport);
  res.status(201).json(newReport);
});
app.delete('/reports/:id', (req, res) => {
  reports = reports.filter(r => r.id !== parseInt(req.params.id));
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});