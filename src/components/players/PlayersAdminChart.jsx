import { useState, useEffect } from "react";
import axios from "axios";
import AssignTeamModal from "./ChooseTeam.jsx";

function PlayersTable() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const extraPath = '/players';
    const fullUrl = apiUrl + extraPath;

    axios.get(fullUrl, { withCredentials: true })
      .then((response) => {
        setPlayers(response.data);
      })
      .catch((error) => {
        setError("Error al obtener los jugadores");
        console.error("Error al obtener los jugadores:", error);
      });
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
      const response = await axios.post(`${apiUrl}/player/assign-team`, { playerId, teamId });

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
      <div className="overflow-x-auto">
        <div className="flex shadow items-center justify-between">
          <h4 className="text-gray-600 font-bold mb-10">Listado de Jugadores</h4>
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
                {/* Cambiar por el nombre del representante                 */}
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
