import {
   AppBar,
   Avatar,
   Box,
   Divider,
   Grid,
   IconButton,
   Menu,
   MenuItem,
   TextField,
   Toolbar,
   Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
const settings = ["Mi Perfil", "Salir"];

interface NavBarProps {
   drawerWidth?: number;  // Puede ser opcional con el signo "?"
   handleDrawerToggle: () => void;  // Añadir onToggleSidebar como prop
   openDrawer: boolean; // Sidebar Drawer State
}

export const NavBar: React.FC<NavBarProps> = ({ drawerWidth = 260, handleDrawerToggle,openDrawer }) => {
   
   const [openDrawerNav, setOpenDrawerNav] = useState(false);
   const [openSearch, setOpenSearch] = useState(false); // estado para controlar la visibilidad del input de busqueda
   const [searchTerm, setSearchTerm] = useState("");

   const [openNotification, setOpenNotification] = useState(false); // estado para controlar la visibilidad de la notificación
   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
      null
   );

   const searchRef = useRef<HTMLDivElement>(null);
   const notificationRef = useRef<HTMLDivElement>(null);

   const handleCloseUserMenu = () => {
      setAnchorElUser(null);
   };

   // Función para manejar el cambio en el input de búsqueda
   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
   };

   // Función para abrir y cerrar el input de búsqueda
   const toggleSearch = () => {
      setOpenSearch(!openSearch);
      if (openSearch) {
         setSearchTerm("");
      }
   };

   const toggleNotification = () => {
      setOpenNotification(!openNotification);
   };

   // Detectar clics fuera de las áreas activas
   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (
            searchRef.current &&
            !searchRef.current.contains(event.target as Node)
         ) {
            setOpenSearch(false);
            setSearchTerm("");
         }
         if (
            notificationRef.current &&
            !notificationRef.current.contains(event.target as Node)
         ) {
            setOpenNotification(false);
         }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, []);

   return (
      <AppBar
         position="fixed"
         sx={{
            maxWidth: "100%",
            width: { sm: openDrawer ? `calc(100% - ${drawerWidth}px)`: "100%" },
            ml: `{sm: ${drawerWidth}px}`,
            backgroundColor: "#FFFFFF",
            boxShadow: "none",
         }}
      >
         <Toolbar
            sx={{width: {sm:'100%'}}}>
            
            <Grid
               container
               direction="row"
               justifyContent="end"
               alignItems="center"
               gap={5}
               maxWidth="100%"
            >
               <IconButton
                     onClick={() => {
                        setOpenDrawerNav(!openDrawerNav);
                        handleDrawerToggle();
                     }}
                     sx={{
                        display: { xs: "block", sm: "none" },
                        color: "#CBD5E1",
                        position: "relative",
                        right: 0,
                        top: 0,
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
                  
               {/* buscardor */}
               <Box sx={{ position: "relative" }} ref={searchRef}>


                  <Box
                     sx={{
                        flexGrow: 0,
                        padding: 1.6,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 2,
                        cursor: "pointer",
                        "&:hover": {
                           backgroundColor: "#F3F6F9",
                        },
                     }}
                     onClick={toggleSearch}
                  >
                     <SearchIcon style={{ color: "#2E384D" }} />
                  </Box>

                  
                  {/* Campo de busqueda visible cuando se hace clic en el icon */}
                  {openSearch && (
                     <Box
                        sx={{
                           width: "20rem",
                           height: "4rem",
                           padding: 1.6,
                           display: "flex",
                           justifyContent: "center",
                           alignItems: "center",
                           borderRadius: 2,
                           backgroundColor: "#FFFFFF",
                           boxShadow:
                              "0px 0px 50px 0px rgba(82, 63, 105, 0.15)",
                           position: "absolute",
                           top: "100%",
                           left: -280,

                           zIndex: 10,
                        }}
                     >
                        <IconButton>
                           <SearchIcon
                              sx={{ fontSize: "20px", color: "#A0A0B1" }}
                           />
                        </IconButton>
                        <TextField
                           autoFocus
                           variant="outlined"
                           value={searchTerm}
                           onChange={handleSearchChange}
                           fullWidth
                           placeholder="Buscar..."
                           sx={{
                              "& .MuiOutlinedInput-root": {
                                 "&:hover fieldset": {
                                    borderColor: "transparent",
                                 },
                                 "&.Mui-focused fieldset": {
                                    borderColor: "transparent",
                                 },
                                 "& .MuiInputBase-input::placeholder": {
                                    color: "#A0A0B1",
                                    fontSize: "14px",
                                 },
                              },
                           }}
                        />
                     </Box>
                  )}
               </Box>

               {/* chat grupal */}
               <Box
                  sx={{
                     flexGrow: 0,
                     padding: 1.6,
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center",
                     borderRadius: 2,
                     cursor: "pointer",
                     "&:hover": {
                        backgroundColor: "#F3F6F9",
                     },
                  }}
               >
                  <ChatBubbleOutlineIcon style={{ color: "#2E384D" }} />
               </Box>

               {/* Notificaciones */}
               <Box sx={{ position: "relative" }} ref={notificationRef}>
                  <Box
                     onClick={toggleNotification}
                     sx={{
                        flexGrow: 0,
                        padding: 1.6,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 2,
                        cursor: "pointer",
                        "&:hover": {
                           backgroundColor: "#F3F6F9",
                        },
                     }}
                  >
                     <NotificationsNoneIcon style={{ color: "#2E384D" }} />
                  </Box>
                  {/* Campo de notificaciones visible cuando se hace clic en el icon */}
                  {openNotification && (
                     <Box
                        sx={{
                           width: "20rem",

                           display: "flex",
                           flexDirection: "column",
                           borderRadius: 2,
                           backgroundColor: "#FFFFFF",
                           boxShadow:
                              "0px 0px 50px 0px rgba(82, 63, 105, 0.15)",
                           position: "absolute",
                           top: "100%",
                           left: -270,
                           zIndex: 10,
                        }}
                     >
                        {/* titulo */}
                        <Box
                           sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              borderTopLeftRadius: 4,
                              borderTopRightRadius: 4,
                              width: "100%",
                              height: 60,
                              backgroundColor: "#5BC1E6",
                              mb: 2,
                           }}
                        >
                           <Typography
                              fontSize={17}
                              fontWeight={500}
                              color="#FFFFFF"
                           >
                              Notificaciones
                           </Typography>
                        </Box>

                        {/* item */}
                        <Box
                           sx={{
                              display: "flex",
                              justifyContent: "start",
                              p: 2,
                              alignItems: "center",
                              width: "100%",
                              height: 60,
                              cursor: "pointer",
                              "&:hover": {
                                 backgroundColor: "#F3F6F9",
                              },
                           }}
                        >
                           <Avatar
                              alt="Remy Sharp"
                              sx={{
                                 width: 40,
                                 display: "flex",
                                 justifyContent: "center",
                                 alignItems: "center",
                                 borderRadius: 2,
                                 mr: 2,
                              }}
                              src="https://muhimu.es/wp-content/uploads/2017/04/FRENTE-NITIDA.jpg"
                           />
                           <Box>
                              <Typography
                                 fontSize={13}
                                 fontWeight={600}
                                 color="#2E384D"
                              >
                                 New report has been receive
                              </Typography>
                              <span
                                 style={{
                                    fontSize: 12,
                                    color: "#9EA5B0",
                                    fontWeight: 600,
                                 }}
                              >
                                 23 hrs ago
                              </span>
                           </Box>
                        </Box>
                     </Box>
                  )}
               </Box>

               {/* Avatar de usuario */}
               <Box
                  sx={{
                     flexGrow: 0,
                     px: 1,
                     py: 0.5,
                     my: 0.5,
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center",
                     borderRadius: 2,
                     cursor: "pointer",

                     "&:hover": {
                        backgroundColor: "#F3F6F9",
                     },
                  }}
               >
                  <Box
                     sx={{
                        padding: 0.5,
                        borderRadius: 2,
                        fontSize: 22,
                        fontWeight: 900,
                        color: "#3DA6D6",
                        width: 40,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                     }}
                  >
                     <Avatar
                        alt="Remy Sharp"
                        sx={{
                           width: 40,
                           display: "flex",
                           justifyContent: "center",
                           alignItems: "center",
                           borderRadius: 2,
                        }}
                        src="https://muhimu.es/wp-content/uploads/2017/04/FRENTE-NITIDA.jpg"
                     />
                  </Box>
                  <Box
                     sx={{
                        ml: "10px",
                        display: "flex",
                        flexDirection: "column",
                     }}
                  >
                     <span
                        style={{
                           fontWeight: 500,
                           fontSize: 11,
                           color: "#9EA5B0",
                        }}
                     >
                        Developer Frontend
                     </span>
                     <span
                        style={{
                           fontWeight: 600,
                           fontSize: 13.5,
                           color: "#2E384D",
                        }}
                     >
                        Carlos Lora
                     </span>
                  </Box>

                  <Menu
                     sx={{ mt: "45px" }}
                     id="menu-appbar"
                     anchorEl={anchorElUser}
                     anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                     }}
                     keepMounted
                     transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                     }}
                     open={Boolean(anchorElUser)}
                     onClose={handleCloseUserMenu}
                  >
                     {settings.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                           <Typography sx={{ textAlign: "center" }}>
                              {setting}
                           </Typography>
                        </MenuItem>
                     ))}
                  </Menu>
               </Box>
            </Grid>
         </Toolbar>
         <Divider />
      </AppBar>
   );
};
