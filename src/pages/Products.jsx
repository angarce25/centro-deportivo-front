import { useState, useEffect } from "react";
import axios from "axios";

import ProductsCard from "../components/products/ProductsCard";
import ProductsLayout from "../components/products/ProductsLayout";
import ProductsNav from "../components/products/ProductsNav";
import Sidebar from "../components/sideBar/SideBar";

function Products() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL; // Obtiene la URL base de la API desde las variables de entorno
    const extraPath = '/products'; // Añade la parte adicional de la URL
    const fullUrl = apiUrl + extraPath; // Combina la URL base con la parte adicional

    axios
  .get(fullUrl)
  .then(response => {
    return response.data;
  })
  .then(data => setItems(data))
  .catch((error) => {
    console.error("Error al obtener los productos:", error);
  });
  }, []);

  return (
    <>
      <div className="flex "><Sidebar/>
      <ProductsNav />
      <ProductsLayout>
        <h2 className="text-xl font-medium mb-2 ">
          Productos necesarios y disponibles del CDCA
        </h2>

        <div
          className="2xl:grid 2xl:grid-cols-5 2xl:w-full 2xl:max-w-screen-2xl
                     xl:grid xl:grid-cols-4 xl:w-full xl:max-w-screen-lg
                     lg:grid lg:grid-cols-4 lg:w-full lg:max-w-screen-lg
                     md:grid md:grid-cols-3 md:w-full md:max-w-screen-md
                     sm:grid sm:grid-cols-2 sm:w-full sm:justify-center"
        >
          {
          items?.map((item) => (
            <div key={item._id} >
              <ProductsCard data={item} />
            </div>
          ))
          }
        </div>
      </ProductsLayout>
      </div>
    </>
  );
}

export default Products;
