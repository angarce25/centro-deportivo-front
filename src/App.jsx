import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
/* import { ProductsProvider } from "./context/ProductsContext.jsx"; */
import Home from "./pages/Home.jsx";
import UserP from "./pages/UsersT.jsx";
import ProductsP from "./pages/ProductsT.jsx";
import PlayersP from "./pages/Players.jsx";
import Products from "./pages/Products.jsx";
import ProductOrder from "./pages/ProductOrder.jsx";
import ProductsOrders from "./pages/ProductsOrders.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
<<<<<<< HEAD
import { AuthProvider } from "./context/AuthContext.jsx";
import Home from "./pages/Home.jsx";

import Administratorr from "./pages/UsersT.jsx";

import Products from "./pages/Products.jsx";
import UserP from "./pages/UsersT.jsx";
import PlayersP from "./pages/PlayersT.jsx";
import ProductsP from "./pages/ProductsT.jsx";
import Loading from "./pages/resources/Loading.jsx";
import NotFound from "./pages/resources/NotFound.jsx";
=======
>>>>>>> 94fb3d4ba01398c3bcce907612fa732eff542097

function App() {
  return (
    <AuthProvider>
      {/* <ProductsProvider> */} {/* Aquí agregamos el ProductsProvider */}
      <BrowserRouter>
        {/* Rutas Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productOrder" element={<ProductOrder />} />
          <Route path="/productsOrders" element={<ProductsOrders />} />
          <Route path="/dashboard/users" element={<UserP />} />
          <Route path="/dashboard/products" element={<ProductsP />} />
          <Route path="/dashboard/teams" element={<PlayersP />} />

          {/* Rutas Sidebar protegidas */}
        </Routes>
      </BrowserRouter>
      {/* </ProductsProvider> */}
    </AuthProvider>
  );
}

export default App;
