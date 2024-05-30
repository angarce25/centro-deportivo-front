import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {

  // SHOPPING CART · COUNT
  const [count, setCount] = useState(0);


  // PRODUCT DETAIL · OPEN/CLOSE
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // CHECK SIDE MENU · OPEN/CLOSE
  const [isCheckSideMenuOpen, setIsCheckSideMenuOpen] = useState(false);
  const openCheckSideMenu = () => setIsCheckSideMenuOpen(true);
  const closeCheckSideMenu = () => setIsCheckSideMenuOpen(false);

// PRODUCT DETAIL · SHOW PRODUCT
  const [productToShow, setProductToShow] = useState({});

// SHOPPING CART · ADD PRODUCT TO CART
  const [cartProducts, setCartProducts] = useState([]);

// SHOPPING CART · ORDER
const [order, setOrder] = useState([]);

// CHECKBOXES · STATE
const [checkedSizes, setCheckedSizes] = useState({});

  return (
    <ShoppingCartContext.Provider value={{ 
      count, 
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      isCheckSideMenuOpen,
      openCheckSideMenu,
      closeCheckSideMenu,
      order,
      setOrder,
      checkedSizes,
      setCheckedSizes
    }}>
     {children}
    </ShoppingCartContext.Provider>
  )
};

