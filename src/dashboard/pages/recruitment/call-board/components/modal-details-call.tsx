import {
   Box,
   Button,
   Modal,
   Dialog, 
   DialogTitle, 
   DialogContent, 
   Typography 
   } from "@mui/material";
import { Call } from "../../request-area-recruiter/interfaces/calls-interface";

interface ModalDetailsCallProps {
   openModalDetails: boolean;
   handleCloseModal: () => void;
   callData: Call;
   handleOpenModalDetailsEdit: () => void;
}

export const ModalDetailsCall = ({
   openModalDetails,
   handleCloseModal,
   callData,
   handleOpenModalDetailsEdit,
}: ModalDetailsCallProps) => {
   const handleEditModal = () => {
      handleCloseModal();
      handleOpenModalDetailsEdit();
   };


   return (
      <Modal 
         open={openModalDetails} 
         onClose={handleCloseModal}
         aria-labelledby="modal-details-call"
         aria-describedby="modal-details-call-description"
      >
         <Box
            sx={{
               position: "absolute",
               top: "50%",
               left: "50%",
               transform: "translate(-50%, -50%)",
               width: 420,
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
                     fontWeight: 600,
                  }}
               >
                  Detalles de Solicitud
               </Typography>
       
               <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography id="modal-modal-title" component="p" sx={{ marginBottom: 2 }}>
                     <strong>Área:</strong> {callData?.nombreArea ?? "Recursos Humanos"}
                  </Typography>

                  <Typography id="modal-modal-title" component="p" sx={{ marginBottom: 2 }}>
                     <strong>Reclutador:</strong> {callData.reclutador ?? "Valeria Lopez"}
                  </Typography>

                  <Typography id="modal-modal-title" component="p" sx={{ marginBottom: 2 }}>
                     <strong>Subárea:</strong> {callData?.modalidad ?? "Reclutamiento"}
                  </Typography>

                  <Typography id="modal-modal-title" component="p" sx={{ marginBottom: 2 }}>
                     <strong>Puesto:</strong> {callData?.nombrePuesto ?? "Reclutador General"}
                  </Typography>

                  <Typography id="modal-modal-title" component="p" sx={{ marginBottom: 2 }}>
                     <strong>Tipo:</strong> {callData?.modalidad ?? "Practicante"}
                  </Typography>

                  <Typography id="modal-modal-title" component="p" sx={{ marginBottom: 2 }}>
                     <strong>Fecha:</strong> {callData?.fechaSolicitud ?? "01/01/2025"}
                  </Typography>

                  <Typography id="modal-modal-title" component="p" sx={{ marginBottom: 2 }}>
                     <strong>Cantidad:</strong> {callData?.cantidadSolicitada ?? "2"}
                  </Typography>

                  <Typography id="modal-modal-title" component="p" sx={{ marginBottom: 2 }}>
                     <strong>Restantes:</strong> {callData?.cantidadRestante ?? "1"}
                  </Typography>

                  <Typography id="modal-modal-title" component="p" sx={{ marginBottom: 2 }}>
                     <strong>Estado:</strong> {callData?.estadoSolicitud ?? "No definido"}
                  </Typography>

                  <Typography id="modal-modal-title" component="p">
                     <strong>Observaciones:</strong> {callData?.observaciones ?? "No definido"}
                  </Typography>
               </Box>
               <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
                  <Button
                     variant="contained"
                     onClick={handleEditModal}
                     sx={{ width: "100%", color: "white" }}
                  >
                     Editar
                  </Button>
                  <Button
                     onClick={handleCloseModal}
                     sx={{ color: "#35B1F6", cursor: "pointer", width: "100%"}} 
                  >
                     Cerrar
                  </Button>
               </Box>
            </Box>
         </Box>
      </Modal>
   );
};
