import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import EditBudgetForm from "./EditBudgetForm";
import { updateBudget } from "../features/budget/budgetSlice";

const mockStore = configureStore([]);
const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("EditBudgetForm", () => {
  let store;
  let budget;
  let onCancel;

  beforeEach(() => {
    store = mockStore({});
    budget = { id: 1, name: "Test budget", amount: 50 };
    onCancel = jest.fn();
  });

  it("renders the form with correct initial values", () => {
    render(
      <Provider store={store}>
        <EditBudgetForm budget={budget} onCancel={onCancel} />
      </Provider>
    );

    expect(screen.getByPlaceholderText("Budget Name").value).toBe(
      "Test budget"
    );
    expect(screen.getByPlaceholderText("Amount").value).toBe("50");
  });

  it("dispatches updateBudget on form submission", () => {
    render(
      <Provider store={store}>
        <EditBudgetForm budget={budget} onCancel={onCancel} />
      </Provider>
    );

    fireEvent.change(screen.getByPlaceholderText("Budget Name"), {
      target: { value: "Updated Name" },
    });
    fireEvent.change(screen.getByPlaceholderText("Amount"), {
      target: { value: 100 },
    });

    fireEvent.submit(screen.getByRole("button", { name: /save/i }));

    expect(mockDispatch).toHaveBeenCalledWith(
      updateBudget({ id: 1, name: "Updated Name", amount: 100 })
    );
  });

  it("calls onCancel when the cancel button is clicked", () => {
    render(
      <Provider store={store}>
        <EditBudgetForm budget={budget} onCancel={onCancel} />
      </Provider>
    );

    fireEvent.click(screen.getByRole("button", { name: /save/i }));

    expect(onCancel).toHaveBeenCalled();
  });
});
