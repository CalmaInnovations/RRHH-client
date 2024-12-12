import { useEffect, useState } from "react";
import { Box, Chip } from "@mui/material";
import { Area } from "../interface/area-interface";
import { getAllAreaService } from "../services/area-service";

export const Tags = () => {
   const [areas, setAreas] = useState<Area[]>([]);

   const handleGetAllAreaService = async () => {
      try {
         // Aquí, obtenemos la respuesta completa sin hacer desestructuración
         const response = await getAllAreaService();
         setAreas(response); // Aquí, 'response' ya es un arreglo de áreas
         console.log(response); // Verifica el contenido de 'response'
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      handleGetAllAreaService();
   }, []);

   return (
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, my: 4 }}>
         {areas?.map((area) => (
            <Chip
               key={area.id}
               label={area.nombre}
               variant="outlined"
               sx={{
                  cursor: "pointer",
                  fontSize: 16,
                  color: "#9EA5B0",
                  borderRadius: 2,
                  border:0,
                  boxShadow: 2,
                  backgroundColor:"#FFFFFF",
                  px: 2,
                  py: 2.5,
                  "&:hover": { boxShadow: 4 ,backgroundColor:"#5BC1E6",color:"#FFFFFF" }
               }}
            />
         ))}
      </Box>
   );
};
