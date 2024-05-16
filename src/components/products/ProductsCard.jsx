const ProductsCard = () => {
  return (
    <div className="bg-white cursor-pointer w-52 h-60 rounded-lg bg-gradient-to-br from-black via-gray-500 to-white-100">
      <figure className="relative mb-1 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-black/30 rounded-lg text-white text-xs m-2 px-3 py-0.5">
          1ª Equipación
        </span>
        <img
          src="https://res.cloudinary.com/dtppkikkr/image/upload/v1715765308/CDCA/CamisetaO_g0kgt1.png"
          alt="camiseta oficial"
          className="w-full h-full object-cover rounded-lg "
        />
      </figure>
      <p className="flex justify-between ">
        <span className="text-sm text-yellow-d font-light m-2 px-1 py-0.5">
          camiseta oficial
        </span>
        <span className="text-md font-semibold p-1 mb-1 mr-2 rounded-lg text-black">
          20 €
        </span>
      </p>
    </div>
  );
};

export default ProductsCard;
