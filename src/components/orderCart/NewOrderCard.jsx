import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const NewOrderCard = ({
  
  totalProducts,
  totalPrice,
  products,
  summary,
  setSummary,
  document,
  setDocument,
}) => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!document || !summary) {
        toast.error("Error al crear el pedido: Faltan datos");
        return;
      }

      const formData = new FormData();
    
      products.forEach(product => {
        formData.append('product_ids', product._id);
        formData.append('selectedSize', product.selectedSize);
      });

      // Crear el campo resume
      const resume = {
        quantity: products.map(product => product.quantity || 1), // Asignar una cantidad predeterminada si falta
        total: totalPrice,
      };
       console.log(resume)
      formData.append('summary', summary);      
      formData.append('document', document);
      formData.append('resume', JSON.stringify(resume)); // Añadir resume como cadena JSON

      const token = Cookies.get('token');
      const config = {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      };

      const response = await axios.post('http://localhost:3000/api/orders/add-order', formData, config);

      if (response.status === 201) {        
        toast.success('Nuevo pedido creado con éxito');
        setTimeout(() => {
          navigate("/dashboard/myorders"); // Redirigir después de crear el pedido
        }, 2000);
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data ===
          "Demasiados intentos en poco tiempo, por favor inténtalo más tarde"
      ) {
        toast.error(
          "Demasiados intentos en poco tiempo, por favor inténtalo más tarde"
        );
      } else {
        toast.error("Error al crear el pedido.");
      }
    }
  };

  const [date, setDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString(); // Formato de fecha local, puedes personalizarlo
    setDate(formattedDate);
  }, []);

  return (
    <section className="m-10 w-150 bg-base-100 shadow-l flex flex-col md:flex-row justify-between">
      <div className="m-10 flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <h4 className="card-title mb-5 col-span-full">Resumen del Pedido</h4>

        {products.map((product) => (
          <div key={product._id} className="mb-6">
            <div className="flex items-center mb-3">
              <img
                className="w-32 h-32 mr-4"
                src={product.image}
                alt={product.name}
              />
              <div>
                <h4 className="card-title mb-5">{product.name}</h4>               
                <div className="flex-col">
                  <p className="text-sm font-semibold">Talla:</p>
                  <p className="text-sm ">{product.selectedSize}</p>
                </div>

                <div className="flex-col mt-3">
                  <p className="mr-2 text-sm font-semibold">Precio:</p>
                  <p className="text-sm">{product.price}€</p>
                </div>

                {/* Añadir cantidad si está definida */}
                {product.quantity && (
                  <div className="flex-col mt-3">
                    <p className="mr-2 text-sm font-semibold">Cantidad:</p>
                    <p className="text-sm">{product.quantity}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="flex-col">
            <div className="flex flex-col mb-4">
              <label htmlFor="summary" className="font-semibold">
                Breve descripción del pedido:
              </label>
              <span className="text-sm">
              Si necesitas solicitar más de un producto igual, por favor indícalo en el campo a continuación.
              </span>
            </div>

            <input
              type="text"
              id="summary"
              name="summary"
              placeholder="Ejemplo: Camiseta talla S"
              required="required"
              className="input input-bordered w-full max-w-xs mb-5"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            />
          </div>

          <div className="flex-col">
            <label htmlFor="document" className="font-semibold">
              Adjuntar factura del pago del material:
            </label>
            <p className="mb-3 text-sm">Nª de cuenta: ES18 0073 0100 5405 0591 9252</p>
            <input
              type="file"
              id="document"
              name="document"
              placeholder=""
              required="required"
              className="w-full max-w-xs"
              onChange={(e) => setDocument(e.target.files[0])}
            />
          </div>
          <div className="flex justify-between items-end mt-10 col-span-full">
            <div className="flex-col justify-between items-end  col-span-full">
              <p className="mb-1 font-semibold">Fecha pedido: {date}</p>
              <p className="mb-1 font-semibold">
                Productos totales: {totalProducts}
              </p>
              <p className="font-semibold">Precio total: {totalPrice}€</p>
            </div>
          </div>

          <div className="mt-5 card-actions flex-1 col-span-full">
            <button
              type='submit'
              className="button-register bg-yellow-l hover:bg-yellow-d text-black font-semibold py-2 px-4 rounded"
            >
              Confirmar pedido
            </button>
          </div>
        </form>        
      </div>
    </section>
  );
}

NewOrderCard.propTypes = {
  date: PropTypes.string,
  totalProducts: PropTypes.number,
  totalPrice: PropTypes.number,
  products: PropTypes.arrayOf(PropTypes.object),
  summary: PropTypes.string,
  setSummary: PropTypes.func,
  document: PropTypes.any,
  setDocument: PropTypes.func,
  error: PropTypes.any,
};

export default NewOrderCard;
