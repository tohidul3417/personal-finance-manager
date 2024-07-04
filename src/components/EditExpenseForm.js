import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateExpenseAndBudget } from "../features/expense/expenseSlice";

function EditExpenseForm({ expense, onCancel }) {
  const [description, setDescription] = useState(expense.description);
  const [amount, setAmount] = useState(expense.amount);
  const [budgetId, setBudgetId] = useState(expense.budgetId);
  const dispatch = useDispatch();
  const budgets = useSelector((state) => state.budget);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: expense.id,
      description,
      amount: parseFloat(amount),
      budgetId: Number(budgetId)
    };

    dispatch(
      updateExpenseAndBudget(newExpense, expense.amount, expense.budgetId)
    );
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="mb-2 p-2 border rounded w-full"
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="mb-2 p-2 border rounded w-full"
        required
      />
      <select
        value={budgetId}
        onChange={(e) => setBudgetId(e.target.value)}
        className="mb-2 p-2 border rounded w-full"
      >
        <option value="" disabled>
          Select Budget
        </option>
        {budgets.map((budget) => (
          <option key={budget.id} value={budget.id}>{budget.name}</option>
        ))}
      </select>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onCancel}
          className="p-2 bg-gray-500 text-white rounded w-1/3"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="p-2 bg-green-500 text-white rounded w-1/4"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default EditExpenseForm;
