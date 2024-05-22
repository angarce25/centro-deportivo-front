import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginRequest } from '../../api/auth';
import Cookies from 'js-cookie';


const Logincomponent = ({ onFormSwitch }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginRequest({ email, password: pass });

      if (response.status === 200) {
        alert("Inicio de sesión exitoso");
        // navigate("/dashboard/users");
      } else {
        alert(response.data.message || "Error en el inicio de sesión");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Error en inicio de sesión");
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md" style={{ backgroundColor: "#F2F2F2" }}>
        <h2 className="text-3xl font-semibold text-center mb-6">Iniciar sesión</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col items-center">
            <label htmlFor="email" className="block mb-1 text-center font-bold">Correo electrónico</label>
            <input 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              type="email" 
              placeholder="Correo electrónico"  
              id="email" 
              autoComplete="off"
              name="email" 
              required 
              className="input-style w-full max-w-md"  
              style={{ borderRadius: "5px" }} 
            />
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="password" className="block mb-1 text-center font-bold">Contraseña</label>
            <input 
              value={pass} 
              onChange={(e) => setPass(e.target.value)} 
              type="password" 
              placeholder="Contraseña" 
              autoComplete="off"
              id="password" 
              name="password" 
              minLength="6" 
              required
              className="input-style w-full max-w-md mb-3"  
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
