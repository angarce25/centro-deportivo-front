import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Header from "../src/components/particles/Header.jsx";
import AdminDash from "./pages/Admin.jsx";



import Products from "./pages/Products";

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<AdminDash />} />    
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
