// components/Navbar/Navbar.tsx
import React from "react";
import { FaAnglesLeft } from "react-icons/fa6";


const Navbar: React.FC<{
  isCollapsed: boolean;
  setIsSidebarOpen: (value: boolean) => void;
}> = ({ isCollapsed, setIsSidebarOpen }) => {
  return (
    <div
      className={`top-0 ${
        isCollapsed ? "md:left-16" : "md:left-64"
      } right-0 h-20 bg-white border-b-4 border-drop-border flex items-center justify-between px-6 transition-all duration-300 left-0`}
    >
      <div className="text-xl font-bold">
        {/* boton para abrir el modal */}
        <FaAnglesLeft
          className="size-5 text-grey-dark-ligth cursor-pointer md:hidden"
          onClick={() => setIsSidebarOpen(true)}
        />
      </div>
      <div className="flex items-center space-x-2 cursor-pointer hover:bg-hover-grey p-2 rounded-md">
        <div className="w-12 h-12 bg-gray-300 flex items-center justify-center">
          <img
            src="https://muhimu.es/wp-content/uploads/2017/04/FRENTE-NITIDA.jpg"
            alt="perfil"
            className="rounded-md"
          />
        </div>
        <div>
          <p className="text-xs text-grey">Developer Frontend</p>
          <p className="text-sm font-medium">Carlos lora</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
