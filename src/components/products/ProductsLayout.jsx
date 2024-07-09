const ProductsLayout = ({ children }) => {
  return (
    <div
      className="flex flex-col w-screen justify-around items-center mt-10
      2xl:ml-92 2xl:justify-between
      xl:ml-72 xl:justify-content-space-evenly
      lg:ml-72 lg:justify-content-space-evenly
      md:ml-4 md:justify-content-space-evenly
      sm:px-0 px-8 sm:justify-content-space-evenly "
    >
      {children}
    </div>
  );
};

export default ProductsLayout;
