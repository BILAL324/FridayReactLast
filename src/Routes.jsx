import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
