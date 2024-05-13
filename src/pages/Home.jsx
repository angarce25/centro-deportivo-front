import React, { useState } from 'react'
import TermsAndConditionsModal from '../components/termsAndConditions/Terms'
import Footer from '../components/home/Footer';


const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div>              {/* -_- ------------- NUEVO COMPONENTE TERMS AND CONDITIONS ------------- -_- */}
      <div>
      <h1>Home</h1>
      <button onClick={openModal}>Términos y condiciones</button>
      <TermsAndConditionsModal isOpen={modalIsOpen} onClose={closeModal} />
      <Footer />
    </div></div>
  )
}

export default Home