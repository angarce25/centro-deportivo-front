import { ProductsCard } from "../components/products/ProductsCard"; // Importa el componente Cards

const Products = () => {
  return (
    <>
      <div className="flex items-center justify-center relative w-full ">
        <h2 className="text-xl font-medium mb-4">
          Productos disponibles del Club
        </h2>
      </div>
      <div className="flex flex-row items-center justify-center">
        <div className="">
          <ProductsCard />
        </div>
      </div>
    </>
  );
};

export default Products;
