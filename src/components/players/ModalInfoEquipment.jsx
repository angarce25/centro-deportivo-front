import Modal from "react-modal";
import PropTypes from 'prop-types';


export default function ModalInfoEquipment({ modalIsOpen, onClose }) {
    
    // Función para cerrar el modal
    const closeModal = () => {
    onClose();
    };

    

    return (
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={onClose}
        contentLabel="Información de equipamiento deportivo"
        className="modal"
        overlayClassName="modal-overlay"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
          }
        }}
      >
        <div className="p-4 bg-white rounded shadow-md">
          <p>Información sobre el equipo deportivo.</p>
        </div>
        <button onClick={closeModal} className="mt-4 text-blue-500 hover:underline">Cerrar</button>
      </Modal>
      
    );
  
}

// Prop types validation
ModalInfoEquipment.propTypes = {
    modalIsOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  };