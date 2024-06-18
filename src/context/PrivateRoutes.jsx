import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from 'js-cookie';

const getTokenFromCookies = () => {
  return Cookies.get('token');
};




export const PrivateRoute = ({ redirectPath = "/login" }) => {
  const token = getTokenFromCookies();
  const isAdmin = Cookies.get('isAdmin');


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


  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }
  if (isAdmin !== 'admin' ) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};