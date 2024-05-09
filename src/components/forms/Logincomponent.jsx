import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Logincomponent = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);

    // Después de la autenticación exitosa, redirige a la página de inicio
    navigate("/");
  }

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md" style={{ backgroundColor: "#F2F2F2" }}>
        <h2 className="text-3xl font-semibold text-center mb-6">Iniciar sesión</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col items-center"> {/* Se centran los elementos del formulario */}
            <label htmlFor="email" className="block mb-3 text-center font-bold">Email</label>
            <input 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              type="email" 
              placeholder="Correo electrónico"  
              id="email" 
              name="email" 
              required 
              className="input-style w-full max-w-md"  
              style={{ borderRadius: "5px" }} 
            />
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="password" className="block mb-3 text-center font-bold">Contraseña</label>
            <input 
              value={pass} 
              onChange={(e) => setPass(e.target.value)} 
              type="password" 
              placeholder="Contraseña" 
              id="password" 
              name="password" 
              minLength="8" 
              required
              className="input-style w-full max-w-md"  
              style={{ borderRadius: "5px" }} 
            />
          </div >
          <button  className="button-login  bg-yellow-400 hover:bg-yellow-500 text-white  font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Iniciar sesión</button>
        </form>
        <button className="link-btn block mt-4 text-center font-bold text-yellow-400 hover:text-yellow-500" onClick={() => props.onFormSwitch('Registercomponent')}>¿No tienes cuenta? <span className="text-yellow-700">Regístrate aquí</span></button>
      </div>
    </div>
  );
}

export default Logincomponent;



