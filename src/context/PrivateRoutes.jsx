import React from "react";
import { Navigate, Outlet } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie';

const getTokenFromCookies = () => {
  return Cookies.get('token');
};
// const decodeToken = (token) => {
//   try {
//     return jwtDecode(token);
//   } catch (error) {
//     console.error("Token decoding failed:", error);
//     return null;
//   }
// };

export const PrivateRoute = ({ redirectPath = "/login" }) => {
  const token = getTokenFromCookies();
  const isAdmin = Cookies.get('isAdmin');

//console.log('GET TOKEN USER EN PRIVATE ROUTE: ', token)
  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }
  if (isAdmin !== 'user' ) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export const AdminPrivateRoute = ({ redirectPath = "/login" }) => {
  const token = getTokenFromCookies('token');
  const isAdmin = Cookies.get('isAdmin');

  console.log('GET TOKEN ADMIN EN PRIVATE ROUTE: ', token)
console.log('ROL DE ADMIN EN PRIVATE ROUTE: ', isAdmin)
  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }
  if (isAdmin !== 'admin' ) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};