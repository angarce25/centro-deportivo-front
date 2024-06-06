import SideBar from "../components/sideBar/SideBar";
import { useSearchParams } from "react-router-dom";

function ProductOrder() {
  const [searchParams] = useSearchParams();

  const date = searchParams.get("date");
  const totalProducts = searchParams.get("totalProducts");
  const totalPrice = searchParams.get("totalPrice");

  return (
    <div className="flex">
      <SideBar />
      <section className="m-10 card w-150 bg-base-100 shadow-xl max-w-6xl mx-auto overflow-x-auto overflow-y-auto max-h-[80vh] mb-8">
        <div className="card-body">
          <div className="m-10">
            <h4 className="card-title mb-5">Resumen del Pedido</h4>
            <p className="mb-3">Fecha pedido: {date}</p>
            <p className="mb-3">Total de productos: {totalProducts}</p>
            <p className="mb-3">Precio total: {totalPrice}€</p>
            <input
              type="file"
              className="mt-5 mb-3 file-input file-input-bordered w-full max-w-xs"
            />
          </div>

          <div className="m-10 card-actions justify-start">
            <button className="button-register bg-yellow-l hover:bg-yellow-d text-black font-semibold py-2 px-4 rounded">
              Confirmar pedido
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductOrder;