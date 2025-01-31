import {
   Button,
   Grid,
   TextField,
   Typography,
   Switch,
   FormControlLabel,
   Box,
   useTheme,
   useMediaQuery,
} from "@mui/material"; 
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface LoginPageProps {
   handleLogin: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ handleLogin }) => {
   const navigate = useNavigate();
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const theme = useTheme();
   const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Detectar pantallas pequeñas

   const handleLoginClick = () => {
      if (email === "demo@ejemplo.com" && password === "demo123") {
         handleLogin();
         navigate("/recruitment/requests-recruiter", { replace: true });
      } else if (email !== "" && password !== "") {
         alert("Credenciales incorrectas. Prueba con demo@ejemplo.com y demo123");
      } else {
         alert("Por favor, ingresa correo y contraseña.");
      }
   };

   return (
      <Box display="flex" flexDirection={isSmallScreen ? "column" : "row"} height="100vh">
         {/* Lado Izquierdo: Formulario */}
         <Box
            flex={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ backgroundColor: "#f9fafe" }}
            py={isSmallScreen ? 4 : 0} // Espaciado en pantallas pequeñas
         >
            <Box
               sx={{
                  width: "90%",
                  maxWidth: "400px",
                  p: 4,
                  backgroundColor: "#ffffff",
                  borderRadius: 2,
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
               }}
            >
               <Typography variant="h4" fontWeight="bold" color="#0066ff" textAlign="center" gutterBottom>
                  ¡Bienvenido de nuevo!
               </Typography>
               <Typography variant="body2" textAlign="center" sx={{ mb: 3 }}>
                  Ingresa tu correo y contraseña para acceder al portal.
               </Typography>
               <form>
                  <Grid container spacing={2}>
                     <Grid item xs={12}>
                        <TextField
                           label="Correo"
                           type="email"
                           placeholder="demo@ejemplo.com"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           fullWidth
                        />
                     </Grid>
                     <Grid item xs={12}>
                        <TextField
                           label="Contraseña"
                           type="password"
                           placeholder="demo123"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           fullWidth
                        />
                     </Grid>
                     <Grid item xs={12}>
                        <FormControlLabel
                           control={<Switch color="primary" />}
                           label="Recordar mis credenciales"
                        />
                     </Grid>
                     <Grid item xs={12}>
                        <Button
                           variant="contained"
                           fullWidth
                           sx={{
                              backgroundColor: "#0066ff",
                              ":hover": { backgroundColor: "#0052cc" },
                              color: "#ffffff",
                              fontWeight: "bold",
                           }}
                           onClick={handleLoginClick}
                        >
                           Acceder
                        </Button>
                     </Grid>
                  </Grid>
               </form>
            </Box>
         </Box>

         {/* Lado Derecho: Imagen */}
         <Box
            flex={1}
            sx={{
               backgroundImage: 'url("https://blogimage.vantagecircle.com/content/images/2022/04/metas-comunes-.png")',
               backgroundSize: "contain",  
               backgroundRepeat: "no-repeat",
               backgroundPosition: "center",
               minHeight: isSmallScreen ? "200px" : "100%", 
               height: isSmallScreen ? "auto" : "100vh", 
               backgroundColor: "#33b1ff", 
               position: "relative",
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               py: isSmallScreen ? 4 : 0, 
            }}
         >
            {/* Logo en la esquina superior derecha */}
            <Box
               component="img"
               src="https://fundacioncalma.org/wp-content/uploads/2024/08/logo-calma.png" 
               alt="Logo"
               sx={{
                  position: "absolute",
                  top: 10, 
                  right: 10, 
                  width: isSmallScreen ? 100 : 150, 
                  height: "auto", 
                  padding: 1, 
               }}
            />
         </Box>

         {/* Footer */}
         <Box
            position="absolute"
            bottom={0}
            width="100%"
            bgcolor="#f4f6f8"
            textAlign="center"
            py={1}
         >
            <Typography variant="body2" color="#666">
               © 2021 - {new Date().getFullYear()} Todos los derechos reservados por Fundación Calma
            </Typography>
         </Box>
      </Box>
   );
};
