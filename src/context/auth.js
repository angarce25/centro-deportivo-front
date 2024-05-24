// import axios from 'axios';

// const API = 'http://localhost:3000/api';

// export const registerRequest = user => axios.post(`${API}/register`, user);

// export const loginRequest = user => axios.post(`${API}/login`, user);

import axios from 'axios';


const API = 'http://localhost:3000/api';

export const registerRequest = async (user) => {
    try {
        const response = await axios.post(`${API}/register`, user);
        return response.data; // Devuelve los datos del usuario registrado
    } catch (error) {
        if (error.response) {
            // Error de respuesta del servidor
            throw new Error(error.response.data.message || 'Error en el registro');
        } else if (error.request) {
            // Error de solicitud
            throw new Error('No se pudo conectar con el servidor');
        } else {
            // Otros errores
            throw new Error('Error al procesar la solicitud de registro');
        }
    }
};

// export const loginRequest = async (user) => {
//     try {
//         const response = await axios.post(`${API}/login`, user);
        
//         // Verifica si la respuesta contiene un token en el encabezado de la respuesta
//         const token = response.headers['set-cookie']; // O ajusta según el nombre real del encabezado
        
//         if (token) {
//             // Almacena el token en el almacenamiento local del navegador
//             localStorage.setItem('token', token);
//         }
        
//         return response.data; // Devuelve los datos del usuario autenticado
//     } catch (error) {
//         if (error.response) {
//             // Error de respuesta del servidor
//             throw new Error(error.response.data.message || 'Error en el inicio de sesión');
//         } else if (error.request) {
//             // Error de solicitud
//             throw new Error('No se pudo conectar con el servidor');
//         } else {
//             // Otros errores
//             throw new Error('Error al procesar la solicitud de inicio de sesión');
//         }
//     }
// };
export const loginRequest = async (user) => {
    try {
      const response = await axios.post(`${API}/login`, user);
      
      // Verifica si la respuesta contiene un token en los datos de la respuesta
      const token = response.data.token; // Ajusta según la estructura de tu respuesta

      console.log('Token recibido:', token); 
      
      if (token) {
       // Almacena el token en las cookies del navegador
       document.cookie = `token=${token};`;
      console.log('Cookie establecida:', document.cookie);
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
export const createPlayersReq = (player) => axios.post(`${API}/form-players`, player)
