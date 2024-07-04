import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExpenseAndUpdateBudget } from "../features/expense/expenseSlice";

/**
 * Component for adding a new expense
 */

function ExpenseForm() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [budgetId, setBudgetId] = useState("");
  const dispatch = useDispatch();
  const budgets = useSelector((state) => state.budget);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addExpenseAndUpdateBudget({
        id: Date.now(),
        description,
        amount: parseFloat(amount),
        budgetId: Number(budgetId)
      })
    );
    setDescription("");
    setAmount("");
    setBudgetId("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow-md max-w-sm">
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
        required
      />
      <select
        value={budgetId}
        onChange={(e) => setBudgetId(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
        required
      >
        <option value="" disabled>
          Select Budget
        </option>
        {budgets.map((budget) => (
          <option key={budget.id} value={budget.id}>
            {budget.name}
          </option>
        ))}
      </select>
      <button type="submit" className="p-2 bg-blue-500 text-white rounded w-full">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
