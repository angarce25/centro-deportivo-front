import { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';

function OrdersUsersChart() {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const API = import.meta.env.VITE_API_URL; // Obtiene la URL base de la API desde las variables de entorno
        const extraPath = "/orders/myorders"; // Añade la parte adicional de la URL
        const fullUrl = API + extraPath; // Combina la URL base con la parte adicional

        const fetchOrders = async () => {
            try {
                const response = await axios.get(fullUrl, { withCredentials: true }); // Realiza la solicitud a tu API para obtener los pedidos del usuario
                setOrders(response.data); // Actualiza el estado con los datos de los pedidos
            } catch (error) {
                if (error.response) {
                    if (error.response.status === 401) {
                        setError('Acceso no autorizado. Por favor, inicia sesión.');
                    } else if (error.response.status === 403) {
                        setError('No tienes permiso para acceder a esta página.');
                    } else {
                        setError('Ocurrió un error al obtener los pedidos.');
                    }
                } else {
                    setError('Error de conexión. Por favor, inténtalo de nuevo más tarde.');
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
                                                        <a
                                                        className='text-blue-600 underline' 
                                                        href={order.document.path} target="_blank" rel="noopener noreferrer">
                                                            {order.document.originalname}
                                                            </a>
                                                    )}
                                                </td>
                                                <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200">
                                                    {order.summary} {/* Mostrar el resumen de la orden */}
                                                </td>
                                                <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200">
                                                    {order.status} {/* Mostrar el estado de la orden */}
                                                </td>
                                                <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200">
                                                    {format(new Date(order.createdAt), 'dd/MM/yyyy HH:mm')} {/* Formatear la fecha de creación */}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default OrdersUsersChart;