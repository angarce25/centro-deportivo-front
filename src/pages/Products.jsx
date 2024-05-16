import { useState, useEffect } from "react";
import axios from "axios";

import ProductsCard from "../components/products/ProductsCard";
import ProductsLayout from "../components/products/ProductsLayout";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Utiliza Axios para hacer la solicitud
    axios
      .get("http://localhost:5000/Products")
      .then((response) => {
        setProducts(response.data); // La respuesta de Axios ya contiene los datos en response.data
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      });
  }, []);

  return (
    <>
      <ProductsLayout>
        <h2 className="text-xl font-medium mb-4">
          Productos disponibles del Club
        </h2>

        <div
          className="2xl:grid 2xl:gap-4 2xl:grid-cols-5
                     lg:grid lg:gap-4 lg:grid-cols-4 
                     md:grid md:gap-4 md:grid-cols-3
                     sm:grid sm:gap-4 sm:grid-cols-2  w-full max-w-screen-lg"
        >
          {products.map((product) => (
            <div key={product._id} className="">
              <ProductsCard product={product} />
            </div>
          ))}
        </div>
      </ProductsLayout>
    </>
  );
}

export default Products;
