import { Box, Collapse, Divider, Drawer, List, ListItemButton, ListItemText, Toolbar, IconButton } from "@mui/material";
import { Dashboard, KeyboardArrowDown, KeyboardArrowRight, PersonSearch, PersonAdd } from "@mui/icons-material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import SettingsIcon from "@mui/icons-material/Settings";
import OutputIcon from "@mui/icons-material/Output";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

interface SideBarResponsiveProps {
   mobileOpen: boolean;
   handleDrawerClose: () => void;
   drawerWidth?: number;
 }
 
 export const SideBarResponsive: React.FC<SideBarResponsiveProps> = ({mobileOpen, handleDrawerClose, drawerWidth }) => {
   const [open, setOpen] = useState(false);
   const [openDrawer, setOpenDrawer] = useState(true);
   const [activeMenu, setActiveMenu] = useState("");
   const location = useLocation();
   
   const handleClick = () => {
      setOpen(!open);
      if (!openDrawer) setOpenDrawer(!openDrawer);
   };

   const handleClickDrawer = () => {
      setOpenDrawer(!openDrawer);
      if (open) setOpen(!open);
   };

   const handleMenuClick = (menu: string) => {
      setActiveMenu(menu);
   };


   useEffect(() => {
      const currentPath = location.pathname;
      if (currentPath === "/") setActiveMenu("dashboard");
      else if (currentPath.includes("requests-recruiter"))
         setActiveMenu("solicitudes");
      else if (currentPath.includes("call")) setActiveMenu("convocatorias");
      else if (currentPath.includes("requests")) setActiveMenu("colaboradores");
   }, [location]);

   return (
      <Box component="nav" sx={{ width: openDrawer ? drawerWidth : 70, flexShrink: 0, position: "fixed" }}>
         <Drawer
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerClose}
            ModalProps={{
               keepMounted: true, // Mejora el rendimiento en dispositivos móviles
            }}
            sx={{
                  display: { xs: "block", sm: "none" },
               "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: openDrawer ? drawerWidth : 70,
                  backgroundColor: "#2E384D",
                  color: "white",
                  transition: "width 0.3s",
                  overflow: "hidden",
               },
            }}
         >
            <Toolbar sx={{ gap: 1, justifyContent: "center" }}>
               <NavLink to="#" style={{ textDecoration: "none" }}>
                  <Box
                     component="img"
                     src="/public/logo-calma.png"
                     alt="Logo"
                     sx={{
                        width: 120,
                        height: 45,
                        mr: 12,
                        borderRadius: 2,
                        padding: 1,
                        visibility: openDrawer ? "visible" : "hidden",
                     }}
                  />
               </NavLink>
               <IconButton
                  onClick={handleClickDrawer}
                  sx={{
                     color: "#CBD5E1",
                     position: "absolute",
                     right: 10,
                     top: 10,
                  }}
               >
                  {openDrawer ? (
                     <KeyboardDoubleArrowLeftIcon style={{ fontSize: "1.8rem" }} />
                  ) : (
                     <KeyboardDoubleArrowRightIcon style={{ fontSize: "1.8rem" }} />
                  )}
               </IconButton>
            </Toolbar>

            <Divider />

            <List sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
               <Box>
                  <List
                     sx={{ width: "100%", maxWidth: 300, backgroundColor: "#2E384D" }}
                     component="nav"
                     aria-labelledby="nested-list-subheader"
                  >
                     {/* Menú principal */}
                     <NavLink
                        to="/"
                        style={{
                           textDecoration: "none",
                           color: "inherit",
                        }}
                     >
                        <ListItemButton
                           onClick={() => handleMenuClick("dashboard")}
                           sx={{
                              pl: 3,
                              color: activeMenu === "dashboard" ? "#FFFFFF" : "#CBD5E1",
                              backgroundColor: activeMenu === "dashboard" ? "#3C4A63" : "transparent",
                              "&:hover": { color: "#FFFFFF" },
                           }}
                        >
                           <Dashboard
                              sx={{
                                 marginRight: 1,
                                 color: activeMenu === "dashboard" ? "#5BC1E6" : "#CBD5E1",
                              }}
                           />
                           <ListItemText
                              primary="DashBoard"
                              primaryTypographyProps={{
                                 style: { fontSize: "14px", visibility: openDrawer ? "visible" : "hidden" },
                              }}
                           />
                        </ListItemButton>
                     </NavLink>

                     {/* Menú con submenú */}
                     <Box sx={{ backgroundColor: open ? "#273044" : "transparent" }}>
                        <ListItemButton onClick={handleClick} sx={{ pl: 3 }}>
                           <PersonSearch sx={{ marginRight: 1, color: open ? "#5BC1E6" : "#CBD5E1" }} />
                           <ListItemText
                              primary="Reclutamiento"
                              primaryTypographyProps={{
                                 style: {
                                    color: "#CBD5E1",
                                    fontSize: "14px",
                                    visibility: openDrawer ? "visible" : "hidden",
                                 },
                              }}
                           />
                           {open ? (
                              <KeyboardArrowDown
                                 style={{
                                    color: "#CBD5E1",
                                    visibility: openDrawer ? "visible" : "hidden",
                                 }}
                              />
                           ) : (
                              <KeyboardArrowRight
                                 style={{
                                    color: "#CBD5E1",
                                    visibility: openDrawer ? "visible" : "hidden",
                                 }}
                              />
                           )}
                        </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                           <List component="div" disablePadding>
                              <NavLink to="/recruitment/requests-recruiter" style={{ textDecoration: "none", color: "inherit" }}>
                                 <ListItemButton
                                    onClick={() => handleMenuClick("solicitudes")}
                                    sx={{
                                       pl: 7,
                                       color: activeMenu === "solicitudes" ? "#FFFFFF" : "#CBD5E1",
                                       backgroundColor: activeMenu === "solicitudes" ? "#3C4A63" : "transparent",
                                       "&:hover": { color: "#FFFFFF" },
                                    }}
                                 >
                                    <span style={{ marginRight: "10px" }}>-</span>
                                    <ListItemText
                                       primary="Solicitudes"
                                       primaryTypographyProps={{ style: { fontSize: "14px" } }}
                                    />
                                 </ListItemButton>
                              </NavLink>

                              <NavLink to="/recruitment/call" style={{ textDecoration: "none", color: "inherit" }}>
                                 <ListItemButton
                                    onClick={() => handleMenuClick("convocatorias")}
                                    sx={{
                                       pl: 7,
                                       color: activeMenu === "convocatorias" ? "#FFFFFF" : "#CBD5E1",
                                       backgroundColor: activeMenu === "convocatorias" ? "#3C4A63" : "transparent",
                                       "&:hover": { color: "#FFFFFF" },
                                    }}
                                 >
                                    <span style={{ marginRight: "10px" }}>-</span>
                                    <ListItemText
                                       primary="Convocatorias"
                                       primaryTypographyProps={{ style: { fontSize: "14px" } }}
                                    />
                                 </ListItemButton>
                              </NavLink>
                           </List>
                        </Collapse>
                     </Box>

                     {/* Menú principal */}
                     <NavLink to="/requests" style={{ textDecoration: "none", color: "inherit" }}>
                        <ListItemButton
                           onClick={() => handleMenuClick("colaboradores")}
                           sx={{
                              pl: 3,
                              color: activeMenu === "colaboradores" ? "#FFFFFF" : "#CBD5E1",
                              backgroundColor: activeMenu === "colaboradores" ? "#3C4A63" : "transparent",
                              "&:hover": { color: "#FFFFFF" },
                           }}
                        >
                           <PersonAdd
                              sx={{
                                 marginRight: 1,
                                 color: activeMenu === "colaboradores" ? "#5BC1E6" : "#CBD5E1",
                              }}
                           />
                           <ListItemText
                              primary="Solicitar Colaborador"
                              primaryTypographyProps={{
                                 style: { fontSize: "14px", visibility: openDrawer ? "visible" : "hidden" },
                              }}
                           />
                        </ListItemButton>
                     </NavLink>
                  </List>
               </Box>

               {/* Opciones de configuración y cerrar sesión */}
               <Box>
                  <List
                     sx={{ width: "100%", maxWidth: 300, backgroundColor: "#2E384D" }}
                     component="nav"
                     aria-labelledby="nested-list-subheader"
                  >
                     <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
                        <ListItemButton
                           sx={{
                              width: openDrawer ? "94%" : "80%",
                              borderRadius: 2,
                              pl: openDrawer ? 1.5 : 1.7,
                              ml: 1,
                              mb: 1.5,
                              color: "#FFFFFF",
                              backgroundColor: "#273044",
                              "&:hover": { backgroundColor: "#3C4A63" },
                           }}
                        >
                           <SettingsIcon sx={{ color: "#CBD5E1" }} />
                           <ListItemText
                              primary="Configuración"
                              primaryTypographyProps={{ style: { fontSize: "14px" } }}
                           />
                        </ListItemButton>
                     </NavLink>

                     <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
                        <ListItemButton
                           sx={{
                              width: openDrawer ? "94%" : "80%",
                              borderRadius: 2,
                              pl: openDrawer ? 1.5 : 1.7,
                              ml: 1,
                              mb: 1.5,
                              color: "#FFFFFF",
                              backgroundColor: "#273044",
                              "&:hover": { backgroundColor: "#3C4A63" },
                           }}
                        >
                           <OutputIcon sx={{ color: "#CBD5E1" }} />
                           <ListItemText
                              primary="Cerrar Sesión"
                              primaryTypographyProps={{ style: { fontSize: "14px" } }}
                           />
                        </ListItemButton>
                     </NavLink>
                  </List>
               </Box>
            </List>
         </Drawer>
      </Box>
   );
};
