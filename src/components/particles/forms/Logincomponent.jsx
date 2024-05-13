<<<<<<< HEAD
<<<<<<< HEAD
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

  const switchToRegister = () => {
    navigate("/register");
  }

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md" style={{ backgroundColor: "#F2F2F2" }}>
        <h2 className="text-3xl font-semibold text-center mb-6">Iniciar sesión</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col items-center">
            <label htmlFor="email" className="block mb-1 text-center font-bold"></label>
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
            <label htmlFor="password" className="block mb-1 text-center font-bold"></label>
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
  <button className="button-login bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" style={{backgroundColor: "#142740"}}>Iniciar sesión</button>
</div>
        </form>
        <button className="link-btn mt-4 text-center font-bold text-yellow-400 hover:text-yellow-500" onClick={switchToRegister} style={{color: "#142740", display: "block", margin: "0 auto"}}><small>¿No tienes cuenta? Regístrate aquí</small></button>
      </div>
    </div>
  );
}

export default Logincomponent;

=======
=======
>>>>>>> ed6a75f40b97adfe404d2c4f1f6312adfc502678
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
<<<<<<< HEAD
              autoComplete="off"
=======
>>>>>>> ed6a75f40b97adfe404d2c4f1f6312adfc502678
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
<<<<<<< HEAD
              autoComplete="off"
              id="password" 
              name="password" 
              minLength="6" 
              required
              className="input-style w-full max-w-md mb-3"  
              style={{ borderRadius: "5px" }} 
            />
          </div >
          <button  className="button-login bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" style={{backgroundColor: "#142740", display: "block", margin: "0 auto"}}>Iniciar sesión</button>
        </form>
        <button className="link-btn block mt-4 text-center font-bold text-yellow-700 hover:text-yellow-500" onClick={() => props.onFormSwitch('Registercomponent')} >¿No tienes cuenta? <span className="text-yellow-700">Regístrate aquí</span></button>
=======
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
>>>>>>> ed6a75f40b97adfe404d2c4f1f6312adfc502678
      </div>
    </div>
  );
}

export default Logincomponent;
<<<<<<< HEAD
>>>>>>> 8b210d732cb5c90998b75b6022b22b3f826ae820
=======



>>>>>>> ed6a75f40b97adfe404d2c4f1f6312adfc502678
