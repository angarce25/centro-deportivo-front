import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

// eslint-disable-next-line react/prop-types
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
  const [selectedSizes, setSelectedSizes] = useState({});

// SHOPPING CART · ORDER
const [order, setOrder] = useState([]);


 // SELECTED SIZE · STATE
 const [checkedSizes, setCheckedSizes] = useState([]);

 
  
  const handleCheckSize = (productId, size) => {
    console.log(`Selected size: ${size}`);
      setCheckedSizes({
        ...selectedSizes,
      [productId]: size
      })
      console.log(`Updated checked sizes: ${checkedSizes}`);
     return checkedSizes
  };

  //FILTER PRODUCTS BY CATEGORY
  const [filters, setFilters] = useState({category: "all"});




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
     selectedSizes,
     isCheckSideMenuOpen,
     openCheckSideMenu,
     closeCheckSideMenu,
     order,
     setOrder,
     checkedSizes,
      setCheckedSizes,
      handleCheckSize,
      filters,
      setFilters

   }}>
     {children}
   </ShoppingCartContext.Provider>
 );
};