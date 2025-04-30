# This file contains documentation for the database setup. 

## Database Setup for Budget Tracker

This document provides instructions on how to set up the database for the Budget Tracker application.

### Database Management System

The Budget Tracker application supports both MySQL and MongoDB. Choose the one that best fits your needs.

### MySQL Setup

1. **Install MySQL**: Ensure that MySQL is installed on your machine. You can download it from the [official MySQL website](https://www.mysql.com/downloads/).

2. **Create Database**: 
   - Open your MySQL command line or a GUI tool like MySQL Workbench.
   - Run the following command to create a new database:
     ```sql
     CREATE DATABASE budget_tracker;
     ```

3. **Run Schema**: 
   - Execute the `schema.sql` file located in the `database` directory to set up the necessary tables:
     ```sql
     SOURCE path/to/budget-tracker-app/database/schema.sql;
     ```

### MongoDB Setup

1. **Install MongoDB**: Ensure that MongoDB is installed on your machine. You can download it from the [official MongoDB website](https://www.mongodb.com/try/download/community).

2. **Create Database**: 
   - Start the MongoDB server by running `mongod` in your terminal.
   - Use the MongoDB shell or a GUI tool like MongoDB Compass to create a new database:
     ```javascript
     use budget_tracker;
     ```

3. **Run Schema**: 
   - The schema for MongoDB is defined in the models within the backend. Ensure that the models are correctly set up in the `backend/src/models` directory.

### Connection Configuration

- Update the database connection settings in `backend/src/db.js` to match your database configuration (username, password, host, etc.).

### Conclusion

After completing the above steps, your database should be set up and ready to use with the Budget Tracker application. If you encounter any issues, please refer to the documentation for MySQL or MongoDB for troubleshooting tips.