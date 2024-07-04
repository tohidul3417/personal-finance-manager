import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBudget } from "../features/budget/budgetSlice";

/**
 * Component for adding a new budget
 */

function BudgetForm() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBudget({ id: Date.now(), name, amount: parseFloat(amount) }));
    setName("");
    setAmount("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white rounded shadow-md max-w-sm mb-4"
    >
      <input
        type="text"
        placeholder="Budget Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
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
      <button
        type="submit"
        className="p-2 bg-green-500 text-white rounded w-full"
      >
        Add Budget
      </button>
    </form>
  );
}

export default BudgetForm;
