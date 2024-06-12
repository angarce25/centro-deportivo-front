/* eslint-disable react/prop-types */
// AddToCartButton.jsx
import  { useContext } from 'react';
import { TfiShoppingCartFull } from "react-icons/tfi";
import { ShoppingCartContext } from "../../context/ProductContext";

function AddToCartButton({ productData, selectedSize }) {
  const context = useContext(ShoppingCartContext);

  const addProductsToCart = (event) => {
    event.stopPropagation();
    const productWithSize = { ...productData, selectedSize: selectedSize || productData.sizes[0] };
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productWithSize]);

    context.openCheckSideMenu();
    context.closeProductDetail();
  };

  return (
    <div
      style={{
        maxWidth: "100%",
        height: "auto",
        filter: "drop-shadow(0px 1.42184px 1.23px rgba(0, 0, 0, 1))",
      }}
      className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 rounded-md m-2"
      onClick={addProductsToCart}
    >
      <TfiShoppingCartFull className="text-black w-4 h-6" />
    </div>
  );
}

export default AddToCartButton;
