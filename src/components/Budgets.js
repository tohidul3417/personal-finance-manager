import React from "react";
import BudgetForm from './BudgetForm';
import BudgetList from './BudgetList';

function Budgets() {
  return(
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-2xl mb-4">Manage Budgets</h2>
      <BudgetForm />
      <BudgetList />
    </div>
  );
}

export default Budgets;