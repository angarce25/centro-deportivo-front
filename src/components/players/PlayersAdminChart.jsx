// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function PlayersTable() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;

    axios;
    axios
      .get(`${apiUrl}/players`)
      .then((response) => {
        setPlayers(response.data);
      })
      .catch((error) => {
        setError("Error al obtener los jugadores");
        console.error("Error al obtener los jugadores:", error);
      });
  }, []);

  return (
    // <section className="mt-8">
    //   <div className="flex items-center justify-between">
    //     <h4 className="text-gray-600 font-bold">Listado de Jugadores</h4>
    //   </div>
    //   {error && <p>Ocurrió un error al obtener los jugadores.</p>}
    //   <div className="flex flex-col mt-6">
    //     <div className="-my-2 overflow-x-auto">
    //       <div className="overflow-x-auto">
    //         <table className="min-w-full">
    //           <thead>
    //             <tr>
    //               <th className="px-4 py-3 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
    //               <th className="px-4 py-3 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Apellidos</th>
    //               <th className="px-4 py-3 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Email</th>
    //               <th className="px-4 py-3 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Teléfono</th>
    //               <th className="px-4 py-3 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">DNI</th>
    //               <th className="px-4 py-3 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Código Postal</th>
    //               <th className="px-4 py-3 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Alergias</th>
    //               <th className="px-4 py-3 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Lesiones</th>
    //               <th className="px-4 py-3 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Talla Camiseta</th>
    //               <th className="px-4 py-3 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Talla pantalón</th>
    //               <th className="px-4 py-3 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Número calzado</th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             {players.map(player => (
    //               <tr key={player._id}>
    //                 <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200">{player.name}</td>
    //                 <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200">{player.lastname}</td>
    //                 <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200">{player.email}</td>
    //                 <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200">{player.phone}</td>
    //                 <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200">{player.dni}</td>
    //                 <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200">{player.postalcode}</td>
    //                 <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200">{player.allergies}</td>
    //                 <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200">{player.injuryOrIllness}</td>
    //               </tr>
    //             ))}
    //           </tbody>
    //         </table>
    //       </div>
    //     </div>
    //   </div>
    // </section>
<section className="mt-8">
    <div className="overflow-x-auto">
    <div className="flex items-center justify-between">
       <h4 className="text-gray-600 font-bold">Listado de Jugadores</h4>
     </div>
      {error && <p>Ocurrió un error al obtener los jugadores.</p>}

      <table className="table table-zebra">
        <thead>
          <tr>
            <th></th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Código postal</th>
            <th>DNI</th>
            <th>Alergias</th>
            <th>Lesiones</th>
            <th>Talla camiseta</th> 
            <th>Talla pantalón</th> 
            <th>Nº calzado</th>          
          </tr>
        </thead>
        <tbody> 
        {players.map(player => (
          <tr key={player._id}>      
            <th></th>
            <th>{player.name}</th>
            <td>{player.lastname}</td>
            <td>{player.email}</td>
            <td>{player.phone}</td>
            <td>{player.postalcode}</td>
            <td>{player.dni}</td>            
            <td>{player.allergies}</td>
            <td>{player.injuryOrIllness}</td>
          </tr>         
        ))}
        </tbody>
      </table>
    </div>
    </section>
  );
}

export default PlayersTable;
