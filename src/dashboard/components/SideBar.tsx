import {
   Box,
   Collapse,
   Divider,
   Drawer,
   List,
   ListItemButton,
   ListItemText,
   Toolbar,
   IconButton,
} from "@mui/material";

import {
   Dashboard,
   KeyboardArrowDown,
   KeyboardArrowRight,
   PersonSearch,
   PersonAdd,
} from "@mui/icons-material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const SideBar = ({ drawerWidth = 260 }) => {
   const [open, setOpen] = useState(true);
   const [openDrawer, setOpenDrawer] = useState(true);
   const [activeMenu, setActiveMenu] = useState("");
   const navigate = useNavigate();

   const handleClick = () => {
      setOpen(!open);
      if (!openDrawer) {
         setOpenDrawer(!openDrawer);
      }
   };
   const handleClickDrawer = () => {
      setOpenDrawer(!openDrawer);
      if (open) {
         setOpen(!open);
      }
   };

   const handleMenuClick = (menu: string, path: string) => {
      setActiveMenu(menu);
      navigate(path);
   };

   return (
      <Box
         component="nav"
         sx={{ width: openDrawer ? drawerWidth : 70, flexShrink: 0 }}
      >
         <Drawer
            variant="permanent"
            open
            sx={{
               display: "block",
               "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: openDrawer ? drawerWidth : 70, // Cambia el ancho del Drawer según el estado
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
               {/* Botón para abrir y cerrar el Sidebar */}
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
                     <KeyboardDoubleArrowLeftIcon
                        style={{ fontSize: "1.8rem" }}
                     />
                  ) : (
                     <KeyboardDoubleArrowRightIcon
                        style={{ fontSize: "1.8rem" }}
                     />
                  )}
               </IconButton>
            </Toolbar>

            <Divider />

            <List>
               <List
                  sx={{
                     width: "100%",
                     maxWidth: 300,
                     backgroundColor: "#2E384D",
                  }}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
               >
                  <NavLink
                     to="/"
                     style={{
                        textDecoration: "none",
                        color: "inherit",
                     }}
                  >
                     <ListItemButton
                        onClick={() => handleMenuClick("dashboard", "/")}
                        sx={{
                           pl: 3,
                           color:
                              activeMenu === "dashboard"
                                 ? "#FFFFFF"
                                 : "#CBD5E1",
                           backgroundColor:
                              activeMenu === "dashboard"
                                 ? "#3C4A63"
                                 : "transparent",
                           "&:hover": {
                              color: "#FFFFFF",
                           },
                        }}
                     >
                        <Dashboard
                           sx={{
                              marginRight: 1,
                              color:
                                 activeMenu === "dashboard"
                                    ? "#5BC1E6"
                                    : "#CBD5E1",
                           }}
                        />
                        <ListItemText
                           primary="DashBoard"
                           primaryTypographyProps={{
                              style: {
                                 fontSize: "14px",
                                 visibility: openDrawer ? "visible" : "hidden",
                              },
                           }}
                        />
                     </ListItemButton>
                  </NavLink>

                  <ListItemButton
                     onClick={handleClick}
                     sx={{ pl: 3, color: "#CBD5E1" }}
                  >
                     <PersonSearch sx={{ marginRight: 1 }} />
                     <ListItemText
                        primary="Reclutamiento"
                        primaryTypographyProps={{
                           style: {
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
                        <NavLink
                           to="/recruitment/requests-recruiter"
                           style={{
                              textDecoration: "none",
                              color: "inherit",
                           }}
                        >
                           <ListItemButton
                              onClick={() =>
                                 handleMenuClick(
                                    "solicitudes",
                                    "/recruitment/requests-recruiter"
                                 )
                              }
                              sx={{
                                 pl: 7,
                                 color:
                                    activeMenu === "solicitudes"
                                       ? "#FFFFFF"
                                       : "#CBD5E1",
                                 backgroundColor:
                                    activeMenu === "solicitudes"
                                       ? "#3C4A63"
                                       : "transparent",
                                 "&:hover": {
                                    color: "#FFFFFF",
                                 },
                              }}
                           >
                              <span style={{ marginRight: "10px" }}>-</span>
                              <ListItemText
                                 primary="Solicitudes"
                                 primaryTypographyProps={{
                                    style: {
                                       fontSize: "14px",
                                    },
                                 }}
                              />
                           </ListItemButton>
                        </NavLink>

                        <NavLink
                           to="/recruitment/call"
                           style={{
                              textDecoration: "none",
                              color: "inherit",
                           }}
                        >
                           <ListItemButton
                              onClick={() =>
                                 handleMenuClick(
                                    "convocatorias",
                                    "/recruitment/requests-recruiter"
                                 )
                              }
                              sx={{
                                 pl: 7,
                                 color:
                                    activeMenu === "convocatorias"
                                       ? "#FFFFFF"
                                       : "#CBD5E1",
                                 backgroundColor:
                                    activeMenu === "convocatorias"
                                       ? "#3C4A63"
                                       : "transparent",
                                 "&:hover": {
                                    color: "#FFFFFF",
                                 },
                              }}
                           >
                              <span style={{ marginRight: "10px" }}>-</span>
                              <ListItemText
                                 primary="Convocatorias"
                                 primaryTypographyProps={{
                                    style: {
                                       fontSize: "14px",
                                    },
                                 }}
                              />
                           </ListItemButton>
                        </NavLink>
                     </List>
                  </Collapse>

                  <NavLink
                     to="/requests"
                     style={{
                        textDecoration: "none",
                        color: "inherit",
                     }}
                  >
                     <ListItemButton
                        onClick={() =>
                           handleMenuClick("colaboradores", "/requests")
                        }
                        sx={{
                           pl: 3,
                           color:
                              activeMenu === "colaboradores"
                                 ? "#FFFFFF"
                                 : "#CBD5E1",
                           backgroundColor:
                              activeMenu === "colaboradores"
                                 ? "#3C4A63"
                                 : "transparent",
                           "&:hover": {
                              color: "#FFFFFF",
                           },
                        }}
                     >
                        <PersonAdd
                           sx={{
                              marginRight: 1,
                              color:
                                 activeMenu === "colaboradores"
                                    ? "#5BC1E6"
                                    : "#CBD5E1",
                           }}
                        />
                        <ListItemText
                           primary="Solicitar Colaborador"
                           primaryTypographyProps={{
                              style: {
                                 fontSize: "14px",
                                 visibility: openDrawer ? "visible" : "hidden",
                              },
                           }}
                        />
                     </ListItemButton>
                  </NavLink>
               </List>
            </List>
         </Drawer>
      </Box>
   );
};
