import axios from 'axios';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API = 'http://localhost:3000/api';

const Logincomponent = ({ onFormSwitch }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleCookie = (token) => {
    // Almacena la cookie en el navegador
    Cookies.set('token', token, { expires: 1 }); 
    console.log('Token para la cookie:', token);
    console.log('Cookie establecida:', Cookies.get('token'));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API}/login`, { email, password: pass });

      // Verifica si la respuesta contiene un token en los datos de la respuesta
      const token = response.data.token; 
      const rol_id = response.data.rol_id; 

      console.log('Token recibido:', token);
      console.log('Role recibido:', rol_id); 
      console.log('Respuesta del servidor:', response.data);
      
      if (token) {
        handleCookie(token); // Llama a la función handleCookie para almacenar el token en la cookie
      }

      // Redirige según el rol del usuario
      if (rol_id === 'user') {
        navigate('/dashboard/my-players');
      } else {
        navigate('/dashboard/users');
      }
    } catch (error) {
      if (error.response) {
        // Error de respuesta del servidor
        console.error("Error al iniciar sesión:", error.response.data.message || 'Error en el inicio de sesión');
        toast.error("Error en inicio de sesión");
      } else if (error.request) {
        // Error de solicitud
        console.error("Error al iniciar sesión:", 'No se pudo conectar con el servidor');
        toast.error("Error en inicio de sesión");
      } else {
        // Otros errores
        console.error("Error al iniciar sesión:", 'Error al procesar la solicitud de inicio de sesión');
        toast.error("Error en inicio de sesión");
      }
    }
  };



  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md mb-12" style={{ backgroundColor: "#F2F2F2" }}>
        <h2 className="text-3xl font-semibold text-center mb-6">Iniciar sesión</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col items-center">
            <label htmlFor="email" className="block mb-1 text-center font-bold">Correo electrónico</label>
            <input 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              type="email" 
              placeholder="maria@gmail.com"  
              id="email" 
              autoComplete="off"
              name="email" 
              required 
              className="input w-full max-w-xs"  
              style={{ borderRadius: "5px" }} 
            />
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="password" className="block mb-1 text-center font-bold">Contraseña</label>
            <input 
              value={pass} 
              onChange={(e) => setPass(e.target.value)} 
              type="password" 
              placeholder="******" 
              autoComplete="off"
              id="password" 
              name="password" 
              minLength="6" 
              required
              className="input w-full max-w-xs"  
              style={{ borderRadius: "5px" }} 
            />
          </div>
          <div className="flex justify-center">
            <button 
              className="button-login bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
              type="submit" 
              style={{ backgroundColor: "#142740" }}
            >
              Iniciar sesión
            </button>
          </div>
        </form>
        <button 
          className="link-btn mt-4 text-center font-bold text-yellow-400 hover:text-yellow-500" 
          onClick={() => onFormSwitch("Registercomponent")} 
          style={{ color: "#142740", display: "block", margin: "0 auto" }}
        >
          <small>¿No tienes cuenta? Regístrate aquí</small>
        </button>
      </div>
    </div>
  );
}

export default Logincomponent;