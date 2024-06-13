import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";

function UsersChart() {
  const [users, setUsers] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: "createdAt", direction: "ascending" });

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const extraPath = '/user';
    const fullUrl = apiUrl + extraPath;

    axios
      .get(fullUrl, { withCredentials: true })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos de usuarios:", error);
      });
  }, []);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedUsers = [...users].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  const SortArrow = ({ direction }) => {
    if (!direction) return null;
    return direction === "ascending" ? "↑" : "↓";
  };

  return (
    <section className="mt-8">
      <div className="overflow-x-auto max-w-6xl mx-auto overflow-y-auto max-h-[80vh] mb-8">
        <div className="flex shadow items-center justify-between">
          <h4 className="text-gray-600 font-bold mb-4 underline">Padres</h4>
        </div>
      </div>

      <div className="flex flex-col mt-6">
        <div className="max-w-screen-xl mx-auto overflow-x-auto overflow-y-auto max-h-[80vh] mb-8">
          <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-black">
            <table className="table table-zebra min-w-full">
              <thead>
                <tr className="text-gray-800 text-sm">
                  <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black">
                    Nombres
                  </th>
                  <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black">
                    Apellidos
                  </th>
                  <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black">
                    Correo Electrónico
                  </th>
                  <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black">
                    Número de Teléfono
                  </th>
                  <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black">
                    Perfil
                  </th>
                  <th
                    onClick={() => requestSort("createdAt")}
                    className="px-6 py-6 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black cursor-pointer"
                  >
                    Fecha{" "}
                    <SortArrow
                      direction={
                        sortConfig.key === "createdAt"
                          ? sortConfig.direction
                          : null
                      }
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedUsers.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-4 border-black">
                      No hay usuarios disponibles.
                    </td>
                  </tr>
                ) : (
                  sortedUsers.map((user) => (
                    <tr key={user._id}>
                      <td className="px-4 py-4 whitespace-no-wrap border-b border-black text-center">
                        {user.name}
                      </td>
                      <td className="px-4 py-4 whitespace-no-wrap border-b border-black text-center">
                        {user.lastname}
                      </td>
                      <td className="px-4 py-4 whitespace-no-wrap border-b border-black text-center">
                        {user.email}
                      </td>
                      <td className="px-4 py-4 whitespace-no-wrap border-b border-black text-center">
                        {user.mobile}
                      </td>
                      <td className="px-4 py-4 whitespace-no-wrap border-b border-black text-center">
                        {user.rol_id}
                      </td>
                      <td className="px-4 py-4 whitespace-no-wrap border-b border-black text-center">
                        {format(new Date(user.createdAt), 'dd/MM/yyyy')}
                      </td>
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

export default UsersChart;
