// import dayjs from "dayjs";
import { Box, Button, InputLabel, Modal, Typography } from "@mui/material";
import { DateField, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

interface Props {
   openModalInfInduction: boolean;
   handleCloseModal: () => void;
}

export const ModalInformationInduction = ({
   openModalInfInduction,
   handleCloseModal,
}: Props) => {
   return (
      <Modal
         open={openModalInfInduction}
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
               width: 480,
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
                  Informacion
               </Typography>

               <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                     id="modal-modal-title"
                     component="p"
                     sx={{ marginBottom: 2 }}
                  >
                     [Nombre completo del postulante]
                  </Typography>

                  <Typography
                     id="modal-modal-title"
                     component="p"
                     sx={{ marginBottom: 2 }}
                  >
                     [Correo Electronico]
                  </Typography>

                  <Typography
                     id="modal-modal-title"
                     component="p"
                     sx={{ marginBottom: 2 }}
                  >
                     [Puesto]
                  </Typography>

                  <Typography
                     id="modal-modal-title"
                     component="p"
                     sx={{ marginBottom: 2 }}
                  >
                     [Enlace de CV]
                  </Typography>

                  <Typography
                     variant="h6"
                     component="h2"
                     sx={{
                        marginBottom: 2,
                        fontWeight: 500,
                     }}
                  >
                     Induccion General
                  </Typography>

                  <Box sx={{ display: "flex", gap: 2 }}>
                     <Box
                        sx={{
                           display: "flex",
                           flexDirection: "column",
                           marginBottom: 3,
                        }}
                     >
                        <InputLabel
                           id="modal-modal-title"
                           sx={{ marginBottom: 2 }}
                        >
                           Fecha de publicacion
                        </InputLabel>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                           <DateField
                              // defaultValue={dayjs("16-11-2024")}
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
                        <InputLabel
                           id="modal-modal-title"
                           sx={{ marginBottom: 2 }}
                        >
                           Fecha de publicacion
                        </InputLabel>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                           <DateField
                              // defaultValue={dayjs("16-11-2024")}
                              format="DD-MM-YYYY"
                           />
                        </LocalizationProvider>
                     </Box>
                  </Box>

                  <Box sx={{ display: "flex", gap: 2 }}>
                     <Button
                        variant="contained"
                        onClick={() =>
                           console.log("Editar Informacion Induccion")
                        }
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
