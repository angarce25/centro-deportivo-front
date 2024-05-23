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
    <section className="mt-8">
      <div className="overflow-x-auto">
        <div className="flex items-center justify-between">
          <h4 className="text-gray-600 font-bold">Listado de Jugadores</h4>
        </div>
        {error && <p>Ocurrió un error al obtener los jugadores.</p>}

        <table className="table table-zebra">
          <thead>
            <tr className="text-gray-800 text-sm">
              <th></th>
              <th>Nombre</th>
              <th>Apellidos</th>
              {/* <th>Email</th>
              <th>Teléfono</th> */}
              <th>Código postal</th>
              {/* <th>DNI</th> */}
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
                <th>{player.name}</th>
                <td>{player.lastname}</td>
                {/* <td>{player.email}</td>
                <td>{player.phone}</td> */}
                <td>{player.postalcode}</td>
                {/* <td>{player.dni}</td> */}
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
