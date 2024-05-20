import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import Home from "./pages/Home.jsx";

import Administratorr from "./pages/UsersT.jsx";

import Products from "./pages/Products.jsx";
import UserP from "./pages/UsersT.jsx";
import PlayersP from "./pages/PlayersT.jsx";
import ProductsP from "./pages/ProductsT.jsx";

import { SpinnerProvider } from "./context/LoadingContext.jsx"; //el componente loading spinner 

function App() {
  return (
    <AuthProvider>
      <SpinnerProvider>
        <BrowserRouter>
      
          <Routes>
            <Route path="/dashboard/users" element={<UserP />} />
            <Route path="/dashboard/products" element={<ProductsP />} />
            <Route path="/dashboard/teams" element={<PlayersP />} />
          </Routes>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Products />} />
          </Routes>
       
        </BrowserRouter>
      </SpinnerProvider>
    </AuthProvider>
  );
}

export default App;
