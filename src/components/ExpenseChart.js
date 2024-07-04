// src/components/ExpenseChart.js
import React from "react";
import { useSelector } from "react-redux";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./ExpenseChart.css";

// Register required elements
ChartJS.register(ArcElement, Tooltip, Legend);

/**
 * Component for displaying expenses in a pie chart
 */
const ExpenseChart = () => {
  const budgets = useSelector((state) => state.budget);
  const expenses = useSelector((state) => state.expenses);

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {budgets.map((budget) => {
        const budgetExpenses = expenses.filter((expense) => {
          console.log(expense.budgetId);
          console.log(budget.id);
          return expense.budgetId == budget.id;
        });

        console.log(`Budget: ${budget.name}`, budget);
        console.log(`Expenses for ${budget.name}:`, budgetExpenses);
        const data = {
          labels: budgetExpenses.map((expense) => expense.description),
          datasets: [
            {
              data: budgetExpenses.map((expense) => expense.amount),
              backgroundColor: [
                "#FF5733",
                "#33FF57",
                "#3357FF",
                "#FF33A6",
                "#33FFF5",
                "#FF5733",
                "#C70039",
                "#900C3F",
                "#581845",
                "#FFC300",
                "#FF5733",
                "#DAF7A6",
                "#FFC300",
                "#FF5733",
                "#C70039",
                "#900C3F",
                "#581845",
                "#FFC300",
                "#FF5733",
                "#33FFBD",
              ],
            },
          ],
        };

        const options = {
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
        };

        if (budgetExpenses.length > 0) {
          return (
            <div
              className="chart-container p-4 bg-white rounded-lg shadow-md"
              key={budget.id}
            >
              <h3 className="text-xl font-semibold mb-2 text-center">
                {budget.name}{" "}
                {budgetExpenses.length === 1 ? "expense" : "expenses"}
              </h3>
              <div className="chart-wrapper">
                <div className="chart-inner">
                  <Pie data={data} options={options} />
                </div>
                <div className="legend-wrapper">
                  <ul className="chart-legend">
                    {data.labels.map((label, index) => (
                      <li key={index} className="legend-item">
                        <span
                          className="legend-color"
                          style={{
                            backgroundColor:
                              data.datasets[0].backgroundColor[index],
                          }}
                        ></span>
                        {label}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default ExpenseChart;
