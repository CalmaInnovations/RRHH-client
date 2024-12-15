import { Box, Button, Typography } from "@mui/material";

export const ContainerInductionPreview = () => {
   return (
      <Box>
         <Box>
            <Typography
               component="p"
               sx={{
                  marginBottom: 2,
               }}
            >
               [Nombre completo del postulante]
            </Typography>

            <Typography
               component="p"
               sx={{
                  marginBottom: 2,
               }}
            >
               [Correo electrónico]
            </Typography>

            <Typography
               component="p"
               sx={{
                  marginBottom: 2,
               }}
            >
               [Puesto]
            </Typography>

            <Typography
               component="p"
               sx={{
                  marginBottom: 2,
               }}
            >
               [Enlace de CV]
            </Typography>

            <Typography
               component="p"
               sx={{
                  marginBottom: 2,
               }}
            >
               Enlace de evidencia
            </Typography>

            <Typography
               component="p"
               sx={{
                  marginBottom: 2,
               }}
            >
               Coordinador de Onboarding
            </Typography>

            <Typography
               component="p"
               sx={{
                  marginBottom: 2,
               }}
            >
               Enlace de Meet
            </Typography>

            <Typography
               component="p"
               sx={{
                  marginBottom: 2,
               }}
            >
               Inducción: 30/11/24 a las 8:00
            </Typography>

            <Typography
               component="p"
               sx={{
                  marginBottom: 2,
               }}
            >
               Observaciones: No definido
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 4, mb: 2 }}>
               <Button
                  onClick={() => console.log("openModal(Postulante-Edit)")}
                  variant="contained"
                  sx={{ width: "100%", color: "white" }}
               >
                  Editar
               </Button>

               <Button
                  onClick={() => console.log("handleWithdrawProcessService()")}
                  variant="outlined"
                  sx={{
                     width: "100%",
                     color: "#35b1f6",
                  }}
               >
                  Enviar correo de inducción
               </Button>
            </Box>

            <Button
               onClick={() => console.log("Retirar Proceso")}
               variant="contained"
               sx={{
                  width: "100%",
                  color: "white",
                  backgroundColor: "#F63535",
               }}
            >
               Retirar del proceso
            </Button>
         </Box>
      </Box>
   );
};
