import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShoppingCartProvider } from "./context/ProductContext.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import UserP from "./pages/Users.jsx";
import PlayersUser from "./pages/PlayersUser.jsx";
import PlayersAdmin from "./pages/PlayersAdmin.jsx";
import NewPlayer from "./pages/NewPlayer.jsx";
import Products from "./pages/Products.jsx";
import ProductOrder from "./pages/ProductOrder.jsx";
import ProductsOrders from "./pages/ProductsOrders.jsx";
import Merchandising from "./pages/Merchandising.jsx";
import { PlayerProvider } from "./context/PlayerContext.jsx";
import { SpinnerProvider } from "./context/LoadingContext.jsx"; //el componente loading spinner
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyOrders from "./pages/MyOrders.jsx";
import TeamInfo from "./pages/TeamInfo.jsx";
import { PrivateRoute, AdminPrivateRoute } from "./context/PrivateRoutes.jsx";
import OrdersUsersChart from "./components/orders/OrdersUsersChart.jsx";
import OrdersAdmin from "./pages/OrdersAdmin.jsx";



function App() {
  return (
    //<AuthProvider>
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
         
          {/* <Route path="/dashboard/products" element={<ProductsP />} /> */}
          {/* <Route path="/dashboard/teams" element={<PlayersP />} /> */}
          {/* <Route path="/*" element={<NotFound />} /> */}
      
      {/* Rutas Sidebar protegidas */}
          <Route path="/dashboard/users" element={<UserP />} />
          
          {/*Pagina jugadores user */}
          {/* <Route element={<PrivateRoute isAllowed={false} />}> */}
            <Route path="/dashboard/my-players" element={<PlayersUser />} />{" "}
          {/* </Route> */}
          {/*Pagina jugadores admin */}
          <Route path="/dashboard/players" element={<PlayersAdmin />} />{" "}
          <Route path="/dashboard/form-player" element={<NewPlayer />} />
          
          <Route path="/dashboard/products" element={<Products />} />
          <Route path="/dashboard/add-order" element={<ProductOrder />} />
          <Route path="/dashboard/products-orders"element={<ProductsOrders />}/>
          <Route path="/dashboard/myorders"element={<MyOrders />}/>
          <Route path="/dashboard/orders"element={<OrdersAdmin />}/>
          

          <Route path="/dashboard/teams" element={<PlayersUser />} />
   {/* -_- Ruta de pruebas para cnstruccion de componentes front */}
          <Route path="/testing" element={<Merchandising />} />
        {/* -_- Final de ruta de pruebas para cnstruccion de componentes front */}
        </Routes>
      </BrowserRouter>
      </PlayerProvider> 
      </ShoppingCartProvider>
      </SpinnerProvider>
    //</AuthProvider>
  );
}

export default App;