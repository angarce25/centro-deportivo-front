import { useState } from "react";
import axios from "axios";
import ModalInfoEquipment from "./ModalInfoEquipment";
import { useForm } from "react-hook-form";
import { usePlayers } from "../../context/PlayerContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

//Modal DNI/Teléfono
const ModalInfoAge = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded relative">
        <button onClick={onClose} className="absolute top-2 right-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h3 className="text-m font-bold mb-4">Información importante</h3>
        <p>Si eres menor de 14 años, por favor, añade DNI y Teléfono del representante.</p>
      </div>
    </div>
  );
};


export default function FormNewPlayer() {
  const { register, handleSubmit } = useForm();
  const { createPlayer } = usePlayers();
  const navigate = useNavigate();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalAgeIsOpen, setModalAgeIsOpen] = useState(false); 

  const onSubmit = handleSubmit(async (data) => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL; 
      const extraPath = '/newplayer'; 
      const fullUrl = apiUrl + extraPath; 
     
      // console.log(fullUrl)
      const response = await axios.post(fullUrl, data, { withCredentials: true });
      const player = response.data; 
      createPlayer(response.data); 
      toast.success(`Jugador ${player.name} ${player.lastname} creado correctamente`, {
        toastStyle: {
          marginTop: "12rem", 
        }});
      navigate("/dashboard/my-players")
    } catch (error) {
      // console.error("Error al crear el jugador:", error);
      toast.error("Error al crear jugador");
    }
  });
  
  

  //Modal equipamiento deportivo
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };


  //Modal DNI/Teléfono
  const openAgeModal = () => {
    setModalAgeIsOpen(true);
  };

  const closeAgeModal = () => {
    setModalAgeIsOpen(false);
  };

  return (
    <section className="ml-20">
      <div className="p-8 flex flex-col lg:flex-row">
        <form className="flex-1 mb-8 lg:mb-0 lg:mr-4" onSubmit={onSubmit}>
          {/* Datos personales */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Datos personales jugador</h2>
            <div className="flex mb-4">
              <div className="w-full lg:w-1/2 mr-5 lg:mr-0">
                <label className="block text-gray font-bold mb-2" htmlFor="nombre">Nombre</label>
                <input className="input input-bordered w-full max-w-xs" type="text" {...register("name", {required: true})} autoFocus />
              </div>
              <div className="w-full lg:w-1/2 ml-4">
                <label className="block text-gray font-bold mb-2" htmlFor="apellidos">Apellidos</label>
                <input className="input input-bordered w-full max-w-xs" type="text" {...register("lastname", {required: true})} />
              </div>
            </div>
            <div className="flex mb-4">
              <div className="w-full lg:w-1/2 ml-4">
                <label className="block text-gray font-bold mb-2" htmlFor="fecha de nacimiento">Fecha de Nacimiento</label>
                <input className="input input-bordered w-full max-w-xs" type="date" {...register("birthdate", {required: true})} />
              </div>
            </div>
            <div className="flex mb-4">
              <div className="w-full lg:w-1/2 mr-4 lg:mr-0">
                <label className="block text-gray font-bold mb-2" htmlFor="email">Email</label>
                <input className="input input-bordered w-full max-w-xs" type="text" {...register("email", {required: true})} />
              </div>
              <div className="w-full lg:w-1/2 ml-4">
                <label className="text-gray font-bold mb-2 flex hover:underline cursor-pointer" 
                htmlFor="telefono"
                onClick={openAgeModal}
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>
                  Teléfono</label>
                <input className="input input-bordered w-full max-w-xs" type="text" {...register("phone", {required: true})} />
              </div>
            </div>
            <div className="flex mb-4">
              <div className="w-full lg:w-1/2 mr-4 lg:mr-0">
                <label className="text-gray font-bold mb-2 flex hover:underline cursor-pointer" 
                htmlFor="dni"
                onClick={openAgeModal}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>
                  DNI</label>
                <input className="input input-bordered w-full max-w-xs" type="text" {...register("dni", {required: true})} />
              </div>
              <div className="w-full lg:w-1/2 ml-4">
                <label className="block text-gray font-bold mb-2" htmlFor="codigo postal">Código Postal</label>
                <input className="input input-bordered w-full max-w-xs" type="text" {...register("post_code")} />
              </div>
            </div>
            <div className="flex mb-4">
              <div className="w-full lg:w-1/2 mr-4 lg:mr-0">
                <label className="block text-gray font-bold mb-2" htmlFor="alergias">Alergias</label>
                <textarea className="input input-bordered w-full max-w-xs" {...register("allergies")} />
              </div>
              <div className="w-full lg:w-1/2 ml-4">
                <label className="block text-gray font-bold mb-2" htmlFor="enfermedad">Lesión o enfermedad</label>
                <textarea className="input input-bordered w-full max-w-xs" {...register("injury_illness")} />
              </div>
            </div>
          </div>
          
        {/* Columna derecha */}
        {/* <form className="flex-1 ml-20" onSubmit={onSubmit}>  */}
          {/* Datos equipamiento deportivo */}
           <div className="mb-8">
            <h2 className="text-2xl font-bold mb-3">Datos equipamiento deportivo</h2>
            <button type="button" onClick={openModal} className="flex hover:underline">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>
              <h4 className="mb-3 ml-1">¿Para qué necesito aportar esta información?</h4>
            </button>
            <ModalInfoEquipment modalIsOpen={modalIsOpen} onClose={closeModal} />
            <div className="flex mb-4">
              <div className="w-full lg:w-1/2 mr-4 lg:mr-0">
                <label className="block text-gray font-bold mb-2" htmlFor="tallaCamiseta">Talla de ropa (camiseta)</label>
                <select className="select select-bordered w-full max-w-xs" {...register("shirt_size", { required: true })}>
                  <option value="">Selecciona una talla</option>
                  <option value="3XS">3XS</option>
                  <option value="2XS">2XS</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XL">XXL</option>
                </select>
              </div>
              <div className="w-full lg:w-1/2 ml-4">
                <label className="block text-gray font-bold mb-2" htmlFor="tallaPantalon">Talla de ropa (pantalón)</label>
                <select className="select select-bordered w-full max-w-xs" {...register("pants_size", { required: true })}>
                  <option value="">Selecciona una talla</option>
                  <option value="3XS">3XS</option>
                  <option value="2XS">2XS</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XL">XXL</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray font-bold mb-2" htmlFor="numeroCalzado">Número de calzado</label>
              <select className="select select-bordered w-full max-w-xs" {...register("shoe_size", { required: true })}>
                <option value="">Selecciona un número</option>
                <option value="35">35</option>
                <option value="36">36</option>
                <option value="37">37</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
              </select>
            </div>
          </div>
          <div className="flex text-right">
        <button className="text-white font-bold py-2 px-4 rounded bg-custom-blue hover:bg-gray" type="submit">
          Añadir jugador
        </button>
        </div>
        </form>
        {/* </form>  */}
      </div>
      <ModalInfoAge isOpen={modalAgeIsOpen} onClose={closeAgeModal} />
    </section>
  );
}
