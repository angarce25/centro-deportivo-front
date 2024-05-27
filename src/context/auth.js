import axios from 'axios';
import Cookies from 'js-cookie';

const API = 'http://localhost:3000/api';

export const registerRequest = user => axios.post(`${API}/register`, user);

export const loginRequest = async (user) => {
    try {
      const response = await axios.post(`${API}/login`, user);
      
      // Verifica si la respuesta contiene un token en los datos de la respuesta
      const token = response.data.token; // Ajusta según la estructura de tu respuesta

      console.log('Token recibido:', token); 
      
      if (token) {
      // Almacena el token en las cookies del navegador
      Cookies.set('token', token);
      console.log('Cookie establecida:', Cookies.get('token'));
      }
      
      return response.data; // Devuelve los datos del usuario autenticado
    } catch (error) {
      if (error.response) {
        // Error de respuesta del servidor
        throw new Error(error.response.data.message || 'Error en el inicio de sesión');
      } else if (error.request) {
        // Error de solicitud
        throw new Error('No se pudo conectar con el servidor');
      } else {
        // Otros errores
        throw new Error('Error al procesar la solicitud de inicio de sesión');
      }
    }
  };



//Peticiones CRUD  desde la sesión de usuario
export const getMyPlayersReq = () => axios.get(`${API}/myplayers`)
export const createPlayersReq = (player) => axios.post(`${API}/newplayer`, player)

