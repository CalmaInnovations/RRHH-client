import React, { useState, useEffect } from "react";
import {
   Grid,
   Select,
   MenuItem,
   FormControl,
   InputLabel,
   Button,
   SelectChangeEvent,
   Snackbar,
   Alert,
   CircularProgress,
} from "@mui/material";
import MainModal from "./MainModal";
import { useGetReclutadoresQuery } from "../../../redux/services/recruiter/recruiter-api";

interface ModalAssingRecruiterProps {
   open: boolean;
   handleClose: () => void;
   requestId?: number;
   refetch?: () => void;
}

export const ModalAssingRecruiter: React.FC<ModalAssingRecruiterProps> = ({
   open,
   handleClose,
   requestId,
   refetch,
}) => {
   const [recruiterType, setRecruiterType] = useState<string>("");
   const [selectedRecruiter, setSelectedRecruiter] = useState<string>("");
   const { data, isLoading } = useGetReclutadoresQuery();
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: "success" | "error" }>(
      {
         open: false,
         message: "",
         severity: "success",
      }
   );

   useEffect(() => {
      if (!requestId) {
         console.error("Error: No se recibió el ID de la solicitud.");
      }
   }, [requestId]);

   const handleRecruiterTypeChange = (event: SelectChangeEvent<string>) => {
      setRecruiterType(event.target.value);
      setSelectedRecruiter(""); // Reiniciar selección de reclutador
   };

   const handleRecruiterChange = (event: SelectChangeEvent<string>) => {
      setSelectedRecruiter(event.target.value);
   };

   const handleAssignRecruiter = async () => {
      if (!requestId) {
         setSnackbar({ open: true, message: "Error: No se recibió el ID de la solicitud.", severity: "error" });
         return;
      }
      if (!recruiterType) {
         setSnackbar({ open: true, message: "Selecciona un tipo de reclutador.", severity: "error" });
         return;
      }
      if (!selectedRecruiter) {
         setSnackbar({ open: true, message: "Selecciona un reclutador antes de asignar.", severity: "error" });
         return;
      }
      setIsSubmitting(true);
      try {
         console.log("Enviando solicitud a la API con ID:", requestId);
         const response = await fetch(`http://localhost:8080/api/SolicitudColaborador/convertir-solicitud/${requestId}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ reclutadorId: Number(selectedRecruiter) }),
         });
         
         if (!response.ok) throw new Error(`Error ${response.status}: ${await response.text()}`);
         
         console.log("Solicitud enviada correctamente");
         setSnackbar({ open: true, message: "Solicitud convertida con éxito.", severity: "success" });
         handleClose();
         refetch?.();
         console.log("Refetch ejecutado");
      } catch (error) {
         console.error("Error al asignar reclutador:", error);
         setSnackbar({ open: true, message: "Error al asignar. Verifica la consola.", severity: "error" });
      } finally {
         setIsSubmitting(false);
      }
   };

   return (
      <MainModal open={open} handleClose={handleClose} title="Asignar Reclutador">
         <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12}>
               <FormControl fullWidth>
                  <InputLabel id="recruiter-label">Tipo de Reclutador</InputLabel>
                  <Select labelId="recruiter-label" value={recruiterType} onChange={handleRecruiterTypeChange}>
                     <MenuItem value="senior">Reclutador Senior</MenuItem>
                     <MenuItem value="general">Reclutador General</MenuItem>
                  </Select>
               </FormControl>
            </Grid>

            <Grid item xs={12}>
               <FormControl fullWidth>
                  <InputLabel id="position-label">
                     {recruiterType === "senior" ? "Reclutadores Senior" : "Reclutadores Generales"}
                  </InputLabel>
                  <Select labelId="position-label" value={selectedRecruiter} onChange={handleRecruiterChange} disabled={isLoading || !recruiterType}>
                     {recruiterType === "senior" &&
                        data?.reclutadoresSenior.map((recruiter) => (
                           <MenuItem key={recruiter.id} value={recruiter.id.toString()}>
                              {recruiter.nombre}
                           </MenuItem>
                        ))}
                     {recruiterType === "general" &&
                        data?.reclutadoresGeneral.map((recruiter) => (
                           <MenuItem key={recruiter.id} value={recruiter.id.toString()}>
                              {recruiter.nombre}
                           </MenuItem>
                        ))}
                  </Select>
               </FormControl>
            </Grid>

            <Grid item xs={12}>
               <Button fullWidth variant="contained" sx={{ color: "white", backgroundColor: "#5BC1E6" }} onClick={handleAssignRecruiter} disabled={isSubmitting}>
                  {isSubmitting ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Asignar"}
               </Button>
            </Grid>
         </Grid>

         {/* Snackbar para mensajes de éxito o error */}
         <Snackbar open={snackbar.open} autoHideDuration={4000} onClose={() => setSnackbar({ ...snackbar, open: false })}>
            <Alert severity={snackbar.severity}>{snackbar.message}</Alert>
         </Snackbar>
      </MainModal>
   );
};
 