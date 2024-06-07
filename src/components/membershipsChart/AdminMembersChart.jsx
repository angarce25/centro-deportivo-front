import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";

function MembershipChart() {
  const [members, setMembers] = useState([]);
  const [payments, setPayments] = useState([]);
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
    const fullMembersUrl = API + membersPath; // Combina la URL base con la ruta de miembros
    const fullPaymentsUrl = API + paymentsPath; // Combina la URL base con la ruta de pagos

    const fetchMembersAndPayments = async () => {
      try {
        const membersResponse = await axios.get(fullMembersUrl, {
          withCredentials: true,
        });
        const paymentsResponse = await axios.get(fullPaymentsUrl, {
          withCredentials: true,
        });

        const members = membersResponse.data;
        const payments = paymentsResponse.data;

        const combinedData = members
          .filter((member) =>
            payments.some((payment) => payment.parent_id === member._id)
          )
          .map((member) => ({
            ...member,
            payments: payments.find(
              (payment) => payment.parent_id === member._id
            ),
          }));

        setMembers(combinedData);
      } catch (error) {
        handleFetchError(error);
      }
    };

    fetchMembersAndPayments();
  }, []);

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

  const sortedMembers = [...members].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  // Obtener los pedidos actuales
  const indexOfLastMember = currentPage * MembersPerPage;
  const indexOfFirstMember = indexOfLastMember - MembersPerPage;
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
      case "pendiente":
        return "text-yellow-500"; // Color amarillo para pendiente
      case "aceptado":
        return "text-green-500"; // Color verde para aceptado
      case "none":
        return "text-blue-500"; // Color azul para no recibido
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

  // Manejar cambio de estado
  const handleStatusChange = (id, newStatus) => {
    const updatedMemberships = members.map((member) =>
      member._id === id ? { ...member, status: newStatus } : member
    );
    setMembers(updatedMemberships);
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
                        Usuario <SortArrow direction={sortConfig.direction} />
                      </th>
                      <th
                        className="px-6 py-6 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black cursor-pointer"
                        onClick={() => requestSort("payments._id")}
                      >
                        Id del pago{" "}
                        <SortArrow direction={sortConfig.direction} />
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
                    {currentMembers.map((member) => (
                      <tr key={member._id} className="border-black">
                        <td className="px-4 py-4 whitespace-no-wrap border-b border-black text-center">
                          {member.name
                            ? `${member.name} ${member.lastname}`
                            : "Nombre no disponible"}
                        </td>
                        <td className="px-4 py-4 whitespace-no-wrap border-b border-black text-center">
                        {member.payments?._id}
                        </td>
                         
                        {[
                          "first_payment",
                          "second_payment",
                          "third_payment",
                        ].map((paymentType) => (
                          <td
                            className='px-4 py-4 whitespace-no-wrap border-b border-black text-center'
                          >
                         <select
  className={`bg-transparent ${getStatusColor(
    member.membership_payments?.[0]?.[paymentType]?.status
  )}`}
  key={paymentType}
  value={
    member.membership_payments?.[0]?.[paymentType]?.status || "pendiente"
  }
  onChange={(e) =>
    handleStatusChange(member._id, paymentType, e.target.value)
  }
>
  <option value="pendiente">Pendiente</option>
  <option value="aceptado">Aceptado</option>
  <option value="none">No recibido</option>
  <option value="rechazado">Rechazado</option>
</select>
                            <button > 
                               {/* onClick={() => handlePDFView(member._id, paymentType)} */}
          Ver PDF
        </button>
                          </td>
                        ))}
                        <td className="px-4 py-4 whitespace-no-wrap border-b border-black text-center">
                          <div
                            className={
                              member.membership_payments?.[0]?.annual_payment
                                ?.status
                                ? "text-green-500"
                                : "text-red-500"
                            }
                          >
                            {member.membership_payments?.[0]?.annual_payment
                              ?.status
                              ? "Pagado"
                              : "No pagado"}
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-no-wrap border-b border-black text-center">
                          {member.createdAt
                            ? format(
                                new Date(member.createdAt),
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
