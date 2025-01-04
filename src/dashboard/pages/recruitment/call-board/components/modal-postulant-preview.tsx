import { Box, Button, Modal, Typography } from "@mui/material";
import { Postulant } from "../interface/call-interface";
import { withdrawProcessService } from "../services/call-board-service";

interface Props {
   isOpenModal: boolean;
   handleCloseModal: () => void;
   selectedCardPostulation: Postulant;
   openModal: (modalName: string) => void;
   handleWithdrawProcess: (postulant: Postulant) => void;
}
export const ModalPostulantPreview = ({
   handleCloseModal,
   isOpenModal,
   selectedCardPostulation,
   openModal,
   handleWithdrawProcess,
}: Props) => {
   const handleWithdrawProcessService = async () => {
      await withdrawProcessService(selectedCardPostulation.id!);
      handleWithdrawProcess(selectedCardPostulation);
      handleCloseModal();
   };

   console.log("Modal Postulant Prewiew Reender");

   return (
      <Modal open={isOpenModal} onClose={handleCloseModal}>
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
                  Postulante
               </Typography>
               <Box>
                  <Typography
                     component="p"
                     sx={{
                        marginBottom: 2,
                        fontWeight: 500,
                     }}
                  >
                     Nombre: {selectedCardPostulation.nombres}
                  </Typography>

                  <Typography
                     component="p"
                     sx={{
                        marginBottom: 2,
                        fontWeight: 500,
                     }}
                  >
                     Apellido Paterno: {selectedCardPostulation.apellidoPaterno}
                  </Typography>

                  <Typography
                     component="p"
                     sx={{
                        marginBottom: 2,
                        fontWeight: 500,
                     }}
                  >
                     Apellido Paterno: {selectedCardPostulation.apellidoPaterno}
                  </Typography>

                  <Typography
                     component="p"
                     sx={{
                        marginBottom: 2,
                        fontWeight: 500,
                     }}
                  >
                     Apellido Materno: {selectedCardPostulation.apellidoMaterno}
                  </Typography>

                  <Typography
                     component="p"
                     sx={{
                        marginBottom: 2,
                        fontWeight: 500,
                     }}
                  >
                     Correo Electronico: {selectedCardPostulation.email}
                  </Typography>

                  <Typography
                     component="p"
                     sx={{
                        marginBottom: 2,
                        fontWeight: 500,
                     }}
                  >
                     Documento de Identidad : {selectedCardPostulation.dni}
                  </Typography>

                  <Typography
                     component="p"
                     sx={{
                        marginBottom: 2,
                        fontWeight: 500,
                     }}
                  >
                     Telefono: {selectedCardPostulation.telefono}
                  </Typography>

                  <Typography
                     component="p"
                     sx={{
                        marginBottom: 2,
                        fontWeight: 500,
                     }}
                  >
                     Modalidad de Practicas:{" "}
                     {selectedCardPostulation.modalidadPracticas}
                  </Typography>

                  <Typography
                     component="p"
                     sx={{
                        marginBottom: 2,
                        fontWeight: 500,
                     }}
                  >
                     Institucion Educativa:{" "}
                     {selectedCardPostulation.institucionEducativa}
                  </Typography>

                  <Typography
                     component="p"
                     sx={{
                        marginBottom: 2,
                        fontWeight: 500,
                     }}
                  >
                     Carrera: {selectedCardPostulation.carrera}
                  </Typography>

                  <Typography
                     component="p"
                     sx={{
                        marginBottom: 2,
                        fontWeight: 500,
                     }}
                  >
                     Direccion: {selectedCardPostulation.direccion}
                  </Typography>

                  <Typography
                     component="p"
                     sx={{
                        marginBottom: 2,
                        fontWeight: 500,
                     }}
                  >
                     Pais: {selectedCardPostulation.pais}
                  </Typography>

                  <Typography
                     component="p"
                     sx={{
                        marginBottom: 2,
                        fontWeight: 500,
                     }}
                  >
                     Departamento: {selectedCardPostulation.departamento}
                  </Typography>

                  <Typography
                     component="p"
                     sx={{
                        marginBottom: 2,
                        fontWeight: 500,
                     }}
                  >
                     Currículum vitae: drive.google.com/curriculumvitae.pdf
                  </Typography>

                  <Button
                     onClick={() => openModal("Postulante-Edit")}
                     variant="contained"
                     sx={{ width: "100%", color: "white", marginBottom: 2 }}
                  >
                     Editar Postulante
                  </Button>

                  <Button
                     onClick={() => handleWithdrawProcessService()}
                     variant="contained"
                     sx={{
                        width: "100%",
                        color: "white",
                        backgroundColor: "#F63535",
                     }}
                  >
                     Retirar del Proceso
                  </Button>
               </Box>
            </Box>
         </Box>
      </Modal>
   );
};
