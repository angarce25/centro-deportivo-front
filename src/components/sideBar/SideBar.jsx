import { useState, useEffect } from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { GiClothes } from "react-icons/gi";
import { LuUsers2 } from "react-icons/lu";
import { RiTeamLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import imagen from '../../assets/icons/escudo.png';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userName, setUserName] = useState("");
  const [welcomeShown, setWelcomeShown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setIsAdmin(decodedToken.isAdmin === 'admin' ? 'admin' : 'user'); // Ajuste aquí para asegurarse de que 'admin' o 'user'
        console.log('DECODED TOKEN EN SIDEBAR:', decodedToken)
        setUserName(decodedToken.username); // Assuming you store the username in the token
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }

    if (userName && !welcomeShown && location.pathname === '/') {
      Swal.fire({
        icon: 'success',
        title: `<span style="font-size: 18px;">¡Bienvenido, ${userName}!</span>`,
        showConfirmButton: false,
        timer: 1500
      });
      setWelcomeShown(true);
    }
  }, [welcomeShown, location.pathname, userName]);

  const renderUserLinks = () => (
    <>
      <nav className="mt-3 flex justify-center hover:bg-yellow-d transition duration-500">
        <a className="flex items-center py-2 mt-4 mb-4 text-gray-100 bg-gray-700 bg-opacity-25" href="/dashboard/products">
          <GiClothes style={{ fontSize: "25px", fontWeight: "bold" }} />
          <span className="mx-3">Productos</span>
        </a>
      </nav>
      <nav className="mt-3 flex justify-center hover:bg-yellow-d transition duration-500">
        <a className="flex items-center py-2 mt-4 mb-4 text-gray-100 bg-gray-700 bg-opacity-25" href="/dashboard/my-players">
          <RiTeamLine style={{ fontSize: "25px", fontWeight: "bold" }} />
          <span className="mx-3">Mis Jugadores</span>
        </a>
      </nav>
      <nav className="mt-3 flex justify-center hover:bg-yellow-d transition duration-500">
        <a className="flex items-center py-2 mt-4 mb-4 text-gray-100 bg-gray-700 bg-opacity-25" href="/dashboard/myorders">
          <LuUsers2 style={{ fontSize: "25px", fontWeight: "bold" }} />
          <span className="mx-3 items-center justify-center">Mis pedidos</span>
        </a>
      </nav>
    </>
  );

  const renderAdminLinks = () => (
    <>
      <nav className="mt-3 flex justify-center hover:bg-yellow-d transition duration-500">
        <a className="flex items-center py-2 mt-4 mb-4 text-gray-100 bg-gray-700 bg-opacity-25" href="/dashboard/users">
          <CiShop style={{ fontSize: "25px", fontWeight: "bold" }} />
          <span className="mx-3 flex justify-center">Usuarios</span>
        </a>
      </nav>
      <nav className="mt-3 flex justify-center hover:bg-yellow-d transition duration-500">
        <a className="flex items-center py-2 mt-4 mb-4 text-gray-100 bg-gray-700 bg-opacity-25" href="/dashboard/players">
          <LuUsers2 style={{ fontSize: "25px", fontWeight: "bold" }} />
          <span className="mx-3 items-center justify-center">Jugadores</span>
        </a>
      </nav>
      <nav className="mt-3 flex justify-center hover:bg-yellow-d transition duration-500">
        <a className="flex items-center py-2 mt-4 mb-4 text-gray-100 bg-gray-700 bg-opacity-25" href="/dashboard/orders">
          <LuUsers2 style={{ fontSize: "25px", fontWeight: "bold" }} />
          <span className="mx-3 items-center justify-center">Pedidos</span>
        </a>
      </nav>
    </>
  );

  return (
    <>
      <button className="p-2 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
        <IoIosArrowForward size={24} />
      </button>

      <div className={`${sidebarOpen ? 'block' : 'hidden'} fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden`} onClick={() => setSidebarOpen(false)}></div>

      <div className={`${sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'} fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-l lg:translate-x-0 lg:static lg:inset-0 h-screen`}>
        <div className="flex items-center justify-center mt-8">
          <div className="flex items-center">
            <img className='w-20 h-30' src={imagen} alt="Escudo" />
          </div>
        </div>

        <nav className="mt-3 flex justify-center hover:bg-yellow-d transition duration-500">
          <a className="flex items-center py-2 mt-4 mb-4 text-gray-100 bg-gray-700 bg-opacity-25" href="/">
            <IoHomeOutline style={{ fontSize: "25px", fontWeight: "bold" }} />
            <span className="mx-3">Home</span>
          </a>
        </nav>

        {isAdmin === 'admin' ? renderAdminLinks() : renderUserLinks()}

        <nav className="mt-7 justify-center flex items-center hover:bg-custom-blue hover:text-white transition duration-500">
          <a className="flex items-center py-2 mt-4 mb-4 text-gray-100 bg-gray-700 bg-opacity-25" href="/">
            <i className="fa-solid fa-arrow-right-from-bracket fa-lg"></i>
            <span className="mx-3">Cerrar sesión</span>
          </a>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;