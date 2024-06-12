import { useState, useEffect } from "react";
import axios from "axios";

import ProductsCard from "../components/products/ProductsCard";
import ProductsLayout from "../components/products/ProductsLayout";
import ProductsNav from "../components/products/ProductsNav";
import Sidebar from "../components/sideBar/SideBar";
import ProductsDetail from "../components/productsDetail/ProductsDetail";
import CheckSideMenu from "../components/checkSideMenu/CheckSideMenu";
import { useSpinner, Spinner } from "../context/LoadingContext";

function Products() {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState("all");
  const { loading, setLoading } = useSpinner();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // Activa el spinner
      try {
        const apiUrl = import.meta.env.VITE_API_URL; // Obtiene la URL base de la API desde las variables de entorno
        const extraPath = "/products"; // Añade la parte adicional de la URL
        const fullUrl = apiUrl + extraPath; // Combina la URL base con la parte adicional

        const response = await axios.get(fullUrl); // Solicitud GET a la API
        setItems(response.data); // Guarda los productos en el estado
      } catch (error) {
        console.error("Error al obtener los productos:", error); // Manejo de errores
      } finally {
        setLoading(false); // Desactiva el spinner después de cargar los datos
      }
    };

    fetchProducts(); // Llama a la función de obtención de productos al montar el componente
  }, [setLoading]);

  const filteredItems = category === "all" ? items : items.filter(item => item.category === category);

  return (
    <>
      <div className="flex min-h-screen h-screen overflow-hidden">
        <Spinner /> {/* Spinner mientras se cargan los productos */}
        {!loading && (
          <>
            <Sidebar />
            <ProductsLayout>
              <h2 className="text-xl font-medium mb-2">
                Echa un vistazo a nuestro equipamiento deportivo
              </h2>
              <ProductsNav setCategory={setCategory} />
              <div
                className="overflow-y-scroll w-full h-screen    
                2xl:grid 2xl:grid-cols-5 2xl:w-full 2xl:max-w-screen-2xl
                xl:grid xl:grid-cols-4 xl:w-full xl:max-w-screen-lg
                lg:grid lg:grid-cols-4 lg:w-full lg:max-w-screen-lg
                md:grid md:grid-cols-3 md:w-full md:max-w-screen-md
                sm:grid sm:grid-cols-2 sm:w-full sm:justify-center"
              >
                {filteredItems.map((item) => (
                  <div key={item._id}>
                    <ProductsCard data={item} />{" "}
                    {/* Componente de tarjeta de producto */}
                  </div>
                ))}
              </div>
              <ProductsDetail /> {/* Componente de detalles del producto */}
              <CheckSideMenu /> {/* Componente de menú lateral */}
            </ProductsLayout>
          </>
        )}
      </div>
    </>
  );
}

export default Products;