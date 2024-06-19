import React from 'react';
import PrimeraAficionados from '../../assets/teams/PrimeraAficionados.jpg'; // Importar la imagen

function FirstTeam() {
  const jugadores = [
    "ANDRINO ESCRIBANO, CHRISTIAN",
    "CAMBERO CLAVERO, HUGO",
    "CORDOBA TOLEDANO, SAMUEL",
    "CUESTA LLORENTE, SERGIO",
    "DE DIEGO MINONDO, DANIEL",
    "DE LEON CIPRIAN, JEFFERSON",
    "DOTEL DE LEON, BRAINEL MANUEL",
    "EL HADAD SOULAIMANI, ELIAS",
    "FENG LUO, ALEJANDRO",
    "FERNANDEZ RODRIGUES, PABLO",
    "FRAILE RUMI, JESUS",
    "FRAILE RUMI, MANUEL",
    "GOMEZ CALVO, RUBEN",
    "GONZALEZ FERRERAS, IMANOL",
    "HERNANDEZ ESPINOSA, VICTOR",
    "LEON USHIÑA, JONATHAN ALEXANDER",
    "NAVARRO GOMEZ, JORGE",
    "PEREZ SANCHEZ, FERNANDO",
    "PIZARRO ARAUZ, SERGIO IMANOL",
    "RIVAS MARTIN, DAVID",
    "SANCHEZ MORAN, ALEJANDRO",
    "SANZ GUILLEN, JULIAN",
    "TABARES SAAVEDRA, SANTIAGO",
    "TEBA BORREGO, LUIS",
    "TEBA BORREGO, PABLO",
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative w-full">
        <div className="absolute bottom-1.5 left-0 w-full text-center text-yellow-d bg-black bg-opacity-50 py-2">
          <h1 className="text-5xl font-bold">1,2,3 Ciudad!</h1>
        </div>
      </div>
      <div className="border-b-8 border-yellow-d mt-16"></div>{" "}
      {/* Incremento del margen */}
      <div className="max-w-6xl mx-auto p-6 flex">
        <div className="w-4/5 mr-8">
          <h1 className="text-4xl font-bold mb-4">Primer Equipo</h1>
          <p className="text-gray-700 text-lg text-justify mb-6">
            Nos llena de orgullo compartir el emocionante progreso de nuestro
            primer equipo, que actualmente compite en el grupo 3 de Primera
            Regional. Con gran esfuerzo y dedicación, hemos alcanzado la sexta
            posición en la tabla, acumulando 51 puntos a falta de solo cuatro
            jornadas para el final de la temporada.
          </p>
          <p className="text-gray-700 text-lg text-justify mb-6">
            Queremos destacar y agradecer la labor excepcional de los dos
            cuerpos técnicos, <strong>FRANCISCO JAVIER MADRIGAL LOPEZ</strong> y{" "}
            <strong>PEDRO TEBA GUARDIA</strong>, que nos han guiado a lo largo
            del año. Su conocimiento, estrategias y apoyo incondicional han sido
            fundamentales para alcanzar este punto. No solo han sido
            entrenadores, sino también mentores y motivadores que han inspirado
            a nuestros jugadores a dar lo mejor de sí en cada encuentro.
          </p>
        </div>
        <div className="w-1/5 ml-6">
          {" "}
          {/* Incremento del margen */}
          <h2 className="text-3xl text-yellow-dark font-bold mb-4">
            Categoría:
          </h2>
          <p className="text-gray-700 text-lg">TERCERA DE AFICIONADOS</p>
          <h2 className="text-3xl text-yellow-dark font-bold mt-8 mb-4">
            Goleadores:
          </h2>{" "}
          {/* Incremento del margen */}
          <p className="text-gray-700 text-lg mb-2">- Jugador 1</p>
          <p className="text-gray-700 text-lg mb-2">- Jugador 2</p>
          <p className="text-gray-700 text-lg mb-2">- Jugador 3</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mb-8 p-4 flex">
        <div className="w-4/6 pr-8">
          {" "}
          {/* Incremento del margen */}
          <img
            src={PrimeraAficionados}
            alt="Primera Aficionados"
            className="object-cover w-full h-auto"
          />
          <h2 className="text-3xl text-yellow-dark font-bold mb-6 mt-6">
            Más Información:
          </h2>{" "}
          {/* Incremento del margen */}
          <p className="text-gray-700 text-lg mb-4">
            {" "}
            {/* Incremento del margen */}
            Si quieres saber más sobre las clasificaciones, por favor visita el
            siguiente enlace:
          </p>
          <a
            href="https://www.rffm.es/competicion/calendario?temporada=19&tipojuego=1&competicion=17145393&grupo=17145396"
            className="text-blue-500 underline"
          >
            Ver Clasificaciones
          </a>
        </div>
        <div className="w-2/6">
          <h2 className="text-3xl text-yellow-dark font-bold mb-4">Jugadores:</h2>
          <ul className="list-inside text-gray-700 text-lg">
            {jugadores.map((jugador, index) => (
              <li key={index} className="mb-2">
                {jugador}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FirstTeam;