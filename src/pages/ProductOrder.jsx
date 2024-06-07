import { useState } from "react";
import SideBar from "../components/sideBar/SideBar";
import NewOrderCard from "../components/orderCart/NewOrderCard";
import { useSearchParams } from "react-router-dom";
// import Cookies from "js-cookie";
import { toast } from 'react-toastify';


function ProductOrder() {
  const [searchParams] = useSearchParams();
  const date = new Date(searchParams.get("date")).toLocaleDateString();
  const totalProducts = parseInt(searchParams.get("totalProducts"));
  const totalPrice = parseInt(searchParams.get("totalPrice"));
  const products = JSON.parse(searchParams.get("products"));
  const [summary, setSummary] = useState('');
  const [status] = useState('pendiente');
  const [document, setDocument] = useState('');
  const [error, setError] = useState(null);

 
  
  const handleConfirmOrder = async () => {
    try {
      
      // Verificar si los campos document y summary están vacíos
    if (!document || !summary) {
      // Mostrar notificación de error
      toast.error('Error al crear el pedido');
      return;
    }      

      // Crear un objeto de pedido
      const API = import.meta.env.VITE_API_URL;
      const extraPath = "/api/orders/add-order";
      const fullUrl = API + extraPath;
      // const token = Cookies.get('token');
      
      


      const response = await fetch(fullUrl, {
        method: 'POST',
        // headers: {
        //   'Content-Type': 'application/json',
        //   'Authorization': `Bearer ${token}`
        // },
        body: JSON.stringify({
          product_ids: products.map(product => product._id),
          summary,
          status,
          document
        }),
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error('Error al crear el pedido');
      }

      //const data = await response.json();
      
      toast.success('Pedido creado correctamente');
      

    } catch (error) {
      setError('Error al crear el pedido. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  return (
    <div className="flex">
      <SideBar />
      <NewOrderCard
        date={date}
        totalProducts={totalProducts}
        totalPrice={totalPrice}
        products={products}
        summary={summary}
        setSummary={setSummary}
        document={document}
        setDocument={setDocument}
        error={error}
        //handleConfirmOrder={handleConfirmOrder}
      />
    </div>
  );
}

export default ProductOrder;