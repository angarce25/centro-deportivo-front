import { NavLink } from "react-router-dom";

const ProductsNav = () => {
  let activeStyle = "underline";
  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <img src="../../public/escudo.png" alt="Escudo CDCA" className="w-10" />
        <li className="font-semibold text-lg">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            CDCA
          </NavLink>
        </li>
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
        <li>👓 0</li>
      </ul>
    </nav>
  );
};

export default ProductsNav;
