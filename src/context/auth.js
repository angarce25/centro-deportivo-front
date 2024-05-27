import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const API = 'http://localhost:3000/api';

export const registerRequest = user => axios.post(`${API}/register`, user);
    
export const loginRequest = async (user, navigate) => {
    try {
      const response = await axios.post(`${API}/login`, user);
      
      // Verifica si la respuesta contiene un token en los datos de la respuesta
      const token = response.data.token; 
      const role = response.data.role; 

      console.log('Token recibido:', token); 
      
      if (token) {
      // Almacena el token en las cookies del navegador
      Cookies.set('token', token);
      console.log('Cookie establecida:', Cookies.get('token'));
      }

      // Redirige según el rol del usuario
      if (role === 'admin') {
        navigate('/dashboard/players');
    } else {
        navigate('/dashboard/my-players');
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
export const getMyPlayersReq = () => axios.get(`${API}/my-players`)
export const createPlayersReq = (player) => axios.post(`${API}/newplayer`, player)

