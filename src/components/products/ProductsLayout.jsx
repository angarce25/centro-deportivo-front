/* eslint-disable react/prop-types */
const ProductsLayout = ({ children }) => {
  return (
    <div
      className="flex flex-col justify-center items-center mt-10
      2xl:ml-24
      xl:ml-0
      lg:ml-0
      md:ml-4
      sm:px-16 px-6 "
    >
      {children}
    </div>
  );
};

export default ProductsLayout;
