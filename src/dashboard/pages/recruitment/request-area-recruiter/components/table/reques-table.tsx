import { useEffect, useState } from "react";
import { Pagination, Box, Typography, Grid, Button } from "@mui/material";
import { TableItem } from "./components/table-item";
import { Spinner } from "../../../../../components/spinner/spinner";
import { useGetSolicitudesQuery } from "../../../../../../redux/services/request/request-api";
import { ModalAssingRecruiter } from "../../../../../components/Modal/ModalAssingRecruiter";

export const RequestTable = () => {
  
   const [page, setPage] = useState<number>(1);
   const [filteredSolicitudes, setFilteredSolicitudes] = useState<any[]>([]);
   const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
   const pageSize = 2; // Tamaño fijo de la paginación

   const { data, isLoading: isLoadingGetSolicitudes } =
      useGetSolicitudesQuery({ pgNum: 1, pgSize: 100 }); // Traemos todas las solicitudes

   useEffect(() => {
      if (data?.solicitudes && Array.isArray(data.solicitudes)) {
         console.log("Solicitudes recibidas:", data.solicitudes);
         let solicitudesFiltradas = data.solicitudes.filter((sold) => sold.estado === "Pendiente");

         // Aplicar filtro por categoría si hay uno seleccionado
         if (selectedFilter) {
            solicitudesFiltradas = solicitudesFiltradas.filter((sold) => {
               console.log("Solicitud:", sold);
               return (sold.categoria ?? "") === selectedFilter;
            });
         }

         // Agregar claves únicas
         solicitudesFiltradas = solicitudesFiltradas.map((sold, index) => ({
            ...sold,
            uniqueKey: sold.id ?? `temp-${index}`,
         }));

         setFilteredSolicitudes(solicitudesFiltradas);
         setPage(1); // Reiniciar paginación cuando cambian los datos
      }
   }, [data, selectedFilter]);

   // Calculamos las páginas asegurando que no haya páginas vacías
   const totalPages = Math.max(1, Math.ceil(filteredSolicitudes.length / pageSize));

   return (
      <Box sx={{ padding: "2rem", ml: 6 }}>
         <Typography variant="h3" sx={{ marginBottom: "2rem" }} component="h1">
            Solicitudes
         </Typography>

         {/* Botones de filtro */}
         <Box sx={{ display: "flex", gap: 2, marginBottom: "2rem" }}>
            {["Todos", "Control y calidad", "Marketing", "Recursos Humanos", "Tecnología"].map(
               (category) => (
                  <Button
                     key={category}
                     variant="contained"
                     onClick={() => setSelectedFilter(category === "Todos" ? null : category)}
                     sx={{
                        backgroundColor: selectedFilter === category || (category === "Todos" && !selectedFilter) ? "#5BC1E6" : "white",
                        color: selectedFilter === category || (category === "Todos" && !selectedFilter) ? "white" : "black",
                        border: "1px solid #5BC1E6",
                        "&:hover": {
                           backgroundColor: selectedFilter === category || (category === "Todos" && !selectedFilter) ? "#" : "#",
                        },
                     }}
                  >
                     {category}
                  </Button>
               )
            )}
         </Box>

         {isLoadingGetSolicitudes ? (
            <Spinner className="mt-64" />
         ) : (
            <>
               <Grid container spacing={3}>
                  {filteredSolicitudes
                     .slice((page - 1) * pageSize, page * pageSize) // Paginar los datos filtrados
                     .map((sold) => (
                        <TableItem
                           sold={sold}
                           key={sold.uniqueKey} // Usar clave única
                           
                        />
                     ))}
               </Grid>

               {totalPages > 1 && (
                  <Pagination
                     count={totalPages}
                     page={page}
                     onChange={(_event, value) => setPage(value)}
                     sx={{
                        mt: 4,
                        display: "flex",
                        justifyContent: "right",
                        "& .MuiPaginationItem-root": {
                           borderRadius: "8px",
                           fontSize: "1rem",
                           transition: "all 0.3s ease",
                           "&.Mui-selected": {
                              backgroundColor: "#5BC1E6",
                              color: "white",
                              boxShadow: "0px 4px 10px hsla(211, 40.70%, 62.90%, 0.50)",
                           },                          
                        },
                     }}
                  />
               )}
            </>
         )}

         
      </Box>
   );
};
