import { useContext } from "react";
import { CgCloseR } from "react-icons/cg";
import { ShoppingCartContext } from "../../context/ProductContext";
import OrderCard from "../orderCart/OrderCart";
import { totalPrice } from "../../Utils";
import "./style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const CheckSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  const navigate = useNavigate();

  const [orderToAdd] = useState({});

  const handleDelete = (_id) => {
    const filteredProducts = context.cartProducts.filter(
      (product => product._id !== _id)
    );
    context.setCartProducts(filteredProducts);
  };

 
  const handleCheckout = () => {
    const date = new Date();  
    const totalProducts = context.cartProducts.length;
    const totalPrice = context.cartProducts.reduce((acc, product) => acc + product.price, 0);
  
    navigate(`/dashboard/add-order?date=${date.toLocaleDateString()}&totalProducts=${totalProducts}&totalPrice=${totalPrice.toFixed(2)}&products=${JSON.stringify(context.cartProducts)}`);
  };    

    if (orderToAdd.date && orderToAdd.totalProducts && orderToAdd.totalPrice) {
      navigate(
        `/dashboard/add-order?date=${orderToAdd.date}&totalProducts=${orderToAdd.totalProducts}&totalPrice=${orderToAdd.totalPrice}`
      );
    }
  
  

  


  return (
    <aside   
    className= {`${context.isCheckSideMenuOpen ? "flex" : "hidden" }
    check-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white  `}
    style={{
        maxWidth: "100%",
        height: "auto",
        filter: "drop-shadow(0px 4.42184px 7.23px rgba(0, 0, 0, 1))",
      }}>
        
          <div className="flex justify-between items-center p-6">
            <h2 className="text-xl font-medium ">Mi pedido</h2>
            <div>
              <CgCloseR 
              className="text-2xl cursor-pointer"
              onClick={() => context.closeCheckSideMenu()}>
              </CgCloseR>
              </div>
          </div>
          <div className="px-6 py-4 overflow-y-scroll h-96">
          {
          context.cartProducts.map(product => (
            product._id && (
              <div className="flex-col"
              key={product._id}>
                <OrderCard                 
                  _id={product._id}
                  name={product.name} 
                  price={product.price} 
                  imageUrl={product.image}
                  sizes={product.sizes}
                  handleDelete={handleDelete} 
                />
                <p className="flex justify-between mb-1 text-sm items-center">Talla: {product.selectedSize}</p>
              </div>
            )
          ))
        }
          </div>
        <div className="px-6 py-4">
          
            <p className="flex justify-between items-center">
            <span className="font-light">Total:</span>
            <span className="font-semibold ">{totalPrice(context.cartProducts)}€</span>
            </p>
            
            <button
            className="w-full bg-yellow-l hover:bg-yellow-d text-black font-semibold py-2 px-4 rounded"
            onClick={() => handleCheckout()}            
          >
            Solicitar Pedido
          </button>
            
        </div>
          
            
    </aside>
  );
};

export default CheckSideMenu;
