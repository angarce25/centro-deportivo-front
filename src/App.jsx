import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logincomponent from "./components/particles/forms/Logincomponent";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Header from "./components/particles/Header";
import AdminDash from "./pages/Admin.jsx";




function App() {

  return (
     <AuthProvider>
      <BrowserRouter>
        <Header />
       
      
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminDash />} />
        
        
        </Routes>
      </BrowserRouter>
     </AuthProvider>
  );
}

export default App;