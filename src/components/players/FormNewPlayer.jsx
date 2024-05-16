export default function FormNewPlayer() {
    return (
      <section className="flex ml-20">
        {/* Columna izquierda */}
        <div className="flex-1">
          <form className="p-8">
            {/* Datos personales */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Datos personales jugador</h2>
              <div className="flex mb-4">
                <div className="w-1/2 mr-4">
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
                <div className="w-1/2">
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
              </div>
              <div className="flex mb-4">
              <div className="w-1/2 mr-4">
                <label className="block text-gray font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="border border-gray-l rounded px-3 py-2 w-full"
                  type="text"
                  id="email"
                  name="email"
                />
              </div>

              <div className="w-1/2 mb-4">
                <label className="block text-gray font-bold mb-2" htmlFor="telefono">
                  Teléfono
                </label>
                <input
                  className="border border-gray-l rounded px-3 py-2 w-full"
                  type="number"
                  id="telefono"
                  name="telefono"
                />
              </div>
              </div>
              <div className="flex mb-4">
              <div className="w-1/2 mr-4">
                <label className="block text-gray font-bold mb-2" htmlFor="dni">
                  DNI
                </label>
                <input
                  className="border border-gray-l rounded px-3 py-2 w-full"
                  type="text"
                  id="dni"
                  name="dni"
                />
              </div>

              <div className="w-1/2 mb-4">
                <label className="block text-gray font-bold mb-2" htmlFor="codigopostal">
                  Código Postal
                </label>
                <input
                  className="border border-gray-l rounded px-3 py-2 w-full"
                  type="text"
                  id="codigopostal"
                  name="codigopostal"
                />
              </div>
              </div>
              <div className="flex mb-4">
              <div className="w-1/2 mr-4">
                <label className="block text-gray font-bold mb-2" htmlFor="dni">
                  Alergias
                </label>
                <textarea
                  className="border border-gray-l rounded px-3 py-2 w-full"
                  type="text"
                  id="dni"
                  name="dni"
                />
              </div>

              <div className="w-1/2 mb-4">
                <label className="block text-gray font-bold mb-2" htmlFor="codigopostal">
                  Lesión o enfermedad
                </label>
                <textarea
                  className="border border-gray-l rounded px-3 py-2 w-full"
                  type="text"
                  id="codigopostal"
                  name="codigopostal"
                />
              </div>
              </div>
              
            </div>
            {/* Botón */}
            <div className="text-right">
              <button className="text-white font-bold py-2 px-4 rounded bg-black hover:bg-gray" type="submit">
                Añadir jugador
              </button>
            </div>
          </form>
        </div>
        
        {/* Columna derecha */}
        <div className="flex-1">
          <form className="p-8">
            {/* Datos equipamiento deportivo */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Datos equipamiento deportivo</h2>
              <div className="flex mb-4">
                <div className="w-1/2 mr-4">
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
                <div className="w-1/2">
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
              {/* Resto de campos de datos de equipamiento deportivo */}
            </div>
          </form>
        </div>
      </section>
    );
  }
  