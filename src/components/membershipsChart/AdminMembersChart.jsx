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

    const paymentsPath = "/memberships/status"; // Ruta para obtener los pagos(VERIFICAR)

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
        console.log("PAYMENTS RESPONSE DE ADMIN DASH: ", paymentsResponse.data);

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

        setPayments(payments);
        console.log(
          "INFORMACION DE USUARIOS CON PAGOS DE MEMBRESIA : ",
          combinedData
        );
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

  // ---------------- PAGINACIÓN Y ORDENACIÓN ---------------- //
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

  // ---------------- MODAL VER PDF ---------------- //

  // Estado para controlar la visibilidad del modal
  const [showModal, setShowModal] = useState(false);
  // Estado para almacenar el pago seleccionado
  const [selectedPayment, setSelectedPayment] = useState(null);

  // Función para mostrar el modal y almacenar el pago seleccionado
  const handleViewPDF = (payment) => {
    const paymentType = "annual_payment"; // OJO FALTA -_- Aquí debes determinar el tipo de pago actual

    const documentPath = payment[paymentType]?.document?.path;

    if (documentPath) {
      // Lógica para mostrar el PDF en el modal utilizando el path del documento
      console.log("Path del documento PDF:", documentPath);
      setSelectedPayment(documentPath);

      setShowModal(true);
    } else {
      console.log(
        "No se encontró el path del documento PDF para el tipo de pago:",
        paymentType
      );
    }
  };

  const hanleViewPDF = (payment) => {
    // Determinar el tipo de pago que se está procesando
    // Aquí suponemos que paymentType es el tipo de pago actual, como 'first_payment'
    const paymentType = "annual_payment"; // Aquí debes determinar el tipo de pago actual

    // Acceder al path del documento PDF para el tipo de pago específico
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedPayment(null);
  };

  // ---------------- FINAL DE MODAL VER PDF ---------------- //

  // ---------------- ACTUALIZAR ESTADO DE PAGO ---------------- //
  //  OJO FALTA IMPLEMENTAR Manejar cambio de estado y el anual?
  const handleStatusChange = (paymentIndex, paymentType, newStatus) => {
    const paymentId = payments[paymentIndex]._id;

    const updatedMembers = members.map((member) => {
      const updatedPayments = member.payments.map((payment) => {
        if (payment._id === paymentId && payment.type === paymentType) {
          return { ...payment, status: newStatus };
        }
        return payment;
      });
      return { ...member, payments: updatedPayments };
    });

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
                                    onClick={() => handleViewPDF(payment)}
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
                                <button onClick={() => handleViewPDF(payment)}>
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

          {/* Modal para mostrar el PDF */}
          {showModal && (
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                {/* Fondo oscuro detrás del modal */}
                <div
                  className="fixed inset-0 transition-opacity"
                  aria-hidden="true"
                  onClick={closeModal}
                >
                  <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                {/* Contenido del modal */}
                <span
                  className="hidden sm:inline-block sm:align-middle sm:h-screen"
                  aria-hidden="true"
                >
                  &#8203;
                </span>
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                  {/* Contenido del modal */}
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        {/* Aquí puedes mostrar el PDF asociado al pago */}
                        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                          PDF del Pago
                        </h3>
                        {/* Por ejemplo, podrías mostrar una imagen del PDF */}
                        <img
                          src={selectedPayment?.pdfUrl}
                          alt="PDF del Pago"
                          className="w-full max-w-xs mx-auto mb-4"
                        />
                        {/* Botón para cerrar el modal */}
                        <button
                          type="button"
                          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ml-auto"
                          onClick={closeModal}
                        >
                          Cerrar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default MembershipChart;
