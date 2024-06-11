/* eslint-disable react/prop-types */
import { useContext, useState, useEffect } from "react";
import { ShoppingCartContext } from "../../context/ProductContext";
import { TfiShoppingCartFull } from "react-icons/tfi";

function ProductsCard({ data }) {
  const context = useContext(ShoppingCartContext);
  const [selectedSize, setSelectedSize] = useState(null);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
  };

  const addProductsToCart = (event, productData) => {
    event.stopPropagation();
    const productWithSize = { ...productData, selectedSize: selectedSize || productData.sizes[0] };
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productWithSize]);

    context.openCheckSideMenu();
    context.closeProductDetail();
  };

  const handleSizeSelection = (event) => {
    event.stopPropagation();
    setSelectedSize(event.target.value);
  };

    useEffect(() => {
      // console.log("Size seleccionado:", setSelectedSize);
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
        <div
          style={{
            maxWidth: "100%",
            height: "auto",
            filter: "drop-shadow(0px 1.42184px 1.23px rgba(0, 0, 0, 1))",
          }}
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 rounded-md m-2"
          onClick={(event) => addProductsToCart(event, data)}
        >
          <TfiShoppingCartFull className="text-black w-4 h-6"> </TfiShoppingCartFull>
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm text-black font-light m-2 px-1 py-0.5">
          {data.name}
        </span>
        <span className="text-md font-semibold p-1 mb-1 mr-2 rounded-lg text-black">
          {data.price}€
        </span>
      </p>
      <div className="flex flex-wrap justify-center ">
        <select
          value={selectedSize || ''}
          onChange={handleSizeSelection}
          onClick={(event) => event.stopPropagation()}
          className="m-1 px-12  rounded-md text-sm border font-medium cursor-pointer bg-custom-blue text-white "
          >
          <option 
         
          >Elige talla</option>
          {data.sizes.map((size, index) => (
            <option 
            key={index} 
            value={size}
            >
              {size}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}

export default ProductsCard;
