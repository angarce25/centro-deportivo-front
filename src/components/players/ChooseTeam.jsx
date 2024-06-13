import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AssignTeamModal = ({ isOpen, onClose, player, onSave }) => {
  const [teamId, setTeamId] = useState('');
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const apiUrl = import.meta.env.VITE_API_URL;
      const extraPath = '/player/teams';
      const fullUrl = apiUrl + extraPath;
      try {
        const response = await axios.get(fullUrl, { withCredentials: true });
        setTeams(response.data);
      } catch (error) {
        console.error("Error al obtener los equipos:", error);
      }
    };

    fetchTeams();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    await onSave(player._id, teamId);
  };

  useEffect(() => {
    if (player && player.team) {
      setTeamId(player.team._id);
    } else {
      setTeamId('');
    }
  }, [player]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white rounded-md shadow-md overflow-hidden max-w-sm w-full">
        <form onSubmit={handleSave}>
          <div className="flex justify-between items-center px-5 py-3 text-gray-700 border-b border-black">
            <h3 className="text-sm">Asignar Equipo</h3>
            <button type="button" onClick={onClose}>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          
          <div className="px-5 py-6 bg-gray-200 text-gray-700 border-b border-black">
            <label className="text-xs">Equipo</label>
            <div className="mt-2 relative rounded-md shadow-sm">
              <select
                className="form-select w-full px-3 py-2 appearance-none rounded-md focus:border-indigo-600"
                value={teamId}
                onChange={(e) => setTeamId(e.target.value)}
                aria-label="Team"
              >
                <option value="">Selecciona un equipo</option>
                {teams.map((team) => (
                  <option key={team._id} value={team._id}>
                    {team.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-between items-center px-5 py-3">
            <button 
              type="button" 
              className="px-3 py-1 text-gray-700 text-sm rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button 
              type="submit" 
              className="px-4 py-2 bg-gray-800 text-gray-200 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssignTeamModal;
