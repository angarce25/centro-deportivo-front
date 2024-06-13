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
    <div>
      <Spinner />
      {!loading && (
        <section style={{ display: "flex" }}>
          <Sidebar style={{ flex: "0 0 auto" }} />
          <div style={{ marginLeft: "13%" }}>
            <OrdersUsersChart />
          </div>
        </section>
      )}
    </div>
  );
}
export default MyOrders;