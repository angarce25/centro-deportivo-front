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
    product-detail flex-col fixed right-0 border border-black rounded-lg bg-white   `}>
        
          <div className="flex justify-between items-center p-6">
            <h2 className="text-xl font-medium ">Detalle</h2>
            <div>
              <CgCloseR 
              className="text-2xl cursor-pointer"
              onClick={() => context.closeProductDetail()}>
              </CgCloseR>
              </div>
          </div>
          <figure className="px-6">
            <img 
            className="w-full rounded-lg object-cover rounded-t-lg bg-gradient-to-br from-black via-gray-500 to-white-100"
             src={context.productToShow.image}
             alt={context.productToShow.name}/>
          </figure>
          <p className="flex flex-col p-6">
            <span className="font-medium text-2xl">{context.productToShow.price}€</span>
            <span className="font-medium text-md">{context.productToShow.name}</span>
            <span className="font-light text-sm">{context.productToShow.description}</span>
          </p>
            
    </aside>
  )
}

export default ProductsDetail
