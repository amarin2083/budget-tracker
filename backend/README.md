# Budget Tracker Backend Documentation

## Overview
The Budget Tracker backend is built using Node.js and Express. It provides a RESTful API for managing income, expenses, saving goals, tax calculations, alerts, and financial reports. The backend connects to a MySQL or MongoDB database to store and retrieve data.

## Features
- **Income Management**: Add, update, delete, and retrieve income records.
- **Expense Management**: Add, update, delete, and retrieve expenses.
- **Saving Goals**: Create, update, and retrieve saving goals.
- **Tax Calculations**: Compute tax based on user income and provide reminders for tax payments.
- **Alerts**: Manage alerts for budget limits and tax payment reminders.
- **Financial Reports**: Generate and retrieve financial reports for spending and savings.
- **Home Summary**: Retrieve summary data for the home page, including total income, expenses, and remaining balance.

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```
   cd budget-tracker-app/backend
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Configuration
- Ensure you have a MySQL or MongoDB database set up.
- Update the database connection settings in `src/db.js`.

## Running the Application
To start the backend server, run:
```
npm start
```
The server will run on `http://localhost:3000` by default.

## API Endpoints
- **Income**: `/api/income`
- **Expenses**: `/api/expenses`
- **Goals**: `/api/goals`
- **Tax**: `/api/tax`
- **Alerts**: `/api/alerts`
- **Reports**: `/api/reports`
- **Home**: `/api/home`

## Testing
To run tests, use:
```
npm test
```

## License
This project is licensed under the MIT License.