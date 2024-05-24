import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md"; // Importa el ícono MdEmail de react-icons

const Footer = () => {
  return (
    <footer className="w-full py-10 px-8 text-sm font-dark bg-black bottom-0">
      <div className="container   mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between">
        {/* -_- --------- Íconos Redes sociales ----------- -_- */}
        <ul className="flex items-center gap-3 mb-4 sm:mb-0">
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={30} color="white" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={30} color="white" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} color="white" />
            </a>
          </li>
          <li>
            <a href="mailto:cdciudaddelosangeles@hotmail.com">
              <MdEmail size={35} color="white" />{" "}
              {/* Usa MdEmail de react-icons */}
            </a>
          </li>
        </ul>

        {/* Texto de copyright */}
        <div className="hidden sm:block text-white text-lg mx-auto mb-4 sm:mb-0">
          <span>&copy; COPYRIGHT 2024 </span>
          <span>Aviso Legal | Política de Privacidad</span>
        </div>

        {/* -_- -----------  OJO enlaces POR CONFIRMAR ----------- -_- */}
        {/* <div className="text-center">
        <div>
          <Link
            to="/"
            className="text-white hover:text-red-700 text-lg mr-4 sm:mr-0"
          >
           ¿Link 1?
          </Link>
        </div>
        <div>
          <Link
            to="/"
            className="text-white hover:text-red-700 text-lg"
          >
            ¿Link 2?
          </Link>
        </div> */}
      </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
