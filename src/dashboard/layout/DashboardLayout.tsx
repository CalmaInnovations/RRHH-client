import { Box, Toolbar, Button } from "@mui/material";
import { NavBar, SideBar } from "../components";
import { ReactNode, useState } from "react";

interface PropChildren {
    children: ReactNode;
}



export const DashboardLayout = ({ children }: PropChildren) => {
    const [sidebarOpen, setSidebarOpen] = useState(true); 
    const drawerWidth = sidebarOpen ? 240 : 0;
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen); 
    };

    return (
        <Box sx={{ display: "flex", position: "relative",width: "100%" }}>
            <NavBar drawerWidth={drawerWidth} />

            <SideBar drawerWidth={drawerWidth} 
    drawerOpen={sidebarOpen} 
    toggleDrawer={toggleSidebar} />

            <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
                <Toolbar />
                {children}
            </Box>

            <Button
                onClick={toggleSidebar}
                sx={{
                    position: "fixed",
                    bottom: 20,
                    right: 20,
                    zIndex: 1000,
                    backgroundColor: 'primary.main',
                    color: "white",
                    padding: "10px 20px",
                    borderRadius: "20px",
                    display: "block", 
                    "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                    },
                    "@media (max-width: 600px)": {
                        display: "block", 
                        bottom: 10,
                        right: 10,
                        fontSize: "0.75rem",
                        padding: "8px 16px",
                    },
                }}
            >
                {sidebarOpen ? "Cerrar Sidebar" : "Abrir Sidebar"}
            </Button>
        </Box>
    );
};
