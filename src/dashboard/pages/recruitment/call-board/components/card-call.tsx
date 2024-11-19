import { Box, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router";

export const CardCall = () => {
   const navigation = useNavigate();

   return (
      <Card
         variant="outlined"
         style={{ cursor: "pointer", borderRadius: 15 }}
         onClick={() => navigation("/recruitment/call/123")}
      >
         <CardContent>
            <Typography
               component="span"
               gutterBottom
               sx={{ fontSize: 14 }}
               color="primary"
            >
               Valeria Montoya
            </Typography>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
               Desarollador Frontend
            </Typography>
            <Typography
               sx={{ mb: 1.5 }}
               color="#666666"
               component="h3"
               variant="h6"
            >
               Practicante
            </Typography>
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

               <Typography sx={{ fontWeight: 500 }} component="p">
                  Cantidad: 3
               </Typography>

               <Typography sx={{}} component="p">
                  Pendiente
               </Typography>
            </Box>
         </CardContent>
      </Card>
   );
};
