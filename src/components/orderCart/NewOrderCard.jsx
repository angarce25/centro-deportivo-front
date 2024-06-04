import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import Cookies from "js-cookie";
import axios from 'axios';

const NewOrderCard = ({
  date,
  totalProducts,
  totalPrice,
  products,
  summary,
  setSummary,
  document,
  setDocument,  
}) => {
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!document || !summary) {
        toast.error('Error al crear el pedido: Faltan datos');
        return;
      }

    //   const formData = {
    //     product_ids: products.map(product => product._id),
    //     summary: summary,
    //     document: document
    // };
    // console.log('Resumen pedido:', formData);
    
    // const fd = new FormData();
    // Object.keys(formData).forEach((key) => {
    //     fd.append(key, formData[key]);
    // });
    
    // for (const [key, value] of fd.entries()) {
    //     console.dir(`${key}: ${value}`);
    // }

      const formData = new FormData();
      // console.log(`1: ${formData}`)
      formData.append('product_ids', products.map(product => product._id));
      // console.log(`2: ${formData}`)
      // console.log(JSON.stringify(products.map(product => product._id)))
      formData.append('summary', summary);
      // console.log(summary)
      formData.append('document', document);
      // console.log(document)

      const token = Cookies.get('token');

      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      };
      console.log(config);
      // for (const value of formData.values()) {
      //   console.log(value);
      // }

      const response = await axios.post('http://localhost:3000/api/orders/add-order', formData, config);
         console.log(response);

      if (response.status === 200) {
        // const { orderId } = response.data;
        // console.log('Pedido creado con ID:', orderId);

        toast.success('Nuevo pedido creado con éxito');
      }     
    } catch (error) {
      toast.error('Error al crear el pedido.');
      console.log(error);
    }
  };  

   
  
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
                  <p className="text-sm font-semibold">ID producto:</p>
                  <p className="text-sm ">{product._id}</p>
                </div>

                <div className="flex-col mt-3">
                  <p className="mr-2 text-sm font-semibold">Precio:</p>
                  <p className="text-sm">{product.price}€</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="flex-col">
          <label htmlFor="summary" className="font-semibold">
            Breve descripción del pedido:
          </label>
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
            // onClick={handleSubmit}
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
  date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  totalProducts: PropTypes.number,
  totalPrice: PropTypes.number,
  products: PropTypes.string,
  // handleConfirmOrder: PropTypes.func,
  summary: PropTypes.string,
  setSummary: PropTypes.func,
  document: PropTypes.any,
  setDocument: PropTypes.func,
  error: PropTypes.any,
};
  

export default NewOrderCard;