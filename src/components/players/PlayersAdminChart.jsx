import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import AssignTeamModal from "./ChooseTeam.jsx";

function PlayersTable() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const extraPath = '/api/players';
    const fullUrl = apiUrl + extraPath;

    const fetchPlayers = async () => {
      try {
        const token = Cookies.get('token'); // Obtén el token de la cookie

        if (!token) {
          setError('No se encontró token de autenticación. Por favor, inicia sesión.');
          return;
        }

        const response = await axios.get(fullUrl, {
          headers: {
            'Authorization': `Bearer ${token}` // Incluye el token en los encabezados
          },
          withCredentials: true
        });

        setPlayers(response.data);
      } catch (error) {
        console.error("Error al obtener los jugadores:", error);
        setError("Error al obtener los jugadores");
      }
    };

    fetchPlayers();
  }, []);

  const handleOpenModal = (player) => {
    setSelectedPlayer(player);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedPlayer(null);
    setIsModalOpen(false);
  };

  const handleSaveTeam = async (playerId, teamId) => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const token = Cookies.get('token'); // Obtén el token de la cookie

      const response = await axios.post(`${apiUrl}/api/player/assign-team`, { playerId, teamId }, {
        headers: {
          'Authorization': `Bearer ${token}` // Incluye el token en los encabezados
        },
        withCredentials: true
      });

      const updatedPlayers = players.map(player =>
        player._id === playerId ? { ...player, team: { _id: teamId, name: response.data.teamName } } : player
      );
      setPlayers(updatedPlayers);
    } catch (error) {
      console.error("Error al asignar el equipo:", error);
    }
  };

  return (
    <section className="mt-8">
      <div className="overflow-x-auto max-w-6xl mx-auto overflow-y-auto max-h-[80vh] mb-8">
        <div className="flex shadow items-center justify-between">
          <h4 className="text-gray-600 font-bold mb-10">
            Listado de Jugadores
          </h4>
        </div>
        {error && <p>{error}</p>}

        <table className="table table-zebra">
          <thead>
            <tr className="text-gray-800 text-sm">
              <th>Nombre</th>
              <th>Representante</th>
              <th>Equipo</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Código postal</th>
              <th>DNI</th>
              <th>Alergias</th>
              <th>Lesiones</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player._id}>
                <td className="font-medium">{player.name} {player.lastname}</td>
                {/* Cambiar por el nombre del representante */}
                <td>{player.parent_id}</td>
                <td>
                  {player.team ? player.team.name : 'Pendiente'}
                  <button 
                    onClick={() => handleOpenModal(player)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <svg className="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"/>
                    </svg>
                  </button>
                </td>                
                <td>{player.email}</td>
                <td>{player.phone}</td>
                <td>{player.post_code}</td>
                <td>{player.dni}</td>
                <td>{player.allergies}</td>
                <td>{player.injury_illness}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AssignTeamModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        player={selectedPlayer}
        onSave={handleSaveTeam}
      />
    </section>
  );
}

export default PlayersTable;
