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

const addProductsToCart = (event, productData) => {
  event.stopPropagation();
  const selectedSize = Object.keys(checkedSizes).find((size) => checkedSizes[size]);
  console.log(`Selected size: ${selectedSize}`);
  setCartProducts([...cartProducts, { ...productData, size: selectedSize }]);
  openCheckSideMenu();
  closeProductDetail();
};

 // SELECTED SIZE · STATE
 const [checkedSizes, setCheckedSizes] = useState(
  []);
  
  const handleCheckboxChange = (size, checked) => {
    setCheckedSizes((prevCheckedSizes) => {
      const updatedCheckedSizes = { ...prevCheckedSizes };
      Object.keys(updatedCheckedSizes).forEach((key) => {
        updatedCheckedSizes[key] = false;
      });
      
      updatedCheckedSizes[{size}] = checked;
      console.log(`Updated checked sizes: ${JSON.stringify(updatedCheckedSizes)}`);
      return updatedCheckedSizes;
    });
  };


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
      addProductsToCart,
      isCheckSideMenuOpen,
      openCheckSideMenu,
      closeCheckSideMenu,
      order,
      setOrder,
      checkedSizes,
      setCheckedSizes,
      handleCheckboxChange
    }}>
     {children}
    </ShoppingCartContext.Provider>
  )
};

