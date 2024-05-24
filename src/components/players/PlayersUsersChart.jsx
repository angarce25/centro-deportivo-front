import { Link } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';

function PlayersUserChart() {
  const [myPlayers, setMyPlayers] = useState([]);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL; // Obtiene la URL base de la API desde las variables de entorno
    const extraPath = '/myplayers'; // Añade la parte adicional de la URL
    const fullUrl = apiUrl + extraPath; // Combina la URL base con la parte adicional

    axios.get(fullUrl, { withCredentials: true })
      .then((response) => {
        setMyPlayers(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener tus jugadores:", error);
      });
  }, []);


  return (
    <section className="mt-8">
      <div className="overflow-x-auto">
      <div className="flex items-center justify-between">
          <h4 className="text-gray-600 font-bold mb-10">Listado de Jugadores</h4>
        </div>
        <Link to="/dashboard/form-player">
          <button className="text-black font-bold py-2 px-4 rounded bg-yellow-d hover:bg-yellow-l">
            Añadir jugador
          </button>
        </Link>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-my-2 overflow-x-auto">
          <div className="align-middle inline-block min-w-full 
          shadow overflow-hidden sm:rounded-lg 
          border-b border-gray-200">
            <table className="table table-zebra">
              <thead>
                <tr className="text-gray-800 text-sm">
                  <th className = "px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                  <th className = "px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Apellido</th>
                  <th className = "px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Talla Camisa</th>
                  <th className = "px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Talla Pantalón</th>
                  <th className = "px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Talla Zapato</th>
                  <th className = "px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                
                  {/* <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Primer Pago
                  </th>
                  <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Segundo Pago
                  </th>
                  <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Tercer Pago
                  </th> */}
                </tr>
              </thead>
              <tbody>
                {myPlayers.map ((player) =>(
                    <tr key={player._id}>
                      <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200">
                    {player.name}
                      </td>
                      <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    {player.lastname}
                      </td>
                  {/* <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    {player.team}
                  </td> */}
                  <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    {player.shirt_size}
                  </td>
                  <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    {player.pants_size}
                  </td>
                  <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    {player.shoe_size}
                  </td>
                  <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    {player.status ? "Activo" :"Inactivo"}
                  </td>
                  </tr>
                ))}
                
                {/* Agregar más filas según sea necesario */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlayersUserChart;
