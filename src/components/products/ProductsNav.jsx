import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ProductContext";
import { TfiShoppingCartFull } from "react-icons/tfi";

const ProductsNav = ({ setCategory }) => {
  const context = useContext(ShoppingCartContext);

  return (
    <nav className="flex flex-row justify-around items-center fixed top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li>
          <button onClick={() => setCategory("Pack Ini Jugador")}>
            Pack Ini jugador
          </button>
        </li>
        <li>
          <button onClick={() => setCategory("Pack Ini Arquero")}>
            Pack Ini arquero
          </button>
        </li>
        <li>
          <button onClick={() => setCategory("Extra")}>
            Extra
          </button>
        </li>
        <li>
          <button onClick={() => setCategory("Merchandising")}>
            Merchandising
          </button>
        </li>
        <li>
          <button onClick={() => setCategory("all")}>
            Todos
          </button>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        
        <li className="flex items-center gap-1"><TfiShoppingCartFull /> {context.cartProducts.length}</li>
      </ul>
    </nav>
  );
};

export default ProductsNav;