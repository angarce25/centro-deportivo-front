import { Card0, Card1, Card2, Card3 } from "../components/products/ProductsCard"; // Importa el componente Cards

const Products = () => {
  return (
    <>
      <div className="flex items-center justify-center relative w-full ">
        <h2 className="text-xl font-medium mb-4">
          Productos disponibles del Club
        </h2>
      </div>
      <div className="flex flex-row items-center justify-center">
        <div className="m-4 ">
          <Card0 />
        </div>
        <div className="">
          <Card1 />
        </div>
        <div className="m-4">
          <Card2 />
        </div>
        <div className="m-4">
          <Card3 />
        </div>
      </div>
    </>
  );
};

export default Products;
