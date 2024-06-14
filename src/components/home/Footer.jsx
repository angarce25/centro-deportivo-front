import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTimes, FaPen } from "react-icons/fa";
import { MdEmail } from "react-icons/md"; // Importa el ícono MdEmail de react-icons
import "../../../styles/hero-slider.css";

const Footer = () => {
  return (
    <footer className="w-full py-10 px-8 text-sm font-dark bg-black bottom-0 mt-20">
      <div className="container   mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between">
        {/* -_- --------- Íconos Redes sociales ----------- -_- */}
        <ul className="flex items-center gap-3 mb-4 sm:mb-0">
          <li>
            <a
              href="https://www.facebook.com/123Ciudad/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={30} color="white" className="icon-footer" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/cd_ciudad/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={30} color="white" className="icon-footer" />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/123Ciudad"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTimes size={30} color="white" className="icon-footer" />
            </a>
          </li>          
          <li>
            <a href="mailto:hola_ciudad@hotmail.com">
              <MdEmail size={35} color="white" className="icon-footer" />{" "}              
            </a>
          </li>
        </ul>

        {/* Texto de copyright */}
        <div className="hidden sm:block text-white text-lg mx-auto mb-4 sm:mb-0">
          <span>&copy; COPYRIGHT 2024 </span>
          <span>Aviso Legal | Política de Privacidad</span>
        </div>
      
      </div>      
    </footer>
  );
};

export default Footer;
