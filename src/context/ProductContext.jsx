import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {

  // SHOPPING CART · COUNT
  const [count, setCount] = useState(0);


  // PRODUCT DETAIL · OPEN/CLOSE
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

// PRODUCT DETAIL · SHOW PRODUCT
  const [productToShow, setProductToShow] = useState({});

  return (
    <ShoppingCartContext.Provider value={{ 
      count, 
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow
    
    }}>
     {children}
    </ShoppingCartContext.Provider>
  )
};

