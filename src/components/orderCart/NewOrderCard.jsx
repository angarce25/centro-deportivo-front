

const NewOrderCard = ({
  date,
  totalProducts,
  totalPrice,
  products,
  handleConfirmOrder,
  summary,
  setSummary,
  document,
  setDocument,
  error,
}) => {
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
            type="text"
            id="document"
            name="document"
            placeholder=""
            required="required"
            className="input input-bordered w-full max-w-xs"
            value={document}
            onChange={(e) => setDocument(e.target.value)}
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
            onClick={handleConfirmOrder}
            className="button-register bg-yellow-l hover:bg-yellow-d text-black font-semibold py-2 px-4 rounded"
          >
            Confirmar pedido
          </button>
          
        </div>
      </div>
    </section>
  );
};

export default NewOrderCard;
