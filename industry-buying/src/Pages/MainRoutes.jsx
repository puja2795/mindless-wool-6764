import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import Login from "./Login";
import Register from "./Register";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
}
