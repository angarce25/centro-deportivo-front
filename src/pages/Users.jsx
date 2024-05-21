// import React, { useEffect } from 'react';
// import Sidebar from '../components/sideBar/SideBar.jsx';
// import UsersChart from '../components/users/UsersChart.jsx';
// import { useSpinner, Spinner } from "../context/LoadingContext";

// const UserP = () => {
//   const { loading, setLoading } = useSpinner();

//   useEffect(() => {
//     setLoading(true); // Activa el spinner
//     setTimeout(() => {
//       setLoading(false); // Desactiva el spinner después de cierto tiempo (simulando carga)
//     }, 1000);
//   }, [setLoading]);

//   return (
//     <div>
//       <Spinner /> {/* Asegúrate de incluir el Spinner aquí */}
//       {!loading && (

//         <section style={{ display: "flex" }}>
//           <Sidebar style={{ flex: "0 0 auto" }} /> {/* Fija el Sidebar en la pantalla */}
//           <div style={{ marginLeft: "20px" }}> {/* Ajusta el espacio entre el Sidebar y los nuevos componentes */}
//             <UsersChart />
//             {/* Aquí puedes añadir más componentes, como AddCategory, NewUser, UsersTable, etc. */}
//           </div>
//         </section>

//       )}
//     </div>
//   );
// };

// export default UserP;




import Sidebar from '../components/sideBar/SideBar.jsx';
import UsersChart from '../components/users/UsersChart.jsx';

const UserP = () => {
  return (
    <section style={{ display: 'flex' }}>
      <Sidebar style={{ flex: '0 0 auto' }} /> {/* Fija el Sidebar en la pantalla */}
      <div style={{ marginLeft: '20px' }}> {/* Ajusta el espacio entre el Sidebar y los nuevos componentes */}
        <UsersChart />
        {/* Aquí puedes añadir más componentes, como AddCategory, NewUser, UsersTable, etc. */}
      </div>
    </section>
  );
};

export default UserP;