import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from 'react-google-recaptcha';

export const Registercomponent = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);
  const navigate = useNavigate();

  const onChange = (value) => {
    // Si el valor del reCAPTCHA es válido, establecer el estado isRecaptchaVerified en true
    setIsRecaptchaVerified(!!value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar si el reCAPTCHA se ha verificado
    if (!isRecaptchaVerified) {
      alert("Por favor, verifica que no eres un robot.");
      return;
    }

    // Resto del código para el envío del formulario
    console.log(email);
    setTimeout(() => {
      alert("Registrado con éxito");
      // Redirige a la página de inicio después de la alerta
      navigate("/");
    }, 0);
  }

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md" style={{ backgroundColor: "#F2F2F2" }}>
        <h2 className="text-3xl font-semibold text-center mb-6">Regístrate</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col items-center">
            <label htmlFor="name" className="block mb-1 font-bold">Nombre</label>
            <input 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              type="text" 
              placeholder="Nombre" 
              id="name" 
              name="name" 
              minLength="8" 
              maxLength="20" 
              required 
              className="input-style w-full max-w-md" 
              style={{ borderRadius: "5px" }} 
            />
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="email" className="block mb-1 font-bold">Email</label>
            <input 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              type="email" 
              placeholder="tuemail@aaaaa.com" 
              id="email" 
              name="email" 
              required 
              className="input-style w-full max-w-md" 
              style={{ borderRadius: "5px" }} 
            />
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="password" className="block mb-1 font-bold">Contraseña</label>
            <input 
              value={pass} 
              onChange={(e) => setPass(e.target.value)} 
              type="password" 
              placeholder="********" 
              id="password" 
              name="password" 
              minLength="8" 
              required 
              className="input-style w-full max-w-md" 
              style={{ borderRadius: "5px" }} 
            />
          </div>
          <div className="recaptcha flex flex-col items-center"> {/* Se centra el reCAPTCHA */}
            <ReCAPTCHA
              sitekey="6Lc22VkpAAAAAGk5Cfhs87A96VBhP3qnK-2OTKUL"
              onChange={onChange}
            />
          </div>
          <div className="flex justify-center"> {/* Se centra el botón */}
            <button className="button-register bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Aceptar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registercomponent;

