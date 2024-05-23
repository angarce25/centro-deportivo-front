import React, { useState } from "react";
import { Link } from "react-router-dom";
// import LogoutButton from "../buttons/ButtonLogout";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black flex items-center justify-between xl:justify-start w-full py-4 px-8 lg:px-4 xl:px-8 h-auto xl:h-[15vh] z-50">
      <nav
        className={`xl:flex ${
          isOpen ? "flex flex-col items-center" : "hidden xl:flex"
        } xl:flex-row m-auto justify-between w-full xl:w-auto xl:items-center`}
      >
        <Link
          to="/"
          className="text-white mx-10 hover:text-yellow-d text-lg mb-2"
        >
          <img
            src="escudo.svg"
            width="40"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Link>
        <Link
          to="/merchandising"
          className="text-white mx-10 my-2 xl:my-0 hover:text-yellow-d text-lg mt-2"
        >
          Merchandising
        </Link>
        <Link
          to="/register"
          className="text-white mx-10 my-2 xl:my-0 hover:text-yellow-d text-lg mt-2"
        >
          Registrarse
        </Link>
        <Link
          to="/login"
          className="text-white mx-10 my-2 xl:my-0 hover:text-yellow-d text-lg mt-2"
        >
          Iniciar sesión
        </Link>
        {/* <LogoutButton className="mx-10 my-2 xl:my-0" /> */}
      </nav>
      <button
        onClick={toggleMenu}
        className="xl:hidden text-2xl p-2 focus:outline-none"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>
    </header>
  );
};

export default Header;
