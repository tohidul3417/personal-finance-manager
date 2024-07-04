import { createSlice } from "@reduxjs/toolkit";

// Create a slice for budget management
const budgetSlice = createSlice({
  name: "budget",
  initialState: [],
  reducers: {
    addBudget: (state, action) => {
      state.push({ ...action.payload, spent: 0 });
    },
    updateBudget: (state, action) => {
      const { id, name, amount } = action.payload;
      const budget = state.find((budget) => budget.id == id);
      if (budget) {
        budget.name = name;
        budget.amount = amount;
      }
    },

    removeBudget: (state, action) => {
      return state.filter((budget) => budget.id !== action.payload);
    },
    updateSpent: (state, action) => {
      const { id, amount } = action.payload;
      const budget = state.find((budget) => budget.id == id);
      if (budget) {
        budget.spent += amount;
      }
    },

    resetSpent: (state, action) => {
      const { id, amount } = action.payload;
      const budget = state.find((budget) => budget.id == id);
      if (budget) {
        budget.spent -= amount;
      }
    },
  },
});

// Export actions reducer
export const {
  addBudget,
  updateBudget,
  removeBudget,
  updateSpent,
  resetSpent,
} = budgetSlice.actions;
export default budgetSlice.reducer;
