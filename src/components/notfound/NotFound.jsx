import React from "react";

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <img src="/oopss.png" alt="Not Found" className="mx-auto mb-8" />
        <div className="flex items-center text-center justify-center">
        <button
          className="sm:w-60 h-10 p-4 4 bg-yellow-d text-black font-sans rounded-lg flex items-center text-center"
          onClick={() => (window.location.href = "/")}
        >
          Volver a la página principal
        </button>
        </div>
       
      </div>
    </section>
  );
};

export default NotFound;
