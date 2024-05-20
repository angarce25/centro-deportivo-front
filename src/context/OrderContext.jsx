// OrdersContext.jsx
/* import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';

export const OrdersContext = createContext();

export const useOrders = () => {
  const context = useContext(OrdersContext);
  if (context === undefined) {
    throw new Error("useOrders debe estar dentro de un OrdersProvider al ser instanciado.");
  }
  return context;
};

export const OrdersProvider = ({ children }) => {
  const { user } = useAuth(); // Suponiendo que user es booleano y indica si está autenticado
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (user) { // Aquí asumimos que el usuario está autenticado si user es true
        try {
          const token = JSON.parse(localStorage.getItem('accessToken'));
          const res = await axios.get(`http://localhost:3000/api/orders`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          setOrders(res.data);
        } catch (error) {
          console.error("Error fetching orders:", error);
        }
      }
    };

    fetchOrders();
  }, [user]);

  return (
    <OrdersContext.Provider value={{ orders, setOrders }}>
      {children}
    </OrdersContext.Provider>
  );
};
 */