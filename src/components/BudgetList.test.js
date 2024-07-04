import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider, useDispatch } from "react-redux";
import configureStore from "redux-mock-store";
import BudgetList from "./BudgetList";
import { removeBudget } from "../features/budget/budgetSlice";
import { elements } from "chart.js";

// Mock the removeBudget action
jest.mock("../features/budget/budgetSlice", () => ({
  ...jest.requireActual("../features/budget/budgetSlice"),
  removeBudget: jest.fn(),
}));

// Initialize mock store and mockDispatch
const mockStore = configureStore([]);
const mockDispatch = jest.fn();

// Mock useDispatch hook from react-redux
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("BudgetList", () => {
  let store;

  // Setup mock store and clear dispatch calls before each test
  beforeEach(() => {
    store = mockStore({
      budget: [
        { id: 1, name: "Testing Budget 1", amount: 50 },
        { id: 2, name: "Testing Budget 2", amount: 500 },
      ],
    });

    mockDispatch.mockClear();
  });

  it("renders a list of budgets", () => {
    render(
      <Provider store={store}>
        <BudgetList />
      </Provider>
    );

    // Helper function to check if an element's text content matched the provided text
    const nodeHasText = (text, element) => {
      const hasText = (node) => node.textContent === text;
      return hasText(element);
    };

    // Custom matcher to find text spread across elements
    const customTextMatcher = (content, element) => {
      return nodeHasText("Testing Budget 1 Budget: $50,", element);
    };

    // Assert: Verify that first budget from the budget list is rendered correctly
    expect(screen.getByText(customTextMatcher)).toBeInTheDocument();

    const customeTextMatcher2 = (content, element) => {
      return nodeHasText("Testing Budget 2 Budget: $500,", element);
    };

    // Assert: Verify that second budget from the budget list is rendered correctly
    expect(screen.getByText(customeTextMatcher2)).toBeInTheDocument();
  });

  it("dispatches removeBudget action when remove button is clicked", () => {
    render(
      <Provider store={store}>
        <BudgetList />
      </Provider>
    );

    // Simulates user clicking the remove button on first budget
    fireEvent.click(screen.getAllByText("Remove")[0]);

    //Assert: Verify removeBudget action was dispatched with correct arguments
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(removeBudget).toHaveBeenCalledWith(1);
  });
});
