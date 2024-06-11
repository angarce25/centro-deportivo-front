import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function PlayersUsersChart() {
  const [myPlayers, setMyPlayers] = useState([]);
  // const [myPayments, setMyPayments] = useState([]);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL; // Obtiene la URL base de la API desde las variables de entorno
    const extraPath = "/myplayers"; // Añade la parte adicional de la URL
    const fullUrl = apiUrl + extraPath; // Combina la URL base con la parte adicional
    
    axios
      .get(fullUrl, { withCredentials: true })
      .then((response) => {
        setMyPlayers(response.data);
        // console.log("Players data:", response.data); // Verifica la estructura de myPlayers
      })
      .catch((error) => {
        console.error("Error al obtener tus jugadores:", error);
      });
      
    }, []);

  
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
                    Equipo
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
                        {player.team ? player.team.name : "Pendiente"}
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

export default PlayersUsersChart;
