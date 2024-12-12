import { Box, Toolbar } from "@mui/material";
import { NavBar, SideBar } from "../components";
import { ReactNode } from "react";

interface PropChildren {
   children: ReactNode;
}

const drawerWidth = 260;

export const DashboardLayout = ({ children }: PropChildren) => {
   return (
      <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#F5F7FF" }}>
         {/* NavBar */}
         <NavBar drawerWidth={drawerWidth} />
         {/* Sidebar */}
         <SideBar drawerWidth={drawerWidth} />
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
