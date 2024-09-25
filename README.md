
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
personal-finance-manager
├─ .gitignore
├─ LICENSE
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ manifest.json
│  ├─ personal.png
│  └─ robots.txt
├─ README.md
├─ src
│  ├─ app
│  │  └─ store.js
│  ├─ App.css
│  ├─ App.js
│  ├─ components
│  │  ├─ BudgetForm.js
│  │  ├─ BudgetForm.test.js
│  │  ├─ BudgetList.js
│  │  ├─ BudgetList.test.js
│  │  ├─ Budgets.js
│  │  ├─ EditBudgetForm.js
│  │  ├─ EditBudgetForm.test.js
│  │  ├─ EditExpenseForm.js
│  │  ├─ EditExpenseForm.test.js
│  │  ├─ ExpenseChart.css
│  │  ├─ ExpenseChart.js
│  │  ├─ ExpenseChart.test.js
│  │  ├─ ExpenseForm.js
│  │  ├─ ExpenseForm.test.js
│  │  ├─ ExpenseList.js
│  │  ├─ ExpenseList.test.js
│  │  ├─ Expenses.js
│  │  ├─ Home.js
│  │  └─ Navbar.js
│  ├─ features
│  │  ├─ budget
│  │  │  └─ budgetSlice.js
│  │  └─ expense
│  │     └─ expenseSlice.js
│  ├─ index.css
│  ├─ index.js
│  ├─ reportWebVitals.js
│  ├─ setupTests.js
│  └─ utils
│     └─ localStorage.js
└─ tailwind.config.js
```

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any features, enhancements, or bug fixes.
## License
This project is licensed under the MIT License

