import PropTypes from "prop-types";
function ProductsCard({ product }) {
  return (
    <div
      style={{
        maxWidth: "100%",
        height: "auto",
        filter: "drop-shadow(0px 4.42184px 7.23px rgba(0, 0, 0, 1))",
      }}
      className="bg-gray-l cursor-pointer w-52 h-68 rounded-lg "
    >
      <figure className="relative mb-1 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-black/30 rounded-lg text-white text-xs m-2 px-3 py-0.5 ">
          {product.category}
        </span>
        <img
          src={product.image}
          alt="camiseta oficial"
          className="w-52 h-60 object-cover justify-center items-center rounded-t-lg bg-gradient-to-br from-black via-gray-500 to-white-100"
        />
      </figure>
      <p className="flex justify-between ">
        <span className="text-sm text-black font-light m-2 px-1 py-0.5">
          {product.name}
        </span>
        <span className="text-md font-semibold p-1 mb-1 mr-2 rounded-lg text-black">
          {product.price} €
        </span>
      </p>
    </div>
  );
}

ProductsCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    // Añade más validaciones según la estructura de tu objeto product
  }).isRequired,
};

export default ProductsCard;
