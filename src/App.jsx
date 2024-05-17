import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import Home from "./pages/Home.jsx";

import Administratorr from "./pages/UsersT.jsx";

import Products from "./pages/Products.jsx";
import UserP from "./pages/UsersT.jsx";
import PlayersP from "./pages/Players.jsx";
import ProductsP from "./pages/ProductsT.jsx";
import NewPlayer from "./pages/NewPlayer.jsx";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      {/* Rutas Navbar */}
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/dashboard/users" element={<UserP />} />
          <Route path="/dashboard/products" element={<ProductsP />} />
          <Route path="/dashboard/teams" element={<PlayersP />} />
        </Routes>

      {/* Rutas Sidebar protegidas */}
        <Routes>
          <Route path="/dashboard/users" element={<UserP />} />
          <Route path="/dashboard/products" element={<ProductsP />} />
          <Route path="/dashboard/my-players" element={<PlayersP/>} /> {/*Pagina jugadores user */}
          <Route path="/dashboard/players" element={<PlayersP />} /> {/*Pagina jugadores admin */}
          <Route path="/dashboard/form-player" element={<NewPlayer />} />
        </Routes>

        
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;