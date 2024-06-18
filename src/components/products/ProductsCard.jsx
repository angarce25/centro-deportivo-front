import { useContext, useState, useEffect } from "react";
import { ShoppingCartContext } from "../../context/ProductContext";
import AddToCartButton from "./AddToCartButton";
import SizeSelector from "./SizeSelector";

function ProductsCard({ data, showAddToCart, showSizeSelector }) {
  const context = useContext(ShoppingCartContext);
  const [selectedSize, setSelectedSize] = useState(null);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
  };

  const handleSizeSelection = (event) => {
    event.stopPropagation();
    setSelectedSize(event.target.value);
  };

  useEffect(() => {    
  }, [selectedSize]);

  return (
    <section
      style={{
        maxWidth: "100%",
        height: "auto",
        filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))",
      }}
      className="bg-gray-l cursor-pointer w-52 h-68 rounded-lg m-6 mb-4"
      onClick={() => showProduct(data)}
    >
      <figure className="relative mb-4 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-black/30 rounded-lg text-white text-xs m-2 px-3 py-0.5">
          {data.category}
        </span>
        <img
          src={data.image}
          alt={data.name}
          className="w-52 h-60 object-cover rounded-t-lg bg-gradient-to-br from-black via-gray-500 to-white-100"
        />
        {showAddToCart && (
          <AddToCartButton 
            data={data} 
            selectedSize={selectedSize} 
          />
        )}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm text-black font-light m-2 px-1 py-0.5">
          {data.name}
        </span>
        <span className="text-md font-semibold p-1 mb-1 mr-2 rounded-lg text-black">
          {data.price}€
        </span>
      </p>
      {showSizeSelector && (
        <SizeSelector
          selectedSize={selectedSize}
          handleSizeSelection={handleSizeSelection}
          sizes={data.sizes}
        />
      )}
    </section>
  );
}

export default ProductsCard;
