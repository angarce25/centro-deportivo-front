const ProductsLayout = ({ children }) => {
  return (
    <div
      className="flex flex-col justify-center items-center mt-20 p-6
      2xl:ml-24
      xl:ml-12
      lg:ml-12
      md:ml-4
      sm:px-16 px-6 "
    >
      {children}
    </div>
  );
};

export default ProductsLayout;
