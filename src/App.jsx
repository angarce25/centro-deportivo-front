import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
/* import { ProductsProvider } from "./context/ProductsContext.jsx"; */
import Home from "./pages/Home.jsx";
import Header from "./components/Home/Header.jsx";
import Products from "./pages/Products.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

function App() {
  return (
    <AuthProvider>
      {/* <ProductsProvider> */} {/* Aquí agregamos el ProductsProvider */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
      {/* </ProductsProvider> */}
    </AuthProvider>
  );
}

export default App;
