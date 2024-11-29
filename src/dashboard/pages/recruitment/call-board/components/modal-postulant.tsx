import {
   Box,
   Button,
   Grid,
   InputLabel,
   MenuItem,
   Modal,
   Select,
   SelectChangeEvent,
   TextField,
   Typography,
} from "@mui/material";
import { DateField, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";

interface Props {
   isOpenModal: boolean;
   handleCloseModal: () => void;
}

export const ModalPostulant = ({ isOpenModal, handleCloseModal }: Props) => {
   const [area, setArea] = useState("");

   const handleChangeArea = (event: SelectChangeEvent) => {
      setArea(event.target.value as string);
   };

   return (
      <Modal
         open={isOpenModal}
         onClose={handleCloseModal}
         aria-labelledby="modal-details-edit-call"
         aria-describedby="modal-details-edit-call-description"
      >
         <Box
            sx={{
               position: "absolute",
               top: "50%",
               left: "50%",
               transform: "translate(-50%, -50%)",
               width: 640,
               bgcolor: "#EBF2F5",
               boxShadow: 24,
               p: 4,
               borderRadius: 2,
            }}
         >
            <div className="flex flex-col w-full items-start gap-y-4">
               <Typography
                  variant="h5"
                  component="h2"
                  sx={{
                     marginBottom: 2,
                     fontWeight: 500,
                  }}
               >
                  Creacion de Perfil
               </Typography>

               <Grid container spacing={2}>
                  <Grid
                     item
                     xs={6}
                     sx={{
                        display: "flex",
                        flexDirection: "column",
                        marginBottom: 3,
                     }}
                  >
                     <InputLabel id="modal-modal-title">
                        Nombre completo
                     </InputLabel>

                     <TextField
                        id="outlined-basic"
                        variant="outlined"
                        value="Victor Carrera Carrasco"
                     />
                  </Grid>

                  <Grid
                     item
                     xs={6}
                     sx={{
                        display: "flex",
                        flexDirection: "column",
                        marginBottom: 3,
                     }}
                  >
                     <InputLabel id="modal-modal-title">Puesto</InputLabel>

                     <TextField
                        id="outlined-basic"
                        variant="outlined"
                        value="Practicante en Desarrollador Fronted"
                     />
                  </Grid>

                  <Grid
                     item
                     xs={6}
                     sx={{
                        display: "flex",
                        flexDirection: "column",
                        marginBottom: 3,
                     }}
                  >
                     <InputLabel id="modal-modal-title">
                        Documento de identidad
                     </InputLabel>

                     <TextField
                        id="outlined-basic"
                        variant="outlined"
                        value="77808521"
                     />
                  </Grid>

                  <Grid
                     item
                     xs={6}
                     sx={{
                        display: "flex",
                        flexDirection: "column",
                        marginBottom: 3,
                     }}
                  >
                     <InputLabel id="modal-modal-title">Area</InputLabel>

                     <TextField
                        id="outlined-basic"
                        variant="outlined"
                        value="Nombre del area"
                     />
                  </Grid>

                  <Grid
                     item
                     xs={6}
                     sx={{
                        display: "flex",
                        flexDirection: "column",
                        marginBottom: 3,
                     }}
                  >
                     <InputLabel id="modal-modal-title">
                        Numero de celular
                     </InputLabel>

                     <TextField
                        id="outlined-basic"
                        variant="outlined"
                        value="922406277"
                     />
                  </Grid>

                  <Grid
                     item
                     xs={6}
                     sx={{
                        display: "flex",
                        flexDirection: "column",
                        marginBottom: 3,
                     }}
                  >
                     <InputLabel id="modal-modal-title">
                        Fecha de inicio
                     </InputLabel>

                     <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateField
                           // defaultValue={dayjs("16-11-2024")}
                           format="DD-MM-YYYY"
                        />
                     </LocalizationProvider>
                  </Grid>

                  <Grid
                     item
                     xs={6}
                     sx={{
                        display: "flex",
                        flexDirection: "column",
                        marginBottom: 3,
                     }}
                  >
                     <InputLabel id="modal-modal-title">Genero</InputLabel>

                     <Select
                        sx={{
                           borderRadius: 2,
                        }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={area}
                        onChange={handleChangeArea}
                        displayEmpty
                     >
                        <MenuItem value="">Seleccion de genero</MenuItem>
                        <MenuItem value={10}>Masculino</MenuItem>
                        <MenuItem value={20}>Femenino</MenuItem>
                     </Select>
                  </Grid>

                  <Grid
                     item
                     xs={6}
                     sx={{
                        display: "flex",
                        flexDirection: "column",
                        marginBottom: 3,
                     }}
                  >
                     <InputLabel id="modal-modal-title">
                        Fecha de salida
                     </InputLabel>

                     <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateField
                           // defaultValue={dayjs("16-11-2024")}
                           format="DD-MM-YYYY"
                        />
                     </LocalizationProvider>
                  </Grid>

                  <Grid item xs={6} sx={{ display: "flex", gap: 2 }}>
                     <Button
                        variant="contained"
                        onClick={() => console.log("Editar Convocatoria")}
                        sx={{ width: "100%", color: "white" }}
                     >
                        Guardar
                     </Button>
                  </Grid>

                  <Grid item xs={6}>
                     <Button
                        variant="text"
                        onClick={() => handleCloseModal()}
                        sx={{ width: "100%" }}
                     >
                        Cancelar
                     </Button>
                  </Grid>
               </Grid>
            </div>
         </Box>
      </Modal>
   );
};
