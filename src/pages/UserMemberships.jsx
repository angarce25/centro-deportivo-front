import { React, useEffect } from "react";
import { useSpinner, Spinner } from "../context/LoadingContext";
import Sidebar from '../components/sideBar/SideBar.jsx';
import UserMembersChart from "../components/membershipsChart/UserMembersChart.jsx";
import { toast } from 'react-toastify';


// const handleConfirmOrder = async () => {
//   try {
    
//     // Verificar si los campos document y summary están vacíos
//   if (!document || !summary) {
//     // Mostrar notificación de error
//     toast.error('Error al crear el pedido');
//     return;
//   }      

//     // Crear un objeto de pedido
//     const API = import.meta.env.VITE_API_URL;
//     const extraPath = "/orders/add-order";
//     const fullUrl = API + extraPath;
//     // const token = Cookies.get('token');
    
    


//     const response = await fetch(fullUrl, {
//       method: 'POST',
//       // headers: {
//       //   'Content-Type': 'application/json',
//       //   'Authorization': `Bearer ${token}`
//       // },
//       body: JSON.stringify({
//         product_ids: products.map(product => product._id),
//         summary,
//         status,
//         document
//       }),
//       credentials: 'include'
//     });

//     if (!response.ok) {
//       throw new Error('Error al crear el pedido');
//     }

//     //const data = await response.json();
    
//     toast.success('Pedido creado correctamente');
    

//   } catch (error) {
//     setError('Error al crear el pedido. Por favor, inténtalo de nuevo más tarde.');
//   }
// };

const UserMemberships = () => {
   const { loading, setLoading } = useSpinner();
   //onst date = new Date(searchParams.get("date")).toLocaleDateString();
   //const totalPrice = parseInt(searchParams.get("totalPrice"));
   //const products = JSON.parse(searchParams.get("products"));
  //  const [summary, setSummary] = useState('');
  //  const [status] = useState('pendiente');
  //  const [document, setDocument] = useState('');
 

   useEffect(() => {
     setLoading(true); // Activa el spinner
     setTimeout(() => {
       setLoading(false); // Desactiva el spinner después de cierto tiempo (simulando carga)
     }, 1000);
   }, [setLoading]);

  //  const handleConfirmOrder = async () => {
  //   try {
      
  //     // Verificar si los campos document y summary están vacíos
  //   if (!document || !summary) {
  //     // Mostrar notificación de error
  //     toast.error('Error al crear el pedido');
  //     return;
  //   }      

  //     // Crear un objeto de pedido
  //     const API = import.meta.env.VITE_API_URL;
  //     const extraPath = "/orders/add-order";
  //     const fullUrl = API + extraPath;
  //     // const token = Cookies.get('token');
      
      


  //     const response = await fetch(fullUrl, {
  //       method: 'POST',
  //       // headers: {
  //       //   'Content-Type': 'application/json',
  //       //   'Authorization': `Bearer ${token}`
  //       // },
  //       body: JSON.stringify({
  //         product_ids: products.map(product => product._id),
  //         summary,
  //         status,
  //         document
  //       }),
  //       credentials: 'include'
  //     });

  //     if (!response.ok) {
  //       throw new Error('Error al crear el pedido');
  //     }

  //     //const data = await response.json();
      
  //     toast.success('Pedido creado correctamente');
      

  //   } catch (error) {
  //     setError('Error al crear el pedido. Por favor, inténtalo de nuevo más tarde.');
  //   }
  // };

  return (
    <div>
      <Spinner /> {/* Asegúrate de incluir el Spinner aquí */}
      {!loading && (
        <section style={{ display: "flex" }}>
          <Sidebar style={{ flex: "0 0 auto" }} />
          <div style={{ marginLeft: "20px" }}>
            <UserMembersChart
     
            />
          </div>
        </section>
      )}
    </div>
  );
};

export default UserMemberships ;
