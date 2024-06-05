import { useState, useEffect } from "react";
import axios from "axios";
import { format } from 'date-fns';

function OrdersChart() {
    const [orders, setOrders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [ordersPerPage] = useState(10);
    const [error, setError] = useState(null);
    const [sortConfig, setSortConfig] = useState({ key: 'createdAt', direction: 'ascending' });

    useEffect(() => {
        const API = import.meta.env.VITE_API_URL; // Obtiene la URL base de la API desde las variables de entorno
        const extraPath = "/orders"; // Añade la parte adicional de la URL
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

    const sortedOrders = [...orders].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });

    // Obtener los pedidos actuales
    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = sortedOrders.slice(indexOfFirstOrder, indexOfLastOrder);

    // Cambiar de página
    const paginate = pageNumber => setCurrentPage(pageNumber);

    // Cambiar ordenación
    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    // Colores para cada estado
    const getStatusColor = (status) => {
        switch (status) {
            case 'pendiente':
                return 'text-yellow-500'; // Color amarillo para pendiente
            case 'completado':
                return 'text-green-500'; // Color verde para completado
            case 'enviado':
                return 'text-blue-500'; // Color azul para enviado
            case 'cancelado':
                return 'text-red-500'; // Color rojo para cancelado
            default:
                return 'text-gray-500'; // Color gris para otros estados
        }
    };

    // Iconos de flechas
    const SortArrow = ({ direction }) => {
        if (!direction) return null;
        if (direction === 'ascending') {
            return <span>&uarr;</span>; // Flecha hacia arriba
        } else {
            return <span>&darr;</span>; // Flecha hacia abajo
        }
    };

    //Aquí agrego laa función de cambio de estado de pedidos
    const handleStatusChange = async (orderId, newStatus) => {
        try {
            const API = import.meta.env.VITE_API_URL;
            const extraPath = `/orders/order/${orderId}/status`;
            const fullUrl = API + extraPath;
            console.log('Updating order status:', { orderId, newStatus, fullUrl });

            const response = await axios.put(fullUrl, { status: newStatus }, { withCredentials: true });
            console.log(response)
            setOrders((prevOrders) => 
                prevOrders.map((order) => 
                    order._id === orderId ? { ...order, status: newStatus } : order
                )
            );
        } catch (error) {
            console.error('Error Status Order NOT updated', error);
        }
    };
   
    return (
        <section className="mt-8 flex justify-center">
            {error ? (
                <div className="text-red-500 font-bold mb-4">{error}</div>
            ) : (
                <div className="max-w-4xl w-full">
                    <div className="overflow-x-auto">
                        <div className="flex items-center justify-between">
                            <h4 className="text-gray-600 font-bold mb-6">Pedidos</h4>
                        </div>
                    </div>

                    {/* Tabla para pedidos */}
                    <div className="flex flex-col mt-6">
                        <div className="-my-2 overflow-x-auto">
                            <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                                <table className="table table-zebra min-w-full">
                                    <thead>
                                        <tr className="text-gray-800 text-sm">
                                            <th onClick={() => requestSort('_id')} className="px-6 py-6 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black cursor-pointer">
                                                Usuario<SortArrow direction={sortConfig.key === '_id' ? sortConfig.direction : null} />
                                            </th>
                                            <th onClick={() => requestSort('_id')} className="px-6 py-6 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black cursor-pointer">
                                                Id del Pedido<SortArrow direction={sortConfig.key === '_id' ? sortConfig.direction : null} />
                                            </th>
                                            <th onClick={() => requestSort('document')} className="px-6 py-6 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black cursor-pointer">
                                                Documento de Pago <SortArrow direction={sortConfig.key === 'document' ? sortConfig.direction : null} />
                                            </th>
                                            <th onClick={() => requestSort('summary')} className="px-6 py-6 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black cursor-pointer">
                                                Observaciones del Pedido <SortArrow direction={sortConfig.key === 'summary' ? sortConfig.direction : null} />
                                            </th>
                                            <th onClick={() => requestSort('status')} className="px-6 py-6 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black cursor-pointer">
                                                Estado del Pedido <SortArrow direction={sortConfig.key === 'status' ? sortConfig.direction : null} />
                                            </th>
                                            <th onClick={() => requestSort('createdAt')} className="px-6 py-6 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking
-wider border-black cursor-pointer">
                                                Fecha <SortArrow direction={sortConfig.key === 'createdAt' ? sortConfig.direction : null} />
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentOrders.map((order) => (
                                            <tr key={order._id} className="border-black">
                                                <td className="px-4 py-4 whitespace-no-wrap border-b border-black text-center">
                                                {order.user_id ? `${order.user_id.name} ${order.user_id.lastname}` : 'Nombre no disponible'}                                              </td>
                                                <td className="px-4 py-4 whitespace-no-wrap border-b border-black text-center">
                                                    {order._id} {/* Mostrar el _id de la orden */}
                                                </td>
                                                <td className={`px-4 py-4 whitespace-no-wrap border-b border-black text-center ${order.document ? 'text-green-500' : 'text-red-500'}`}>
                                                    {order.document ? "Recibido" : "Pendiente"} {/* Mostrar el documento */}
                                                </td>
                                                <td className="px-4 py-4 whitespace-no-wrap border-b border-black text-center">
                                                    {order.summary} {/* Mostrar el resumen de la orden */}
                                                </td>
                                                {/* Status Orders */}
                                                <td className={`px-4 py-4 whitespace-no-wrap border-b border-black text-center ${getStatusColor(order.status)}`}>
                                                    <select
                                                        className="bg-transparent"
                                                        value={order.status}
                                                        onChange={(e) => handleStatusChange(order._id, e.target.value)}
                                                    >
                                                        <option value="pendiente">Pendiente</option>
                                                        <option value="completado">Completado</option>
                                                        <option value="enviado">Enviado</option>
                                                        <option value="cancelado">Cancelado</option>
                                                    </select>
                                                </td>
                                                {/* Aquí termina Status Orders */}
                                                <td className="px-4 py-4 whitespace-no-wrap border-b border-black text-center">
                                                    {order.createdAt ? format(new Date(order.createdAt), 'dd/MM/yyyy HH:mm') : 'Fecha no disponible'} {/* Formatear la fecha de creación */}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Paginación */}
                        <div className="flex justify-center mt-4">
                            <nav>
                                <ul className="flex list-none">
                                    {Array.from({ length: Math.ceil(orders.length / ordersPerPage) }, (_, index) => (
                                        <li key={index} className="px-3 py-2 mx-1 cursor-pointer bg-white border rounded" onClick={() => paginate(index + 1)}>
                                            {index + 1}
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default OrdersChart;