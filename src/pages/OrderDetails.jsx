import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import Cookie from 'js-cookie';

const OrderDetailsCard = () => {
  const { orderId } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const token = Cookie.get('token'); 
        const response = await axios.get(`http://localhost:3000/api/orders/order/${orderId}`, {
          headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
          },
        });
        setOrderDetails(response.data);
        
        setLoading(false);
      } catch (err) {
        setError(err.message || 'Error al obtener el pedido');
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  console.log(orderDetails)

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const { order, productInfo } = orderDetails;
console.log (order, productInfo)
  return (
    <section className="max-w-7xl overflow-y-auto max-h-[90vh]">
  <div className="m-10 flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <h4 className="card-title mb-5 col-span-full">Detalles del Pedido</h4>

    <div className="col-span-full">
      <p className="mb-1 font-semibold">Fecha del pedido: {new Date(order.createdAt).toLocaleDateString()}</p>
      <p className="mb-1 font-semibold">Nombre del Cliente: {order.user_id && `${order.user_id.name} ${order.user_id.lastname}`}</p>
      <p className="mb-1 font-semibold">Email del Cliente: {order.user_id && order.user_id.email}</p>
      <p className="font-semibold">Total del Pedido: {order.resume.total}€</p>
      {order.status && <p className="font-semibold">Estado del Pedido: {order.status}</p>}
    </div>

    <h4 className="card-title mb-5 col-span-full">Productos</h4>
    <div className="flex flex-col mt-6 col-span-full">
      <div className="-my-2 overflow-x-auto">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
          <table className="table table-zebra min-w-full">
            <thead>
              <tr className="text-gray-800 text-sm">
                <th className="px-6 py-6 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black">Nombre</th>
                <th className="px-6 py-6 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black">Talla</th>
                <th className="px-6 py-6 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black">Precio</th>
                <th className="px-6 py-6 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black">Cantidad</th>
              </tr>
            </thead>
            <tbody>
              {productInfo && productInfo.map((product, index) => (
                <tr key={product._id} className="border-black">
                  <td className="px-4 py-4 whitespace-no-wrap border-b border-black text-center">{product.name}</td>
                  <td className="px-4 py-4 whitespace-no-wrap border-b border-black text-center">{order.selectedSize && order.selectedSize[index]}</td>
                  <td className="px-4 py-4 whitespace-no-wrap border-b border-black text-center">{product.price}€</td>
                  <td className="px-4 py-4 whitespace-no-wrap border-b border-black text-center">{order.resume.quantity && order.resume.quantity[index]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

OrderDetailsCard.propTypes = {
  order: PropTypes.shape({
    createdAt: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]).isRequired,
    user: PropTypes.shape({
      name: PropTypes.string,
      lastname: PropTypes.string,
      email: PropTypes.string,
    }).isRequired,
    product_ids: PropTypes.arrayOf(PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      selectedSize: PropTypes.string, // Agregar PropTypes para selectedSize
    })).isRequired,
    resume: PropTypes.shape({
      total: PropTypes.number,
      quantity: PropTypes.arrayOf(PropTypes.number),
    }).isRequired,
    status: PropTypes.string,
  })
};

export default OrderDetailsCard;