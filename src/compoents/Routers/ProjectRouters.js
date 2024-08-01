import React from "react";
import { Route, Routes } from "react-router";
import Home from "../Home/Home";
import Register from "../RegisterPage/Register";

const ProjectRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      {/* Add other routes here */}
    </Routes>
  );
};

export default ProjectRouters;
