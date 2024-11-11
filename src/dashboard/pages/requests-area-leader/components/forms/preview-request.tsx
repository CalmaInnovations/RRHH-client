import {
   Grid,
   Typography,
   TextField,
   OutlinedInput,
   InputAdornment,
   Button,
   FormControl,
   InputLabel,
   Select,
   MenuItem,
} from "@mui/material";
import { useState } from "react";
import { NewRequestItems } from "./models/new-request-items";

interface OnCloseProps {
   onClose: () => void;
}

export function PreviewRequest({
   position,
   quantity,
   type,
   softSkills,
   technicalKnowledge,
   functions,
   onClose,
}: NewRequestItems & OnCloseProps) {
   const [isEditable, setIsEditable] = useState(false);
   const [savedSuccessfully, setSavedSuccessfully] = useState(false);
   const [positionType, setPositionType] = useState(type || "Seleccionar");

   const handleEdit = () => {
      if (isEditable) {
         console.log("Datos guardados:", {
            position,
            quantity,
            type,
            softSkills,
            technicalKnowledge,
            functions,
         });

         setSavedSuccessfully(true);

         setTimeout(() => {
            setSavedSuccessfully(false);
         }, 2000);
      }
      setIsEditable(!isEditable);
   };

   const handlePositionTypeChange = (event: { target: { value: string } }) => {
      setPositionType(event.target.value);
   };

   return (
      <Grid container spacing={3}>
         {savedSuccessfully && (
            <Grid item xs={12}>
               <Typography variant="body1" color="green" align="center">
                  Guardado exitoso
               </Typography>
            </Grid>
         )}

         <Grid item xs={12}>
            <Typography
               variant="h5"
               component="h2"
               marginBottom={2}
               fontWeight="bold"
            >
               Solicitud de colaborador
            </Typography>
         </Grid>

         <Grid item xs={12} sm={6}>
            <TextField
               label="Nombre del puesto"
               value={position}
               fullWidth
               disabled={!isEditable}
               onChange={(e) => console.log(e.target.value)}
               variant="outlined"
               InputLabelProps={{ shrink: true }}
            />
         </Grid>

         <Grid item xs={12} sm={6}>
            <TextField
               label="Cantidad"
               value={quantity}
               fullWidth
               disabled={!isEditable}
               onChange={(e) => console.log(e.target.value)}
               variant="outlined"
               InputLabelProps={{ shrink: true }}
            />
         </Grid>

         <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
               <InputLabel shrink htmlFor="tipo-puesto-select">
                  Tipo de puesto
               </InputLabel>
               <Select
                  id="tipo-puesto-select"
                  value={positionType}
                  onChange={handlePositionTypeChange}
                  label="Tipo de puesto"
                  sx={{
                     color:
                        positionType === "Seleccionar"
                           ? "text.disabled"
                           : "text.primary",
                     "& .MuiSelect-icon": { color: "text.disabled" },
                  }}
                  disabled={!isEditable}
               >
                  <MenuItem value="Seleccionar" disabled>
                     Seleccionar
                  </MenuItem>
                  <MenuItem value={"practicante"}>Practicante</MenuItem>
                  <MenuItem value={"voluntario"}>Voluntario</MenuItem>
               </Select>
            </FormControl>
         </Grid>

         <Grid item xs={12} sm={6}>
            <TextField
               label="Habilidades blandas"
               value={softSkills}
               fullWidth
               disabled={!isEditable}
               onChange={(e) => console.log(e.target.value)}
               variant="outlined"
               InputLabelProps={{ shrink: true }}
            />
         </Grid>

         <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
               <InputLabel shrink htmlFor="outlined-adornment-amount">
                  Conocimientos técnicos
               </InputLabel>
               <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={
                     <InputAdornment position="start"></InputAdornment>
                  }
                  label="Conocimientos técnicos"
                  value={technicalKnowledge}
                  disabled={!isEditable}
                  onChange={(e) => console.log(e.target.value)}
                  placeholder="Separar por comas (,)"
               />
            </FormControl>
         </Grid>

         <Grid item xs={12}>
            <TextField
               label="Funciones"
               value={functions}
               multiline
               rows={4}
               fullWidth
               disabled={!isEditable}
               onChange={(e) => console.log(e.target.value)}
               variant="outlined"
               InputLabelProps={{ shrink: true }}
            />
         </Grid>

         <Grid item xs={12}>
            <footer>
               <Button
                  onClick={handleEdit}
                  variant="contained"
                  sx={{ color: "white", paddingInline: "15px" }}
               >
                  {isEditable ? "Guardar" : "Editar"}
               </Button>
               <Button
                  sx={{ paddingInline: "15px" }}
                  variant="text"
                  onClick={onClose}
               >
                  Cerrar
               </Button>
            </footer>
         </Grid>
      </Grid>
   );
}
