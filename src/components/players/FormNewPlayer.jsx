import { useState, useEffect} from "react";
import axios from "axios";
import ModalInfoEquipment from "./ModalInfoEquipment";
import { useForm } from "react-hook-form";
import { usePlayers } from "../../context/PlayerContext"
import { SiTruenas } from "react-icons/si";

export default function FormNewPlayer() {
  const { register, handleSubmit } = useForm();
  const {createPlayer, setCreatePlayer} = usePlayers()
  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL; // Obtiene la URL base de la API desde las variables de entorno
    const extraPath = '/newplayer'; // Añade la parte adicional de la URL
    const fullUrl = apiUrl + extraPath; // Combina la URL base con la parte adicional

    axios.post(fullUrl, { withCredentials: true })
      .then((response) => {
        setCreatePlayer(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener tus jugadores:", error);
      });
  }, []);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  const onSubmit = handleSubmit((data) => {
    createPlayer(data);
  }); 

  const openModal = () => {    
    setModalIsOpen(true);
  };

  const closeModal = () => {    
    setModalIsOpen(false);
  };

  return (
    <section className="ml-20">
      <div className="p-8 flex flex-col lg:flex-row">
        {/* Columna izquierda */}
        <form className="flex-1 mb-8 lg:mb-0 lg:mr-4"
        onSubmit={onSubmit}>
          {/* Datos personales */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Datos personales jugador
            </h2>
            <div className="flex mb-4">
              <div className="w-full lg:w-1/2 mr-5 lg:mr-0">
                <label
                  className="block text-gray font-bold mb-2"
                  htmlFor="nombre"
                >
                  Nombre
                </label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="text"
                  {...register("name", {required: true})}
                  autoFocus
                  // id="nombre"
                  // name="nombre"
                />
              </div>
              <div className="w-full lg:w-1/2 ml-4">
                <label
                  className="block text-gray font-bold mb-2"
                  htmlFor="apellidos"
                >
                  Apellidos
                </label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="text"
                  {...register("lastname", {required: true})}
                  // id="apellidos"
                  // name="apellidos"
                />
              </div>
            </div>
            <div className="flex mb-4">
              <div className="w-full lg:w-1/2 mr-4 lg:mr-0">
                <label
                  className="block text-gray font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="text"
                  {...register("email", {required: true})}
                  // id="email"
                  // name="email"
                />
              </div>
              <div className="w-full lg:w-1/2 ml-4">
                <label
                  className="block text-gray font-bold mb-2"
                  htmlFor="telefono"
                >
                  Teléfono
                </label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="number"
                  {...register("phone", {required: true})}
                  // id="telefono"
                  // name="telefono"
                />
              </div>
            </div>
            <div className="flex mb-4">
              <div className="w-full lg:w-1/2 mr-4 lg:mr-0">
                <label className="block text-gray font-bold mb-2" htmlFor="dni">
                  DNI
                </label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="text"
                  {...register("dni", {required: true})}
                  // id="dni"
                  // name="dni"
                />
              </div>
              <div className="w-full lg:w-1/2 ml-4">
                <label
                  className="block text-gray font-bold mb-2"
                  htmlFor="codigopostal"
                >
                  Código Postal
                </label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="text"
                  {...register("post_code")}
                  // id="codigopostal"
                  // name="codigopostal"
                />
              </div>
            </div>
            <div className="flex mb-4">
              <div className="w-full lg:w-1/2 mr-4 lg:mr-0">
                <label
                  className="block text-gray font-bold mb-2"
                  htmlFor="alergias"
                >
                  Alergias
                </label>
                <textarea
                  className="input input-bordered w-full max-w-xs"
                  {...register("allergies")}
                  // id="alergias"
                  // name="alergias"
                />
              </div>
              <div className="w-full lg:w-1/2 ml-4">
                <label
                  className="block text-gray font-bold mb-2"
                  htmlFor="enfermedad"
                  
                >
                  Lesión o enfermedad
                </label>
                <textarea
                  className="input input-bordered w-full max-w-xs"
                  {...register("injuries_illness")}
                  id="enfermedad"
                  name="enfermedad"
                />
              </div>
            </div>
          </div>
        </form>

        {/* Columna derecha */}
        <form className="flex-1 ml-20"
        onSubmit={onSubmit}>
          {/* Datos equipamiento deportivo */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-3">
              Datos equipamiento deportivo
            </h2>
            <button type="button" onClick={openModal} className="flex hover:underline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>
              <h4 className="mb-3 ml-1">
                ¿Para qué necesito aportar esta información?
              </h4>
            </button>  

            <ModalInfoEquipment
              modalIsOpen={modalIsOpen}
              onClose={closeModal}
            />          

            <div className="flex mb-4">
              <div className="w-full lg:w-1/2 mr-4 lg:mr-0">
                <label
                  className="block text-gray font-bold mb-2"
                  htmlFor="tallaCamiseta"
                >
                  Talla de ropa (camiseta)
                </label>
                <select className="select select-bordered w-full max-w-xs">
                  <option defaultValue="Selecciona una talla">
                    Selecciona una talla
                  </option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
              <div className="w-full lg:w-1/2 ml-4">
                <label
                  className="block text-gray font-bold mb-2"
                  htmlFor="tallaPantalon"
                >
                  Talla de ropa (pantalón)
                </label>
                <select className="select select-bordered w-full max-w-xs">
                  <option defaultValue="Selecciona una talla">
                    Selecciona una talla
                  </option>
                  <option>34</option>
                  <option>35</option>
                  <option>36</option>
                  <option>37</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray font-bold mb-2"
                htmlFor="numeroCalzado"
              >
                Número de calzado
              </label>

              <select className="select select-bordered w-full max-w-xs">
                <option defaultValue="Selecciona una talla">
                  Selecciona un número
                </option>
                <option>36</option>
                <option>37</option>
                <option>38</option>
                <option>39</option>
              </select>
            </div>
          </div>
        </form>
      </div>
      {/* Botón */}
      <div className="flex text-right">
        <button
          className="text-white font-bold py-2 px-4 rounded bg-black hover:bg-gray"
          type="submit"
        >
          Añadir jugador
        </button>
      </div>
    </section>
  );
}
