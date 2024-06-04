import { CgCloseR } from "react-icons/cg";
import {ShoppingCartContext} from "../../context/ProductContext";
import { useContext } from "react";

const OrderCart = props => {
    // eslint-disable-next-line react/prop-types
    const {_id, name, price, imageUrl, handleDelete,  } = props	

    const context = useContext(ShoppingCartContext);
    

  return (
    <div 
    className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <figure className="w-16 h-16">
            <img 
            className="w-full h-full rounded-lg object-cover bg-gradient-to-br from-black via-gray-500 to-white-100" src={imageUrl} alt={name} />
        </figure>
        <p className="text-sm font-light ">{name}</p>
        <p className="text-sm font-light ">Talla:{context.checkedSizes}</p>
    
          
       
        
      </div>
      <div className="flex items-center gap-2">
        <p className="text-md font-medium">{price}€</p>
        <CgCloseR onClick={() => handleDelete(_id)} className="text-2lg cursor-pointer"></CgCloseR>
      </div>
    </div>
  )
}

export default OrderCart
