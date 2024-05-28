import axios from 'axios';
// import Cookies from 'js-cookie';

const API = 'http://localhost:3000/api';

export const registerRequest = user => axios.post(`${API}/register`, user);
    
// export const loginRequest = async (user, navigate) => {
//     try {
//       const response = await axios.post(`${API}/login`, user);   
      
      
    
    
      
//       return response.data; // Devuelve los datos del usuario autenticado
//     } catch (error) {
//       if (error.response) {
//         // Error de respuesta del servidor
//         throw new Error(error.response.data.message || 'Error en el inicio de sesión');
//       } else if (error.request) {
//         // Error de solicitud
//         throw new Error('No se pudo conectar con el servidor');
//       } else {
//         // Otros errores
//         throw new Error('Error al procesar la solicitud de inicio de sesión');
//       }
//     }
//   };



//Peticiones CRUD  desde la sesión de usuario
export const getMyPlayersReq = () => axios.get(`${API}/my-players`)
export const createPlayersReq = (player) => axios.post(`${API}/newplayer`, player)

// export const getMyOrdersReq = ()=> axios.get(`${API}/myorders`)

