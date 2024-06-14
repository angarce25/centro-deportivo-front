import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShoppingCartProvider } from "./context/ProductContext.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import UserP from "./pages/Users.jsx";
import PlayersAdmin from "./pages/PlayersAdmin.jsx";
import PlayersUser from "./pages/PlayersUser.jsx";
import UserMemberships from "./pages/UserMemberships.jsx";
import NewPlayer from "./pages/NewPlayer.jsx";
import Products from "./pages/Products.jsx";
import ProductOrder from "./pages/ProductOrder.jsx";
import Merchandising from "./pages/Merchandising.jsx";
import { PlayerProvider } from "./context/PlayerContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { SpinnerProvider } from "./context/LoadingContext.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyOrders from "./pages/MyOrders.jsx";
import TeamInfo from "./pages/TeamInfo.jsx";
import { PrivateRoute, AdminPrivateRoute } from "./context/PrivateRoutes.jsx";
import OrdersAdmin from "./pages/OrdersAdmin.jsx";
import NotFound from "./components/notfound/NotFound.jsx"
import OrdersUsersChart from "./components/orders/OrdersUsersChart.jsx";
import AdminMemberships from "./pages/AdminMemberships.jsx";
import MyPayment from "./pages/MyPayment.jsx";





function App() {
  
  return (
    <AuthProvider>
    <SpinnerProvider>
      <ToastContainer />
      <ShoppingCartProvider>
        <PlayerProvider>
          <BrowserRouter>
            {/* RUTAS NAVBAR */}
            
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/info" element={<TeamInfo />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/merchandising" element={<Merchandising />} />
              <Route path="/*" element={<NotFound />} />

              {/* Rutas protegidas para el usuario */}
              <Route element={<PrivateRoute isAllowed={false} />}>
                <Route path="/dashboard/my-players" element={<PlayersUser />} />

                <Route path="/dashboard/my-memberships" element={<UserMemberships />} />
                <Route path="/dashboard/payment/:playerId" element={<MyPayment />} /> 

                <Route path="/dashboard/myorders" element={<MyOrders />} />
                <Route path="/dashboard/form-player" element={<NewPlayer />} />
                <Route path="/dashboard/products" element={<Products />} />
                <Route path="/dashboard/add-order" element={<ProductOrder />} />
                <Route
                  path="/dashboard/product-order"
                  element={<ProductOrder />}
                />
              </Route>
              {/* Final de las Rutas protegidas para el usuario */}

              {/* Rutas protegidas para el Administrador */}
              <Route element={<AdminPrivateRoute isAllowed={false} />}>
                <Route path="/dashboard/users" element={<UserP />} />
                <Route
                  path="/dashboard/players"
                  element={<PlayersAdmin />}
                />{" "}
                <Route path="/dashboard/orders" element={<OrdersAdmin />} />
                <Route path="/dashboard/teams" element={<PlayersUser />} />
                <Route path="/dashboard/memberships" element={<AdminMemberships />} />
              </Route>
              {/* Final de rutas protegidas para el Administrador */}

            </Routes>
          </BrowserRouter>
        </PlayerProvider>
      </ShoppingCartProvider>
    </SpinnerProvider>
    </AuthProvider>
  );
}

export default App;