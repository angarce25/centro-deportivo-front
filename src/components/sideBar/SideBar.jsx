import { useState, useEffect } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { GiClothes } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa6";
import { GiBabyfootPlayers } from "react-icons/gi";
import { LuUsers2 } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import imagen from "../../assets/icons/escudo.png";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userName, setUserName] = useState("");
  const [welcomeShown, setWelcomeShown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

 // función para determinar la clase de color de fondo basada en la ruta actual
  function getBackgroundColorClass(locationPathname) {
    switch (locationPathname) {
      //users
      case "/dashboard/products":
        return "bg-yellow-d";
      case "/dashboard/my-players":
        return "bg-yellow-d";
      case "/dashboard/myorders":
        return "bg-yellow-d";
      case "/dashboard/my-memberships":
        return "bg-yellow-d";
      //admin
      case "/dashboard/users":
        return "bg-yellow-d";
      case "/dashboard/players":
        return "bg-yellow-d";
      case "/dashboard/orders":
        return "bg-yellow-d";
      case "/dashboard/memberships":
        return "bg-yellow-d";
      default:
        return "bg-transparent";
    }
  }
 

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setIsAdmin(decodedToken.isAdmin === "admin" ? "admin" : "user"); // Ajuste aquí para asegurarse de que 'admin' o 'user'
       
        setUserName(decodedToken.username); // Assuming you store the username in the token
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }

    if (userName && !welcomeShown && location.pathname === "/") {
      Swal.fire({
        icon: "success",
        title: `<span style="font-size: 18px;">¡Bienvenido, ${userName}!</span>`,
        showConfirmButton: false,
        timer: 1500,
      });
      setWelcomeShown(true);
    }
  }, [welcomeShown, location.pathname, userName]);
  const handleLogout = () => {
    Cookies.remove("token"); // Replace 'token' with the actual name of your authentication token cookie
    Cookies.remove("isAdmin"); // Remove the admin status cookie if needed
    Cookies.remove("name"); // Remove the user name cookie if needed
    navigate("/"); // Redirect to the home page
  };

  const renderUserLinks = () => (
    <>
      <nav
        className={`mt-1 2xl:mt-6 flex justify-center transition duration-500 ${
          location.pathname === "/dashboard/products"
            ? "bg-gray text-white"
            : ""
        }  hover:bg-yellow-d hover:text-black !important`}
      >
        <a
          className="flex items-center p-2 mt-3 mb-3 text-gray-100 bg-gray-700 bg-opacity-25 
          2xl:py-2
          2xl:mt-4 
          2xl:mb-6 
          "
          href="/dashboard/products"
        >
          <GiClothes className="text-3xl" />
          <span className="mx-3">Productos</span>
        </a>
      </nav>
      <nav
        className={`mt-1 2xl:mt-6 flex justify-center transition duration-500 ${
          location.pathname === "/dashboard/my-players"
            ? "bg-gray text-white"
            : ""
        }  hover:bg-yellow-d hover:text-black !important`}
      >
        <a
          className="flex items-center p-2 mt-3 mb-3 text-gray-100 bg-gray-700 bg-opacity-25
          2xl:py-2
          2xl:mt-4 
          2xl:mb-6 "
          href="/dashboard/my-players"
        >
          <GiBabyfootPlayers className="text-2xl" />
          <span className="mx-3">Mis Jugadores</span>
        </a>
      </nav>

      <nav
        className={`mt-1 2xl:mt-6 flex justify-center transition duration-500 ${
          location.pathname === "/dashboard/myorders"
            ? "bg-gray text-white"
            : ""
        }  hover:bg-yellow-d hover:text-black !important`}
      >
        <a
          className="flex items-center py-2 mt-3 mb-3 text-gray-100 bg-gray-700 bg-opacity-25
          2xl:py-2
          2xl:mt-4 
          2xl:mb-6"
          href="/dashboard/myorders"
        >
          <LuUsers2 className="text-2xl" />
          <span className="mx-3 items-center justify-center">Mis pedidos</span>
        </a>
      </nav>
      <nav
        className={`mt-1 2xl:mt-6 flex justify-center transition duration-500 ${
          location.pathname === "/dashboard/my-memberships"
            ? "bg-gray text-white"
            : ""
        }  hover:bg-yellow-d hover:text-black !important`}
      >
        <a
          className="flex items-center p-2 mt-3 mb-3 text-gray-100 bg-gray-700 bg-opacity-25
          2xl:py-2
          2xl:mt-4 
          2xl:mb-6"
          href="/dashboard/my-memberships"
        >
          <AiFillStar className="text-2xl" />
          <span className="mx-3 items-center justify-center">
            Mis Suscripciones
          </span>
        </a>
      </nav>
    </>
  );

  const renderAdminLinks = () => (
    <>
      <nav
        className={`mt-1 2xl:mt-6 flex justify-center transition duration-500 ${
          location.pathname === "/dashboard/users" ? "bg-gray text-white" : ""
        }  hover:bg-yellow-d hover:text-black !important`}
      >
        <a
          className="flex items-center p-2 mt-3 mb-3 text-gray-100 bg-gray-700 bg-opacity-25
          2xl:py-2
          2xl:mt-6 
          2xl:mb-4 "
          href="/dashboard/users"
        >
          <LuUsers2 className="text-2xl" />
          <span className="mx-3 flex justify-center">Usuarios</span>
        </a>
      </nav>
      <nav
        className={`mt-1 2xl:mt-6 flex justify-center transition duration-500 ${
          location.pathname === "/dashboard/players" ? "bg-gray text-white" : ""
        } hover:bg-yellow-d hover:text-black !important`}
      >
        <a
          className="flex items-center p-2 mt-3 mb-3 text-gray-100 bg-gray-700 bg-opacity-25
          2xl:py-2
          2xl:mt-6 
          2xl:mb-4"
          href="/dashboard/players"
        >
          <GiBabyfootPlayers className="text-2xl" />
          <span className="mx-3 items-center justify-center hover:text-black">
            Jugadores
          </span>
        </a>
      </nav>

      <nav
        className={`mt-1 2xl:mt-6 flex justify-center transition duration-500
          ${
          location.pathname === "/dashboard/orders" ? "bg-gray text-white" : ""
        }  hover:bg-yellow-d hover:text-black !important`}
      >
        <a
          className="flex items-center py-2 mt-3 mb-3 text-gray-100 bg-gray-700 bg-opacity-25
          2xl:py-2
          2xl:mt-6 
          2xl:mb-4"
          href="/dashboard/orders"
        >
          <FaCartArrowDown className="text-2xl" />
          <span className="mx-3 items-center justify-center">Pedidos</span>
        </a>
      </nav>
      <nav
        className={`mt-1 2xl:mt-6 flex justify-center transition duration-500
          ${
          location.pathname === "/dashboard/memberships"
            ? "bg-gray text-white"
            : ""
        }  hover:bg-yellow-d hover:text-black !important`}
      >
        <a
          className="flex items-center p-2 mt-3 mb-3 text-gray-100 bg-gray-700 bg-opacity-25
          2xl:py-2
          2xl:mt-6 
          2xl:mb-4"
          href="/dashboard/memberships"
        >
          <AiFillStar className="text-2xl" />
          <span className="mx-3 items-center justify-center">
            Suscripciones
          </span>
        </a>
      </nav>
    </>
  );

  return (
    <>
    <div className="flex flex-col fixed">
      <button
        className=" p-2 text-gray-700 lg:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <IoIosArrowForward className="text-2xl" />
      </button>

      <div
        className={`${
          sidebarOpen ? "block" : "hidden"
        } fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      <div
        className={`${
          sidebarOpen ? "translate-x-0 ease-out" : "-translate-x-full ease-in"
        } fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-l lg:translate-x-0 lg:static lg:inset-0 h-screen`}
      >
        <div className="flex items-center justify-center mt-8">
          <div className="flex items-center">
            <img className="w-20 h-30 2xl:w-40 2xl:h-30" src={imagen} alt="Escudo" />
          </div>
        </div>

        <nav className="mt-1 flex justify-center hover:bg-yellow-d transition duration-500
        2xl:py-2
        2xl:mt-6 
        2xl:mb-4 ">
          <a
            className="flex items-center py-2 mt-3 mb-3 text-gray-100 bg-gray-700 bg-opacity-25"
            href="/"
          >
            <IoHomeOutline className="text-2xl" />
            <span className="mx-3">Home</span>
          </a>
        </nav>

        {isAdmin === "admin" ? renderAdminLinks() : renderUserLinks()}

        <nav className="2xl:mt-32 mt-9 justify-center flex items-center hover:bg-custom-blue hover:text-white transition duration-500">
          <a
            className="flex items-center p-2 mt-4 mb-4 2xl:mt-7 2xl:mb-7 text-gray-100 bg-gray-700 bg-opacity-25"
            href="/"
          >
            <button
              className="flex items-center py-2 mt-4 mb-4 text-gray-100 bg-gray-700 bg-opacity-25"
              onClick={handleLogout}
            >
              <i className="fa-solid fa-arrow-right-from-bracket fa-lg"></i>
              <span className="mx-3">Cerrar sesión</span>
            </button>
          </a>
        </nav>
      </div>
      </div>
    </>
  );
}

export default Sidebar;
