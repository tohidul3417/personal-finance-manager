import { createSlice } from "@reduxjs/toolkit";
import { resetSpent, updateSpent } from "../budget/budgetSlice";

// Create a slice for expense management
const expenseSlice = createSlice({
  name: "expenses",
  initialState: [],
  reducers: {
    addExpense: (state, action) => {
      state.push(action.payload);
    },
    updateExpense: (state, action) => {
      const { id, amount} = action.payload;
      const expense = state.find((expense) => expense.id === id);
      if (expense) {
        expense.amount = amount;
      }
    },
    removeExpense: (state, action) => {
      return state.filter((expense) => expense.id !== action.payload);
    },
  },
});

// Thunk to handle side effects for adding an expense
export const addExpenseAndUpdateBudget = (expense) => (dispatch) => {
  dispatch(addExpense(expense));
  dispatch(updateSpent({ id: expense.budgetId, amount: expense.amount }));
};

// Thunk to handle side effects for removing an expense
export const removeExpenseAndUpdateBudget = (expense) => (dispatch) => {
  dispatch(removeExpense(expense.id));
  dispatch(resetSpent({ id: expense.budgetId, amount: expense.amount }));
};

// Thunk to hande side effects for updating an expense
export const updateExpenseAndBudget =
  (expense, oldAmount, oldBudgetId) => (dispatch) => {
    dispatch(updateExpense(expense));
    dispatch(resetSpent({ id: oldBudgetId, amount: oldAmount }));
    dispatch(updateSpent({ id: expense.budgetId, amount: expense.amount }));
  };

// Export actions and reducer
export const { addExpense, removeExpense, updateExpense } =
  expenseSlice.actions;
export default expenseSlice.reducer;
