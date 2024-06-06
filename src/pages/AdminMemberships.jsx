import { useEffect } from 'react';
import { Spinner, useSpinner } from '../context/LoadingContext';
import MembershipChart from "../components/membershipsChart/membershipsChart";
import Sidebar from "../components/sideBar/SideBar";


function AdminMemberships () {
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
      <section style={{ display: "flex" }}>
        <Sidebar style={{ flex: "0 0 auto" }} />
        <div style={{ marginLeft: "20px" }}>
          <MembershipChart/>
        </div>
      </section>
    )}
  </div>
);
};
export default AdminMemberships;
