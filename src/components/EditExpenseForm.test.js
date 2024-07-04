import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider, useDispatch } from "react-redux";
import configureStore from "redux-mock-store";
import EditExpenseForm from "./EditExpenseForm";
import { updateExpenseAndBudget } from "../features/expense/expenseSlice";

// Mock the updateExpenseAndBduget function from expenseSlice
jest.mock("../features/expense/expenseSlice", () => ({
  ...jest.requireActual("../features/expense/expenseSlice"),
  updateExpenseAndBudget: jest.fn(),
}));

// Create a mock Redux store
const mockStore = configureStore([]);

// Create a mock dispatch function
const mockDispatch = jest.fn();

// Mock useDispatch to return the mock dispatch function
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("EditExpenseForm", () => {
  let store;
  let expense;
  let onCancel;

  beforeAll(() => {
    onCancel = jest.fn();
  });

  // Initialize ethe mock store, expense object, and mock onCacel function and clear the mock dispatch before each test
  beforeEach(() => {
    store = mockStore({
      budget: [{ id: 1, name: "Testing Budget" }],
      expenses: [],
    });

    expense = { id: 1, description: "Testing Expense", amount: 5, budgetId: 1 };

    mockDispatch.mockClear();
  });

  it("renders the form with correct initial values", () => {
    render(
      <Provider store={store}>
        <EditExpenseForm expense={expense} onCancel={onCancel} />
      </Provider>
    );

    expect(screen.getByPlaceholderText("Description").value).toBe(
      "Testing Expense"
    );
    expect(screen.getByPlaceholderText("Amount").value).toBe("5");
    expect(screen.getByDisplayValue("Testing Budget")).toBeInTheDocument();
  });

  it("dispatches updateExpenseAndBudget action on form submission", () => {
    render(
      <Provider store={store}>
        <EditExpenseForm expense={expense} onCancel={onCancel} />
      </Provider>
    );

    // Simulate user changing the form fields
    fireEvent.change(screen.getByPlaceholderText("Description"), {
      target: { value: "Updated Testing Expense" },
    });
    fireEvent.change(screen.getByPlaceholderText("Amount"), {
      target: { value: 15 },
    });
    fireEvent.change(screen.getByDisplayValue("Testing Budget"), {
      target: { value: 1 },
    });

    // Simulate form submission by clicking Save button
    fireEvent.submit(screen.getByRole("button", { name: /save/i }));

    // Assert: Verify the thunk was dispatchecd with correct arguments
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(updateExpenseAndBudget).toHaveBeenCalledWith(
      {
        id: 1,
        description: "Updated Testing Expense",
        amount: 15,
        budgetId: 1,
      },
      5, // Previous expense amount
      1 // Previous budgetId
    );
  });

  it("calls onCancel when cancel button is clicked", () => {
    render(
      <Provider store={store}>
        <EditExpenseForm expense={expense} onCancel={onCancel} />
      </Provider>
    );

    // Simulates clicking the cancel button
    fireEvent.click(screen.getByRole("button", { name: /cancel/i }));

    // Assert: verify the onCancel was invoked
    expect(onCancel).toHaveBeenCalled();
  });
});
