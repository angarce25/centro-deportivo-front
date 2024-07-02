import Sidebar from "../components/sideBar/SideBar";
import { Spinner, useSpinner } from '../context/LoadingContext';
import { useEffect } from 'react';
import OrdersUsersChart from "../components/orders/OrdersUsersChart.jsx";

function MyOrders () {
  const { loading, setLoading } = useSpinner();
 

  useEffect(() => {
    setLoading(true); // Activa el spinner
    setTimeout(() => {
      setLoading(false); // Desactiva el spinner después de cierto tiempo (simulando carga)
    }, 1000);
  }, [setLoading]);


  return (
    <div className="flex ">
      <Spinner />
      {!loading && (
        <section >
          <Sidebar />
            <OrdersUsersChart />
        </section>
      )}
    </div>
  );
}
export default MyOrders;