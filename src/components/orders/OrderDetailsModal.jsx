import React from "react";
import Modal from "react-modal";
import { format } from "date-fns";

const OrderDetailsModal = ({ isOpen, onRequestClose, order }) => {
  if (!order) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Detalles del Pedido"
      ariaHideApp={false}
      className="modal"
      overlayClassName="overlay"
    >
      <h2 className="text-xl font-bold mb-4">Detalles del Pedido</h2>
      <div className="mb-4">
        <strong>Usuario:</strong> {order.user_id ? `${order.user_id.name} ${order.user_id.lastname}` : "Nombre no disponible"}
      </div>
      <div className="mb-4">
        <strong>ID del Pedido:</strong> {order._id}
      </div>
      <div className="mb-4">
        <strong>Documento de Pago:</strong>
        {order.document ? (
          <a href={`http://localhost:3000/uploads/${order.document.filename}`} download={order.document.originalname}>
            {order.document.originalname}
          </a>
        ) : (
          " No disponible"
        )}
      </div>
      <div className="mb-4">
        <strong>Observaciones del Pedido:</strong> {order.summary ? order.summary : "No disponible"}
      </div>
      <div className="mb-4">
        <strong>Fecha:</strong> {order.createdAt ? format(new Date(order.createdAt), "dd/MM/yyyy HH:mm") : "Fecha no disponible"}
      </div>
      <button onClick={onRequestClose} className="btn btn-primary">
        Cerrar
      </button>
    </Modal>
  );
};

export default OrderDetailsModal;
