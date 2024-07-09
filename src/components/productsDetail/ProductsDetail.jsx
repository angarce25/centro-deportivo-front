import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ProductContext";
import { CgCloseR } from "react-icons/cg";
import "./style.css"
const ProductsDetail = () => {
  const context = useContext(ShoppingCartContext)
  


  return (
    <aside  style={{
      maxWidth: "100%",
      height: "auto",
      filter: "drop-shadow(0px 4.42184px 7.23px rgba(0, 0, 0, 1))",
    }}
    
    className= {`${context.isProductDetailOpen ? "flex" : "hidden" }
    product-detail flex-col fixed center sm:center md:center lg:right-0 xl:right-0 2xl:right-0 border border-black rounded-lg bg-white   `}>
        
          <div className="flex justify-between items-center p-4 2xl:p-6">
            <h2 className="text-xl font-medium lg:text-md xl:text-lg">Detalle</h2>
            <div>
              <CgCloseR 
              className="text-2xl cursor-pointer xl:text-lg"
              onClick={() => context.closeProductDetail()}>
              </CgCloseR>
              </div>
          </div>
          <figure className="px-3 ">
            <img 
            className="w-full rounded-lg object-cover rounded-t-lg bg-gradient-to-br from-black via-gray-500 to-white-100"
             src={context.productToShow.image}
             alt={context.productToShow.name}/>
          </figure>
          <p className="flex flex-wrap justify-between p-4">
            <span className="font-medium text-2xl lg:text-xl 2xl:text-2xl">{context.productToShow.price}€</span>
            <span className="font-medium mt-2 text-md lg:text-sm 2xl:text-xl">{context.productToShow.name}</span>
            <span className="font-light text-sm">{context.productToShow.description}</span>
          </p>
            
    </aside>
  )
}

export default ProductsDetail
