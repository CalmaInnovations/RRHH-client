import {
   Box,
   Collapse,
   Divider,
   Drawer,
   List,
   ListItemButton,
   ListItemIcon,
   ListItemText,
   Toolbar,
} from "@mui/material";

import {
   Assignment,
   Dashboard,
   ExpandLess,
   ExpandMore,
   Person,
   PersonAdd,
   PersonSearch,
} from "@mui/icons-material";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const SideBar = ({ drawerWidth = 240 }) => {
   const [open, setOpen] = useState(true);

   const handleClick = () => {
      setOpen(!open);
   };
   return (
      <Box component="nav" sx={{ width: drawerWidth, flexShrink: 0 }}>
         <Drawer
            variant="permanent"
            open
            sx={{
               display: "block",
               "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                  backgroundColor: "primary.main",
                  color: "white",
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
                        width: 150,
                        height: 50,
                        mr: 2,
                        color: "black",
                        borderRadius: 2,
                        padding: 1,
                     }}
                  />
               </NavLink>
            </Toolbar>
            <Divider />
            <List>
               {
                  <List
                     sx={{
                        width: "100%",
                        maxWidth: 300,
                        backgroundColor: "primary.main",
                     }}
                     component="nav"
                     aria-labelledby="nested-list-subheader"
                  >
                     <NavLink
                        to="/reclutamiento"
                        style={{
                           textDecoration: "none",
                           color: "inherit",
                        }}
                     >
                        <ListItemButton>
                           <ListItemIcon>
                              <Dashboard />
                           </ListItemIcon>
                           <ListItemText primary="DashBoard" />
                        </ListItemButton>
                     </NavLink>

                     <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                           <PersonSearch />
                        </ListItemIcon>
                        <ListItemText primary="Reclutamiento" />
                        {open ? <ExpandLess /> : <ExpandMore />}
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
                              <ListItemButton sx={{ pl: 4 }}>
                                 <ListItemIcon>
                                    <Person />
                                 </ListItemIcon>
                                 <ListItemText primary="Solicitudes" />
                              </ListItemButton>
                           </NavLink>
                           <NavLink
                              to="/recruitment/call"
                              style={{
                                 textDecoration: "none",
                                 color: "inherit",
                              }}
                           >
                              <ListItemButton sx={{ pl: 4 }}>
                                 <ListItemIcon>
                                    <Assignment />
                                 </ListItemIcon>
                                 <ListItemText primary="Convocatorias" />
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
                        <ListItemButton>
                           <ListItemIcon>
                              <PersonAdd />
                           </ListItemIcon>
                           <ListItemText primary="Solicitar Colaborador" />
                        </ListItemButton>
                     </NavLink>
                  </List>
               }
            </List>
         </Drawer>
      </Box>
   );
};
