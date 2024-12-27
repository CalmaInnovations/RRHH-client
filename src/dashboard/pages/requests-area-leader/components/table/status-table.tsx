import {
   Box,
   Button,
} from "@mui/material";



import { useState } from "react";



export default function RequestsTable() {

   const [status, setStatus] = useState<string>(""); 

   const handleButtonClick = (status: string) => {
     setStatus(status); 
   };
   return (

      <Box sx={{ textAlign: "center"}}>
      {/* Botones */}
      <Button
        variant="contained"
        color={status === "Pendiente" ? "primary" : "inherit"}
        onClick={() => handleButtonClick("Pendiente")}
        sx={{ margin: "10px" }}
      >
        Pendiente
      </Button>
      <Button
        variant="contained"
        color={status === "Procesos" ? "primary" : "inherit"}
        onClick={() => handleButtonClick("Procesos")}
        sx={{ margin: "10px" }}
      >
        Procesos
      </Button>
      <Button
        variant="contained"
        color={status === "Completado" ? "primary" : "inherit"}
        onClick={() => handleButtonClick("Completado")}
        sx={{ margin: "10px" }}
      >
        Completado
      </Button>
    </Box>
   );
}
