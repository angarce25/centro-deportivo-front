// import axios from 'axios';
// import Cookies from 'js-cookie';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';

// const API = import.meta.env.VITE_API_URL;

// // eslint-disable-next-line react/prop-types
// const Logincomponent = ({ onFormSwitch }) => {
//   const [email, setEmail] = useState('');
//   const [pass, setPass] = useState('');
//   const navigate = useNavigate();

//   const handleCookie = (token, isAdmin) => {
//     // Almacena el token y el rol en las cookies
//     Cookies.set('token', token, { expires: 1 }); 
//     Cookies.set('isAdmin', isAdmin, { expires: 1 });
//     // console.log('Token para la cookie:', token);
//     // console.log('Cookie establecida:', Cookies.get('token'));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       const response = await axios.post(`${API}/login`, { email, password: pass });
//   // console.log('RESPONSE.DATA EN LOGINCOMPONENT: ', response.data)
//   const { token, isAdmin, username: name } = response.data; 
  
//   // console.log('Token recibido:', token);
//   // console.log('Role recibido:', isAdmin);
//   // console.log('Nombre recibido:', name);

//   if (token) {
//     handleCookie(token, isAdmin, name);

//     // Mostrar notificación de bienvenida
//     toast.success(`¡Bienvenido, ${name}!`, {
//       toastStyle: {
//         marginTop: "12rem",
//       },
//     });

//     setTimeout(() => {
//       if (isAdmin === 'admin') {
//         navigate('/dashboard/users');
//       } else if (isAdmin === 'user'){
//         navigate('/dashboard/my-players');
//       }
//     }, 2000);
//   }
// } catch (error) {
//   if (error.response) {
//     console.error("Error al iniciar sesión:", error.response.data.message || 'Error en el inicio de sesión');

//     if (error.response.status === 429) {
//       toast.error("Demasiados intentos de inicio de sesión. Por favor, inténtelo de nuevo más tarde.");
//     } else {
//       toast.error("Error en inicio de sesión");
//     }
//   } else if (error.request) {
//     console.error("Error al iniciar sesión:", 'No se pudo conectar con el servidor');
//     toast.error("Error en inicio de sesión");
//   } else {
//     console.error("Error al iniciar sesión:", 'Error al procesar la solicitud de inicio de sesión');
//     toast.error("Error en inicio de sesión");
//   }
// }
// };
  
//   return (
//     <div    
//       style={{
//       maxWidth: "100%",
//       height: "auto",
//       filter: "drop-shadow(10px 10px 12px rgba(90, 90, 0, 0.8))",
//     }}
//     className=" bg-gray-200 min-h-screen flex items-center justify-center">
//       <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md mb-12 " style={{ backgroundColor: "#F2F2F2" }}>
//         <h2 className="text-3xl font-semibold text-center mb-6">Iniciar sesión</h2>
//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <div className="flex flex-col items-center">
//             <label htmlFor="email" className="block mb-1 text-center font-bold">Correo electrónico</label>
//             <input 
//               value={email} 
//               onChange={(e) => setEmail(e.target.value)} 
//               type="email" 
//               placeholder="Correo electrónico"  
//               id="email" 
//               autoComplete="off"
//               name="email" 
//               required 
//               className="input w-full max-w-xs rounded-xl"  
//               style={{ borderRadius: "5px" }} 
//             />
//           </div>
//           <div className="flex flex-col items-center">
//             <label htmlFor="password" className="block mb-1 text-center font-bold">Contraseña</label>
//             <input 
//               value={pass} 
//               onChange={(e) => setPass(e.target.value)} 
//               type="password" 
//               placeholder="******" 
//               autoComplete="off"
//               id="password" 
//               name="password" 
//               minLength="6" 
//               required
//               className="input w-full max-w-xs rounded-xl"  
//               style={{ borderRadius: "5px" }} 
//             />
//           </div>
//           <div className="flex justify-center">
//             <button 
//               className="button-login  bg-yellow-l hover:bg-yellow-d text-black font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
//               type="submit" 
              
//             >
//               Iniciar sesión
//             </button>
//           </div>
//         </form>
//         <button 
//           className="link-btn mt-4 text-center font-bold text-yellow-400 hover:text-yellow-500" 
//           onClick={() => onFormSwitch("Registercomponent")} 
//           style={{ color: "#142740", display: "block", margin: "0 auto" }}
//         >
//           <small>¿No tienes cuenta? Regístrate aquí</small>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Logincomponent;




import axios from 'axios';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Asegúrate de importar useNavigate
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API = import.meta.env.VITE_API_URL;

const LoginComponent = ({ onFormSwitch }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [needsVerificationCode, setNeedsVerificationCode] = useState(false);

  const handleCookie = (token, isAdmin, name) => {
    Cookies.set('token', token, { expires: 1 });
    Cookies.set('isAdmin', isAdmin ? 'admin' : 'user', { expires: 1 });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (needsVerificationCode) {
        const response = await axios.post(`${API}/verify-code`, { email, code: verificationCode });
        const { token, isAdmin, username: name, message } = response.data;

        if (token) {
          handleCookie(token, isAdmin, name);
          toast.success(message);

          setTimeout(() => {
            if (isAdmin === 'admin') {
              navigate('/dashboard/users');
            } else if (isAdmin === 'user') {
              navigate('/dashboard/my-players');
            }
          }, 2000);
        }
      } else {
        const response = await axios.post(`${API}/login`, { email, password });
        const { requires2f, token, isAdmin, username: name, message } = response.data;

        if (requires2f) {
          setNeedsVerificationCode(true);
          toast.info("Por favor, ingresa tu código de verificación.");
        } else if (token) {
          handleCookie(token, isAdmin, name);
          toast.success(message);

          setTimeout(() => {
            if (isAdmin === 'admin') {
              navigate('/dashboard/users');
            } else if (isAdmin === 'user') {
              navigate('/dashboard/my-players');
            }
          }, 2000);
        }
      }
    } catch (error) {
      toast.error("Error en el inicio de sesión. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md mb-12" style={{ backgroundColor: "#F2F2F2" }}>
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
              className="input w-full max-w-xs rounded-xl"  
              style={{ borderRadius: "5px" }} 
            />
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="password" className="block mb-1 text-center font-bold">Contraseña</label>
            <input 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              type="password" 
              placeholder="******" 
              autoComplete="off"
              id="password" 
              name="password" 
              minLength="6" 
              required
              className="input w-full max-w-xs rounded-xl"  
              style={{ borderRadius: "5px" }} 
            />
          </div>
          {needsVerificationCode && ( // Renderizado condicional del código de verificación
            <div className="flex flex-col items-center">
              <label htmlFor="verificationCode" className="block mb-1 text-center font-bold">Código de verificación</label>
              <input 
                value={verificationCode} 
                onChange={(e) => setVerificationCode(e.target.value)} 
                type="text" 
                placeholder="Ingrese el código recibido" 
                id="verificationCode" 
                autoComplete="off"
                name="verificationCode" 
                required
                className="input w-full max-w-xs rounded-xl"  
                style={{ borderRadius: "5px" }} 
              />
            </div>
          )}
          <div className="flex justify-center">
            <button 
              className="button-login bg-yellow-l hover:bg-yellow-d text-black font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
              type="submit" 
            >
              {needsVerificationCode ? "Verificar código" : "Iniciar sesión"}
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
};

export default LoginComponent;


