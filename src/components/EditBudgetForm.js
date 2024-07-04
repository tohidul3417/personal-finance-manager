import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateBudget } from "../features/budget/budgetSlice";

function EditBudgetForm({ budget, onCancel }) {
  const [name, setName] = useState(budget.name);
  const [amount, setAmount] = useState(budget.amount);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBudget({ id: budget.id, name, amount: parseFloat(amount) }));
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow-md">
      <input
        type="text"
        value={name}
        placeholder="Budget Name"
        onChange={(e) => setName(e.target.value)}
        className="mb-2 p-2 border rounded w-full"
        required
      />
      <input
        type="number"
        value={amount}
        placeholder="Amount"
        onChange={(e) => setAmount(e.target.value)}
        className="mb-2 p-2 border rounded w-full"
        required
      />
      <div className="flex justify-between">
        <button
          onClick={onCancel}
          className="p-2 bg-gray-500 text-white rounded w-2/7"
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

export default EditBudgetForm;
