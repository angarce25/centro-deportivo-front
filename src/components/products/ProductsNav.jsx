import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../context/ProductContext";
import { TfiShoppingCartFull } from "react-icons/tfi";

const ProductsNav = () => {
  const context = useContext(ShoppingCartContext);
  
  return (
    <nav className="flex flex-row justify-center items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        
        <li>
          <NavLink to="/equipacion-necesaria-jugador">
            Necesarios jugador
          </NavLink>
        </li>
        <li>
          <NavLink to="/equipacion-necesaria-arquero">
            Necesarios arquero
          </NavLink>
        </li>
        <li>
          <NavLink to="/merchandaising">Merchandaising</NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li>Example@gmail.com</li>

        <li>
          <NavLink to="/ProductOrder">Mi pedido</NavLink>
        </li>
        <li>
          <NavLink to="/ProductsOrders">Mis pedidos</NavLink>
        </li>
        <li className="flex items-center gap-1"><TfiShoppingCartFull /> {context.count}</li>
      </ul>
    </nav>
  );
};

export default ProductsNav;
