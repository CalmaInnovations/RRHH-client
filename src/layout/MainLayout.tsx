// components/Layout/Layout.tsx
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../shared/components/SideBar";
import Navbar from "../shared/components/NavBar";

const MainLayout: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Sidebar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className="flex-1 flex flex-col">
        <Navbar isCollapsed={isCollapsed} setIsSidebarOpen={setIsSidebarOpen} />
        <main
          className={`flex-1 p-6 transition-all duration-300 bg-bg ${
            isCollapsed ? "md:ml-16" : "md:ml-64"
          }`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
