import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
// import { useAuth } from './AuthContext'; // Importa tu hook personalizado

export const PrivateRoute = ({ redirectPath = '/register' }) => {
  const token = localStorage.getItem('accessToken');

  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};
export const AdminPrivateRoute = ({ redirectPath = '/register' }) => {
  const token = localStorage.getItem('adminToken');

  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};


