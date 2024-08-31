
# Personal Finance Manager

## Overview
Personal Finance Manager is a web app that helps manage their personal budgets and expenses effectively. Built with React and Redux, this app provides a simple way to track budgets and expenses through a user-friendly interface.

## Live Demo

Check out the live demo of the Personal Finance Manager <a href="https://hasantohidul-personal-finance-manager.netlify.app/" target="_blank" rel="noopener noreferrer">here</a>.

## Features

- **Budget Management:** Create, update and delete budgets.
- **Expense Tracking:** Record expenses under specific budgets and monitor spending.
- **Data Visualization:** View expenses in pie charts
- **State Persistence:** Automatically save data using local storage.
- **Responsive Design:** Optimized for all sorts of devices using Tailwind CSS.
- **Comprehensive Testing:** Includes unit tests for critical components.


## Technologies Used

- **React:** A JavaScript library for building user interfaces
- **Redux:** A predictable state container for JavaScript apps.
- **React Router:** For handling navigation and routing.
- **Tailwind CSS:** A utility-first CSS framework for styling the app.
- **Chart.js:** For rendering interactive charts to visualize expenses
- **Jest & React Testing Library:** For unit testing and ensuring code quality.
- **localStorage:** For persisting state across sessions.
## Installation
To run this project locally, follow these steps:

1.  **Clone the repository**
    ```sh
    git clone https://github.com/hasantohidul/personal-finance-manager.git
    ```
2. Navigate to the project directory
    ```sh
    cd personal-finance-manager
    ```
3. Install dependencies
    ```sh
    npm install
    ```
4. Start the development server
    ```sh
    npm start
    ```
    The app will run on `http://localhost:3000`.
## Usage

1. **Manage Budgets:**
- Navigate to the "Budgets" section.
- Add, edit, or delete budgets as needed.
2. **Track Expenses:**
- Navigate to "Expenses" section
- Add exepnses under specific budgets.

## Running Tests

1. To run the tests
    ```sh
    npm test
    ```
    This will execute the unit tests for components like **ExpenseForm**, **BudgetList**, and others using jest and React Testing Library.
## Project Structure
```sh
personal-finance-manager/
├── public/
│   ├── index.html
│   └── personal.png
├── src/
│   ├── app/
│   │   └── store.js
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Home.js
│   │   ├── Expenses.js
│   │   ├── Budgets.js
│   │   ├── BudgetForm.js
│   │   ├── BudgetList.js
│   │   ├── EditBudgetForm.js
│   │   ├── ExpenseForm.js
│   │   ├── ExpenseList.js
│   │   ├── EditExpenseForm.js
│   │   ├── ExpenseChart.js
│   │   ├── BudgetForm.test.js
│   │   ├── BudgetList.test.js
│   │   ├── EditBudgetForm.test.js
│   │   ├── ExpenseForm.test.js
│   │   ├── ExpenseList.test.js
│   │   ├── EditExpenseForm.test.js
│   │   ├── ExpenseChart.test.js
│   ├── features/
│   │   ├── budget/
│   │   │   └── budgetSlice.js
│   │   └── expense/
│   │       └── expenseSlice.js
│   ├── utils/
│   │   └── localStorage.js
│   ├── App.js
│   ├── index.js
│   └── App.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any features, enhancements, or bug fixes.
## License
This project is licensed under the MIT License