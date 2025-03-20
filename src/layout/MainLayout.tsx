import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/components/NavBar";
import Sidebar from "../shared/components/SideBar";

const MainLayout: React.FC = () => {
   const [isCollapsed, setIsCollapsed] = useState(true);
   const [isMobileOpen, setIsMobileOpen] = useState(false);
   const [manualOverride, setManualOverride] = useState(false);

   const toggleSidebar = () => {
      if (window.innerWidth < 768) {
         setIsMobileOpen((prev) => !prev);
      } else {
         if (isCollapsed) {
            setIsCollapsed(false);
            setManualOverride(true);
         } else {
            setIsCollapsed(true);
            setManualOverride(false);
         }
      }
   };

   const closeSidebarMobile = () => setIsMobileOpen(false);

   // Detectar cambio de tamaño de la ventana
   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth >= 768) {
            setIsMobileOpen(false); // Cerrar sidebar móvil al pasar a escritorio
         }
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, []);

   return (
      <div className="flex min-h-screen">
         <Sidebar
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
            isMobileOpen={isMobileOpen}
            closeSidebarMobile={closeSidebarMobile}
            manualOverride={manualOverride}
         />

         <Navbar
            isCollapsed={isCollapsed}
            isMobileOpen={isMobileOpen}
            toggleSidebar={toggleSidebar}
            setIsMobileOpen={setIsMobileOpen}
         />

         <main
            className={`flex-1 mt-20 p-6 transition-all duration-300 bg-bg ${
               window.innerWidth >= 768
                  ? isCollapsed
                     ? "md:ml-16"
                     : "md:ml-64"
                  : "ml-0"
            }`}
         >
            <Outlet />
         </main>
      </div>
   );
};

export default MainLayout;
