import React from 'react';
import Sidebar from '../components/sideBar/SideBar.jsx';

const ProductsP = () => {
  return (
    <section style={{ display: 'flex' }}>
      <Sidebar style={{ flex: '0 0 auto' }} /> {/* Fija el Sidebar en la pantalla */}
      <div style={{ marginLeft: '20px' }}> {/* Ajusta el espacio entre el Sidebar y los nuevos componentes */}
   
      </div>
    </section>
  );
};

export default ProductsP ;
