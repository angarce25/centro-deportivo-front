import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ProductContext";
import { GoPlus } from "react-icons/go";
function ProductsCard( data ) {
  const context = useContext(ShoppingCartContext)

  const showProduct  =  (productDetail)  => {
    context.openProductDetail()
    context.setProductToShow(productDetail)
  }

  const addProductsToCart = (event, productData) => {
    event.stopPropagation()
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts, productData])
    context.openCheckSideMenu()
    context.closeProductDetail()
  }

  return (
    <div
      style={{
        maxWidth: "100%",
        height: "auto",
        filter: "drop-shadow(0px 4.42184px 7.23px rgba(0, 0, 0, 1))",
      }}
      className="bg-gray-l cursor-pointer w-52 h-68 rounded-lg m-4 mb-4 "
      onClick={() => showProduct(data.data)}
    >
      <figure className="relative mb-4 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-black/30 rounded-lg text-white text-xs m-2 px-3 py-0.5 ">
          {data.data.category}
        </span>
        <img
          src={data.data.image}
          alt={data.data.name}
          className="w-52 h-60 object-cover rounded-t-lg bg-gradient-to-br from-black via-gray-500 to-white-100"
        />
        <div
          style={{
            maxWidth: "100%",
            height: "auto",
            filter: "drop-shadow(0px 1.42184px 1.23px rgba(0, 0, 0, 1))",
          }}
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 rounded-md m-1 text-sm"
          onClick={(event) => addProductsToCart(event, data.data)}
        >
          <GoPlus className="text-black w-6 h-6"> </GoPlus>
        </div>
      </figure>
      <p className="flex justify-between ">
        <span className="text-sm text-black font-light m-2 px-1 py-0.5">
          {data.data.name}
        </span>
        <span className="text-md font-semibold p-1 mb-1 mr-2 rounded-lg text-black">
          {data.data.price} €
        </span>
      </p>
    </div>
  );
}



export default ProductsCard;
