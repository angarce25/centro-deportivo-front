import SideBar from "../components/sideBar/SideBar";
import { useSearchParams } from "react-router-dom";

function ProductOrder() {
  const [searchParams] = useSearchParams();

  const date = searchParams.get("date");
  const totalProducts = searchParams.get("totalProducts");
  const totalPrice = searchParams.get("totalPrice");
  const products = JSON.parse(searchParams.get("products"));

  return (
    <div className="flex">
      <SideBar />
      <section className="m-10 w-150 bg-base-100 shadow-l flex flex-col md:flex-row justify-between">
  <div className="m-10 flex-1">
    <h4 className="card-title mb-5">Resumen del Pedido</h4>
    <p className="mb-3">Fecha pedido: {date}</p>

    {products.map((product) => (
      <div key={product._id} className="mb-6">
        <div className="flex items-center mb-3">
          <img
            className="w-32 h-32 mr-4"
            src={product.image}
            alt={product.name}
          />
          <div>
            <h5 className="card-title">{product.name}</h5>
            <p className="">Precio: {product.price}€</p>
          </div>
        </div>
      </div>
    ))}

    <div className="flex justify-between items-end">
      <div>
        <p className="mb-3">Productos totales: {totalProducts}</p>
        <p className="mb-3">Precio total: {totalPrice}€</p>
      </div>
    </div>
  </div>

  <div className="m-10 card-actions  flex-col md:flex-col md:items-end">
    <input type="file" className="file-input file-input-bordered file-input-sm w-full max-w-xs mb-10 md:mb-4" />
    <button className="button-register bg-yellow-l hover:bg-yellow-d text-black font-semibold py-2 px-4 rounded">
      Confirmar pedido
    </button>
  </div>
</section>
    </div>
  );
}

export default ProductOrder;
