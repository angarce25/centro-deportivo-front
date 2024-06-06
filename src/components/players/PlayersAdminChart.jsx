import { useState, useEffect } from "react";
import axios from "axios";
// import fetchPlayers from './PlayersFetch.jsx';

function PlayersTable() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const extraPath = '/players';
    const fullUrl = apiUrl + extraPath

     axios.get(fullUrl, {withCredentials: true})
      .then((response) => {
        setPlayers(response.data);
      })
      .catch((error) => {
        setError("Error al obtener los jugadores");
        console.error("Error al obtener los jugadores:", error);
      });
  }, []);

   return (
     <section className="mt-8">
       <div className="overflow-x-auto max-w-6xl mx-auto overflow-y-auto max-h-[80vh] mb-8">
         <div className="flex items-center justify-between">
           <h4 className="text-gray-600 font-bold mb-10">
             Listado de Jugadores
           </h4>
         </div>
         {error && <p>{error}</p>}

         <table className="table table-zebra">
           <thead>
             <tr className="text-gray-800 text-sm">
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
             {players.map((player) => (
               <tr key={player._id}>
                 <th></th>
                 <th className="font-medium">{player.name}</th>
                 <td>{player.lastname}</td>
                 <td>{player.email}</td>
                 <td>{player.phone}</td>
                 <td>{player.post_code}</td>
                 <td>{player.dni}</td>
                 <td>{player.allergies}</td>
                 <td>{player.injury_illness}</td>
                 <td>{player.shirt_size}</td>
                 <td>{player.pants_size}</td>
                 <td>{player.shoe_size}</td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
     </section>
   );
}

export default PlayersTable;

