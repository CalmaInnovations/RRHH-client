import { useEffect, useState } from "react";
import { FaAnglesLeft, FaUserPlus, FaAngleRight } from "react-icons/fa6";
import { MdPersonSearch, MdClose } from "react-icons/md";
import { IoMdSettings, IoIosLogOut } from "react-icons/io";
import logo from "../../assets/images/logo-calma.png";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
}

function Sidebar({
  isCollapsed,
  setIsCollapsed,
  isSidebarOpen,
  setIsSidebarOpen,
}: SidebarProps) {
  const [isRecruitmentOpen, setIsRecruitmentOpen] = useState(false);

  const handleRecruitmentClick = () => {
    if (isCollapsed) {
      setIsCollapsed(false);
    }
    setIsRecruitmentOpen(!isRecruitmentOpen);
  };

  useEffect(() => {
    if (isSidebarOpen) {
      setIsCollapsed(false);
    }
  }, [isSidebarOpen, setIsCollapsed]);

  return (
    <>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <div
        className={`fixed left-0 top-0 h-screen bg-secondary text-white p-2 flex flex-col transition-all duration-300 z-10
    ${
      isSidebarOpen
        ? "opacity-100 translate-x-0"
        : "opacity-0 -translate-x-full"
    }
    md:flex md:opacity-100 md:translate-x-0 ${
      isCollapsed ? "md:w-16" : "md:w-64"
    }`}
      >
        <div
          className="absolute top-7 right-4 text-grey-light text-2xl md:hidden cursor-pointer"
          onClick={() => setIsSidebarOpen(false)}
        >
          <MdClose />
        </div>

        {/* Logo y botón de minimizar */}
        <div className="flex justify-between items-center my-5">
          {!isCollapsed && <img src={logo} alt="logo" className="w-24 ml-4" />}

          <FaAnglesLeft
            className={`hidden md:flex size-5 text-grey-light cursor-pointer transform transition-transform duration-300 hover:scale-110
            ${isCollapsed ? "mx-auto rotate-180" : "ml-auto mr-3 rotate-0"}`}
            onClick={() => setIsCollapsed(!isCollapsed)}
          />
        </div>

        {/* Menú Principal */}
        <ul className="flex-1 mt-5">
          {/* Menú con subMenus*/}
          <li className="mb-2">
            <div
              className={`flex items-center p-2 cursor-pointer rounded transition-colors duration-300
            ${isCollapsed ? "justify-center" : "justify-start"}
            ${
              isRecruitmentOpen
                ? "bg-secondary-dark text-light"
                : "hover:bg-secondary-dark text-grey-light hover:text-light"
            }`}
              onClick={handleRecruitmentClick}
            >
              <MdPersonSearch
                className={`md:size-6 size-5 ${
                  isRecruitmentOpen ? "text-primary" : "text-grey-light"
                } `}
              />
              {!isCollapsed && (
                <>
                  <span className="ml-2 md:text-sm text-[13px]">
                    Reclutamiento
                  </span>
                  <FaAngleRight
                    className={`ml-auto md:size-4 size-3.5 transition-transform duration-300 mr-1 ${
                      isRecruitmentOpen ? "rotate-90" : "rotate-0"
                    }`}
                  />
                </>
              )}
            </div>

            {/* Submenú con transición suave */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isRecruitmentOpen && !isCollapsed
                  ? "max-h-40 opacity-100 bg-secondary-dark"
                  : "max-h-0 opacity-0"
              }`}
            >
              <ul className="pl-8 my-4 space-y-6">
                <li>
                  <NavLink
                    to="/requests-recruiter/list-request-recruiter"
                    className={({ isActive }) =>
                      `block md:text-sm text-[13px] hover:text-light ${
                        isActive ? "text-primary" : "text-grey-light"
                      }`
                    }
                  >
                    - Solicitudes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/call/list-calls"
                    className={({ isActive }) =>
                      `block md:text-sm text-[13px] hover:text-light ${
                        isActive ? "text-primary" : "text-grey-light"
                      }`
                    }
                  >
                    - Convocatorias
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>

          {/* Menú */}
          <li className="mb-2">
            <NavLink
              to="/requests-leader/list-request-leader"
              className={({ isActive }) =>
                `flex items-center p-2 rounded transition-colors duration-300 hover:bg-secondary-dark hover:text-light ${
                  isActive ? "bg-secondary-dark text-light" : "text-grey-light"
                } ${isCollapsed ? "justify-center" : "justify-start"}`
              }
            >
              {({ isActive }) => (
                <>
                  <FaUserPlus
                    className={`md:size-6 size-5 ${
                      isActive ? "text-primary" : "text-grey-light"
                    }`}
                  />
                  {!isCollapsed && (
                    <span className="ml-2 md:text-sm text-[13px]">
                      Solicitar Colaborador
                    </span>
                  )}
                </>
              )}
            </NavLink>
          </li>
        </ul>

        {/* Configuración y Cerrar Sesión en la parte inferior */}
        <ul className="mt-auto">
          <li className="mb-2">
            <a
              href="#"
              className={`flex items-center p-3 bg-grey-blue hover:bg-secondary rounded-md
              ${isCollapsed ? "justify-center" : "justify-start"}`}
            >
              <IoMdSettings className="md:size-6 size-5 text-primary" />
              {!isCollapsed && (
                <span className="ml-2 md:text-sm text-[13px]">
                  Configuración
                </span>
              )}
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`flex items-center p-3 bg-grey-blue hover:bg-secondary rounded-md
              ${isCollapsed ? "justify-center" : "justify-start"}`}
            >
              <IoIosLogOut className="md:size-6 size-5 text-primary" />
              {!isCollapsed && (
                <span className="ml-2 md:text-sm text-[13px]">
                  Cerrar Sesión
                </span>
              )}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
