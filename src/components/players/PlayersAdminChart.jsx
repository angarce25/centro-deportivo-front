
import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import AssignTeamModal from "../../components/players/ChooseTeam";

function PlayersTable() {
  const [players, setPlayers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState("");
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

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const extraPath = '/player/teams';
    const fullUrl = apiUrl + extraPath;

    axios.get(fullUrl, { withCredentials: true })
      .then((response) => {
        setTeams(response.data);
      })
      .catch((error) => {
        setError("Error al obtener los equipos");
        console.error("Error al obtener los equipos:", error);
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
        player._id === playerId ? { ...player, team: { _id: teamId, name: response.data.teamName }, status: true } : player
      );
      setPlayers(updatedPlayers);
      setIsModalOpen(false); // Close the modal
    } catch (error) {
      console.error("Error al asignar el equipo:", error);
    }
  };

  const handleTeamChange = (event) => {
    setSelectedTeam(event.target.value);
  };

  const filteredPlayers = selectedTeam ? players.filter(player => player.team && player.team._id === selectedTeam) : players;

  useEffect(() => {
    const timer = setTimeout(() => {
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
    }, 500); // Se actualizará cada 0.5 segundos (ajusta el valor según tus necesidades)

    return () => clearTimeout(timer);
  }, [players]); // Se ejecutará cada vez que el estado 'players' cambie

  return (
    <section className="mt-8">
      <div className="overflow-x-auto max-w-6xl mx-auto overflow-y-auto max-h-[80vh] mb-8">
        <div className="flex shadow items-center justify-between">
          <h4 className="text-gray-600 font-bold mb-10 underline">
            Listado de Jugadores
          </h4>
          <select onChange={handleTeamChange} value={selectedTeam} className="select select-bordered">
            <option value="">Todos los equipos</option>
            {teams.map((team) => (
              <option key={team._id} value={team._id}>
                {team.name}
              </option>
            ))}
          </select>
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
            {filteredPlayers.map((player) => (
              <tr key={player._id}>
                <td className="font-medium">{player.name} {player.lastname}</td>
                {/* Cambiar por el nombre del representante */}
                <td>{player.parent_id}</td>
                <td>
                  {player.team ? player.team.name : 'Pendiente'}
                  <button
                    onClick={() => handleOpenModal(player)}
                    className="ml-2 text-blue-500 hover:text-blue-700"
                  >
                    <FontAwesomeIcon icon={faEdit} />
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
