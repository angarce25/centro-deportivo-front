import PlayersUsersChart from '../components/players/PlayersUsersChart.jsx';
import Sidebar from '../components/sideBar/SideBar.jsx';
import { useSpinner, Spinner } from "../context/LoadingContext";
import { useEffect } from "react";


const PlayersUser = () => {
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
            <PlayersUsersChart />
          </div>
        </section>
      )}
    </div>
  );
};

export default PlayersUser ;
