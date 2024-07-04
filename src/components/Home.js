import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl mb-4">Personal Finance Manager</h1>
      <Link to="/expenses" className="p-2 bg-blue-500 text-white rounded m-2">
        Manage Expenses
      </Link>
      <Link to="/budgets" className="p-2 bg-green-500 text-white rounded m-2">Manage Budgets</Link>
    </div>
  );
}

export default Home;
