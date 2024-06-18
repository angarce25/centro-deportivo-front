import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import Cookie from "js-cookie";

const OrderDetailsCard = () => {
  const { orderId } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const token = Cookie.get("token");
        const response = await axios.get(
          `http://localhost:3000/api/orders/order/${orderId}`,
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          }
        );
        setOrderDetails(response.data);

        setLoading(false);
      } catch (err) {
        setError(err.message || "Error al obtener el pedido");
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  console.log(orderDetails);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const { order, productInfo } = orderDetails;

  return (
    <section className="m-10 w-150 bg-base-100 shadow-l flex flex-col md:flex-row justify-between">
      <div className="m-10 flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <h4 className="card-title mb-5 col-span-full">Detalles del Pedido</h4>

        <div className="col-span-full">
          <p className="mb-1 font-semibold">
            Fecha del pedido: {new Date(order.createdAt).toLocaleDateString()}
          </p>
          <p className="mb-1 font-semibold">
            Nombre del Cliente:{" "}
            {order.user_id && `${order.user_id.name} ${order.user_id.lastname}`}
          </p>
          <p className="mb-1 font-semibold">
            Email del Cliente: {order.user_id && order.user_id.email}
          </p>
          <p className="font-semibold">
            Total del Pedido: {order.resume.total}€
          </p>
          {order.status && (
            <p className="font-semibold">Estado del Pedido: {order.status}</p>
          )}
        </div>

        <h4 className="card-title mb-5 col-span-full">Productos</h4>
        <table className="table-fixed w-full col-span-full">
          <thead>
            <tr>
              <th className="w-1/3 px-4 py-2">Nombre</th>
              <th className="w-1/4 px-4 py-2">Talla</th>
              <th className="w-1/4 px-4 py-2">Precio</th>
              <th className="w-1/6 px-4 py-2">Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {productInfo &&
              productInfo.map((product, index) => (
                <tr key={product._id}>
                  <td className="border px-4 py-2">{product.name}</td>
                  <td className="border px-4 py-2">
                    {order.selectedSize && order.selectedSize[index]}
                  </td>
                  <td className="border px-4 py-2">{product.price}€</td>
                  <td className="border px-4 py-2">
                    {order.resume.quantity && order.resume.quantity[index]}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

OrderDetailsCard.propTypes = {
  order: PropTypes.shape({
    createdAt: PropTypes.oneOfType([
      PropTypes.instanceOf(Date),
      PropTypes.string,
    ]).isRequired,
    user: PropTypes.shape({
      name: PropTypes.string,
      lastname: PropTypes.string,
      email: PropTypes.string,
    }).isRequired,
    product_ids: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number,
        selectedSize: PropTypes.string, // Agregar PropTypes para selectedSize
      })
    ).isRequired,
    resume: PropTypes.shape({
      total: PropTypes.number,
      quantity: PropTypes.arrayOf(PropTypes.number),
    }).isRequired,
    status: PropTypes.string,
  }),
};

export default OrderDetailsCard;
