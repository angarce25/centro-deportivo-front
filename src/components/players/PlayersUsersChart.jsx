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
    <section className="flex flex-wrap  ml-20 md:ml-40 lg:ml-72 xl:ml-72 2xl:ml-72 mt-3">
      <div className=" max-w-screen 2xl:max-w-7xl mb-6">
          <h4 className="flex flex-col  justify-between text-gray-600 font-bold mt-8 ml-1 
          2xl:text-2xl 
          2xl:mb-10
          2xl:flex-row
          xl:flex-row  ">Mis Jugadores
        
        <Link to="/dashboard/form-player">
          <button className=" 2xl:-mt-8 2xl:text-lg mt-5 text-black font-bold p-2 px-4 rounded bg-yellow-d hover:bg-yellow-l">
            Añadir jugador
          </button>
        </Link>
        </h4>
      
      <div className="flex flex-col mt-6 ">
        
          <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-black">
            <table className="table table-zebra min-w-full">
              <thead>
                <tr className="text-gray-800 text-sm">
                  <th className="p-1 2xl:p-10 lg:p-6 md:p-4 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black">
                    Nombre
                  </th>
                  <th className="p-1 2xl:p-10 lg:p-6 md:p-4 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black">
                    Apellido
                  </th>
                  <th className="p-1 2xl:p-10 lg:p-6 md:p-4 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black">
                    Edad
                  </th>
                  <th className="p-1 2xl:p-10 lg:p-6 md:p-4 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black">
                    Equipo
                  </th>
                  <th className="p-1 2xl:p-10 lg:p-6 md:p-4 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black">
                    Talla Camisa
                  </th>
                  <th className="p-1 2xl:p-10 lg:p-6 md:p-4 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black">
                    Talla Pantalón
                  </th>
                  <th className="p-1 2xl:p-10 lg:p-6 md:p-4 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black">
                    Talla Zapato
                  </th>
                  <th className="p-1 2xl:p-10 lg:p-6 md:p-4 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black">
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
                      <td className={`px-4 py-4 whitespace-no-wrap border-b border-black text-center ${player.team ? 'text-green-600' : 'text-red-600'}`}>
                        {player.team ? "Activo" : "Inactivo"}
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