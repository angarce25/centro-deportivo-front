import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";

function MembershipChart() {
  const [memberships, setMemberships] = useState([]);
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
    const membersPath = "/api/user"; // Ruta para obtener los miembros
    const paymentsPath = "/api/payments/status"; // Ruta para obtener los pagos
    const fullMembersUrl = API + membersPath; // Combina la URL base con la ruta de miembros
    const fullPaymentsUrl = API + paymentsPath; // Combina la URL base con la ruta de pagos

    const fetchMembers = async () => {
      try {
        const response = await axios.get(fullMembersUrl, { withCredentials: true }); // Realiza la solicitud para obtener los miembros
        setMemberships(response.data); 
        console.log('RES.DATA FETCH MEMBERS: ',response.data);
      } catch (error) {
        handleFetchError(error);
      }
    };

    const fetchPayments = async () => {
      try {
        const response = await axios.get(fullPaymentsUrl, { withCredentials: true }); // Realiza la solicitud para obtener los pagos
        setPayments(response.data); // Actualiza el estado con los datos de los pagos
        console.log('RES.DATA FETCH PAYMENTS: ',response.data);
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

    fetchMembers();
    fetchPayments();
  }, []);

  // Combinar los datos de usuarios y pagos
  const combinedData = memberships.map(member => {
    const payment = payments.find(payment => payment.parent_id === member._id);
    return { ...member, payment };
  });

  const sortedMembers = [...combinedData].sort((a, b) => {
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
  const currentMembers = sortedMembers.slice(indexOfFirstMember, indexOfLastMember);

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
      case "completado":
        return "text-green-500"; // Color verde para completado
      case "enviado":
        return "text-blue-500"; // Color azul para enviado
      case "cancelado":
        return "text-red-500"; // Color rojo para cancelado
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
    const updatedMemberships = memberships.map((member) =>
      member._id === id ? { ...member, status: newStatus } : member
    );
    setMemberships(updatedMemberships);
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
                        onClick={() => requestSort("_id")}
                        className="px-6 py-6 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black cursor-pointer"
                      >
                        Usuario
                        <SortArrow direction={sortConfig.key === "_id" ? sortConfig.direction : null} />
                      </th>
                      <th
                        onClick={() => requestSort("_id")}
                        className="px-6 py-6 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black cursor-pointer"
                      >
                        Id del pago
                        <SortArrow direction={sortConfig.key === "_id" ? sortConfig.direction : null} />
                      </th>
                      <th
                        onClick={() => requestSort("payment.document")}
                        className="px-6 py-6 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black cursor-pointer"
                      >
                        Documento de Pago
                        <SortArrow direction={sortConfig.key === "payment.document" ? sortConfig.direction : null} />
                      </th>
                      <th
                        onClick={() => requestSort("payment.summary")}
                        className="px-6 py-6 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black cursor-pointer"
                      >
                        Observaciones del Pago
                        <SortArrow direction={sortConfig.key === "payment.summary" ? sortConfig.direction : null} />
                      </th>
                      <th
                        onClick={() => requestSort("payment.status")}
                        className="px-6 py-6 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black cursor-pointer"
                      >
                        Estado del Pago
                        <SortArrow direction={sortConfig.key === "payment.status" ? sortConfig.direction : null} />
                      </th>
                      <th
                        onClick={() => requestSort("createdAt")}
                        className="px-6 py-6 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black cursor-pointer"
                      >
                        Fecha
                        <SortArrow direction={sortConfig.key === "createdAt" ? sortConfig.direction : null} />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentMembers.map((member) => (
                      <tr key={member._id} className="border-black">
                        <td className="px-4 py-4 whitespace-no-wrap border-b border-black text-center">
                          {member.name ? `${member.name} ${member.lastname}` : "Nombre no disponible"}
                        </td>
                        <td className="px-4 py-4 whitespace-no-wrap border-b border-black text-center">
                          {member._id} {/* Mostrar el _id del miembro */}
                        </td>
                        <td className={`px-4 py-4 whitespace-no-wrap border-b border-black text-center ${member.payment?.document ? "text-green-500" : "text-red-500"}`}>
                          {member.payment?.document ? "Recibido" : "Pendiente"} {/* Mostrar el documento */}
                        </td>
                        <td className="px-4 py-4 whitespace-no-wrap border-b border-black text-center">
                          {member.payment?.summary || "No disponible"} {/* Mostrar el resumen del miembro */}
                        </td>
                        <td className={`px-4 py-4 whitespace-no-wrap border-b border-black text-center ${getStatusColor(member.payment?.status)}`}>
                          <select className="bg-transparent" value={member.payment?.status || "pendiente"} onChange={(e) => handleStatusChange(member._id, e.target.value)}>
                            <option value="pendiente">Pendiente</option>
                            <option value="completado">Completado</option>
                            <option value="enviado">Enviado</option>
                            <option value="cancelado">Cancelado</option>
                          </select>
                        </td>
                        <td className="px-4 py-4 whitespace-no-wrap border-b border-black text-center">
                          {member.createdAt ? format(new Date(member.createdAt), "dd/MM/yyyy HH:mm") : "Fecha no disponible"} {/* Formatear la fecha de creación */}
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
                  {Array.from({ length: Math.ceil(memberships.length / MembersPerPage) }, (_, index) => (
                    <li key={index} className="px-3 py-2 mx-1 cursor-pointer bg-white border rounded" onClick={() => paginate(index + 1)}>
                      {index + 1}
                    </li>
                  ))}
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
