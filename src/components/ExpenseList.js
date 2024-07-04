import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeExpenseAndUpdateBudget } from "../features/expense/expenseSlice";
import EditExpenseForm from "./EditExpenseForm";

/**
 * Component for displaying a list of expenses
 */

function ExpenseList() {
  const [editingExpense, setEditingExpense] = useState(null);
  const budgets = useSelector((state) => state.budget);
  const expenses = useSelector((state) => state.expenses);
  const dispatch = useDispatch();

  return (
    <div className="p-4 bg-white rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {budgets.map((budget) => {
        const budgetExpenses = expenses.filter(
          (expense) => expense.budgetId === budget.id
        );
        if (budgetExpenses.length > 0) {
          return (
            <ul
              key={budget.id}
              className="mb-4 p-4 bg-gray-100 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">
                {budget.name}{" "}
                {budgetExpenses.length === 1 ? "Expense" : "Expenses"}
              </h3>
              {budgetExpenses.map((expense) => (
                <li
                  key={expense.id}
                  className="flex justify-between items-center mb-2"
                >
                  {editingExpense === expense.id ? (
                    <EditExpenseForm
                      expense={expense}
                      onCancel={() => setEditingExpense(null)}
                    />
                  ) : (
                    <>
                      <span className="font-medium">
                        {expense.description} - ${expense.amount}
                      </span>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setEditingExpense(expense.id)}
                          className="bg-yellow-500 rounded p-2 text-white"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() =>
                            dispatch(removeExpenseAndUpdateBudget(expense))
                          }
                          className="bg-red-500 text-white p-2 rounded"
                        >
                          Remove
                        </button>
                      </div>
                    </>
                  )}
                </li>
              ))}
              <p className="text-right font-semibold">
                Total {budget.name} expense: {budget.spent}$
              </p>
            </ul>
          );
        } else {
          return null
        }
      })}
    </div>
  );
}

export default ExpenseList;
