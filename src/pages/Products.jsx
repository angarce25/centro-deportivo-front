import React, { useEffect } from "react";
import {
  Card0,
  Card1,
  Card2,
  Card3,
} from "../components/products/ProductsCard"; // Importa los componentes Cards
import { useSpinner, Spinner } from "../context/LoadingContext";

const Products = () => {
  const { loading, setLoading } = useSpinner();

  useEffect(() => {
    setLoading(true); // Activa el spinner
    setTimeout(() => {
      setLoading(false); // Desactiva el spinner después de cierto tiempo (simulando carga)
    }, 1000);
  }, [setLoading]);

  return (
    <div className="App">
      <Spinner /> {/* Asegúrate de incluir el Spinner aquí */}
      {!loading && (
        <>
          <div className="flex items-center justify-center relative w-full ">
            <h2 className="text-xl font-medium mb-4">
              Productos disponibles del Club
            </h2>
          </div>
          <div className="flex flex-row items-center justify-center">
            <div className="m-4 ">
              <Card0 />
            </div>
            <div className="">
              <Card1 />
            </div>
            <div className="m-4">
              <Card2 />
            </div>
            <div className="m-4">
              <Card3 />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
