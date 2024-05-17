import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
/* import { ProductsProvider } from "./context/ProductsContext.jsx"; */
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
// import Administratorr from "./pages/UsersT.jsx";

import UserP from "./pages/Users.jsx";
import PlayersUser from "./pages/PlayersUser.jsx";
import PlayersAdmin from "./pages/PlayersAdmin.jsx";
import NewPlayer from "./pages/NewPlayer.jsx";
import Products from "./pages/Products.jsx";
/* import ProductsP from "./pages/ProductsT.jsx"; */
import ProductOrder from "./pages/ProductOrder.jsx";
import ProductsOrders from "./pages/ProductsOrders.jsx";



function App() {
  return (
    <AuthProvider>
      {/* <ProductsProvider> */} {/* Aquí agregamos el ProductsProvider */}
      <BrowserRouter>
      
        {/* RUTAS NAVBAR */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        {/* RUTAS SIDEBAR PROTEGIDAS */}
        <Routes>
          <Route path="/dashboard/users" element={<UserP />} />
          <Route path="/dashboard/products" element={<Products />} />
          {/*Pagina jugadores user */}
          <Route path="/dashboard/my-players" element={<PlayersUser />} />{" "}
          {/*Pagina jugadores admin */}
          <Route path="/dashboard/players" element={<PlayersAdmin />} />{" "}
          <Route path="/dashboard/form-player" element={<NewPlayer />} />
          <Route path="/dashboard/product-order" element={<ProductOrder />} />
          <Route path="/dashboard/products-orders"element={<ProductsOrders />}/>
          <Route path="/dashboard/teams" element={<PlayersUser />} />
        </Routes>
      </BrowserRouter>
      {/* </ProductsProvider> */}
    </AuthProvider>
  );
}

export default App;
