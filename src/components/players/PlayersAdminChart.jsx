// import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

function PlayersTable() {
    const [players, setPlayers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('MONGODB_URL')
          .then(response => {
            setPlayers(response.data);
          })
          .catch(error => {
            setError('Error al cargar los datos');
            console.error('Error fetching data: ', error);
          })
      }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar el componente


  
  return (
    <section className="mt-8">
      <div className="flex items-center justify-between">
        <h4 className="text-gray-600 font-bold">Listado de Jugadores</h4>
      </div>
      {error && <p>{error}</p>}
      <div className="flex flex-col mt-6">
        <div className="-my-2 overflow-x-auto">
          <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                  <th className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Categoría</th>
                  <th className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Equipo</th>
                  <th className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Primer Pago</th>
                  <th className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Segundo Pago</th>
                  <th className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Tercer Pago</th>
                </tr>
              </thead>
              <tbody>
                {players.map(player => (
                  <tr key={player._id}>
                    <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200">{player.name}</td>
                    <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200">{player.category}</td>
                    <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200">{player.team}</td>
                    <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200">{player.firstPayment}</td>
                    <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200">{player.secondPayment}</td>
                    <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200">{player.thirdPayment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>


    // <div className="mt-8">
    //   <div className="flex items-center justify-between">
    //     <h4 className="text-gray-600 font-bold">Listado de Jugadores</h4>        
    //   </div>

    //   <div className="flex flex-col mt-6">
    //     <div className="-my-2 overflow-x-auto">
    //       <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
    //         <table className="min-w-full">
    //           <thead>
    //             <tr>
    //               <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
    //                 Nombre
    //               </th>
    //               <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
    //                 Categoría
    //               </th>
    //               <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
    //                 Equipo
    //               </th>
    //               <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
    //                 Primer Pago
    //               </th>
    //               <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
    //                 Segundo Pago
    //               </th>
    //               <th className="px-6 py-6 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
    //                 Tercer Pago
    //               </th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             <tr>
    //               <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200">
    //                 Jesús Molinos3
    //               </td>
    //               <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200 ">
    //                 Alevín
    //               </td>
    //               <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200 ">
    //                 A
    //               </td>
    //               <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200 "></td>
    //               <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200 "></td>
    //               <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200 "></td>
    //             </tr>
    //             {/* Agregar más filas según sea necesario */}
    //           </tbody>
    //         </table>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    
  );
}

export default PlayersTable;
