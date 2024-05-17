import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
/* import { ProductsProvider } from "./context/ProductsContext.jsx"; */
import Home from "./pages/Home.jsx";

// import Administratorr from "./pages/UsersT.jsx";

import UserP from "./pages/Users.jsx";
import PlayersP from "./pages/Players.jsx";
import Products from "./pages/Products.jsx";
/* import ProductsP from "./pages/ProductsT.jsx"; */
import NewPlayer from "./pages/NewPlayer.jsx";
import ProductOrder from "./pages/ProductOrder.jsx";
import ProductsOrders from "./pages/ProductsOrders.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

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
        </Routes>

        {/* Rutas Sidebar protegidas */}
        <Routes>
          <Route path="/dashboard/users" element={<UserP />} />
          <Route path="/dashboard/products" element={<Products />} />
          {/*Pagina jugadores user */}
          <Route path="/dashboard/my-players" element={<PlayersP />} />{" "}
          {/*Pagina jugadores admin */}
          <Route path="/dashboard/players" element={<PlayersP />} />{" "}
          <Route path="/dashboard/form-player" element={<NewPlayer />} />
          <Route path="/dashboard/product-order" element={<ProductOrder />} />
          <Route path="/dashboard/products-orders"element={<ProductsOrders />}/>
          <Route path="/dashboard/teams" element={<PlayersP />} />
        </Routes>
      </BrowserRouter>
      {/* </ProductsProvider> */}
    </AuthProvider>
  );
}

export default App;
