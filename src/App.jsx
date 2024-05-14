import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import Home from "./pages/Home.jsx";
import Header from "./components/Home/Header.jsx";
import Administratorr from "./pages/UsersT.jsx";



import Products from "./pages/Products.jsx";
import UserP from "./pages/UsersT.jsx";
import PlayersP from "./pages/PlayersT.jsx";
import ProductsP from "./pages/ProductsT.jsx";

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
      <Route path="/dashboard/users" element={<UserP />} />
      <Route path="/dashboard/products" element={<ProductsP />} />
      <Route path="/dashboard/teams" element={<PlayersP />} />
      </Routes>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
