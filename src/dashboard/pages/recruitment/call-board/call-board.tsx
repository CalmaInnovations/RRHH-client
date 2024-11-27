import { Box, Container, Typography } from "@mui/material";
import { DragAndDrop } from "./components/drag-and-drop";
import { useEffect, useState } from "react";
import { ModalDetailsCall } from "./components/modal-details-call";
import { ModalDetailsEditCall } from "./components/modal-details-edit-call";
import { ModalInformationInduction } from "./components/modal-information-induction";
import { ModalEntreview } from "./components/modal-entreview";
import { ModalCreationProfile } from "./components/modal-creation-profile";
import { useParams } from "react-router";
import { getCallByIdService } from "./services/call-board-service";
import { CallDetail } from "../request-area-recruiter/interfaces/calls-interface";

// FIX: Establecer estos estados de modal en un custom hook
// FIX: fix responsive
// FIX: fix refactor
// FIX: fix rerenders

export const CallBoard = () => {
   const [call, setCall] = useState<CallDetail>({} as CallDetail);
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
   const params = useParams();

   const handleGetCallByIdService = async () => {
      const { data } = await getCallByIdService(+params.id!);
      setCall(data);
   };

   useEffect(() => {
      handleGetCallByIdService();
   }, []);

   return (
      <Container sx={{ marginTop: 3 }}>
         <Typography
            variant="h4"
            sx={{ marginBottom: ".5rem", fontWeight: "500" }}
            component="h1"
         >
            {call.nombrePuesto}
         </Typography>

         <Box sx={{ display: "flex", alignItems: "center", marginBottom: 3 }}>
            <Typography variant="h5" component="h2">
               {call.modalidad}
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
                  {call.nombreArea}
               </Typography>
               <Typography
                  sx={{ fontSize: "14px", color: "#A3A3A3" }}
                  component="p"
               >
                  {call.nombreSubArea}
               </Typography>
            </Box>

            <Typography component="p">
               Cantidad: {call.cantidadSolicitada}
            </Typography>

            <Typography component="p">{call.estadoSolicitud}</Typography>
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
