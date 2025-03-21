import React from "react";

// Ícono moderno de hamburguesa
const HamburgerIcon = () => (
   <svg
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
   >
      <path
         fillRule="evenodd"
         clipRule="evenodd"
         d="M0.583252 1C0.583252 0.585788 0.919038 0.25 1.33325 0.25H14.6666C15.0808 0.25 15.4166 0.585786 15.4166 1C15.4166 1.41421 15.0808 1.75 14.6666 1.75L1.33325 1.75C0.919038 1.75 0.583252 1.41422 0.583252 1ZM0.583252 11C0.583252 10.5858 0.919038 10.25 1.33325 10.25L14.6666 10.25C15.0808 10.25 15.4166 10.5858 15.4166 11C15.4166 11.4142 15.0808 11.75 14.6666 11.75L1.33325 11.75C0.919038 11.75 0.583252 11.4142 0.583252 11ZM1.33325 5.25C0.919038 5.25 0.583252 5.58579 0.583252 6C0.583252 6.41421 0.919038 6.75 1.33325 6.75L7.99992 6.75C8.41413 6.75 8.74992 6.41421 8.74992 6C8.74992 5.58579 8.41413 5.25 7.99992 5.25L1.33325 5.25Z"
         fill="currentColor"
      ></path>
   </svg>
);

interface NavbarProps {
   isCollapsed: boolean;
   isMobileOpen: boolean;
   toggleSidebar: () => void;
   setIsMobileOpen: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isCollapsed, toggleSidebar }) => {
   return (
      <div
         className={`fixed top-0 w-full md:w-auto ${
            isCollapsed ? "md:left-16" : "md:left-64"
         } right-0 h-20 bg-white shadow-md flex items-center justify-between px-6 transition-all duration-300`}
      >
         {/* Botón para desplegar sidebar y Título */}
         <div className="flex items-center gap-4">
            <button
               onClick={toggleSidebar}
               aria-label="Toggle sidebar"
               className="p-2 ml-2 flex items-center justify-center w-10 h-10 text-gray-500 border border-gray-200 rounded-lg lg:h-11 lg:w-11 transition-all duration-300 ease-in-out hover:bg-gray-200"
            >
               <HamburgerIcon />
            </button>

            <span className="text-xl font-bold whitespace-nowrap">
               Dashboard
            </span>
         </div>

         {/* Perfil fijo con margen derecho */}
         <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-md mr-6 lg:mr-10">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-300 flex items-center justify-center rounded-full overflow-hidden">
               <img
                  src="https://muhimu.es/wp-content/uploads/2017/04/FRENTE-NITIDA.jpg"
                  alt="perfil"
                  className="object-cover w-full h-full"
               />
            </div>
            <div className="hidden md:flex flex-col">
               <p className="text-xs text-gray-500">Developer Frontend</p>
               <p className="text-sm font-medium">Carlos Lora</p>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
