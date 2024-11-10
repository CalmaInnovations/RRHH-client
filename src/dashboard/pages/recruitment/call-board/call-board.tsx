import { Box, Container, Typography } from "@mui/material";
import { DragAndDrop } from "./components/drag-and-drop";

export const CallBoard = () => {
   return (
      <Container sx={{ marginTop: 3 }}>
         <Typography
            variant="h4"
            sx={{ marginBottom: ".5rem", fontWeight: "500" }}
            component="h1"
         >
            Desarrollador Frontend
         </Typography>

         <Box sx={{ display: "flex", alignItems: "center", marginBottom: 3 }}>
            <Typography variant="h5" component="h2">
               Practicante
            </Typography>

            <Typography
               sx={{
                  marginLeft: 2,
                  cursor: "pointer",
                  "&:hover": {
                     textDecoration: "underline",
                  },
               }}
               component="span"
               color="primary"
            >
               ver detalles
            </Typography>
         </Box>

         <Box
            sx={{
               display: "flex",
               justifyContent: "space-between",
               alignItems: "center",
            }}
         >
            <Box>
               <Typography variant="h6" sx={{}} component="p">
                  Tecnologia
               </Typography>
               <Typography
                  sx={{ fontSize: "14px", color: "#A3A3A3" }}
                  component="p"
               >
                  Desarrollo de Software
               </Typography>
            </Box>

            <Typography sx={{}} component="p">
               Cantidad: 3
            </Typography>

            <Typography sx={{}} component="p">
               Pendiente
            </Typography>
         </Box>

         {/* <Box sx={{ position: "absolute", top: 0, left: 0, overflowX: "auto" }}> */}
         <Box sx={{ marginTop: 2 }}>
            <DragAndDrop />
            {/* <OtherDrag /> */}
         </Box>
      </Container>
   );
};
