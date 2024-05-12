import React from "react";
import { Link } from "react-router-dom";
import { FbIcon, IgIcon, LnkdIcon, XIcon, GmailIcon } from "../../../assets/icons";

const Footer = () => {
  return (
    <footer className="w-full py-10 px-8 text-sm font-dark bg-black bottom-0">

  <div className="container   mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between">
      {/* Redes sociales */}
      <ul className="flex items-center gap-3 mb-4 sm:mb-0">
  <li>
    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
      <FbIcon className="text-pink-500" /> {/* Facebook */}
    </a>
  </li>
  <li>
    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
      <IgIcon className="text-pink-500" /> {/* Instagram */}
    </a>
  </li>
  <li>
    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
      <LnkdIcon className="text-blue-700" /> {/* LinkedIn */}
    </a>
  </li>
  <li>
    <a href="mailto:ejemplo@gmail.com">
      <GmailIcon className="text-yellow-500" /> {/* Gmail */}
    </a>
  </li>
</ul>

  
      {/* Texto de copyright */}
      <div className="hidden sm:block text-red-700 text-lg mx-auto mb-4 sm:mb-0">
      <span>derechos de autor???</span>
    </div>
  
      {/* Enlaces de contacto */}
      <div className="text-center">
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
        </div>
      </div>
    </div>

  </footer>
  
  );
};

export default Footer;
