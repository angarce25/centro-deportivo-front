import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { format } from 'date-fns';
import Cookies from 'js-cookie';

function PlayersUserChart() {
  const [myPlayers, setMyPlayers] = useState([]);
  const [myPayments, setMyPayments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API = import.meta.env.VITE_API_URL;
    const playersExtraPath = "/api/myplayers";
    const paymentsExtraPath = "/api/payments/my-status";
    const playersUrl = API + playersExtraPath;
    const paymentsUrl = API + paymentsExtraPath;

    const fetchPlayers = async () => {
      try {
        const token = Cookies.get('token');
        if (!token) {
          setError('No se encontró token de autenticación. Por favor, inicia sesión.');
          return;
        }

        const playersResponse = await axios.get(playersUrl, {
          withCredentials: true,
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setMyPlayers(playersResponse.data);

        const paymentsResponse = await axios.get(paymentsUrl, {
          withCredentials: true,
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setMyPayments(paymentsResponse.data);
      } catch (error) {
        if (error.response) {
          if (error.response.status === 401) {
            setError('Acceso no autorizado. Por favor, inicia sesión.');
          } else if (error.response.status === 403) {
            setError('No tienes permiso para acceder a esta página.');
          } else {
            setError('Ocurrió un error al obtener los datos.');
          }
        } else {
          setError('Error de conexión. Por favor, inténtalo de nuevo más tarde.');
        }
      }
    };

    fetchPlayers();
  }, []);

  const getPaymentStatus = (playerId, paymentType) => {
    const payment = myPayments.find(payment => payment.players_id === playerId);
    if (payment) {
      return payment[paymentType]?.status ? "Pagado" : "Pendiente";
    }
    return "Pendiente";
  };

  return (
    <section className="mt-8">
      <div className="overflow-x-auto">
        <div className="flex items-center justify-between">
          <h4 className="text-gray-600 font-bold mb-10">Mis Jugadores</h4>
        </div>
        <Link to="/dashboard/form-player">
          <button className="text-black font-bold py-2 px-4 rounded bg-yellow-d hover:bg-yellow-l">
            Añadir jugador
          </button>
        </Link>
      </div>
  
      <div className="flex flex-col mt-6">
        <div className="max-w-screen-xl mx-auto   overflow-x-auto overflow-y-auto max-h-[80vh] mb-8">
          {" "}
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
                    Talla Camisa
                  </th>
                  <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Talla Pantalón
                  </th>
                  <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Talla Zapato
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
                  myPlayers.map((player) => (
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
                        {player.shirt_size}
                      </td>
                      <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
                        {player.pants_size}
                      </td>
                      <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
                        {player.shoe_size}
                      </td>
                      <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
                        {player.status ? "Activo" : "Inactivo"}
                      </td>
                      {myPayments.length === 0 ? (<>
                        <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200 text-center">No hay pagos</td>
                        <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200 text-center">No hay pagos</td>
                        <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200 text-center">No hay pagos</td>
                        <td className="tpx-4 py-4 whitespace-no-wrap border-b border-gray-200 text-center">No hay pagos</td>
                        </>
                      ) : (
                        <>
                          <td
                            className="px-4 py-4 whitespace-no-wrap border-b border-gray-200"
                            style={{
                              color:
                                getPaymentStatus(player._id, "first_payment") === "Pagado"
                                  ? "green"
                                  : "red",
                            }}
                          >
                            {getPaymentStatus(player._id, "first_payment")}
                          </td>
                          <td
                            className="px-4 py-4 whitespace-no-wrap border-b border-gray-200"
                            style={{
                              color:
                                getPaymentStatus(player._id, "second_payment") === "Pagado"
                                  ? "green"
                                  : "red",
                            }}
                          >
                            {getPaymentStatus(player._id, "second_payment")}
                          </td>
                          <td
                            className="px-4 py-4 whitespace-no-wrap border-b border-gray-200"
                            style={{
                              color:
                                getPaymentStatus(player._id, "third_payment") === "Pagado"
                                  ? "green"
                                  : "red",
                            }}
                          >
                            {getPaymentStatus(player._id, "third_payment")}
                          </td>
                          <td
                            className="px-4 py-4 whitespace-no-wrap border-b border-gray-200"
                            style={{
                              color:
                                getPaymentStatus(player._id, "annual_payment") === "Pagado"
                                  ? "green"
                                  : "red",
                            }}
                          >
                            {getPaymentStatus(player._id, "annual_payment")}
                          </td>
                        </>
                      )}
                    </tr>
                  ))
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
