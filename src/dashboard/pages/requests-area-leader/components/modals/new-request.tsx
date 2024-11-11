import {
   Grid,
   Typography,
   TextField,
   InputAdornment,
   OutlinedInput,
   MenuItem,
   Select,
   FormControl,
   Button,
   InputLabel,
} from "@mui/material";
import { useState } from "react";
import "./modals.css";

interface PropsNextModal {
   handleNextModal: () => void;
}

export function NewRequest({ handleNextModal }: PropsNextModal) {
   const [positionType, setPositionType] = useState("Seleccionar");
   const handleChange = (event: { target: { value: string } }) => {
      setPositionType(event.target.value);
   };

   return (
      <Grid container spacing={3}>
         <Grid item xs={12}>
            <Typography
               id="transition-modal-title"
               variant="h5"
               component="h2"
               marginBottom={2}
               fontWeight="bold"
            >
               Nueva Solicitud
            </Typography>
         </Grid>

         <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
               <TextField
                  label="Nombre del puesto"
                  placeholder="Desarrollador Front-End"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
               />
            </FormControl>
         </Grid>

         <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
               <TextField
                  label="Cantidad"
                  placeholder="2"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
               />
            </FormControl>
         </Grid>

         <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
               <InputLabel shrink htmlFor="tipo-puesto-select">
                  Tipo de puesto
               </InputLabel>
               <Select
                  id="tipo-puesto-select"
                  value={positionType}
                  onChange={handleChange}
                  label="Tipo de puesto"
                  sx={{
                     color:
                        positionType === "Seleccionar"
                           ? "text.disabled"
                           : "text.primary",
                     "& .MuiSelect-icon": { color: "text.disabled" },
                  }}
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
            <FormControl fullWidth variant="outlined">
               <TextField
                  label="Habilidades blandas"
                  placeholder="Separar por comas (,)"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
               />
            </FormControl>
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
                  placeholder="Separar por comas (,)"
               />
            </FormControl>
         </Grid>

         <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
               <TextField
                  label="Funciones"
                  multiline
                  rows={4}
                  placeholder="Funciones"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
               />
            </FormControl>
         </Grid>

         <Grid item xs={12}>
            <footer>
               <Button
                  onClick={handleNextModal}
                  variant="contained"
                  sx={{ color: "white", paddingInline: "15px" }}
               >
                  Solicitar
               </Button>
               <Button sx={{ paddingInline: "15px" }} variant="text">
                  Limpiar
               </Button>
            </footer>
         </Grid>
      </Grid>
   );
}
