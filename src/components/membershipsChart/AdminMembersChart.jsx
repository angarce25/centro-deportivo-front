import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";

function MembershipChart() {
  const [members, setMembers] = useState([]);
  const [payments, setPayments] = useState([]);
  const [players, setPlayers] = useState([]); // Nuevo estado para almacenar los nombres de los jugadores asociados al player_id de pagos


  const [error, setError] = useState(null);
  const [sortConfig, setSortConfig] = useState({
    key: "createdAt",
    direction: "ascending",
  });

  useEffect(() => {
    const API = import.meta.env.VITE_API_URL; // Obtiene la URL base de la API desde las variables de entorno
    const paymentsPath = "/memberships/status"; // Ruta para obtener los pagos(VERIFICAR)
    const playersPath = "/players"; // Ruta para obtener los jugadores
  
    const fullPaymentsUrl = API + paymentsPath; // Combina la URL base con la ruta de pagos
    const fullPlayersUrl = API + playersPath; // Combina la URL base con la ruta de jugadores
  
    const fetchPlayersAndPayments = async () => {
      try {
        const playersResponse = await axios.get(fullPlayersUrl, {
          withCredentials: true,
        });
        const paymentsResponse = await axios.get(fullPaymentsUrl, {
          withCredentials: true,
        });
  
        console.log("PLAYERS RESPONSE: ", playersResponse.data);
        console.log("PAYMENTS RESPONSE DE ADMIN DASH: ", paymentsResponse.data);
  
        const players = playersResponse.data;
        const payments = paymentsResponse.data;
  
        const combinedData = players
          .filter((player) =>
            payments.some((payment) => payment.players_id === player._id) //OJO playerS_id
          )
          .map((player) => ({
            ...player,
            payments: payments.filter((payment) =>
              player.membership_payments === payment._id
            ),
          }));
  
        setPayments(payments);
        console.log(
          "INFORMACION DE JUGADORES CON PAGOS DE MEMBRESIA : ",
          combinedData
        );
        setPlayers(combinedData);
      } catch (error) {
        handleFetchError(error);
      }
    };
  
    const handleFetchError = (error) => {
      if (error.response) {
        if (error.response.status === 401) {
          setError("Acceso no autorizado. Por favor, inicia sesión.");
        } else if (error.response.status === 403) {
          setError("No tienes permiso para acceder a esta página.");
        } else {
          setError("Ocurrió un error al obtener los datos.");
        }
      } else {
        setError("Error de conexión. Por favor, inténtalo de nuevo más tarde.");
      }
    };
  
    fetchPlayersAndPayments();
  }, []);
  

  // ---------------- PAGINACIÓN Y ORDENACIÓN ---------------- //
  const [currentPage, setCurrentPage] = useState(1);
  const [MembersPerPage] = useState(10);
  const indexOfLastMember = currentPage * MembersPerPage;
  const indexOfFirstMember = indexOfLastMember - MembersPerPage;

  const sortedMembers = [...members].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  const currentMembers = sortedMembers.slice(
    indexOfFirstMember,
    indexOfLastMember
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Cambiar ordenación
  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  // ---------------- FINAL DE PAGINACIÓN Y ORDENACIÓN ---------------- //

  // Colores para cada estado
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

  // Iconos de flechas para ordenar columnas
  const SortArrow = ({ direction }) => {
    if (!direction) return null;
    if (direction === "ascending") {
      return <span>&uarr;</span>; // Flecha hacia arriba
    } else {
      return <span>&darr;</span>; // Flecha hacia abajo
    }
  };






  // ---------------- VER PDF ---------------- //


  
  const [currentMembership, setCurrentMembership] = useState(null);

  const urlDocument = `http://localhost:3000/uploads/` + currentMembership;

  useEffect(() => {
    if (currentMembership) {
      const urlDocument = `http://localhost:3000/uploads/${currentMembership}`;
      console.log("URL DOCUMENT", urlDocument);
    }
  }, [currentMembership]);


  // ---------------- FINAL DE  VER PDF ---------------- //








  // ---------------- ACTUALIZAR ESTADO DE PAGO ---------------- //
  //  OJO FALTA IMPLEMENTAR Manejar cambio de estado y el anual?
  const handleStatusChange = (paymentIndex, paymentType, newStatus) => {
    // Asegúrate de que 'payments' esté definido y tenga la longitud suficiente
    if (!payments || payments.length <= paymentIndex) {
        console.error("El índice de pago no es válido.");
        return;
    }

    const paymentId = payments[paymentIndex]._id;
    console.log('PAYMENT ID: ', paymentId);
    //console.log('PLAYERS DENTRO DE FUNCION: ', players);

    const updatedMembers = players.map((player) => {
      const membershipPayments = Array.isArray(player.membership_payments) ? player.membership_payments : [];
      console.log(`Membership payments for player ${player._id}:`, membershipPayments);

      const updatedPayments = membershipPayments.map((payment) => {
          if (payment._id === paymentId && payment.type === paymentType) {
              return { ...payment, status: newStatus };
          }
          return payment;
      });

      console.log(`Updated payments for player ${player._id}:`, updatedPayments);
      return { ...player, membership_payments: updatedPayments };
  });

  console.log('UPDATED MEMBERS: ', updatedMembers);

    setMembers(updatedMembers);

    // Actualizar el estado en el servidor
    const API = import.meta.env.VITE_MEMBERSHIP_STATUS_URL;
    const fullStatusUrl = `${API}/${paymentId}`;
    const data = { [paymentType]: { status: newStatus } };

    axios
        .put(fullStatusUrl, data, { withCredentials: true })
        .then((response) => {
            console.log("Estado actualizado con éxito:", response.data);
        })
        .catch((error) => {
            console.error("Error al actualizar el estado:", error);
        });
};


  // ---------------- FINAL DE ACTUALIZAR ESTADO DE PAGO ---------------- //

  return (
    <section className="mt-8 flex justify-center">
      {error ? (
        <div className="text-red-500 font-bold mb-4">{error}</div>
      ) : (
        <div className="max-w-4xl w-full">
          <div className="overflow-x-auto">
            <div className="flex items-center justify-between">
              <h4 className="text-gray-600 font-bold mb-6">Membresías</h4>
            </div>
          </div>

          {/* Tabla para pedidos */}
          <div className="flex flex-col mt-6">
            <div className="-my-2 overflow-x-auto">
              <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                <table className="table table-zebra min-w-full">
                  <thead>
                    <tr className="text-gray-800 text-sm">
                      <th
                        className="px-6 py-6 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black cursor-pointer"
                        onClick={() => requestSort("name")}
                      >
                        Representante{" "}
                        <SortArrow direction={sortConfig.direction} />
                      </th>
                      <th
                        className="px-6 py-6 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black cursor-pointer"
                        onClick={() => requestSort("payments._id")}
                      >
                        Jugador <SortArrow direction={sortConfig.direction} />
                      </th>
                      <th className="px-6 py-6 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black cursor-pointer">
                        Pago 1
                      </th>
                      <th className="px-6 py-6 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black cursor-pointer">
                        Pago 2
                      </th>
                      <th className="px-6 py-6 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black cursor-pointer">
                        Pago 3
                      </th>
                      <th className="px-6 py-6 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black cursor-pointer">
                        Pago Anual
                      </th>
                      <th className="px-6 py-6 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black cursor-pointer">
                        Fecha
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {payments.map((payment, index) => {
                      const member = members.find((member) =>
                        member.membership_payments.includes(payment._id)
                      );
                      return (
                        <tr
                          key={`${players._id}-${index}`}
                          className="border-black"
                        >
                          <td className="px-4 py-4 whitespace-no-wrap border-b border-black text-center">
                            {member
                              ? `${member.name} ${member.lastname}`
                              : "Nombre no disponible"}
                          </td>




                          
                          <td className="px-4 py-4 whitespace-no-wrap border-b border-black text-center">
                            {players.find(
                              (player) => player._id === payment.players_id
                            )?.name || "Nombre no disponible"}
                          </td>

                          {/* Renderizar los pagos en cuotas */}
                          {[
                            "first_payment",
                            "second_payment",
                            "third_payment",
                          ].map((paymentType, index) => (
                            <td
                              key={`${payment._id}-${paymentType}`}
                              className="px-4 py-4 whitespace-no-wrap border-b border-black text-center"
                            >
                              {payment[paymentType]?.status !== "none" ? (
                                <>
                                  <select
                                    className={`bg-transparent ${getStatusColor(
                                      payment[paymentType]?.status || "none"
                                    )}`}
                                    value={
                                      payment[paymentType]?.status || "none"
                                    }
                                    onChange={(e) =>
                                      handleStatusChange(
                                        index,
                                        paymentType,
                                        e.target.value
                                      )
                                    }
                                  >
                                    <option value="none">No recibido</option>
                                    <option value="pendiente">Pendiente</option>
                                    <option value="aceptado">Aceptado</option>
                                    <option value="rechazado">Rechazado</option>
                                  </select>
                                  <button
                                   onClick={() => {
                                    if (payment[paymentType]?.document.filename) {
                                      const documentUrl = `http://localhost:3000/uploads/${payment[paymentType].document.filename}`;
                                      window.open(documentUrl, "_blank");                                 
                                     
                                    }
                                  }}
                                  >
                                    Ver PDF
                                  </button>
                                </>
                              ) : (
                                <span>No recibido</span>
                              )}
                            </td>
                          ))}

                          {/* Renderizar el pago anual */}
                          <td className="px-4 py-4 whitespace-no-wrap border-b border-black text-center">
                            {payment.annual_payment?.status !== "none" ? (
                              <>
                                <select
                                  className={`bg-transparent ${getStatusColor(
                                    payment.annual_payment?.status || "none"
                                  )}`}
                                  value={
                                    payment.annual_payment?.status || "none"
                                  }
                                  onChange={(e) =>
                                    handleStatusChange(
                                      index,
                                      "annual_payment",
                                      e.target.value
                                    )
                                  }
                                >
                                  <option value="none">No recibido</option>
                                  <option value="pendiente">Pendiente</option>
                                  <option value="aceptado">Aceptado</option>
                                  <option value="rechazado">Rechazado</option>
                                </select>
                                <button
  onClick={() => {
    const annualPayment = payment.annual_payment;
    if (annualPayment && annualPayment.document && annualPayment.document.filename) {
      const documentUrl = `http://localhost:3000/uploads/${annualPayment.document.filename}`;
      window.open(documentUrl, "_blank");                                 
    } else {
      console.error("El nombre de archivo del documento no está disponible.");
      // Aquí podrías mostrar un mensaje de error o manejar la situación de otra manera
    }
  }}
>
  Ver PDF
</button>
                              </>
                            ) : (
                              <span>No recibido</span>
                            )}
                          </td>

                          <td className="px-4 py-4 whitespace-no-wrap border-b border-black text-center">
                            {payment.createdAt
                              ? format(
                                  new Date(payment.createdAt),
                                  "dd/MM/yyyy HH:mm"
                                )
                              : "Fecha no disponible"}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Paginación */}
            <div className="flex justify-center mt-4">
              <nav>
                <ul className="flex list-none">
                  {Array.from(
                    { length: Math.ceil(members.length / MembersPerPage) },
                    (_, index) => (
                      <li
                        key={index}
                        className="px-3 py-2 mx-1 cursor-pointer bg-white border rounded"
                        onClick={() => paginate(index + 1)}
                      >
                        {index + 1}
                      </li>
                    )
                  )}
                </ul>
              </nav>
            </div>
          </div>

          
        </div>
      )}
    </section>
  );
}

export default MembershipChart;
