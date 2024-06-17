import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';



const AuthContext = createContext();
const navigate = useNavigate

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null); // Puede ser 'user' o 'admin'
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Verificar cookies al cargar la página
    const token = Cookies.get('token');
    const role = Cookies.get('isAdmin');
    const name = Cookies.get('username');
    if (token) {
      setIsAuthenticated(true);
      setUserRole(role);
      setUserName(name);
    }
  }, []);

  const login = (token, role, name) => {
    setIsAuthenticated(true);
    setUserRole(role);
    setUserName(name);
    Cookies.set('token', token, { expires: 1 });
    Cookies.set('isAdmin', role, { expires: 1 });
    Cookies.set('username', name, { expires: 1 });
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    setUserName('');
    Cookies.remove('token');
    Cookies.remove('isAdmin');
    Cookies.remove('username');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, userName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
