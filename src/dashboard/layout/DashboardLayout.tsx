import { Box, Toolbar } from "@mui/material";
import { NavBar, SideBar } from "../components";
import { ReactNode } from "react";

interface PropChildren {
    children: ReactNode;
}

const drawerWidth = 240;

export const DashboardLayout = ({ children }: PropChildren) => {
    return (
        <Box sx={{ display: "flex" }}>
            {/* NavBar */}
            <NavBar drawerWidth={drawerWidth} />
            {/* Sidebar */}
            <SideBar drawerWidth={drawerWidth} />
            <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
                <Toolbar />

                {children}
            </Box>
        </Box>
    );
};
