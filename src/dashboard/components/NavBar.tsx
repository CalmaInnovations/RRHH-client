import {
   AppBar,
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
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";


const settings = ["Mi Perfil", "Salir"];

export const NavBar = ({ drawerWidth = 260 }) => {
   const [userName, setUserName] = useState("carlos lora");
   const [openSearch, setOpenSearch] = useState(false); // Estado para controlar la visibilidad del input de búsqueda
   const [searchTerm, setSearchTerm] = useState("");
   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
      null
   );

   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
   };

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
         setSearchTerm(""); // Limpiar el término de búsqueda cuando se cierra
      }
   };

   // funcion para tomar la inicial de su nombre y convertirlo en MAYUSCULA
   const getInitial = (name: string) => {
      const firstName = name.split(" ")[0];
      return firstName.charAt(0).toUpperCase();
   };

   return (
      <AppBar
         position="fixed"
         sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: `{sm: ${drawerWidth}px}`,
            backgroundColor: "#FFFFFF",
            boxShadow: "none",
         }}
      >
         <Toolbar>
            <Grid
               container
               direction="row"
               justifyContent="end"
               alignItems="center"
               gap={0.5}
            >
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
               {/* Campo de búsqueda visible cuando se hace clic en el icon */}
               {openSearch && (
                  <Box
                     sx={{
                        width: "20rem",
                        height: "90%",
                        padding: 1.6,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 2,
                        backgroundColor: "#FFFFFF",
                        boxShadow:"0px 0px 50px 0px rgba(82, 63, 105, 0.15)",
                        position: "absolute",
                        top: 65,
                        right: 0,
                        left: 1050,
                        zIndex: 10,
                     }}
                  >
                     <IconButton >
                        <SearchIcon sx={{ fontSize: "20px" ,color:"#A0A0B1"}} />
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
                                 borderColor: "none",
                              },
                              "&.Mui-focused fieldset": {
                                 borderColor: "transparent",
                              },
                              "& .MuiInputBase-input::placeholder": {
                                 color: "#A0A0B1",
                                 fontSize:"14px"
                              },
                           },
                        }}
                     />
                     {/* Botón de cerrar */}
                  </Box>
               )}
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
                  <NotificationsNoneIcon style={{ color: "#2E384D" }} />
               </Box>
               <Box
                  sx={{
                     flexGrow: 0,
                     backgroundColor: "#F3F6F9",
                     padding: 1,
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center",
                     borderRadius: 2,
                  }}
               >
                  <Box
                     sx={{
                        marginRight: "10px",
                        fontWeight: 600,
                        fontSize: 15,
                        color: "#9EA5B0",
                     }}
                  >
                     <span>{userName}</span>
                  </Box>
                  <Box
                     onClick={handleOpenUserMenu}
                     sx={{
                        p: 0,
                        backgroundColor: "#A3E0F5",
                        padding: 0.5,
                        borderRadius: 2,
                        fontSize: 22,
                        fontWeight: 900,
                        color: "#3DA6D6",
                        width: 40,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "centers",
                        cursor: "pointer",
                     }}
                  >
                     {/* <Avatar
                           alt="Remy Sharp"
                           src="/static/images/avatar/2.jpg"
                        /> */}
                     {getInitial(userName)}
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
