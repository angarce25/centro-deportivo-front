/* eslint-disable react/prop-types */

function SizeSelector({ selectedSize, handleSizeSelection, sizes }) {
  return (
    <div className="flex flex-wrap justify-center">
      <select
        value={selectedSize || ''}
        onChange={handleSizeSelection}
        onClick={(event) => event.stopPropagation()}
        className="m-1 px-12 rounded-md text-sm border font-medium cursor-pointer bg-black text-white"
      >
        <option>Elige talla</option>
        {sizes.map((size, index) => (
          <option key={index} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SizeSelector;

