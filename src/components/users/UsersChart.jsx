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
    <section className="flex flex-col mt-2 ml-20 2xl:ml-64 xl:ml-64 lg:ml-60 md:ml-48 justify-center">
      
        <div className="max-w-screen 2xl:max-w-7xl mr-2 ">

          <div className="flex items-center justify-between">
            <h4 className=" text-gray-600 font-bold underline ml-1">
              Padres</h4>
          </div>

          </div>
      

      <div className="flex flex-col mt-8">
          <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-black">
            <table className="table table-zebra min-w-full">
              <thead>
                <tr className="text-gray-800 text-sm">
                  <th className="px-9 py-9 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black">
                    Nombres
                  </th>
                  <th className="px-9 py-9 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black">
                    Apellidos
                  </th>
                  <th className="px-9 py-9 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black">
                    Correo Electrónico
                  </th>
                  <th className="px-9 py-9 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black">
                    Número de Teléfono
                  </th>
                  <th className="px-9 py-9 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black">
                    Perfil
                  </th>
                  <th
                    onClick={() => requestSort("createdAt")}
                    className="px-6 py-6 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black cursor-pointer"
                  >
                    Fecha
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
          <div className="flex justify-center mt-20">
              <nav>
             {/*    <ul className="flex list-none">
                  {Array.from(
                    { length: Math.ceil(orders.length / ordersPerPage) },
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
                </ul> */}
              </nav>
            </div>
        
      </div>
      
    </section>
  );
}

export default UsersChart;
