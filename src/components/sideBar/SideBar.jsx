import { useState } from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { GiClothes } from "react-icons/gi";
import { LuUsers2 } from "react-icons/lu";
import { RiTeamLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io"; // Importa el icono del triángulo apuntando a la derecha
import imagen from '../../assets/icons/escudo.png';

function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Botón de menú para abrir/cerrar el sidebar */}
      <button
        className="p-2 text-gray-700 lg:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <IoIosArrowForward size={24} />
      </button>

      {/* Overlay oscuro */}
      <div
        className={`${
          sidebarOpen ? "block" : "hidden"
        } fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "translate-x-0 ease-out" : "-translate-x-full ease-in"
        } fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-l lg:translate-x-0 lg:static lg:inset-0 h-full`}
      >
        <div className="flex items-center justify-center mt-8">
          <div className="flex items-center">
            <img className="w-20 h-30" src={imagen} alt="Escudo" />
          </div>
        </div>

        <nav className="mt-3 flex justify-center hover:bg-yellow-d transition duration-500">
          <a
            className="flex items-center py-2 mt-4 mb-4 text-gray-100 bg-gray-700 bg-opacity-25"
            href="/"
          >
            <IoHomeOutline style={{ fontSize: "25px", fontWeight: "bold" }} />
            <span className="mx-3">Home</span>
          </a>
        </nav>
        <nav className="mt-3 flex justify-center hover:bg-yellow-d transition duration-500">
          <a
            className="flex items-center py-2 mt-4 mb-4 text-gray-100 bg-gray-700 bg-opacity-25"
            href="/dashboard/users"
          >
            <CiShop style={{ fontSize: "25px", fontWeight: "bold" }} />
            <span className="mx-3 flex justify-center">Usuarios</span>
          </a>
        </nav>
        <nav className="mt-3 flex justify-center hover:bg-yellow-d transition duration-500">
          <a
            className="flex items-center py-2 mt-4 mb-4 text-gray-100 bg-gray-700 bg-opacity-25"
            href="/dashboard/products"
          >
            <GiClothes style={{ fontSize: "25px", fontWeight: "bold" }} />
            <span className="mx-3">Productos</span>
          </a>
        </nav>
        <nav className="mt-3 flex justify-center hover:bg-yellow-d transition duration-500">
          <a
            className="flex items-center py-2 mt-4 mb-4 text-gray-100 bg-gray-700 bg-opacity-25"
            href="/dashboard/my-players"
          >
            <RiTeamLine style={{ fontSize: "25px", fontWeight: "bold" }} />
            <span className="mx-3">Jugadores (U)</span>
          </a>
        </nav>
        <nav className="mt-3 flex justify-center hover:bg-yellow-d transition duration-500">
          <a
            className="flex items-center py-2 mt-4 mb-4 text-gray-100 bg-gray-700 bg-opacity-25"
            href="/dashboard/players"
          >
            <LuUsers2 style={{ fontSize: "25px", fontWeight: "bold" }} />
            <span className="mx-3 items-center justify-center">
              Jugadores (A)
            </span>
          </a>
        </nav>
        <nav className="mt-3 flex justify-center hover:bg-yellow-d transition duration-500">
          <a
            className="flex items-center py-2 mt-4 mb-4 text-gray-100 bg-gray-700 bg-opacity-25"
            href="/dashboard/myorders"
          >
            <LuUsers2 style={{ fontSize: "25px", fontWeight: "bold" }} />
            <span className="mx-3 items-center justify-center">
              Mis pedidos (U)
            </span>
          </a>
        </nav>
        <nav className="mt-3 flex justify-center hover:bg-yellow-d transition duration-500">
          <a
            className="flex items-center py-2 mt-4 mb-4 text-gray-100 bg-gray-700 bg-opacity-25"
            href="/dashboard/orders"
          >
            <LuUsers2 style={{ fontSize: "25px", fontWeight: "bold" }} />
            <span className="mx-3 items-center justify-center">
              Mis pedidos (A)
            </span>
          </a>
        </nav>

        <nav className="mt-7 justify-center flex items-center hover:bg-custom-blue hover:text-white transition duration-500">
          <a
            className="flex items-center py-2 mt-4 mb-4 text-gray-100 bg-gray-700 bg-opacity-25"
            href="/"
          >
            <i className="fa-solid fa-arrow-right-from-bracket fa-lg"></i>
            <span className="mx-3">Cerrar sesión</span>
          </a>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
