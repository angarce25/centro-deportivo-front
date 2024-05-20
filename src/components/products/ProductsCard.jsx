const Card0 = () => {
  return (
    <div className="bg-white cursor-pointer w-52 h-60 rounded-lg " data-testid="card0">
      <figure className="relative mb-1 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-black/30 rounded-lg text-white text-xs m-2 px-3 py-0.5">
          Merchandaising
        </span>
        <img
          src={
            "https://deportesbernal.es//wp-content/uploads/2024/01/gorra-amarilla-cadiz-cf-2-600x600.jpg"
          }
          alt="Camiseta oficial"
          className="w-full h-full object-cover rounded-lg border-black border-2 "
        />
      </figure>
      <p className="flex justify-between ">
        <span className="text-sm font-light m-2 px-1 py-0.5">
          Gorra oficial
        </span>
        <span className="text-md font-semibold p-1 mb-1 mr-2 border-black rounded-lg text-black">
          8 €
        </span>
      </p>
    </div>
  );
};

const Card1 = () => {
  return (
    <div className="bg-white cursor-pointer w-52 h-60 rounded-lg bg-gradient-to-br from-black via-gray-500 to-white-100" data-testid="card1">
      <figure className="relative mb-1 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-black/30 rounded-lg text-white text-xs m-2 px-3 py-0.5">
          Equipación
        </span>
        <img
          src={
            "https://tienda.rfaf.es/1443-home_default/camiseta-nike-selecci%C3%B3n-ii-hombre.jpg"
          }
          alt="Camiseta oficial"
          className="w-full h-full object-cover rounded-lg "
        />
      </figure>
      <p className="flex justify-between ">
        <span className="text-sm text-[#F2E205] font-light m-2 px-1 py-0.5">
          Camiseta oficial
        </span>
        <span className="text-md font-semibold p-1 mb-1 mr-2 rounded-lg text-black">
          21 €
        </span>
      </p>
    </div>
  );
};

const Card2 = () => {
  return (
    <div className="bg-white cursor-pointer w-52 h-60 rounded-lg border-black " data-testid="card2">
      <figure className="relative mb-1 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-black/30 rounded-lg text-white text-xs m-2 px-3 py-0.5">
          Accesorios
        </span>
        <img
          src={
            "https://shop.realbetisbalompie.es/cdn/shop/files/u1nf03gj.png?crop=center&v=1715241409&width=960"
          }
          alt="Camiseta oficial"
          className="w-full h-full object-cover rounded-lg"
        />
      </figure>
      <p className="flex justify-between ">
        <span className="text-sm font-light m-2 px-1 py-0.5">Bufanda</span>
        <span className="text-md font-semibold p-1 mb-1 mr-2 bg-[#BF9D7E] border-black rounded-lg text-black">
          10 €
        </span>
      </p>
    </div>
  );
};

const Card3 = () => {
  return (
    <div className="bg-white cursor-pointer w-52 h-60 rounded-lg border-black border-2"data-testid="card3">
      <figure className="relative mb-1 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-black/30 rounded-lg text-white text-xs m-2 px-3 py-0.5">
          Protección
        </span>
        <img
          src={
            "https://tienda.granadacf.es/3139-large_default/parka-negra-adulto-adidas-23-24.jpg"
          }
          alt="Camiseta oficial"
          className="w-full h-full object-cover rounded-lg"
        />
      </figure>
      <p className="flex justify-between ">
        <span className="text-sm font-light m-2 px-1 py-0.5">Abrigo</span>
        <span className="text-md font-semibold p-1 mb-1 mr-2 bg-[#EAF205] border-black rounded-lg text-white">
          10 €
        </span>
      </p>
    </div>
  );
};

export { Card0, Card1, Card2, Card3 };
