import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function PlayersUserChart() {
  const [myPlayers, setMyPlayers] = useState([]);
  const [myPayments, setMyPayments] = useState([]);
  

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL; // Obtiene la URL base de la API desde las variables de entorno
    const extraPath = "/myplayers"; // Añade la parte adicional de la URL
    const paymentsExtraPath = "/memberships/my-payments"; // Segundo extra path para recoger info de payments
    const fullUrl = apiUrl + extraPath; // Combina la URL base con la parte adicional
    const paymentsFullUrl = apiUrl + paymentsExtraPath;

    axios
      .get(fullUrl, { withCredentials: true })
      .then((response) => {
        setMyPlayers(response.data);
        console.log("SIIIIIU PLAYERS:", response.data); // Verifica la estructura de myPlayers
      })
      .catch((error) => {
        console.error("Error al obtener tus jugadores:", error);
      });

    axios
      .get(paymentsFullUrl, { withCredentials: true })
      .then((response) => {
       
          setMyPayments(response.data);
          console.log("SIIIIIU PAYMENTS:", response.data); // Verifica la estructura de myPayments
      })
      .catch((error) => {
        console.error("Error al obtener los pagos:", error);
      });
  }, []);


  
  
  

  // Colores para cada estado de pagos
  const getStatusColor = (status) => {
    switch (status) {
      case "none":
        return "text-blue-500"; // Color azul para no recibido
      case "pendiente":
        return "text-yellow-500"; // Color amarillo para pendiente
      case "aceptado":
        return "text-green-500"; // Color verde para aceptado
      case "rechazado":
        return "text-red-500"; // Color rojo para rechazado
      default:
        return "text-gray-500"; // Color gris para otros estados
    }
  };

  return (
<section className="mt-8">
  <div className="overflow-x-auto">
    <div className="flex items-center justify-between">
      <h4 className="text-gray-600 font-bold mb-10">
        Mis Pagos de Membresía
      </h4>
    </div>
   
  </div>

  <div className="flex flex-col mt-6">
    <div className="max-w-screen-xl mx-auto overflow-x-auto overflow-y-auto max-h-[80vh] mb-8">
      {/* modificacion de la table  */}
      <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
        <table className="table table-zebra min-w-full">
          <thead>
            <tr className="text-gray-800 text-sm">
              <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Nombre
              </th>
              <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Apellido
              </th>
              <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Edad
              </th>
              <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Equipo
              </th>
              <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Estado
              </th>
              <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Primer Pago
              </th>
              <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Segundo Pago
              </th>
              <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Tercer Pago
              </th>
              <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Pago Anual
              </th>
              <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Añadir un pago
              </th>
            </tr>
          </thead>



          
          <tbody>
  {myPlayers.length === 0 ? (
    <tr>
      <td colSpan="11" className="text-center py-4">
        No hay jugadores disponibles.
      </td>
    </tr>
  ) : (
    myPlayers.map((player) => {
      // Mensaje de depuración para verificar el jugador actual
      console.log("Jugador actual:", player);
    
      // Buscar el pago correspondiente al jugador actual en myPayments
      const playerPayment = myPayments.find(payment => payment._id === player._id);
      // Mensaje de depuración para verificar el pago asociado al jugador actual
      console.log("Pago del jugador:", playerPayment);
      console.log("My Payments:",myPayments)
    
      return (
        <tr key={player._id}>
          <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
            {player.name}
          </td>
          <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
            {player.lastname}
          </td>
          <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
            {player.age} años
          </td>
          <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
            {player.team ? player.team.name : "Pendiente"}
          </td>
          <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
            {player.status ? "Activo" : "Inactivo"}
          </td>
          <td className={`px-4 py-4 whitespace-no-wrap border-b border-gray-200 text-center ${getStatusColor(playerPayment ? playerPayment.first_payment : 'none')}`}>
            {playerPayment ? playerPayment.first_payment : 'none'}
          </td>
          <td className={`px-4 py-4 whitespace-no-wrap border-b border-gray-200 text-center ${getStatusColor(playerPayment ? playerPayment.second_payment : 'none')}`}>
            {playerPayment ? playerPayment.second_payment : 'none'}
          </td>
          <td className={`px-4 py-4 whitespace-no-wrap border-b border-gray-200 text-center ${getStatusColor(playerPayment ? playerPayment.third_payment : 'none')}`}>
            {playerPayment ? playerPayment.third_payment : 'none'}
          </td>
          <td className={`px-4 py-4 whitespace-no-wrap border-b border-gray-200 text-center ${getStatusColor(playerPayment ? playerPayment.annual_payment : 'none')}`}>
            {playerPayment ? playerPayment.annual_payment : 'none'}
          </td>
          <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
            <Link to={`/dashboard/payment/${player._id}`}>
              <button className="text-black font-bold py-2 px-4 rounded bg-yellow-d hover:bg-yellow-l">
                Añadir pago
              </button>
            </Link>
          </td>
        </tr>
      );
    })
    
  )}
</tbody>



        </table>
      </div>
    </div>
  </div>
</section>

  );
}

export default PlayersUserChart;
