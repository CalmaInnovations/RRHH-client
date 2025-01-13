import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useState } from "react";

interface LoginPageProps {
   handleLogin: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ handleLogin }) => {
   const navigate = useNavigate();
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const handleLoginClick = () => {
      if (email === "demo@ejemplo.com" && password === "demo123") {
         handleLogin();
         // navigate("/recruitment/requests-recruiter", { replace: true });
      } else if (email !== "" && password !== "") {
         alert(
            "Credenciales incorrectas. Prueba con demo@ejemplo.com y demo123"
         );
      } else {
         alert("Por favor, ingresa correo y contraseña.");
      }
   };

   return (
      <AuthLayout title="Login">
         <form>
            <Grid container>
               <Grid item xs={12} sx={{ mt: 2 }}>
                  <TextField
                     label="Correo"
                     type="Email"
                     placeholder="correo@gmial.com"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     fullWidth
                  />
               </Grid>
               <Grid item xs={12} sx={{ mt: 2 }}>
                  <TextField
                     label="Contrasena"
                     type="password"
                     placeholder="Contrasena"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     fullWidth
                  />
               </Grid>
               <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                  <Grid item xs={12} sm={6}>
                     <Button
                        variant="contained"
                        fullWidth
                        onClick={handleLoginClick}
                     >
                        Login
                     </Button>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                     <Button variant="contained" fullWidth>
                        <Google />
                        <Typography sx={{ ml: 1 }}>Google</Typography>
                     </Button>
                  </Grid>
               </Grid>
               <Grid container direction="row" justifyContent="end">
                  <Link
                     component={RouterLink}
                     color="inherit"
                     to="/auth/register"
                  >
                     Crear una cuenta
                  </Link>
               </Grid>
            </Grid>
         </form>
      </AuthLayout>
   );
};
