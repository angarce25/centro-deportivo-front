import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const MyPayment = () => {
  const { playerId } = useParams();
  const [player, setPlayer] = useState(null);
  const [document, setDocument] = useState(null);
  const [summary, setSummary] = useState("");
  
  const [parentId, setParentId] = useState("");  

  const [paymentType, setPaymentType] = useState("");  
  const navigate = useNavigate();

  const API = import.meta.env.VITE_API_URL;
  const membersPath = "/players/player/";
  const fullMembersUrl = `${API}${membersPath}${playerId}`;

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await axios.get(fullMembersUrl, {
          withCredentials: true,
        });
        setPlayer(response.data);
        setParentId(response.data.parent_id);
        console.log("Información del jugador:", response.data);
        console.log("ID del padre:", response.data.parent_id);
      } catch (error) {
        console.error("Error al obtener la información del jugador:", error);
      }
    };

    fetchPlayer();
  }, [fullMembersUrl]);

  const handleDocumentChange = (e) => {
    setDocument(e.target.files[0]);
  };

  const handleSummaryChange = (e) => {
    setSummary(e.target.value);
  };



  const handlePaymentTypeChange = (e) => {
    setPaymentType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!document || !summary || !parentId || !paymentType) {
        toast.error("Error al crear el pago: Faltan datos");
        return;
      }

      const formData = new FormData();
      formData.append("document", document);
      formData.append("playerId", playerId);
      formData.append("parentId", parentId);
      formData.append("paymentType", paymentType);

      const token = Cookies.get("token");
      const config = {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      };

      const response = await axios.post(
        `${API}/memberships/pay`,
        formData,
        config
      );

      if (response.status === 201) {
        toast.success("Nuevo pago creado con éxito");
        setTimeout(() => {
          navigate("/dashboard/my-memberships"); // Redirigir después de crear el pago
        }, 2000);
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data ===
          "Demasiados intentos en poco tiempo, por favor inténtalo más tarde"
      ) {
        toast.error(
          "Demasiados intentos en poco tiempo, por favor inténtalo más tarde"
        );
      } else {
        toast.error("Error al crear el pago.");
      }
    }
  };

  if (!player) {
    return <p>Cargando información del jugador...</p>;
  }

  return (
    <section className="m- w-150 bg-base-100 shadow-lg flex flex-col md:flex-row justify-between">
      <div className="m-10 flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <h4 className="card-title mb-5 col-span-full">Resumen del jugador</h4>
        <div>
          <p>
            <strong>Nombre:</strong> {player.name || "No disponible"}
          </p>
          <p>
            <strong>Apellido:</strong> {player.lastname || "No disponible"}
          </p>
          <p>
            <strong>Edad:</strong> {player.age || "No disponible"}
          </p>
          <p>
            <strong>Correo:</strong> {player.email || "No disponible"}
          </p>
        </div>
        <div>
          <p>
            <strong>DNI:</strong> {player.dni || "No disponible"}
          </p>
          <p>
            <strong>Teléfono:</strong> {player.phone || "No disponible"}
          </p>
          <p>
            <strong>Alergias:</strong> {player.allergies || "No disponible"}
          </p>
        </div>
        <div>
          <p>
            <strong>Equipo:</strong> {player.team?.name || "No disponible"}
          </p>
        </div>
      </div>
      <div className="m-10 flex-1">
        <form onSubmit={handleSubmit}>
          <h4 className="card-title mb-5">Adjuntar PDF de pago</h4>
          <p className="mb-5">Nº de cuenta: ES18 0073 0100 5405 0591 9252</p>
          <label htmlFor="document">Comprobante de pago:</label>
          <input
            type="file"
            name="document"
            onChange={handleDocumentChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-d file:text-black hover:file:bg-yellow-l"
          />
          <label htmlFor="summary" className="mt-4 block">Resumen del pago:</label>
          <textarea
            value={summary}
            onChange={handleSummaryChange}
            placeholder="Ejemplo: Adjunto factura del primer pago"
            className="block w-full text-sm text-gray-500 border border-gray-300 rounded mt-2 p-2"
          ></textarea>
          
          
          <label htmlFor="paymentType" className="mt-4 block">Tipo de pago:</label>
          <select
            id="paymentType"
            value={paymentType}
            onChange={handlePaymentTypeChange}
            className="block w-full text-sm text-gray-500 border border-gray-300 rounded mt-2 p-2"
          >
            <option value="">Selecciona un tipo de pago</option>
            <option value="annual">Pago anual</option>
            <option value="first">Primer pago</option>
            <option value="second">Segundo pago</option>
            <option value="third">Tercer pago</option>
          </select>
          
          <button
            type="submit"
            className="mt-4 text-black font-bold py-2 px-4 rounded bg-yellow-d hover:bg-yellow-l"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default MyPayment;
