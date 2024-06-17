import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie';




export const PrivateRoute = ({ redirectPath = "/login" }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const token = Cookies.get('token');

  useEffect(() => {
    if (token) {
      // Decodifica el token para obtener la información
      const decodedToken = jwtDecode(token);
     

      // Accede al valor de isAdmin desde el token decodificado
      setIsAdmin(decodedToken.isAdmin === 'admin');
    }
  }, [token]);

  // Redirecciona si no hay token o si isAdmin no es true
  if (isAdmin === 'user' ) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};


export const AdminPrivateRoute = ({ redirectPath = "/login" }) => {
  const decodedRole = jwtDecode(token.isAdmin);
 

  console.log('TOKEN EN ADMIN PRIVATE ROUTE:', decodedRole)
  
//   console.log('GET TOKEN ADMIN EN PRIVATE ROUTE: ', token)
// console.log('ROL DE ADMIN EN PRIVATE ROUTE: ', isAdmin)
if (decodedRole === 'admin') {
  return <Navigate to={redirectPath} replace />;
}


return <Outlet />;


};