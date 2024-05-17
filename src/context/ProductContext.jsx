/* // En ProductsContext.jsx
import { createContext, useState, useEffect } from "react";

import axios from "axios";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      // Realiza la solicitud GET a la URL del servidor JSON
      const response = await axios.get("http://localhost:5000/Products");
      console.log(response.data);
      // Establece los datos de los productos en el estado
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext; */
