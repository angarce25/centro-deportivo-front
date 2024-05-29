import SeniorBImage from '../../assets/teams/SeniorB.jpg';

function SeniorB() {
  return (
    <div className="min-h-screen bg-gray-100 pb-8">
      <div className="bottom-0 left-0 w-full text-center text-yellow-d bg-black bg-opacity-50 py-2">
        <h1 className="text-5xl font-bold">UnosColoresUnaManeraDeSer</h1>
      </div>
      <div className="border-b-8 border-yellow-d my-8"></div>
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-4">Senior B</h1>
          <p className="text-gray-700 text-lg mb-4 text-justify">
          Nos complace presentar a nuestro equipo Senior B, que compite con gran entusiasmo en el grupo 18 de la 3ª Regional. Este equipo es un testimonio de la pasión y el compromiso de nuestros jóvenes talentos, quienes, tras su paso por nuestra cantera, han decidido continuar su trayectoria futbolística juntos en la etapa aficionada.          </p>
          <p className="text-gray-700 text-lg text-justify">
          Lo que hace especial a nuestro Senior B es la unión y el espíritu de camaradería que caracteriza a sus integrantes. Muchos de estos jugadores, además de darlo todo en el campo, son también entrenadores de nuestras categorías inferiores, transmitiendo su amor por el fútbol y su experiencia a las futuras generaciones.          </p>
        </div>
        <div className="flex mb-8">
          <div className="w-4/5">
            <img src={SeniorBImage} alt="Senior B" className="w-full h-auto max-h-96 object-cover" />
          </div>
          <div className="w-1/5 ml-6 flex flex-col">
            <h2 className="text-3xl text-yellow-d font-bold mb-2">Categoría:</h2>
            <p className="text-gray-700 text-lg">TERCERA REGIONAL</p>
            <h2 className="text-3xl text-yellow-d font-bold mt-4 mb-2">Goleadores:</h2>
            <p className="text-gray-700 text-lg">- Jugador 1</p>
            <p className="text-gray-700 text-lg">- Jugador 2</p>
            <p className="text-gray-700 text-lg">- Jugador 3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeniorB;