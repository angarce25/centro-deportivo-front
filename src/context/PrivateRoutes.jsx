import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const getTokenFromCookies = () => {
  const match = document.cookie.match(new RegExp("(^| )token=([^;]+)"));
  if (match) {
    return match[2];
  }
  return null;
};

const decodeToken = (token) => {
  try {
    return jwtDecode(token);
  } catch (error) {
    console.error("Token decoding failed:", error);
    return null;
  }
};

export const PrivateRoute = ({ redirectPath = "/login" }) => {
  const token = getTokenFromCookies();

  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export const AdminPrivateRoute = ({ redirectPath = "/login" }) => {
  const token = getTokenFromCookies();

  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }

  const decodedToken = decodeToken(token);

  if (!decodedToken || decodedToken.role !== "admin") {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};
