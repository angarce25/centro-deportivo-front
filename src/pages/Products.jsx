import { useState, useEffect } from "react";
import axios from "axios";

import ProductsCard from "../components/products/ProductsCard";
import ProductsLayout from "../components/products/ProductsLayout";
import ProductsNav from "../components/products/ProductsNav";

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
      <ProductsNav />
      <ProductsLayout>
        <h2 className="text-xl font-medium mb-4">
          Productos necesarios y disponibles del CDCA
        </h2>

        <div
          className="2xl:grid 2xl:grid-cols-5 2xl:w-full 2xl:max-w-screen-2xl
                     xl:grid xl:grid-cols-4 xl:w-full xl:max-w-screen-lg
                     lg:grid lg:grid-cols-4 lg:w-full lg:max-w-screen-lg
                     md:grid md:grid-cols-3 md:w-full md:max-w-screen-md
                     sm:grid sm:grid-cols-2 sm:w-full sm:justify-center"
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
