import { configureStore } from "@reduxjs/toolkit";
import budgetReducer from "../features/budget/budgetSlice";
import expenseReducer from "../features/expense/expenseSlice";
import { loadState, saveState } from "../utils/localStorage";

//
const persistedState = loadState();

// Configure and create the Redux store
const store = configureStore({
  reducer: {
    budget: budgetReducer,
    expenses: expenseReducer,
  },
  preloadedState: persistedState,
});

//
store.subscribe(() => {
  saveState({
    budget: store.getState().budget,
    expenses: store.getState().expenses,
  });
});

export default store;
