import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import "../styles/forms.css";

interface PropsNextModal {
   onClose: () => void;
}

export function SuccessfulSending({ onClose }: PropsNextModal) {
   return (
      <Box
         sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "2em",
            padding: "0.5em",
         }}
      >
         <Typography
            id="transition-modal-title"
            variant="h4"
            component="h2"
            sx={{ color: "#2AC22C" }}
            fontWeight="bold"
         >
            Envío Exitoso
         </Typography>
         <Typography id="transition-modal-title" variant="body1" component="h2">
            La solicitud ha sido enviada correctamente. El área de reclutamiento
            se comunicará pronto con usted.
         </Typography>

         <footer>
            <Button
               variant="contained"
               onClick={onClose}
               sx={{ color: "white" }}
            >
               Aceptar
            </Button>
         </footer>
      </Box>
   );
}
