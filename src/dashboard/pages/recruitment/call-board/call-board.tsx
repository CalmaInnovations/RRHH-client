import { Box, Container, Typography } from "@mui/material";
import { DragAndDrop } from "./components/drag-and-drop";
import { useState } from "react";
import { ModalDetailsCall } from "./components/modal-details-call";
import { ModalDetailsEditCall } from "./components/modal-details-edit-call";
import { ModalInformationInduction } from "./components/modal-information-induction";
import { ModalEntreview } from "./components/modal-entreview";
import { ModalCreationProfile } from "./components/modal-creation-profile";

export const CallBoard = () => {
   // FIX: Establecer estos estados de modal en un custom hook
   const [openModalDetails, setOpenModalDetails] = useState(false);
   const [openModalDetailsEdit, setOpenModalDetailsEdit] = useState(false);
   const [openModalInfInduction, setOpenModalInfInduction] = useState(false);
   const [openModalEntreview, setOpenModalEntreview] = useState(false);
   const [openModalCreationProfile, setOpenModalCreationProfile] =
      useState(false);
   const handleOpenModalDetails = () => setOpenModalDetails(!openModalDetails);
   const handleOpenModalInfInduction = () =>
      setOpenModalInfInduction(!openModalInfInduction);
   const handleOpenModalDetailsEdit = () =>
      setOpenModalDetailsEdit(!openModalDetailsEdit);
   const handleOpenModalEntreview = () =>
      setOpenModalEntreview(!openModalEntreview);
   const handleOpenModalCreationProfile = () =>
      setOpenModalCreationProfile(!openModalCreationProfile);

   return (
      <Container sx={{ marginTop: 3 }}>
         <Typography
            variant="h4"
            sx={{ marginBottom: ".5rem", fontWeight: "500" }}
            component="h1"
         >
            Desarrollador Frontend
         </Typography>

         <Box sx={{ display: "flex", alignItems: "center", marginBottom: 3 }}>
            <Typography variant="h5" component="h2">
               Practicante
            </Typography>

            <Typography
               sx={{
                  marginLeft: 2,
                  cursor: "pointer",
                  "&:hover": {
                     textDecoration: "underline",
                  },
               }}
               component="span"
               color="primary"
               onClick={() => handleOpenModalDetails()}
            >
               ver detalles
            </Typography>
         </Box>

         <Box
            sx={{
               display: "flex",
               justifyContent: "space-between",
               alignItems: "center",
            }}
         >
            <Box>
               <Typography variant="h6" component="p">
                  Tecnologia
               </Typography>
               <Typography
                  sx={{ fontSize: "14px", color: "#A3A3A3" }}
                  component="p"
               >
                  Desarrollo de Software
               </Typography>
            </Box>

            <Typography component="p">Cantidad: 3</Typography>

            <Typography component="p">Pendiente</Typography>
         </Box>

         <Box sx={{ marginTop: 2 }}>
            <DragAndDrop />
         </Box>

         <ModalDetailsCall
            openModalDetails={openModalDetails}
            handleOpenModalDetails={handleOpenModalDetails}
            handleOpenModalDetailsEdit={handleOpenModalDetailsEdit}
         />

         <ModalDetailsEditCall
            openModalDetailsEdit={openModalDetailsEdit}
            handleOpenModalDetailsEdit={handleOpenModalDetailsEdit}
         />
         <ModalInformationInduction
            openModalInfInduction={openModalInfInduction}
            handleOpenModalInfInduction={handleOpenModalInfInduction}
         />

         <ModalEntreview
            openModalEntreview={openModalEntreview}
            handleOpenModalEntreview={handleOpenModalEntreview}
         />

         <ModalCreationProfile
            openModalCreationProfile={openModalCreationProfile}
            handleOpenModalCreationProfile={handleOpenModalCreationProfile}
         />
      </Container>
   );
};
