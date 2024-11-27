import { Box, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { Call } from "../../request-area-recruiter/interfaces/calls-interface";

interface Props {
   call: Call;
}

// FIX: fix responsive

export const CardCall = ({ call }: Props) => {
   const navigation = useNavigate();

   return (
      <Card
         variant="outlined"
         style={{ cursor: "pointer", borderRadius: 15 }}
         onClick={() => navigation(`/recruitment/call/${call.idConvocatoria}`)}
      >
         <CardContent>
            <Typography
               component="span"
               gutterBottom
               sx={{ fontSize: 14 }}
               color="primary"
            >
               {call.reclutadorSenior}
            </Typography>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
               {call.nombrePuesto}
            </Typography>
            <Typography
               sx={{ mb: 1.5 }}
               color="#666666"
               component="h3"
               variant="h6"
            >
               {call.modalidad}
            </Typography>
            <Box
               sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 1,
               }}
            >
               <Box>
                  <Typography variant="h6" sx={{}} component="p">
                     {call.nombreArea}
                  </Typography>
                  <Typography
                     sx={{ fontSize: "14px", color: "#A3A3A3" }}
                     component="p"
                  >
                     {call.nombreSubArea}
                  </Typography>
               </Box>

               <Typography sx={{ fontWeight: 500 }} component="p">
                  Cantidad: {call.cantidad}
               </Typography>

               <Typography sx={{}} component="p">
                  {call.estadoSolicitud}
               </Typography>
            </Box>
         </CardContent>
      </Card>
   );
};
