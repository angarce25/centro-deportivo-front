import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function UserMembersChart() {
  const [myPlayers, setMyPlayers] = useState([]);
  const [myPayments, setMyPayments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const extraPath = "/myplayers";
    const paymentsExtraPath = "/memberships/my-payments";
    const fullUrl = apiUrl + extraPath;
    const paymentsFullUrl = apiUrl + paymentsExtraPath;

    axios
      .all([
        axios.get(fullUrl, { withCredentials: true }),
        axios.get(paymentsFullUrl, { withCredentials: true }),
      ])
      .then(
        axios.spread((playersResponse, paymentsResponse) => {
          setMyPlayers(playersResponse.data);
          setMyPayments(paymentsResponse.data);
          setIsLoading(false);
        })
      )
      .catch((error) => {
        console.error("Error al obtener datos:", error);
        setIsLoading(false);
      });
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "none":
        return "text-blue-500";
      case "pendiente":
        return "text-yellow-500";
      case "aceptado":
        return "text-green-500";
      case "rechazado":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  const consolidatePayments = (playerPayments) => {
    const consolidated = {
      first_payment: "none",
      second_payment: "none",
      third_payment: "none",
      annual_payment: "none",
    };

    playerPayments.forEach((payment) => {
      if (payment.first_payment && payment.first_payment !== "none") {
        consolidated.first_payment = payment.first_payment;
      }
      if (payment.second_payment && payment.second_payment !== "none") {
        consolidated.second_payment = payment.second_payment;
      }
      if (payment.third_payment && payment.third_payment !== "none") {
        consolidated.third_payment = payment.third_payment;
      }
      if (payment.annual_payment && payment.annual_payment !== "none") {
        consolidated.annual_payment = payment.annual_payment;
      }
    });

    return consolidated;
  };

  return (
    <section className="mt-8">
      <div className="overflow-x-auto">
        <div className="flex items-center justify-between">
          <h4 className="text-gray-600 font-bold mb-10">
            Mis Suscripciones de Jugadores
          </h4>
        </div>
      </div>

      <div className="flex flex-col mt-6">
        <div className="max-w-screen-xl mx-auto overflow-x-auto overflow-y-auto max-h-[80vh] mb-8">
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
                {isLoading ? (
                  <tr>
                    <td colSpan="11" className="text-center py-4">
                      Cargando...
                    </td>
                  </tr>
                ) : myPlayers.length === 0 ? (
                  <tr>
                    <td colSpan="11" className="text-center py-4">
                      No hay jugadores disponibles.
                    </td>
                  </tr>
                ) : (
                  myPlayers.map((player) => {
                    const playerPayments = myPayments.filter(
                      (payment) => payment.player_id === player._id
                    );

                    const consolidatedPayments =
                      consolidatePayments(playerPayments);

                    return (
                      <tr key={player._id}>
                        <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
                          {player.name}
                        </td>
                        <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
                          {player.lastname}
                        </td>                     
                        
                        {[
                          "first_payment",
                          "second_payment",
                          "third_payment",
                          "annual_payment",
                        ].map((paymentType) => (
                          <td
                            key={paymentType}
                            className={`px-4 py-4 whitespace-no-wrap border-b border-gray-200 text-center ${getStatusColor(
                              consolidatedPayments[paymentType]
                            )}`}
                          >
                            {consolidatedPayments[paymentType]}
                          </td>
                        ))}
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

export default UserMembersChart;