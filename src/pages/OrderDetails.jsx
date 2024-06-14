import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from "js-cookie";

const OrdersDetail = async() => {
  const { orderId } = useParams(); // Assuming orderId is obtained from URL params
  const [order, setOrder] = useState();
  //const [product, setProduct] = useState (null)
  const [summary, setSummary] = useState('');
  //const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  const [test, setTest] = useState()

  // useEffect(() => {
  //   // const fetchOrderDetails = async () => {

  //     const token = Cookies.get('token');
  //     const config = {
  //       headers: {
  //         'Authorization': token,
  //       }
  //     };

  //     try {
  //      axios.get(`http://localhost:3000/api/orders/order-details/${orderId}`, config)
  //       .then(res => setOrder(res.data))
  //       .then(data  => console.log(data))
  //       // setSummary(response.data.summary); // Set initial summary from fetched data
  //     } catch (error) {
  //       console.error('Error fetching order details:', error);
  //       setError('Error fetching order details');
  //     }
  //   // };
    
  //   // fetchOrderDetails();
  // }, []);

  // useEffect(() => {

    // const fetchOrderDetails = async() =>{

      const token = Cookies.get('token');
      const config = {
        headers: {
          'Authorization': token,
        }
      };

      try {
        
    const response = await axios.get(`http://localhost:3000/api/orders/order-details/${orderId}`, config)
    const data = await response.data
    setTest("hola")
    console.log(data)
    console.log(test)
    // setOrder(data)
    // console.log(order)
    // console.log(response)
      } catch (error) {
        console.log(error)
      }

  // } 

  // fetchOrderDetails()

  // }, [])

  
  // const formData = new FormData();  
  // products.forEach(product => {
  //   console.log(product.selectedSize)
  //   formData.append('product_ids', product._id);
  //   formData.append('selectedSize', product.selectedSize);
  // });  

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     if (!document || !summary) {
  //       toast.error('Error al actualizar el pedido: Faltan datos');
  //       return;
  //     }

  //     const formData = new FormData();
  //     formData.append('summary', summary);
  //     formData.append('document', document);

  //     const token = Cookies.get('token');
  //     const config = {
  //       headers: {
  //         'Authorization': token,
  //         'Content-Type': 'multipart/form-data'
  //       }
  //     }
  //   }
  
  //     const response = await axios.put(`http://localhost:3000/api/orders/${orderId}`, formData, config);

  //     if (response.status === 200) {
  //       toast.success('Pedido actualizado con éxito');
  //       // Optionally, redirect or perform other actions after successful update
  //     }
  //   } catch (error) {
  //     console.error('Error updating order:', error);
  //     toast.error('Error al actualizar el pedido');
  //   }
  // };

  // if (!order) {
  //   return <div>Cargando detalle del pedido...</div>;
  // }

  return (
    <div>
      <h1>{data.name}</h1>
    </div>
    // <section className="m-10 w-150 bg-base-100 shadow-l flex flex-col md:flex-row justify-between">
  //     <div className="m-10 flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  //       <h4 className="card-title mb-5 col-span-full">Detalles del Pedido</h4>

  //       {/* {order.products.map((product) => ( */}
  //         <div key={order._id} className="mb-6">
  //           <div className="flex items-center mb-3">
  //             <img
  //               className="w-32 h-32 mr-4"
  //               src={order.image}
  //               alt={order.name}
  //             />
  //             <div>
  //               <h4 className="card-title mb-5">{order.name}</h4>
  //               <div className="flex-col">
  //                 <p className="text-sm font-semibold">ID producto:</p>
  //                 <p className="text-sm ">{order._id}</p>
  //               </div>
  //               <div className="flex-col">
  //                 <p className="text-sm font-semibold">Talla:</p>
  //                 <p className="text-sm ">{order.selectedSize}</p>
  //               </div>

  //               <div className="flex-col mt-3">
  //                 <p className="mr-2 text-sm font-semibold">Precio:</p>
  //                 <p className="text-sm">{order.price}€</p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       {/* ))} */}

  //       <form onSubmit={handleSubmit} encType="multipart/form-data">
  //         <div className="flex-col">
  //           <label htmlFor="summary" className="font-semibold">
  //             Breve descripción del pedido:
  //           </label>
  //           <input
  //             type="text"
  //             id="summary"
  //             name="summary"
  //             placeholder="Ejemplo: Camiseta talla S"
  //             required="required"
  //             className="input input-bordered w-full max-w-xs mb-5"
  //             value={summary}
  //             onChange={(e) => setSummary(e.target.value)}
  //           />
  //         </div>

  //         {/* <div className="flex-col">
  //           <label htmlFor="document" className="font-semibold">
  //             Adjuntar factura del pago del material:
  //           </label>
  //           <input
  //             type="file"
  //             id="document"
  //             name="document"
  //             required="required"
  //             className="w-full max-w-xs"
  //             onChange={(e) => setDocument(e.target.files[0])}
  //           />
  //         </div> */}

  //         <div className="mt-5 card-actions flex-1 col-span-full">
  //           <button
  //             type='submit'
  //             className="button-register bg-yellow-l hover:bg-yellow-d text-black font-semibold py-2 px-4 rounded"
  //           >
  //             Actualizar pedido
  //           </button>
  //         </div>
  //       </form>

  //       <div className="flex justify-between items-end mt-10 col-span-full">
  //         <div className="flex-col justify-between items-end col-span-full">
  //           <p className="mb-1 font-semibold">Fecha pedido: {order.date}</p>
  //           <p className="mb-1 font-semibold">
  //             Productos totales: {order.totalProducts}
  //           </p>
  //           <p className="font-semibold">Precio total: {order.totalPrice}€</p>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  );
}

export default OrdersDetail;
