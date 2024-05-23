// // import { createContext, useContext, useState } from "react";
// import axios from 'axios';

// export const AuthContext = createContext();

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error("useAuth debe estar dentro de un AuthProvider al ser instanciado.");
//   }
//   return context;
// };

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const signinContext = async (user) => {
//     try {
//       const res = await axios.post("http://localhost:3000/api/user", user, {
//         headers: { "Content-Type": "application/json" }
//       });

//       if (res.status === 200) {
//         const userToken = res.data;
//         setUser(true);
//         localStorage.setItem("accessToken", JSON.stringify(userToken));
//         return res;
//       } else {
//         console.error("Error en el login de la cuenta:", res.statusText);
//         alert("Error de usuario ❌");
//       }
//     } catch (error) {
//       console.error("Error en la solicitud de login:", error);
//     }
//   };

//   const adminSigninContext = async (user) => {
//     try {
//       const res = await axios.post("http://localhost:3000/api/auth/admin/signin", user, {
//         headers: { "Content-Type": "application/json" }
//       });

//       if (res.status === 200) {
//         const userToken = res.data;
//         setUser(true);
//         localStorage.setItem("adminToken", JSON.stringify(userToken));
//         return res;
//       } else {
//         console.error("Error en el login sudo su de la cuenta:", res.statusText);
//         alert("No tienes permisos de Administrador o te has equivocado en correo y/o contraseña ❌");
//       }
//     } catch (error) {
//       console.error("Error en la solicitud de login:", error);
//     }
//   };

//   const signupContext = async (user) => {
//     try {
//       const res = await axios.post("http://localhost:3000/api/auth/signup", user, {
//         headers: { "Content-Type": "application/json" }
//       });

//       if (res.status === 200) {
//         const userToken = res.data;
//         localStorage.setItem("accessToken", JSON.stringify(userToken));
//         setUser(true);
//         return res;
//       } else {
//         console.error("Error en la creación de la cuenta:", res.statusText);
//       }
//     } catch (error) {
//       console.error("Error en la solicitud de creación de cuenta:", error);
//     }
//   };

//   const signoutContext = async () => {
//     localStorage.removeItem("accessToken");
//     localStorage.removeItem("adminToken");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ signinContext, adminSigninContext, signupContext, signoutContext }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
