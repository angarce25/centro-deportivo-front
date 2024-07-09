
import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import AssignTeamModal from "../../components/players/ChooseTeam";

function PlayersTable() {
  const [players, setPlayers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [users, setUsers] = useState([]);
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
      });
  }, []);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const extraPath = '/user';
    const fullUrl = apiUrl + extraPath;

    axios.get(fullUrl, { withCredentials: true })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        setError("Error al obtener los usuarios");       
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
        });
    }, 2000); // Se actualizará cada 1 segundo (ajusta el valor según tus necesidades)

    return () => clearTimeout(timer);
  }, [players]); // Se ejecutará cada vez que el estado 'players' cambie

  const getUserNameById = (userId) => {
    const user = users.find(user => String(user._id) === String(userId));
    
    return user ? `${user.name} ${user.lastname}` : "Desconocido";
  };

  return (
    <section className="mt-8 flex flex-col ml-20 2xl:ml-72 xl:ml-72 lg:ml-60 md:ml-48 justify-center">
      <div className=" max-w-screen 2xl:max-w-7xl mr-1 mb-8">
        <div className="flex items-center justify-between">
          <h4 className="text-gray-600 font-bold mb-8 underline ml-1 2xl:text-2xl 2xl:mb-10">
            Listado de Jugadores
          </h4>
          <select onChange={handleTeamChange} value={selectedTeam} className="flex select select-bordered -mt-8 2xl:-mt-8 2xl:-mr-96">
            <option value="">Todos los equipos</option>
            {teams.map((team) => (
              <option key={team._id} value={team._id}>
                {team.name}
              </option>
            ))}
          </select>
        </div>
        {error && <p>{error}</p>}
        <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-black">
        <table className="table table-zebra min-w-full">
          <thead>
            <tr className="text-gray-800 text-sm">
              <th className="p-0 py-4 2xl:px-14 2xl:py-10  md:p-4 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black ">Nombre</th>
              <th className="p-0 py-4 2xl:px-14 2xl:py-10  md:p-4 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black">Representante</th>
              <th className="p-2 py-4 2xl:px-14 2xl:py-10  md:p-4 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black">Equipo</th>
              <th className="p-0 py-4 2xl:px-14 2xl:py-10  md:p-4 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black">Email</th>
              <th className="p-0 py-4 2xl:px-14 2xl:py-10  md:p-4 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black">Teléfono</th>
              <th className="p-0 py-4 2xl:px-14 2xl:py-10  md:p-4 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black">Código postal</th>
              <th className="p-0 py-4 2xl:px-14 2xl:py-10  md:p-4 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black">DNI</th>
              <th className="p-0 py-4 2xl:px-14 2xl:py-10  md:p-4 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black">Alergias</th>
              <th className="p-0 py-4 2xl:px-14 2xl:py-10  md:p-4 bg-white text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-black">Lesiones</th>
            </tr>
          </thead>
          <tbody>
            {filteredPlayers.map((player) => (
              <tr key={player._id}>
                <td className="font-medium py-4">{player.name} {player.lastname}</td>                
                <td className="p-4">{getUserNameById(player.parent_id)}</td>
                <td>
                {player.team ? player.team.name : 'Sin asignar'}
                  <button
                    onClick={() => handleOpenModal(player)}
                    className="ml-2  text-blue-500 hover:text-blue-700"
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                </td>
                <td className="text-center p-2">{player.email}</td>
                <td className="text-center p-2">{player.phone}</td>
                <td className="text-center ">{player.post_code}</td>
                <td>{player.dni}</td>
                <td className="text-center p-1">{player.allergies}</td>
                <td className="text-center p-1">{player.injury_illness}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
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
