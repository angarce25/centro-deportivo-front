import { useState, useEffect } from "react";
import axios from "axios";

function UsersChart() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL; 
    const extraPath = '/user'; 
    const fullUrl = apiUrl + extraPath; 

    axios
      .get(fullUrl, { withCredentials: true }) // Asegura que las cookies se envíen con la solicitud
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos de usuarios:", error);
      });
  }, []);

  return (
    <div className="mt-8">
      <h2 className="underline font-bold">Padres____  __  _</h2>
      <div className="flex flex-col mt-6">
        <div className="max-w-screen-xl mx-auto overflow-x-auto  max-h-[80vh] mb-1 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Nombre
                  </th>
                  <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Estado
                  </th>
                  <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Hijos
                  </th>
                  <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    DNI
                  </th>
                  <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Correo Electrónico
                  </th>
                  <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Número de Teléfono
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-100">
                {users.map((user) => (
                  <tr key={user._id}>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-50">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-50">
                      {user.status ? "Activo" : "Inactivo"}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-50">
                      {Array.isArray(user.children)
                        ? user.children.join(", ")
                        : user.children}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-50">
                      {user.dni}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-50">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-50">
                      {user.mobile}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersChart;
