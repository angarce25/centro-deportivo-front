import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
/* import { ProductsProvider } from "./context/ProductsContext.jsx"; */
import Home from "./pages/Home.jsx";
import UserP from "./pages/UsersT.jsx";
import ProductsP from "./pages/ProductsT.jsx";
import PlayersP from "./pages/PlayersT.jsx";

import Products from "./pages/Products.jsx";
import ProductOrder from "./pages/ProductOrder.jsx";
import ProductsOrders from "./pages/ProductsOrders.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

function App() {
  return (
    <AuthProvider>
      {/* <ProductsProvider> */} {/* Aquí agregamos el ProductsProvider */}
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
          <Route path="/productOrder" element={<ProductOrder />} />
          <Route path="/productsOrders" element={<ProductsOrders />} />
        </Routes>
      </BrowserRouter>
      {/* </ProductsProvider> */}
    </AuthProvider>
  );
}

export default App;
