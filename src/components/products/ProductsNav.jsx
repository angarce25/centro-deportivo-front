import { NavLink } from "react-router-dom";

const ProductsNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/cdca">CDCA</NavLink>
        </li>
        <li>
          <NavLink to="/productos">Productos</NavLink>
        </li>
        <li>
          <NavLink to="/equipacion-necesaria-jugadora">
            Equipacion necesaria jugadora
          </NavLink>
        </li>
        <li>
          <NavLink to="/equipacion-necesaria-portera">
            Equipacion necesaria portera
          </NavLink>
        </li>
        <li>
          <NavLink to="/merchandaising">Merchandaising</NavLink>
        </li>
      </ul>
      <ul>
        <li>Juan@gmail.com</li>
        <li>
          <NavLink to="/mis-productos">Mis productos</NavLink>
        </li>
        <li>
          <NavLink to="/"></NavLink>
        </li>
        <li>
          <NavLink to="/equipacion necesaria portera">
            Equipacion necesaria portera
          </NavLink>
        </li>
        <li>
          <NavLink to="/merchandaising">Merchandaising</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default ProductsNav;
