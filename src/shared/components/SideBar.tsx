import React, { useState } from "react";
import { FaAnglesLeft, FaUserPlus, FaAngleRight } from "react-icons/fa6";
import { MdPersonSearch } from "react-icons/md";
import { IoMdSettings, IoIosLogOut } from "react-icons/io";
import { FaRegCalendarCheck } from "react-icons/fa";
import logo from "../../assets/images/logo-calma.png";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC<{ isCollapsed: boolean; setIsCollapsed: (value: boolean) => void; }> = ({ isCollapsed, setIsCollapsed }) => {
    const [isRecruitmentOpen, setIsRecruitmentOpen] = useState(false);

    const handleRecruitmentClick = () => {
        if (isCollapsed) {
            setIsCollapsed(false);
        }
        setIsRecruitmentOpen(!isRecruitmentOpen);
    };

    return (
        <div className={`fixed left-0 top-0 h-screen ${isCollapsed ? "w-16" : "w-64"} bg-secondary text-white p-2 flex flex-col transition-all duration-300`}>
            {/* Logo y botón de minimizar */}
            <div className="flex justify-between items-center my-5">
                {!isCollapsed && <img src={logo} alt="logo" className="w-24 ml-4" />}
                <FaAnglesLeft
                    className={`size-5 text-grey-light cursor-pointer transform transition-transform duration-300 hover:scale-110 ${isCollapsed ? "mx-auto rotate-180" : "ml-auto mr-3 rotate-0"}`}
                    onClick={() => setIsCollapsed(!isCollapsed)}
                />
            </div>

            {/* Menú Principal */}
            <ul className="flex-1 mt-5">
                {/* Reclutamiento con submenú */}
                <li className="mb-2">
                    <div className={`flex items-center p-2 cursor-pointer rounded transition-colors duration-300 ${isCollapsed ? "justify-center" : "justify-start"} ${isRecruitmentOpen ? "bg-secondary-dark text-light" : "hover:bg-secondary-dark text-grey-light hover:text-light"}`} onClick={handleRecruitmentClick}>
                        <MdPersonSearch className={`size-6 ${isRecruitmentOpen ? "text-primary" : "text-grey-light"}`} />
                        {!isCollapsed && <><span className="ml-2 text-sm">Reclutamiento</span><FaAngleRight className={`ml-auto size-4 transition-transform duration-300 mr-1 ${isRecruitmentOpen ? "rotate-90" : "rotate-0"}`} /></>}
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isRecruitmentOpen && !isCollapsed ? "max-h-40 opacity-100 bg-secondary-dark" : "max-h-0 opacity-0"}`}>
                        <ul className="pl-8 my-4 space-y-6">
                            <li>
                                <NavLink to="/requests-recruiter/list-request-recruiter" className={({ isActive }) => `block text-sm hover:text-light ${isActive ? "text-primary" : "text-grey-light"}`}>- Solicitudes</NavLink>
                            </li>
                            <li>
                                <NavLink to="/call/list-calls" className={({ isActive }) => `block text-sm hover:text-light ${isActive ? "text-primary" : "text-grey-light"}`}>- Convocatorias</NavLink>
                            </li>
                        </ul>
                    </div>
                </li>
                
                
                {/* Solicitar Colaborador */}
                <li className="mb-2">
                    <NavLink to="/requests-leader/list-request-leader" className={({ isActive }) => `flex items-center p-2 rounded transition-colors duration-300 hover:bg-secondary-dark hover:text-light ${isActive ? "bg-secondary-dark text-light" : "text-grey-light"} ${isCollapsed ? "justify-center" : "justify-start"}`}>
                        {({ isActive }) => (
                            <>
                                <FaUserPlus className={`size-6 ${isActive ? "text-primary" : "text-grey-light"}`} />
                                {!isCollapsed && <span className="ml-2 text-sm">Solicitar Colaborador</span>}
                            </>
                        )}
                    </NavLink>
                </li>


                {/* Nueva opción: Asistencias */}
                <li className="mb-2">
                    <NavLink to="/attendance" className={({ isActive }) => `flex items-center p-2 rounded transition-colors duration-300 hover:bg-secondary-dark hover:text-light ${isActive ? "bg-secondary-dark text-light" : "text-grey-light"} ${isCollapsed ? "justify-center" : "justify-start"}`}>
                        {({ isActive }) => (
                            <>
                                <FaRegCalendarCheck className={`size-6 ${isActive ? "text-primary" : "text-grey-light"}`} />
                                {!isCollapsed && <span className="ml-2 text-sm">Asistencias</span>}
                            </>
                        )}
                    </NavLink>
                </li>
            </ul>
            
            {/* Configuración y Cerrar Sesión */}
            <ul className="mt-auto">
                <li className="mb-2">
                    <a href="#" className={`flex items-center p-3 bg-grey-blue hover:bg-secondary rounded-md ${isCollapsed ? "justify-center" : "justify-start"}`}>
                        <IoMdSettings className="size-6 text-primary" />
                        {!isCollapsed && <span className="ml-2 text-sm">Configuración</span>}
                    </a>
                </li>
                <li>
                    <a href="#" className={`flex items-center p-3 bg-grey-blue hover:bg-secondary rounded-md ${isCollapsed ? "justify-center" : "justify-start"}`}>
                        <IoIosLogOut className="size-6 text-primary" />
                        {!isCollapsed && <span className="ml-2 text-sm">Cerrar Sesión</span>}
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;