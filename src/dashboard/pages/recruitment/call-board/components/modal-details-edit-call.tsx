import dayjs from "dayjs";
import {
   Box,
   Button,
   InputLabel,
   Modal,
   TextareaAutosize,
   TextField,
   Typography,
} from "@mui/material";
import { DateField, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

interface Props {
   openModalDetailsEdit: boolean;
   handleCloseModal: () => void;
}

export const ModalDetailsEditCall = ({
   openModalDetailsEdit,
   handleCloseModal,
}: Props) => {
   return (
      <Modal
         open={openModalDetailsEdit}
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
               width: 400,
               bgcolor: "#EBF2F5",
               boxShadow: 24,
               p: 4,
               borderRadius: 2,
            }}
         >
            <Box className="flex flex-col w-full items-start gap-y-4">
               <Typography
                  variant="h5"
                  component="h2"
                  sx={{
                     marginBottom: 2,
                     fontWeight: 500,
                  }}
               >
                  Detalles de la Convocatoria
               </Typography>

               <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Box
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
                        value="Desarrollador Frontend"
                        disabled
                     />
                  </Box>

                  <Box
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
                        value="2"
                        type="number"
                        disabled
                     />
                  </Box>

                  <Box
                     sx={{
                        display: "flex",
                        flexDirection: "column",
                        marginBottom: 3,
                     }}
                  >
                     <InputLabel id="modal-modal-title">Tipo</InputLabel>

                     <TextField
                        id="outlined-basic"
                        variant="outlined"
                        value="Practicante"
                        disabled
                     />
                  </Box>

                  <Box
                     sx={{
                        display: "flex",
                        flexDirection: "column",
                        marginBottom: 3,
                     }}
                  >
                     <InputLabel id="modal-modal-title">
                        Habilidades Blandas
                     </InputLabel>

                     <TextField
                        id="outlined-basic"
                        variant="outlined"
                        value="Trabajo en equipo, comunicacion"
                        disabled
                     />
                  </Box>

                  <Box
                     sx={{
                        display: "flex",
                        flexDirection: "column",
                        marginBottom: 3,
                     }}
                  >
                     <InputLabel id="modal-modal-title">
                        Conocimientos tecnicos
                     </InputLabel>

                     <TextField
                        id="outlined-basic"
                        variant="outlined"
                        value="HTML, CSS, Javascript, React, Tailwind"
                        disabled
                     />
                  </Box>

                  <Typography
                     id="modal-modal-title"
                     component="p"
                     sx={{ marginBottom: 2 }}
                  >
                     Fecha de publicacion: Sin definir
                  </Typography>

                  <Box
                     sx={{
                        display: "flex",
                        flexDirection: "column",
                        marginBottom: 3,
                     }}
                  >
                     <InputLabel id="modal-modal-title">
                        Fecha de publicacion
                     </InputLabel>

                     <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateField
                           defaultValue={dayjs("16-11-2024")}
                           format="DD-MM-YYYY"
                        />
                     </LocalizationProvider>
                  </Box>

                  <Box
                     sx={{
                        display: "flex",
                        flexDirection: "column",
                        marginBottom: 3,
                     }}
                  >
                     <InputLabel id="modal-modal-title">Beneficios</InputLabel>

                     <TextareaAutosize
                        aria-label="minimum height"
                        minRows={3}
                        placeholder="Separar por comas (,)"
                        style={{
                           outline: "blue",
                           background: "transparent",
                           borderRadius: 4,
                        }}
                     />
                  </Box>

                  <Box sx={{ display: "flex", gap: 2 }}>
                     <Button
                        variant="contained"
                        onClick={() => console.log("Editar Convocatoria")}
                        sx={{ width: "100%", color: "white" }}
                     >
                        Guardar
                     </Button>

                     <Button
                        variant="text"
                        onClick={() => handleCloseModal()}
                        sx={{ width: "100%" }}
                     >
                        Cancelar
                     </Button>
                  </Box>
               </Box>
            </Box>
         </Box>
      </Modal>
   );
};
