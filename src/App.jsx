import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { AuthProvider } from "./context/AuthContext.jsx";
import { ShoppingCartProvider } from "./context/ProductContext.jsx";
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
import { PlayerProvider } from "./context/PlayerContext.jsx";

import { SpinnerProvider } from "./context/LoadingContext.jsx"; //el componente loading spinner



// -- Imports para Rutas de prueba --
import TermsAndConditionsModal from "./components/termsAndConditions/Terms.jsx";
// -- Final de imports rutas de prueba --

function App() {
  return (
    //<AuthProvider>
      <SpinnerProvider>
      <ShoppingCartProvider>
       <PlayerProvider> 
      <BrowserRouter>
      
        {/* RUTAS NAVBAR */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        
         
          {/* <Route path="/dashboard/products" element={<ProductsP />} /> */}
          {/* <Route path="/dashboard/teams" element={<PlayersP />} /> */}



      {/* Rutas Sidebar protegidas */}

          <Route path="/dashboard/users" element={<UserP />} />
          
          {/*Pagina jugadores user */}
          <Route path="/dashboard/my-players" element={<PlayersUser />} />{" "}
          {/*Pagina jugadores admin */}
          <Route path="/dashboard/players" element={<PlayersAdmin />} />{" "}
          <Route path="/dashboard/form-player" element={<NewPlayer />} />
          
          <Route path="/dashboard/products" element={<Products />} />
          <Route path="/dashboard/product-order" element={<ProductOrder />} />
          <Route path="/dashboard/products-orders"element={<ProductsOrders />}/>
          

          <Route path="/dashboard/teams" element={<PlayersUser />} />
   {/* -_- Ruta de pruebas para cnstruccion de componentes front */}
          <Route path="/testing" element={<TermsAndConditionsModal isOpen={true} onClose={false} />} />
        {/* -_- Final de ruta de pruebas para cnstruccion de componentes front */}
        </Routes>
      </BrowserRouter>
        </PlayerProvider> 
      </ShoppingCartProvider>
      </SpinnerProvider>
    //</AuthProvider>
  );
}

export default App;