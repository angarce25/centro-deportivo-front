

export default function FormNewPlayer() {
  return (
    <section className="flexml-20">
                  
      <form>
        {/* Datos personales */}
        <div className="p-8 flex-1">
        <h2 className="text-2xl font-bold mb-4">Datos personales jugador</h2>
        <div className="mb-4">
          <label className="block text-gray font-bold mb-2" htmlFor="nombre">
            Nombre
          </label>
          <input
            className="border border-gray-l rounded px-3 py-2 w-full"
            type="text"
            id="nombre"
            name="nombre"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray font-bold mb-2" htmlFor="apellidos">
            Apellidos
          </label>
          <input
            className="border border-gray-l rounded px-3 py-2 w-full"
            type="text"
            id="apellidos"
            name="apellidos"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray font-bold mb-2" htmlFor="fechaNacimiento">
            Fecha de nacimiento
          </label>
          <input
            className="border border-gray-l rounded px-3 py-2 w-full"
            type="date"
            id="fechaNacimiento"
            name="fechaNacimiento"
          />
        </div>
        </div>
        {/* Datos ropa */}
        <div className="p-8 flex-1">
        <h2 className="text-2xl font-bold mb-4 mt-8">Datos equipamiento deportivo</h2>
        <div className="mb-4">
          <label className="block text-gray font-bold mb-2" htmlFor="tallaCamiseta">
            Talla de ropa (camiseta)
          </label>
          <input
            className="border border-gray-l rounded px-3 py-2 w-full"
            type="text"
            id="tallaCamiseta"
            name="tallaCamiseta"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray font-bold mb-2" htmlFor="tallaPantalon">
            Talla de ropa (pantalón)
          </label>
          <input
            className="border border-gray-l rounded px-3 py-2 w-full"
            type="text"
            id="tallaPantalon"
            name="tallaPantalon"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray font-bold mb-2" htmlFor="numeroCalzado">
            Número de calzado
          </label>
          <input
            className="border border-gray-l rounded px-3 py-2 w-full"
            type="text"
            id="numeroCalzado"
            name="numeroCalzado"
          />
        </div>
        </div>        
        {/* Botón */}
        <button 
        className="p-8 flex-1 text-white font-bold py-2 px-4 rounded bg-black hover:bg-gray" 
        type="submit">
          Añadir jugador
        </button>
      </form>
    
  
    </section>
  )
}
