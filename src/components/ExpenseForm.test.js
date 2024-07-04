import React from "react";
import { Provider, useDispatch } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import configureStore from "redux-mock-store";
import ExpenseForm from "./ExpenseForm";
import { addExpenseAndUpdateBudget } from "../features/expense/expenseSlice";
import { redirect } from "react-router-dom";

// Mock addExpenseAndUpdateBudget action
jest.mock("../features/expense/expenseSlice", () => ({
  ...jest.requireActual("../features/expense/expenseSlice"),
  addExpenseAndUpdateBudget: jest.fn(),
}));

// Initialize the mock store and dispatch function
const mockStore = configureStore([]);
const mockDispatch = jest.fn();

// Mock useDispatch hook from react-redux
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("ExpenseForm", () => {
  let store;

  // Set up mock store and clear dispatch calls before each test
  beforeEach(() => {
    store = mockStore({
      budget: [
        { id: 1, name: "Testing Budget 1" },
        { id: 2, name: "Testing Budget 2" },
      ],
      expenses: [],
    });

    mockDispatch.mockClear();
  });

  it("renders the form with initial empty values", () => {
    render(
      <Provider store={store}>
        <ExpenseForm />
      </Provider>
    );

    // Assert: Verify the form fields' initial values are empty
    expect(screen.getByPlaceholderText("Description").value).toBe("");
    expect(screen.getByPlaceholderText("Amount").value).toBe("");
    expect(screen.getByText("Select Budget")).toBeInTheDocument();
  });

  it("dispatches addExpenseAndUpdateBudget on form submission", () => {
    render(
      <Provider store={store}>
        <ExpenseForm />
      </Provider>
    );

    // Simulate user input changes
    fireEvent.change(screen.getByPlaceholderText("Description"), {
      target: { value: "Testing Expense" },
    });
    fireEvent.change(screen.getByPlaceholderText("Amount"), {
      target: { value: 5 },
    });
    fireEvent.change(screen.getByRole("combobox"), { target: { value: 1 } });

    // Simulates form submission
    fireEvent.submit(screen.getByRole("button", { name: /add expense/i }));

    // Assertion: Verify addExpenseAndUpdateBudget action was dispatched with correct arguments
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(addExpenseAndUpdateBudget).toHaveBeenCalledWith({
      id: expect.any(Number),
      description: "Testing Expense",
      amount: 5,
      budgetId: 1,
    });
  });
});
