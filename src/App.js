import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Expenses from "./components/Expenses";
import Budgets from "./components/Budgets";
import NavBar from "./components/Navbar";

/**
 * Main App component with routing
 */

function App() {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/budgets" element={<Budgets />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
