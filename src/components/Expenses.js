import React from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function Expenses() {
  return (
    <div className="container p-4">
      <h2 className="text-2xl mb-4">Manage Expenses</h2>
      <ExpenseForm />
      <ExpenseList />
      <ExpenseChart />
    </div>
  );
}

export default Expenses;
