import React, { useState, useEffect } from "react";
import { FaUserPlus, FaAngleRight } from "react-icons/fa6";
import { MdPersonSearch } from "react-icons/md";
import { IoMdSettings, IoIosLogOut } from "react-icons/io";
import logo from "../../assets/images/logo-calma.png";
import { NavLink } from "react-router-dom";

// Componente para el icono de cerrar moderno (X)
const CloseIcon = () => (
   <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
   >
      <path
         d="M1 1L15 15"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
      />
      <path
         d="M15 1L1 15"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
      />
   </svg>
);

interface SidebarProps {
   isCollapsed: boolean;
   setIsCollapsed: (value: boolean) => void;
   isMobileOpen: boolean;
   closeSidebarMobile: () => void;
   manualOverride: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
   isCollapsed,
   setIsCollapsed,
   isMobileOpen,
   closeSidebarMobile,
   manualOverride,
}) => {
   const [isRecruitmentOpen, setIsRecruitmentOpen] = useState(false);

   useEffect(() => {
      if (!isMobileOpen) {
         setIsRecruitmentOpen(false);
      }
   }, [isMobileOpen]);

   // Solo se activan los eventos de hover si NO hay override manual
   const handleMouseEnter = () => {
      if (window.innerWidth >= 768 && !manualOverride) {
         setIsCollapsed(false);
      }
   };
   const handleMouseLeave = () => {
      if (window.innerWidth >= 768 && !manualOverride) {
         setIsCollapsed(true);
      }
   };

   const handleRecruitmentClick = () => {
      setIsRecruitmentOpen((prev) => !prev);
   };

   return (
      <>
         {/* Overlay para móvil */}
         {isMobileOpen && (
            <div
               className="fixed inset-0 bg-black/50 md:hidden z-40"
               onClick={closeSidebarMobile}
            ></div>
         )}

         <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`
           fixed left-0 top-0 h-screen z-50 bg-secondary text-white p-2 flex flex-col transition-all duration-300
           ${isMobileOpen ? "w-64 translate-x-0" : "w-64 -translate-x-full"}
           ${
              !isMobileOpen && (isCollapsed ? "md:w-16" : "md:w-64")
           } md:translate-x-0
         `}
         >
            {/* Encabezado: botón de cerrar y logo */}
            <div className="my-5 flex items-center gap-4 px-2">
               {isMobileOpen && (
                  <button
                     className="flex items-center justify-center w-10 h-10 text-grey-light  bg-transparent dark:lg:bg-transparent bg-gray-100 hover:bg-secondary-dark rounded-lg z-[9999] lg:h-11 lg:w-11"
                     onClick={closeSidebarMobile}
                     aria-label="Close Sidebar"
                  >
                     <CloseIcon />
                  </button>
               )}
               {(!isCollapsed || isMobileOpen) && (
                  <img src={logo} alt="logo" className="w-24" />
               )}
            </div>

            {/* Menú Principal */}
            <ul className="flex-1 mt-5">
               {/* Ítem con submenú: Reclutamiento */}
               <li className="mb-2">
                  <div
                     className={`
                 flex items-center p-2 cursor-pointer rounded transition-colors duration-300
                 ${isCollapsed ? "justify-center" : "justify-start"}
                 ${
                    isRecruitmentOpen
                       ? "bg-secondary-dark text-light"
                       : "hover:bg-secondary-dark text-grey-light hover:text-light"
                 }
               `}
                     onClick={handleRecruitmentClick}
                  >
                     <MdPersonSearch
                        className={`size-6 ${
                           isRecruitmentOpen
                              ? "text-primary"
                              : "text-grey-light"
                        }`}
                     />
                     {!isCollapsed && (
                        <>
                           <span className="ml-2 text-sm">Reclutamiento</span>
                           <FaAngleRight
                              className={`
                       ml-auto size-4 transition-transform duration-300 mr-1
                       ${isRecruitmentOpen ? "rotate-90" : "rotate-0"}
                     `}
                           />
                        </>
                     )}
                  </div>

                  {/* Submenú */}
                  <div
                     className={`
                 overflow-hidden transition-all duration-500 ease-in-out
                 ${
                    isRecruitmentOpen
                       ? "max-h-40 opacity-100 bg-secondary-dark"
                       : "max-h-0 opacity-0"
                 }
               `}
                  >
                     <ul className="pl-8 my-4 space-y-6">
                        <li>
                           <NavLink
                              to="/requests-recruiter/list-request-recruiter"
                              className={({ isActive }) =>
                                 `block text-sm hover:text-light ${
                                    isActive
                                       ? "text-primary"
                                       : "text-grey-light"
                                 }`
                              }
                           >
                              Solicitudes
                           </NavLink>
                        </li>
                        <li>
                           <NavLink
                              to="/call/list-calls"
                              className={({ isActive }) =>
                                 `block text-sm hover:text-light ${
                                    isActive
                                       ? "text-primary"
                                       : "text-grey-light"
                                 }`
                              }
                           >
                              Convocatorias
                           </NavLink>
                        </li>
                     </ul>
                  </div>
               </li>

               {/* Otro ítem */}
               <li className="mb-2">
                  <NavLink
                     to="/requests-leader/list-request-leader"
                     className={({ isActive }) =>
                        `flex items-center p-2 rounded transition-colors duration-300 hover:bg-secondary-dark hover:text-light ${
                           isActive
                              ? "bg-secondary-dark text-light"
                              : "text-grey-light"
                        } ${isCollapsed ? "justify-center" : "justify-start"}`
                     }
                  >
                     {({ isActive }) => (
                        <>
                           <FaUserPlus
                              className={`size-6 ${
                                 isActive ? "text-primary" : "text-grey-light"
                              }`}
                           />
                           {!isCollapsed && (
                              <span className="ml-2 text-sm">
                                 Solicitar Colaborador
                              </span>
                           )}
                        </>
                     )}
                  </NavLink>
               </li>
            </ul>

            {/* Sección inferior */}
            <ul className="mt-auto">
               <li className="mb-2">
                  <a
                     href="#"
                     className={`
                 flex items-center p-3 bg-grey-blue hover:bg-secondary rounded-md
                 ${isCollapsed ? "justify-center" : "justify-start"}
               `}
                  >
                     <IoMdSettings className="size-6 text-primary" />
                     {!isCollapsed && (
                        <span className="ml-2 text-sm">Configuración</span>
                     )}
                  </a>
               </li>
               <li>
                  <a
                     href="#"
                     className={`
                 flex items-center p-3 bg-grey-blue hover:bg-secondary rounded-md
                 ${isCollapsed ? "justify-center" : "justify-start"}
               `}
                  >
                     <IoIosLogOut className="size-6 text-primary" />
                     {!isCollapsed && (
                        <span className="ml-2 text-sm">Cerrar Sesión</span>
                     )}
                  </a>
               </li>
            </ul>
         </div>
      </>
   );
};

export default Sidebar;
