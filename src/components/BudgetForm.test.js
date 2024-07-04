import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider, useDispatch } from "react-redux";
import configureStore from "redux-mock-store";
import BudgetForm from "./BudgetForm";
import { addBudget } from "../features/budget/budgetSlice";

// Mock the addBudget action
jest.mock("../features/budget/budgetSlice", () => ({
  ...jest.requireActual("../features/budget/budgetSlice"),
  addBudget: jest.fn(),
}));

// Initialize mock store and dispatch function
const mockStore = configureStore([]);
const mockDispatch = jest.fn();

// Mock useDispatch hook from 'react-redux'
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("BudgetForm", () => {
  let store;

  // Setup mock store and clear mockDispatch calls before each test
  beforeEach(() => {
    store = mockStore({
      budget: [],
    });

    mockDispatch.mockClear();
  });

  it("renders the form with initial empty values", () => {
    render(
      <Provider store={store}>
        <BudgetForm />
      </Provider>
    );

    // Assert: Verify the form fiels have initial empty values
    expect(screen.getByPlaceholderText("Budget Name").value).toBe("");
    expect(screen.getByPlaceholderText("Amount").value).toBe("");
  });

  it("dispatches addBudget action on form submission", () => {
    render(
      <Provider store={store}>
        <BudgetForm />
      </Provider>
    );

    // Simulate user input changes
    fireEvent.change(screen.getByPlaceholderText("Budget Name"), {
      target: { value: "Testing Budget" },
    });
    fireEvent.change(screen.getByPlaceholderText("Amount"), {
      target: { value: 50 },
    });

    // Simulate form submission
    fireEvent.submit(screen.getByRole("button", { name: /add budget/i }));

    // Assert: Verify the action was with correct arguments
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(addBudget).toHaveBeenCalledWith({
        id: expect.any(Number),
        name: "Testing Budget",
        amount: 50,
    }) 
  });
});
