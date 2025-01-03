import "./App.css";
import Counter from "./components/Counter";
import Wellcome from "./components/PropsPractice";
import Task1array from "./components/TaskArray";

import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AppRoutes from "./Routes"; // Import the Routes component

function App() {
  const users = [
    { id: 1, name: "Alice(data in App.jsx passed through props to TaskArray.jsx)", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
  ];

  const navStyle = {
    padding: "10px",
    backgroundColor: "#f0f0f0",
  };
  const LinkStyle = {
    margin: "0 10px",
    textDecoration: "none",
    color: "#333",
  };
  return (
    <>
      <Router>
        <nav style={navStyle}>
          <Link to="/" style={LinkStyle}>
            Home
          </Link>
          <Link to="/about" style={LinkStyle}>
            About
          </Link>
        </nav>

        <AppRoutes />
      </Router>

      <h1>-----------------------</h1>
      <Task1array users={users} />
      <h1>-----------------------</h1>
      <Wellcome myName="Practicing Props" />
      <h1>-----------------------</h1>
      <Counter />
      <h1>-----------------------</h1>
    </>
  );
}

export default App;
