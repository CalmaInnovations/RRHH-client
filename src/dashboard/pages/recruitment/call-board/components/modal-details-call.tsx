import {
   Box,
   Button,
   List,
   ListItem,
   ListItemText,
   Modal,
   Typography,
} from "@mui/material";

interface Props {
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
                  <Typography
                     id="modal-modal-title"
                     sx={{ marginBottom: 2 }}
                     component="p"
                  >
                     Desarrollador Fronted
                  </Typography>

                  <Typography
                     id="modal-modal-title"
                     component="p"
                     sx={{ marginBottom: 2 }}
                  >
                     Cantidad 2
                  </Typography>

                  <Typography
                     id="modal-modal-title"
                     component="p"
                     sx={{ marginBottom: 2 }}
                  >
                     Practicante
                  </Typography>

                  <Typography
                     id="modal-modal-title"
                     component="p"
                     sx={{ marginBottom: 2 }}
                  >
                     HTML, CSS, Javascript, React, Tailwind
                  </Typography>

                  <List dense={true}>
                     <ListItem
                        sx={{
                           display: "flex",
                           padding: 0,
                           flexDirection: "column",
                           listStyleType: "disc",
                           marginLeft: 2,
                           marginBottom: 2,
                        }}
                        alignItems="flex-start"
                     >
                        <ListItemText
                           sx={{ display: "list-item" }}
                           primary="Apoyar con los prototipos de Figma"
                        />
                        <ListItemText
                           sx={{ display: "list-item" }}
                           primary="Desarrollar Interfaces"
                        />
                        <ListItemText
                           sx={{ display: "list-item" }}
                           primary="Mantener el diseño escalable"
                        />
                     </ListItem>
                  </List>

                  <Typography
                     id="modal-modal-title"
                     component="p"
                     sx={{ marginBottom: 2 }}
                  >
                     Fecha de publicacion: Sin definir
                  </Typography>

                  <Typography
                     id="modal-modal-title"
                     component="p"
                     sx={{ marginBottom: 2 }}
                  >
                     Beneficios: Sin definir
                  </Typography>

                  <Button
                     variant="contained"
                     onClick={() => handleEditModal()}
                     sx={{ width: "100%", color: "white" }}
                  >
                     Editar Convocatoria
                  </Button>
               </Box>
            </Box>
         </Box>
      </Modal>
   );
};
