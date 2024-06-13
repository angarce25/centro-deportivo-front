import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

const OrderDetailsModal = ({ isOpen, onRequestClose, order }) => {
  if (!order) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Detalles del Pedido"
      className="modal"
      overlayClassName="overlay"
    >
      <h2>Detalles del Pedido</h2>
      <p><strong>ID del Pedido:</strong> {order._id}</p>
      <p><strong>Fecha del Pedido:</strong> {format(new Date(order.createdAt), 'dd/MM/yyyy HH:mm')}</p>
      <h3>Productos:</h3>
      <ul>
        {order.products.map(product => (
          <li key={product._id}>
            <p><strong>Nombre:</strong> {product.name}</p>
            <p><strong>Descripción:</strong> {product.description}</p>
            <p><strong>Categoría:</strong> {product.category}</p>
            <p><strong>Talla Seleccionada:</strong> {product.selectedSize}</p>
            <p><strong>Cantidad:</strong> {product.quantity}</p>
            <p><strong>Precio:</strong> {product.price}€</p>
          </li>
        ))}
      </ul>
      <p><strong>Total a Pagar:</strong> {order.total}€</p>
      <button onClick={onRequestClose} className="button-close">Cerrar</button>
    </Modal>
  );
};

OrderDetailsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  order: PropTypes.object,
};

export default OrderDetailsModal;
