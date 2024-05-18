import { useContext } from "react";
import { CgCloseR } from "react-icons/cg";
import { ShoppingCartContext } from "../../context/ProductContext";
import OrderCard from "../../components/orderCard/OrderCard";
import "./style.css"
const CheckSideMenu = () => {
  const context = useContext(ShoppingCartContext)
  console.log("CART:", context.cartProducts)
  


  return (
    <aside  style={{
        maxWidth: "100%",
        height: "auto",
        filter: "drop-shadow(0px 4.42184px 7.23px rgba(0, 0, 0, 1))",
      }} 
    className= {`${context.isCheckSideMenuOpen ? "flex" : "hidden" }
    check-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white   `}>
        
          <div className="flex justify-between items-center p-6">
            <h2 className="text-xl font-medium ">Mi pedido</h2>
            <div>
              <CgCloseR 
              className="text-2xl cursor-pointer"
              onClick={() => context.closeCheckSideMenu()}>
              </CgCloseR>
              </div>
          </div>
          <div className="px-6 ">
          {
            context.cartProducts.map(product => (
                <OrderCard 
                
                    key={product._id}
                    name={product.name} 
                    price={product.price} 
                    imageUrl={product.image} 
                />
            ))
         }
          </div>
        
          
            
    </aside>
  )
}

export default CheckSideMenu