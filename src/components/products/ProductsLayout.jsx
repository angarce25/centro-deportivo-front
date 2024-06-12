/* eslint-disable react/prop-types */
const ProductsLayout = ({ children }) => {
  return (
    <div
      className="flex flex-col justify-content-space-evenly items-center mt-10
      xl:justify-content-space-evenly
      lg:justify-content-space-evenly
      md:justify-content-space-evenly
      sm:justify-content-space-evenly
      xl:ml-2
      lg:ml-2
      md:ml-4
      sm:px-0 px-0"
    >
      {children}
    </div>
  );
};

export default ProductsLayout;
