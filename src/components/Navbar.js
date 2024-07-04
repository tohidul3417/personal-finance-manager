import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white mx-auto">
      <div className="container mx-auto flex justify-between">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "p-2 text-yellow-500 font-bold"
              : "p-2 text-white hover:text-yellow-300"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/expenses"
          className={({ isActive }) =>
            isActive
              ? "p-2 text-yellow-500 font-bold"
              : "p-2 text-white hover:text-yellow-300 "
          }
        >
          Expenses
        </NavLink>
        <NavLink
          to="/budgets"
          className={({ isActive }) =>
            isActive
              ? "p-2 text-yellow-500 font-bold"
              : "p-2 text-white hover:text-yellow-300"
          }
        >
          Budgets
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
