import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import "./modals.css";

export function SuccessfulSending() {
    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "2em",
                padding: "1em",
            }}
        >
            <Typography
                id="transition-modal-title"
                variant="h4"
                component="h2"
                color="green"
                fontWeight="bold"
            >
                Envío Exitoso
            </Typography>
            <Typography
                id="transition-modal-title"
                variant="body1"
                component="h2"
            >
                La solicitud ha sido enviada correctamente. El área de
                reclutamiento se comunicará pronto con usted.
            </Typography>

            <footer>
                <Button variant="contained">Aceptar</Button>
            </footer>
        </Box>
    );
}
