import React from 'react';

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <img src='/notFound.png' alt="Not Found" className="mx-auto mb-8" />
        <button className="sm:w-60 h-10 p-4 4 text-white bg-yellow-d font-sans" onClick={() => window.location.href = "/"}>Volver a la página principal</button>
      </div>
    </section>
  );
};

export default NotFound;
