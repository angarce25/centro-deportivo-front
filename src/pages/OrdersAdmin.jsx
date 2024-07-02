import Sidebar from "../components/sideBar/SideBar";
import { Spinner, useSpinner } from '../context/LoadingContext';
import { useEffect } from 'react';
import OrdersChart from "../components/orders/OrdersChart";

function OrdersAdmin () {
  const { loading, setLoading } = useSpinner();
 

  useEffect(() => {
    setLoading(true); // Activa el spinner
    setTimeout(() => {
      setLoading(false); // Desactiva el spinner después de cierto tiempo (simulando carga)
    }, 1000);
  }, [setLoading]);


  return (
    <div>
      <Spinner /> {/* Asegúrate de incluir el Spinner aquí */}
      {!loading && (
        <section className="flex">
          <Sidebar  />
          
            <OrdersChart />
          
        </section>
      )}
    </div>
  );
};
export default OrdersAdmin;