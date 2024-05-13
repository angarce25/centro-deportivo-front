import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logincomponent from "./components/particles/forms/Logincomponent";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Header from "./components/particles/Header";
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
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
