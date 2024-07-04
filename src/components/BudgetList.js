import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeBudget } from "../features/budget/budgetSlice";
import EditBudgetForm from "./EditBudgetForm";

/**
 * Component for displaying a list of budgets
 */

function BudgetList() {
  const [editingBudget, setEditingBudget] = useState(null);
  const budgets = useSelector((state) => state.budget);
  const dispatch = useDispatch();

  return (
    <ul className="p-4 bg-white rounded-lg shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {budgets.map((budget) => (
        <li
          key={budget.id}
          className="flex justify-between items-center mb-2 p-2 bg-gray-100 rounded-md shadow-lg"
        >
          {editingBudget === budget.id ? (
            <EditBudgetForm
              budget={budget}
              onCancel={() => setEditingBudget(null)}
            />
          ) : (
            <>
              <div className="flex flex-col">
                <span>
                  <span className="font-bold">{budget.name}</span> Budget: $
                  {budget.amount},
                </span>
                <span>Spent: ${budget.spent}</span>
                <span>Remaining: ${budget.amount - budget.spent}</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setEditingBudget(budget.id)}
                  className="p-2 bg-yellow-500 text-white rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => dispatch(removeBudget(budget.id))}
                  className="p-2 bg-red-500 text-white rounded"
                >
                  Remove
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default BudgetList;
