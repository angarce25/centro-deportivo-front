// src/components/players/fetchPlayers.js
async function PlayersFetch() {
    const apiUrl = import.meta.env.VITE_API_URL; // Usa la variable de entorno para la URL de la API
    const response = await fetch(`${apiUrl}/api/players`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include' // Esto asegura que las cookies se envíen con la solicitud
    });
  
    if (!response.ok) {
      throw new Error('Error fetching players');
    }
  
    const data = await response.json();
    return data;
  }
  
  export default PlayersFetch;
  