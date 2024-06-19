import Modal from "react-modal";
import PropTypes from 'prop-types';
import { useState } from "react";

Modal.setAppElement('#root');
export default function ModalInfoEquipment({ modalIsOpen, onClose }) {
       

    return (
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={onClose}
        contentLabel="Información de equipamiento deportivo"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)"
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)"
          }
        }}
      >
        <div>
        <button
          onClick={onClose}
          className="flex float-right mt-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>

        </button>
          <p>Esta información es importante proporcionarla, ya que al solicitar el equipamiento deportivo será necesario indicar las tallas del jugador.</p>
        </div>
        
      </Modal>
      
    );
  
}

// Prop types validation
ModalInfoEquipment.propTypes = {
    modalIsOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  };