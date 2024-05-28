import React from 'react';
import SeniorBImage from '../../assets/teams/SeniorB.jpg';

function SeniorB() {
  return (
    <div className="min-h-screen bg-gray-100 pb-8">
      <div className="bottom-0 left-0 w-full text-center text-yellow-d bg-black bg-opacity-50 py-2">
        <h1 className="text-5xl font-bold">UnosColoresUnaManeraDeSer</h1>
      </div>
      <div className="border-b-8 border-yellow-d my-5"></div>
      <div className="max-w-6xl mx-auto p-6">
        <div className="mt-6">
          <h1 className="text-4xl font-bold mb-4">Senior B</h1>
          <p className="text-gray-700 text-lg mb-4 text-justify">
            Nos llena de orgullo compartir el emocionante progreso de nuestro primer equipo, que actualmente compite en el grupo 3 de Primera Regional. Con gran esfuerzo y dedicación, hemos alcanzado la sexta posición en la tabla, acumulando 51 puntos a falta de solo cuatro jornadas para el final de la temporada.
          </p>
          <p className="text-gray-700 text-lg text-justify">
            Queremos destacar y agradecer la labor excepcional de los dos cuerpos técnicos, <strong>FRANCISCO JAVIER MADRIGAL LOPEZ</strong> y <strong>PEDRO TEBA GUARDIA</strong>, que nos han guiado a lo largo del año. Su conocimiento, estrategias y apoyo incondicional han sido fundamentales para alcanzar este punto. No solo han sido entrenadores, sino también mentores y motivadores que han inspirado a nuestros jugadores a dar lo mejor de sí en cada encuentro.
          </p>
        </div>
        <div className="flex mt-6">
          <div className="w-4/5">
            <img src={SeniorBImage} alt="Senior B" className="w-full h-auto max-h-96 object-cover" />
          </div>
          <div className="w-1/5 ml-6 flex flex-col">
            <h2 className="text-3xl text-yellow-d font-bold mb-2">Categoría:</h2>
            <p className="text-gray-700 text-lg">Tercera de Aficionados</p>
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
