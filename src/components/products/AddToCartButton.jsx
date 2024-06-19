import { useContext } from 'react';
import { ShoppingCartContext } from "../../context/ProductContext";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const AddToCartButton = ({ data, selectedSize }) => {
  const context = useContext(ShoppingCartContext);

  // Aseguramos que data no sea undefined
  if (!data) {
    console.error("Data is undefined.");
    return null;
  }

  const addProductsToCart = (event, productData) => {
    event.stopPropagation();
    const productWithSize = { ...productData, selectedSize: selectedSize || productData.sizes[0] };

    // Verificar si el producto con el tamaño seleccionado ya está en el carrito
    const isProductInCart = context.cartProducts.some(
      product => product._id === productWithSize._id && product.selectedSize === productWithSize.selectedSize
    );

    if (!isProductInCart) {
      context.setCount(context.count + 1);
      context.setCartProducts([...context.cartProducts, productWithSize]);
      context.openCheckSideMenu();
      context.closeProductDetail();
    } else {
      // console.log('El producto ya está en el carrito.');
    }
  };

  const renderIcon = (_id) => {
    const isInCart = context.cartProducts.some(product => product._id === _id);

    if (isInCart) {
      return (

        <div
        style={{
          maxWidth: "100%",
          height: "auto",
          filter: "drop-shadow(0px 1.42184px 1.23px rgba(0, 0, 0, 1))",
        }}
        className="absolute top-0 right-0 flex justify-center items-center bg-yellow-l w-6 rounded-md m-2"
        
      >
        <IoCheckmarkDoneSharp className="text-black w-4 h-6" />
      </div>
    );
        
    } else {
      return (
        <div
          style={{
            maxWidth: "100%",
            height: "auto",
            filter: "drop-shadow(0px 1.42184px 1.23px rgba(0, 0, 0, 1))",
          }}
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 rounded-md m-2"
          onClick={(event) => addProductsToCart(event, data)}
        >
          <TfiShoppingCartFull className="text-black w-4 h-6" />
        </div>
      );
      
    }
  };

  return (
    <div>
      {renderIcon(data._id)}
    </div>
  );
};

export default AddToCartButton;
