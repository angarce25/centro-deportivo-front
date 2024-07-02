import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";




function OrdersUsersChart() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const [currentOrder, setCurrentOrder] = useState(null);

  const urlDocument = `http://localhost:3000/uploads/` + currentOrder;
  

  useEffect(() => {
    if (currentOrder) {
      const urlDocument = `http://localhost:3000/uploads/${currentOrder}`;
      console.log("URL DOCUMENT", urlDocument);
    }
  }, [currentOrder]);

  // console.log("URL DOCUMENT", urlDocument);
  // console.log("CURRENT ORDER", currentOrder);
  // console.log("CURRENT ORDER", setCurrentOrder)

  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const extraPath = "/orders/myorders";
    const fullUrl = API + extraPath;

    const fetchOrders = async () => {
      try {
        const response = await axios.get(fullUrl, { withCredentials: true });
        setOrders(response.data);
      } catch (error) {
        if (error.response) {
          if (error.response.status === 401) {
            setError("Acceso no autorizado. Por favor, inicia sesión.");
          } else if (error.response.status === 403) {
            setError("No tienes permiso para acceder a esta página.");
          } else {
            setError("Ocurrió un error al obtener los pedidos.");
          }
        } else {
          setError(
            "Error de conexión. Por favor, inténtalo de nuevo más tarde."
          );
        }
      }
    };

    fetchOrders();
  }, []);

  return (
    <section className="mt-8 flex ml-20 2xl:ml-72 xl:ml-72 lg:ml-64 md:ml-48 justify-center">
      {error ? (
        <div className="text-red-500 font-bold mb-4">{error}</div>
      ) : (
        <div>
          <h4 className="text-gray-600 font-bold mt-6 ml-1 ">Mis Pedidos</h4>
          

          {/* Tabla para pedidos */}
          <div className="flex flex-col mt-6">
            
              <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                <table className="table table-zebra">
                  <thead>
                    <tr className="text-gray-800 text-sm">
                      <th className="p-1 2xl:p-12 lg:p-6 md:p-4 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Id del Pedido
                      </th>
                      <th className="p-1 2xl:p-12 lg:p-6 md:p-4 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Documento de Pago
                      </th>                      
                      <th className="p-1 2xl:p-12 lg:p-6 md:p-4 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Observaciones del Pedido
                      </th>
                      <th className="p-1 2xl:p-12 lg:p-6 md:p-4 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Estado del Pedido
                      </th>
                      <th className="p-1 2xl:p-12 lg:p-6 md:p-4 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Fecha
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order._id}>
                        <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200">
                          {order._id} {/* Mostrar el _id de la orden */}
                        </td>
                        <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
                          {order.document && (
                            
                            <button
                              type="button"
                              onClick={() => {
                                if (order.document.filename) {
                                  const documentUrl = `http://localhost:3000/uploads/${order.document.filename}`;
                                  window.open(documentUrl, "_blank");                                 
                                 
                                }
                              }}
                              className="text-blue-600 underline text-center"
                            >
                              {order.document.originalname}
                            </button>
                          )}
                        </td>
                        <td className="p-2 whitespace-no-wrap border-b border-gray-200">
                          {order.summary}
                        </td>
                        <td className="p-2 text-center whitespace-no-wrap border-b border-gray-200">
                          {order.status}
                        </td>
                        <td className="p-2 whitespace-no-wrap border-b border-gray-200">
                          {format(
                            new Date(order.createdAt),
                            "dd/MM/yyyy HH:mm"
                          )}{" "}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          
       
      )}
    </section>
  );
}

export default OrdersUsersChart;
