import { Box, Button, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { NavLink } from "react-router-dom";

export const DashboardView = () => {
   return (
      <Box sx={{ mt: 4 }}>
         <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={4}>
               <Paper elevation={3} sx={{ padding: 2, height: 250 }}>
                  <Typography variant="h4">Solicitudes</Typography>
                  <Typography variant="subtitle1">
                     4 nuevas solicitudes de colaboradores
                  </Typography>
                  <NavLink
                     to="/requests"
                     style={{
                        textDecoration: "none",
                        color: "inherit",
                     }}
                  >
                     <Button variant="contained">VER SOLICITUDES</Button>
                  </NavLink>
               </Paper>
            </Grid>
            <Grid size={4}>
               <Paper elevation={3} sx={{ padding: 2, height: 250 }}>
                  <Typography variant="h4">Postulaciones</Typography>
                  <Typography variant="subtitle1">
                     6 nuevos postulantes
                  </Typography>
                  <Button variant="contained">VER POSTULANTES</Button>
               </Paper>
            </Grid>
            <Grid size={4}>
               <Paper elevation={3} sx={{ padding: 2, height: 250 }}>
                  <Typography variant="h4">Urgente</Typography>
                  <Typography variant="body1">
                     ¡Recuerda actualizar tu contraseña hasta antes del 24 de
                     Octubre!
                  </Typography>
               </Paper>
            </Grid>
         </Grid>
      </Box>
   );
};
