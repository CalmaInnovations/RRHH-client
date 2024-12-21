import { Box, Toolbar } from "@mui/material";
import { NavBar, SideBar ,SideBarResponsive} from "../components";
import { ReactNode, useEffect, useState } from "react";

interface PropChildren {
   children: ReactNode;
}

const drawerWidth = 260;

export const DashboardLayout = ({ children }: PropChildren) => {
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
   const [mobileOpen, setMobileOpen] = useState(false);

   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
   };
   
   useEffect(() => {
      const handleResize = () => {
         setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);
   return (
      <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#F5F7FF" }}>
         {/* NavBar */}
         <NavBar drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} />
         {/* Sidebar */}
         {windowWidth > 500 && <SideBar drawerWidth={drawerWidth} />}
         {windowWidth < 500 && <SideBarResponsive mobileOpen={mobileOpen}
            handleDrawerClose={handleDrawerToggle}
            drawerWidth={240}/>}

         <Box
            component="main"
            sx={{ flexGrow: 1, p: 1, backgroundColor: "inherit" }}
         >
            <Toolbar />

            {children}
         </Box>
      </Box>
   );
};
