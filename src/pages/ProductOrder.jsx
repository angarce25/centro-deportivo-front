import SideBar from "../components/sideBar/SideBar";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

function ProductOrder() {
  const [searchParams] = useSearchParams(); //obtiene parametros de la URL
  const date = searchParams.get("date") || ''; // Asigna un valor predeterminado si date es null o undefined
  const totalProducts = searchParams.get("totalProducts");
  const totalPrice = searchParams.get("totalPrice");
  const products = JSON.parse(searchParams.get("products"));

  
  const [summary, setSummary] = useState('');
  const [status] = useState('pendiente');
  const [document, setDocument] = useState('');
  const [error, setError] = useState(null);

  //Funcion confirmar pedido
  const handleConfirmOrder = async () => {
    try {
      console.log('Solicitud de confirmación del pedido');

      // Crear un objeto con el resumen del pedido
    const orderSummary = {
      products,
      product_ids: products.map(product => product._id),
      summary,
      status,
      document,
      date,
      totalProducts,
      totalPrice,      
      
      
      
    };
    console.log('Resumen del pedido:', orderSummary);

    // Crear un objeto de pedido
      const API = import.meta.env.VITE_API_URL;
      const extraPath = "/orders/add-order";
      const fullUrl = API + extraPath;
      const token = Cookies.get('token');
      
      const response = await fetch(fullUrl, 
        {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
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

      const data = await response.json();
      console.log('Pedido creado:', data);
      console.log('Token:',token)
      
    } catch (error) {
      setError('Error al crear el pedido. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  
  
  return (
    <div className="flex">
      <SideBar />
      <section className="m-10 w-150 bg-base-100 shadow-l flex flex-col md:flex-row justify-between">
        <div className="m-10 flex-1">
          <h4 className="card-title mb-5">Resumen del Pedido</h4>
          <p className="mb-3">Fecha pedido: {date}</p>

          {products.map((product) => (
            <div key={product._id} className="mb-6">
              <div className="flex items-center mb-3">
                <img
                  className="w-32 h-32 mr-4"
                  src={product.image}
                  alt={product.name}
                />
                <div>
                  <h5 className="card-title mb-5">{product.name}</h5>
                  <div className="flex">
                    <p className="mr-2 text-sm">ID producto:</p>
                    <p className="text-sm">{product._id}</p>
                  </div>

                  <div className="flex">
                    <p className="mr-2 text-sm">Precio:</p>
                    <p className="text-sm">{product.price}€</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-end">
            <div>
              <p className="mb-1">Productos totales: {totalProducts}</p>
              <p className="">Precio total: {totalPrice}€</p>
            </div>
          </div>

          {/* Summary */}
          <div className="mt-5 flex-col">
            <label htmlFor="summary">Summary:</label>
            <input
              type="text"
              id="summary"
              name="summary"
              placeholder="Ejemplo: Camisetas y pantalón "
              className="input input-bordered w-full max-w-xs"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            />
          </div>
        </div>

        <div className="m-10 card-actions  flex-1">
          {/* Document */}
          <label htmlFor="document">Document:</label>
          {/* <input type="file" className="file-input file-input-bordered file-input-sm w-full max-w-xs mb-10 md:mb-4" /> */}
          <input
            type="text"
            id="document"
            name="document"
            placeholder="Ejemplo: Camisetas y pantalón "
            className="input input-bordered w-full max-w-xs"
            value={document}
            onChange={(e) => setDocument(e.target.value)}
          />

          {/* Boton */}
          <button
            onClick={handleConfirmOrder}
            className="button-register bg-yellow-l hover:bg-yellow-d text-black font-semibold py-2 px-4 rounded"
          >
            Confirmar pedido
          </button>
          <div>
          {error && <div className="error">{error}</div>}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductOrder;
