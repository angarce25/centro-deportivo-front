import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";
import Modal from "react-modal";

Modal.setAppElement("#root");

function OrdersUsersChart() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);

  const openModal = (order) => {    
    setCurrentOrder(order);
    setIsOpen(true);    
  };

  const closeModal = () => {    
    setIsOpen(false);
  };

  useEffect(() => {
    const API = import.meta.env.VITE_API_URL;
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
    <section className="mt-8">
      {error ? (
        <div className="text-red-500 font-bold mb-4">{error}</div>
      ) : (
        <div>
          <div className="overflow-x-auto">
            <div className="flex items-center justify-between">
              <h4 className="text-gray-600 font-bold mb-10">Mis Pedidos</h4>
            </div>
          </div>

          {/* Tabla para pedidos */}
          <div className="flex flex-col mt-6">
            <div className="-my-2 overflow-x-auto">
              <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                <table className="table table-zebra">
                  <thead>
                    <tr className="text-gray-800 text-sm">
                      <th className="px-6 py-6 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Id del Pedido
                      </th>
                      <th className="px-6 py-6 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Documento de Pago
                      </th>

                      <th className="px-6 py-6 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Observaciones del Pedido
                      </th>
                      <th className="px-6 py-6 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Estado del Pedido
                      </th>
                      <th className="px-6 py-6 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
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
                        <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200">
                          {order.document && (
                            <button
                              type="button"
                              onClick={() => openModal(order)}
                              className="text-blue-600 underline"
                            >
                              {order.document.originalname}
                            </button>
                          )}
                        </td>
                        <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200">
                          {order.summary}
                        </td>
                        <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200">
                          {order.status}
                        </td>
                        <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200">
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

          {/* Modal */}
          <div id="modal-parent">
            {isOpen && (
              <Modal
              isOpen={isOpen}
              onRequestClose={closeModal}
              contentLabel="Modal"
              style={{
                overlay: {
                  zIndex: 1,
                },
                content: {
                  top: '50%',
                  left: '50%',
                  right: 'auto',
                  bottom: 'auto',
                  marginRight: '-50%',
                  transform: 'translate(-50%, -50%)',
                  width: '80%', 
                  maxWidth: '800px', 
                  backgroundColor: 'white',
                },
              }}
            >
                <div
                  className="bg-white rounded "
                  style={{
                    position: "relative",
                    backgroundColor: "white" 
                  }}
                >
                  {/* <p>Aquí tienes tu factura:</p> */}
                  {currentOrder && currentOrder.document && (
                    <object
                    src={"/uploads/" + currentOrder.document.filename}
                    type={currentOrder.document.mimetype}
                    width="100%"
                    height="500"
                  > <p>Original name:   {currentOrder.document.originalname}</p>
                    <p>Path:   {currentOrder.document.path}</p>  
                    <p>Mimetype:   {currentOrder.document.mimetype}</p>
                    <p>Destination:   {currentOrder.document.destination}</p>
                    <img
                     src={"/uploads/" + currentOrder.document.filename}
                    >
                    </img>                   
                  </object>
                  )}
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-0 right-0 p-2 text-gray-600 hover:text-gray-900"
                  >
                    ×
                  </button>
                </div>
              </Modal>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default OrdersUsersChart;