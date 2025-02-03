import {
   Box,
   Button,
   //List,
   //ListItem,
   //ListItemText,
   Modal,
   Typography,
} from "@mui/material";

import { Row } from "../../request-area-recruiter/components/table/models/row";

interface Props {
   row: Row;
   openModalDetails: boolean;
   handleOpenModalDetailsEdit: () => void;
   handleCloseModal: () => void;
}

export const ModalDetailsCall = ({
   openModalDetails,
   handleOpenModalDetailsEdit,
   handleCloseModal,
}: Props) => {
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
                  Detalles de la Convocatoria
               </Typography>

               <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                     id="modal-modal-title"
                     component="p"
                     sx={{ marginBottom: 2 }}
                  >
                     <strong>Área:</strong> Recursos Humanos
                  </Typography>

                  <Typography
                     id="modal-modal-title"
                     component="p"
                     sx={{ marginBottom: 2 }}
                  >
                     <strong>Reclutador Senior:</strong> Valeria
                  </Typography>

                  <Typography
                     id="modal-modal-title"
                     component="p"
                     sx={{ marginBottom: 2 }}
                  >
                     <strong>Recursos General:</strong> Lopez
                  </Typography>

                  <Typography
                     id="modal-modal-title"
                     component="p"
                     sx={{ marginBottom: 2 }}
                  >
                     <strong>Subárea:</strong> Reclutamiento
                  </Typography>

                  <Typography
                     id="modal-modal-title"
                     component="p"
                     sx={{ marginBottom: 2 }}
                  >
                     <strong>Puesto:</strong> Reclutador General
                  </Typography>

                  <Typography
                     id="modal-modal-title"
                     component="p"
                     sx={{ marginBottom: 2 }}
                  >
                     <strong>Tipo:</strong> Practicante
                  </Typography>

                  <Typography
                     id="modal-modal-title"
                     component="p"
                     sx={{ marginBottom: 2 }}
                  >
                     <strong>Fecha:</strong> 01/01/2025
                  </Typography>

                  <Typography
                     id="modal-modal-title"
                     component="p"
                     sx={{ marginBottom: 2 }}
                  >
                     <strong>Cantidad:</strong> 2
                  </Typography>

                  <Typography
                     id="modal-modal-title"
                     component="p"
                     sx={{ marginBottom: 2 }}
                  >
                     <strong>Restantes:</strong> 1
                  </Typography>

                  <Typography
                     id="modal-modal-title"
                     component="p"
                     sx={{ marginBottom: 2}}
                  >
                     <strong>Estado:</strong> En proceso
                  </Typography>

                  <Typography
                     id="modal-modal-title"
                     component="p"
                     //sx={{ marginBottom: 2 }}
                  >
                     <strong>Observaciones:</strong> No definido
                  </Typography>
               </Box>
               <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
                  <Button
                     variant="contained"
                     onClick={() => handleEditModal()}
                     sx={{ width: "100%", color: "white" }}
                  >
                     Editar
                  </Button>
                  <Button
                     onClick={() => handleCloseModal()}
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
