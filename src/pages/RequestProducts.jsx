import React, { useEffect } from 'react';
import Sidebar from '../components/sideBar/SideBar.jsx';
import { useSpinner, Spinner } from "../context/LoadingContext";

const ProductsP = () => {
  const { loading, setLoading } = useSpinner();

  useEffect(() => {
    setLoading(true); // Activa el spinner
    setTimeout(() => {
      setLoading(false); // Desactiva el spinner después de cierto tiempo (simulando carga)
    }, 1000);
  }, [setLoading]);

  return (
    <section style={{ display: 'flex' }}>
      <Spinner /> {/* Asegúrate de incluir el Spinner aquí */}
      {!loading && (
        <>
          <Sidebar style={{ flex: '0 0 auto' }} /> {/* Fija el Sidebar en la pantalla */}
          <div style={{ marginLeft: '20px' }}> {/* Ajusta el espacio entre el Sidebar y los nuevos componentes */}
            {/* Aquí puedes agregar otros componentes o contenido */}
          </div>
        </>
      )}
    </section>
  );
};

export default ProductsP;

