import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";

function MembershipChart() {
  const [members, setMembers] = useState([]);

  const [payments, setPayments] = useState([]);

  const [players, setPlayers] = useState([]); // Nuevo estado para almacenar los nombres de los jugadores asociados al player_id de pagos

  const [currentPage, setCurrentPage] = useState(1);
  const [MembersPerPage] = useState(10);
  const [error, setError] = useState(null);
  const [sortConfig, setSortConfig] = useState({
    key: "createdAt",
    direction: "ascending",
  });

  useEffect(() => {
    const API = import.meta.env.VITE_API_URL; // Obtiene la URL base de la API desde las variables de entorno
    const membersPath = "/user"; // Ruta para obtener los miembros
    const paymentsPath = "/memberships/status"; // Ruta para obtener los pagos
    const playersPath = "/players"; // Ruta para obtener los jugadores

    const fullMembersUrl = API + membersPath; // Combina la URL base con la ruta de miembros
    const fullPaymentsUrl = API + paymentsPath; // Combina la URL base con la ruta de pagos
    const fullPlayersUrl = API + playersPath; // Combina la URL base con la ruta de jugadores

    const fetchMembersAndPayments = async () => {
      try {
        const membersResponse = await axios.get(fullMembersUrl, {
          withCredentials: true,
        });
        const paymentsResponse = await axios.get(fullPaymentsUrl, {
          withCredentials: true,
        });

        console.log("MEMBERS RESPONSE: ", membersResponse.data);
        console.log("PAYMENTS RESPONSE: ", paymentsResponse.data);

        const members = membersResponse.data;
        const payments = paymentsResponse.data;

        const combinedData = members
          .filter((member) =>
            payments.some((payment) => payment.parent_id === member._id)
          )
          .map((member) => ({
            ...member,
            payments: payments.filter((payment) =>
              member.payments_id.includes(payment._id)
            ),
          }));

        

        console.log("MIEMBROS YA FILTRADOS X TENER PAGOS : ", combinedData);

        setPayments(payments);
        console.log("PAYMENTS: ", payments);
        setMembers(combinedData);
      } catch (error) {
        handleFetchError(error);
      }
    };

    const fetchPlayers = async () => {
      try {
        // Realizar una solicitud para obtener los datos de los jugadores
        const playersResponse = await axios.get(fullPlayersUrl, {
          withCredentials: true,
        });
        const playersData = playersResponse.data;
        console.log("PLAYERS: ", playersData);
        setPlayers(playersData); // Guardar los datos de los jugadores en el estado
      } catch (error) {
        console.error("Error fetching players:", error);
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
  


    
    fetchMembersAndPayments();
    fetchPlayers();
  }, []);



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

  // Cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Cambiar ordenación
  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

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

  // Iconos de flechas
  const SortArrow = ({ direction }) => {
    if (!direction) return null;
    if (direction === "ascending") {
      return <span>&uarr;</span>; // Flecha hacia arriba
    } else {
      return <span>&darr;</span>; // Flecha hacia abajo
    }
  };

  //  OJO FALTA IMPLEMENTAR Manejar cambio de estado y el anual?
  const handleStatusChange = (paymentIndex, paymentType, newStatus) => {
    // Obtener el ID del pago a actualizar
    const paymentId = payments[paymentIndex]._id;
  
    // Obtener una copia actualizada de los miembros
    const updatedMembers = [...members];
  
    // Actualizar el estado del miembro
    updatedMembers.forEach((member) => {
      const updatedPayments = member.payments.map((payment) => {
        if (payment._id === paymentId && payment.type === paymentType) {
          return {
            ...payment,
            status: newStatus,
          };
        } else {
          return payment;
        }
      });
      member.payments = updatedPayments;
    });
  
    // Establecer el estado actualizado de los miembros
    setMembers(updatedMembers);
  
    // Realizar la solicitud PUT al servidor para actualizar el estado del pago
    const API = import.meta.env.VITE_MEMBERSHIP_STATUS_URL;
    const fullStatusUrl = `${API}/${paymentId}`;
  
    // Crear el objeto de datos basado en el tipo de pago
    const data = {};
    data[paymentType] = { status: newStatus };
  
    axios
      .put(fullStatusUrl, data, { withCredentials: true })
      .then((response) => {
        // Manejar la respuesta si es necesario
        console.log("Estado actualizado con éxito:", response.data);
      })
      .catch((error) => {
        // Manejar cualquier error en la solicitud
        console.error("Error al actualizar el estado:", error);
      });
  };
  
  

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
                    {payments.map((payment, index) => (
                      <tr key={payment._id} className="border-black">
                        <td className="px-4 py-4 whitespace-no-wrap border-b border-black text-center">
                          {members.find((member) =>
                            member.membership_payments.includes(payment._id)
                          )
                            ? members
                                .filter((member) =>
                                  member.membership_payments.includes(
                                    payment._id
                                  )
                                )
                                .map(
                                  (member) =>
                                    `${member.name} ${member.lastname}`
                                )
                                .join(", ")
                            : "Nombre no disponible"}
                        </td>

                        <td className="px-4 py-4 whitespace-no-wrap border-b border-black text-center">
                          {players.find(
                            (player) => player._id === payment.players_id
                          )?.name || "Nombre no disponible"}
                        </td>
                        {[
                          "first_payment",
                          "second_payment",
                          "third_payment",
                        ].map((paymentType) => (
                          <td
                            className="px-4 py-4 whitespace-no-wrap border-b border-black text-center"
                            key={`${payment._id}-${paymentType}`}
                          >
                            <select
                              className={`bg-transparent ${getStatusColor(
                                members
                                  .find(
                                    (member) => member._id === payment.parent_id
                                  )
                                  ?.payments?.find(
                                    (p) =>
                                      p._id === payment._id &&
                                      p.type === paymentType
                                  )?.status || "none"
                              )}`}
                              // value={payment.status}
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
                            <button>Ver PDF</button>
                          </td>
                        ))}
                        <td className="px-4 py-4 whitespace-no-wrap border-b border-black text-center">
                        <select
        className={`bg-transparent ${getStatusColor(
          payment.annual_payment?.status || "none"
        )}`}
        value={payment.annual_payment?.status || "none"}
        onChange={(e) =>
          handleStatusChange(index, "annual_payment", e.target.value)
        }
      >
                            <option value="none">No recibido</option>
                            <option value="pendiente">Pendiente</option>
                            <option value="aceptado">Aceptado</option>
                            <option value="rechazado">Rechazado</option>
                          </select>
                          <button>Ver PDF</button>
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
                    ))}
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
