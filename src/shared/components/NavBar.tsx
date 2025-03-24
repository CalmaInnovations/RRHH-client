// components/Navbar/Navbar.tsx
import React from "react";

const Navbar: React.FC<{ isCollapsed: boolean }> = ({ isCollapsed }) => {
   return (
      <div
         className={`fixed top-0 ${
            isCollapsed ? "left-16" : "left-64"
         } right-0 h-20 bg-white shadow-md flex items-center justify-between px-6 transition-all duration-300`}
      >
         <div className="text-xl font-bold">Dashboard</div>
         <div className="flex items-center space-x-2 cursor-pointer hover:bg-hover-grey p-2 rounded-md">
            <div className="w-12 h-12 bg-gray-300 flex items-center justify-center">
               <img
                  src="https://muhimu.es/wp-content/uploads/2017/04/FRENTE-NITIDA.jpg"
                  alt="perfil"
                  className="rounded-md"
               />
            </div>
            <div>
               <p className="text-xs text-heading-fourth">Developer Frontend</p>
               <p className="text-sm font-medium">Carlos lora</p>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
