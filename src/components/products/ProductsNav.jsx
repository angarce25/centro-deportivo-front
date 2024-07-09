import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ProductContext";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const ProductsNav = ({ setCategory }) => {
  const context = useContext(ShoppingCartContext);

  return (
    <nav className="flex flex-row justify-center top-0 p-2 px-8 text-sm 2xl:text-lg font-light">
      <ul className="flex items-center gap-8 mr-9 font-medium 2xl:mr-60 bg-gray-100 rounded-lg p-2">
        <li>
          <button onClick={() => setCategory("Pack Ini Jugador")}>       
          <FontAwesomeIcon
          className="mr-1 "
          icon={faFilter} />
            Pack Iniciación Jugador
          </button>
        </li>
        <li className="mr-10 ml-10 2xl:mr-12 2xl:ml-12">
          <button onClick={() => setCategory("Pack Ini Arquero")}>
          <FontAwesomeIcon
          className="mr-1"
          icon={faFilter} />
            Pack Iniciación Portero
          </button>
        </li>
        <li className="mr-10 ml-10 2xl:mr-12 2xl:ml-12">
          <button onClick={() => setCategory("Extra")}>
          <FontAwesomeIcon
          className="mr-1"
          icon={faFilter} />
            Otros
          </button>
        </li>
        <li className="mr-10 ml-10 2xl:mr-12 2xl:ml-12">
          <button onClick={() => setCategory("Merchandising")}>
          <FontAwesomeIcon
          className="mr-1"
          icon={faFilter} />
            Merchandising
          </button>
        </li>
        <li className=" 2xl:mr-12 2xl:ml-12">
          <button onClick={() => setCategory("all")}>
          <FontAwesomeIcon
          className="mr-1 "
          icon={faFilter} />
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