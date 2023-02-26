import React from "react";
import { Routes, Route } from "react-router-dom";
import { CartPage } from "../Components/CartFolder/CartPage";
import { Admin } from "./Admin";
import PaymentPage from "../Components/CartFolder/PaymentPage";
import { HomePage } from "./HomePage";
import Login from "./Login";
import { Products } from "./Products";
import Register from "./Register";
import { Dashboard } from "./Dashboard";
import AdminLogin from "./AdminLogin";
import AdminRegister from "./AdminRegister";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/product" element={<Products />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/paymentpage" element={<PaymentPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/adminregister" element={<AdminRegister />}/>
      <Route path="/admin" element={<Admin/>} />

    </Routes>
  );
}
