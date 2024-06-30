import { React, useEffect } from "react";
import { useSpinner, Spinner } from "../context/LoadingContext";
import Sidebar from '../components/sideBar/SideBar.jsx';
import UserMembersChart from "../components/membershipsChart/UserMembersChart.jsx";


const UserMemberships = () => {
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
          <Sidebar />
            <UserMembersChart />
        </section>
      )}
    </div>
  );
};

export default UserMemberships ;
