import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider, useDispatch } from "react-redux";
import configureStore from "redux-mock-store";
import ExpenseList from "./ExpenseList";
import { removeExpenseAndUpdateBudget } from "../features/expense/expenseSlice";

// Mock the removeExpenseAndUpdateBudget action
jest.mock("../features/expense/expenseSlice", () => ({
  ...jest.requireActual("../features/expense/expenseSlice"),
  removeExpenseAndUpdateBudget: jest.fn(),
}));

// Initialize mock store and mock dispatch function
const mockStore = configureStore([]);
const mockDispatch = jest.fn();

// Mock usdDispatch hook from react-redux
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("ExpenseList", () => {
  let store;

  // Set up mock store and clear mockDispatch calls before each test
  beforeEach(() => {
    store = mockStore({
      budget: [
        { id: 1, name: "Testing Budget 1" },
        { id: 2, name: "Testing Budget 2" },
      ],
      expenses: [
        { id: 1, description: "Testing Expense 1", amount: 5, budgetId: 1 },
        { id: 2, description: "Testing Expense 2", amount: 10, budgetId: 1 },
        { id: 3, description: "Testing Expense 3", amount: 15, budgetId: 2 },
      ],
    });

    mockDispatch.mockClear();
  });

  it("renders a list of exepenses grouped by budget", () => {
    render(
      <Provider store={store}>
        <ExpenseList />
      </Provider>
    );

    //Assert: Verify the expenses are rendered correctly
    expect(screen.getByText("Testing Budget 1 Expenses")).toBeInTheDocument();
    expect(screen.getByText("Testing Budget 2 Expense")).toBeInTheDocument();
  });

  it("dispatches removeExpenseAndUpdateBudget when remove button is clicked", () => {
    render(
      <Provider store={store}>
        <ExpenseList />
      </Provider>
    );

    // Simulates clicking the remove button
    fireEvent.click(screen.getAllByText("Remove")[0]);

    // Assert: Verify removeExpenseAndUpdate action was dispatched with correct arguments
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(removeExpenseAndUpdateBudget).toHaveBeenCalledWith({
      id: 1,
      description: "Testing Expense 1",
      amount: 5,
      budgetId: 1,
    });
  });

  it('renders the EditExpenseForm when edit button is clicked', () => {
    render(<Provider store={store}>
        <ExpenseList />
    </Provider>)

    // Simulates clicking the Edit button
    fireEvent.click(screen.getAllByText("Edit")[0]);

    // Assert: Verify that EditExpenseForm is rendered with the correct values
    expect(screen.getByPlaceholderText("Description").value).toBe("Testing Expense 1");
    expect(screen.getByPlaceholderText("Amount").value).toBe('5');
  })
});
