import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ExpenseChart from "./ExpenseChart";

// Initialize the mock store
const mockStore = configureStore([]);

describe("ExpenseChart", () => {
  let store;

  // Set up mock store before each test
  beforeEach(() => {
    store = mockStore({
      budget: [
        { id: 1, name: "Testing Budget 1" },
        { id: 2, name: "Testing Budget 2" },
      ],
      expenses: [
        { id: 1, description: "Testing Expense 1", amount: 5, budgetId: 1 },
        { id: 2, description: "Testing Expense 2", amount: 10, budgetId: 2 },
        { id: 3, description: "Testing Expense 3", amount: 15, budgetId: 2 },
      ],
    });
  });

  it("renders a pie chart for each budget with its expenses", () => {
    render(
      <Provider store={store}>
        <ExpenseChart />
      </Provider>
    );

    // Assert: Verify the charts are rendered correctly
    expect(screen.getByText("Testing Budget 1 expense")).toBeInTheDocument();
    expect(screen.getByText("Testing Budget 2 expenses")).toBeInTheDocument();

     // Verify that the canvas elements for the charts are rendered
     const canvasElements = screen.getAllByRole('img');
     expect(canvasElements.length).toBe(2); // Assuming two budgets
  });
});
