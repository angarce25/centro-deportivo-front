import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function PlayersUsersChart() {
  const [myPlayers, setMyPlayers] = useState([]);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const extraPath = "/myplayers";
    const fullUrl = apiUrl + extraPath;

    axios
      .get(fullUrl, { withCredentials: true })
      .then((response) => {
        setMyPlayers(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener tus jugadores:", error);
      });
  }, []);

  return (
    <section className="flex flex-col ml-72  mt-4">
      <div className="overflow-x-auto">
        <div className=" items-center justify-between">
          <h4 className="text-gray-600 font-bold mb-10 ">Mis Jugadores</h4>
        </div>
        <Link to="/dashboard/form-player">
          <button className=" text-black font-bold py-2 px-4 rounded bg-yellow-d hover:bg-yellow-l">
            Añadir jugador
          </button>
        </Link>
      </div>

      <div className="flex flex-col mt-6">
        <div className="max-w-screen-xl mx-auto overflow-x-auto overflow-y-auto max-h-[80vh] mb-8">
          <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-black">
            <table className="table table-zebra min-w-full">
              <thead>
                <tr className="text-gray-800 text-sm">
                  <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black">
                    Nombre
                  </th>
                  <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black">
                    Apellido
                  </th>
                  <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black">
                    Edad
                  </th>
                  <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black">
                    Equipo
                  </th>
                  <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black">
                    Talla Camisa
                  </th>
                  <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black">
                    Talla Pantalón
                  </th>
                  <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black">
                    Talla Zapato
                  </th>
                  <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black">
                    Estado
                  </th>
                </tr>
              </thead>
              <tbody>
                {myPlayers.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="text-center py-4 border-black">
                      No hay jugadores disponibles.
                    </td>
                  </tr>
                ) : (
                  myPlayers.map((player) => (
                    <tr key={player._id}>
                      <td className="px-4 py-4 whitespace-no-wrap border-b border-black text-center">
                        {player.name}
                      </td>
                      <td className="px-4 py-4 whitespace-no-wrap border-b border-black text-center">
                        {player.lastname}
                      </td>
                      <td className="px-4 py-4 whitespace-no-wrap border-b border-black text-center">
                        {player.age} años
                      </td>
                      <td className="px-4 py-4 whitespace-no-wrap border-b border-black text-center">
                        {player.team ? player.team.name : "Pendiente"}
                      </td>
                      <td className="px-4 py-4 whitespace-no-wrap border-b border-black text-center">
                        {player.shirt_size}
                      </td>
                      <td className="px-4 py-4 whitespace-no-wrap border-b border-black text-center">
                        {player.pants_size}
                      </td>
                      <td className="px-4 py-4 whitespace-no-wrap border-b border-black text-center">
                        {player.shoe_size}
                      </td>
                      <td className={`px-4 py-4 whitespace-no-wrap border-b border-black text-center ${player.status ? 'text-green-600' : 'text-red-600'}`}>
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
