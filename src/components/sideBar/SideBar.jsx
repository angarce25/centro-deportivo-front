import { useState } from 'react';
/* import { IoHomeOutline } from "react-icons/io5"; */
import { CiShop } from "react-icons/ci";
import { GiClothes } from "react-icons/gi";
import { LuUsers2 } from "react-icons/lu";
import { RiTeamLine } from "react-icons/ri"
// import imagen from '../../../public/escudo.png'

function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <div
                className={`${sidebarOpen ? 'block' : 'hidden'} fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden`}
                onClick={() => setSidebarOpen(false)}
            ></div>
            <div
                className={`${sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'} fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-l lg:translate-x-0 lg:static lg:inset-0 h-screen`}
            >
                <div className="flex items-center justify-center mt-8">
                    <div className="flex items-center">
                        <img className='w-20 h-30' src='../../../public/escudo.png' />
                    </div>
                </div>
                    {/* <nav className="mt-10 flex justify-center hover:bg-yellow-d">
                    <a
                        className="flex items-center py-2 mt-4 text-gray-100 hover:bg-yellow-400 bg-gray-700 bg-opacity-25"
                        href="/"
                    > 
                       <IoHomeOutline />
                        <span className="mx-3">Home</span>
                    </a>
                </nav> */}
                <nav className="mt-10 flex justify-center hover:bg-yellow-d">
                    <a
                        className="flex items-center py-2 mt-4 text-gray-100 hover:bg-yellow-400 bg-gray-700 bg-opacity-25"
                        href="/dashboard/products"
                    > 
                      <CiShop />
                        <span className="mx-3 flex justify-center">Tienda</span>
                    </a>
                </nav>
                <nav className="mt-10 flex justify-center hover:bg-yellow-d">
                    <a
                        className="flex items-center py-2 mt-4 text-gray-100 hover:bg-yellow-400 bg-gray-700 bg-opacity-25"
                        href="/dashboard/products"
                    > 
                        <GiClothes />
                        <span className="mx-3">Productos</span>
                    </a>
                </nav>
                
                <nav className="mt-10 flex justify-center hover:bg-yellow-d">
                    <a
                        className="flex items-center py-2 mt-4 text-gray-100 hover:bg-yellow-400 bg-gray-700 bg-opacity-25"
                        href="/dashboard/my-players"
                    > 
                       <RiTeamLine />
                        <span className="mx-3">Jugadores(U)</span>
                    </a>
                </nav>
                <nav className="mt-10 flex justify-center hover:bg-yellow-d">
                    <a
                        className="flex items-center py-2 mt-4 text-gray-100 hover:bg-yellow-400 bg-gray-700 bg-opacity-25"
                        href="/dashboard/players"
                    > 
                       <RiTeamLine />
                        <span className="mx-3">Jugadores(A)</span>
                    </a>
                </nav>
                <nav className="mt-10 flex justify-center hover:bg-yellow-d">
                    <a
                        className="flex items-center py-2 mt-4 text-gray-100 hover:bg-yellow-400 bg-gray-700 bg-opacity-25"
                        href="/dashboard/users"
                    > 
                      <LuUsers2 />
                        <span className="mx-3">Usuarios(A)</span>
                    </a>
                </nav>
                <nav className="mt-10 flex justify-center">
                    <a
                        className="flex items-center py-2 mt-4 text-gray-100 hover:bg-yellow-400 bg-gray-700 bg-opacity-25"
                        href="/"
                    > 
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        <span className="mx-3">Cerrar sesión</span>
                    </a>
                </nav>
            </div>
        </>
    );
}

export default Sidebar;
