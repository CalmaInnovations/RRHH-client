import { Box, Container, Typography } from "@mui/material";
import { DragAndDrop } from "./components/drag-and-drop";
import { useCallback, useEffect, useState } from "react";
import { ModalDetailsCall } from "./components/modal-details-call";
import { ModalDetailsEditCall } from "./components/modal-details-edit-call";
import { ModalInformationInduction } from "./components/modal-information-induction";
import { ModalEntreview } from "./components/modal-entreview";
import { ModalCreationProfile } from "./components/modal-creation-profile";
import { useParams } from "react-router";
import { getCallByIdService } from "./services/call-board-service";
import { CallDetail } from "../request-area-recruiter/interfaces/calls-interface";
import { Postulant } from "./interface/call.interface";
import { ModalPostulantPreview } from "./components/modal-postulant-preview";
import { useDragAndDrop } from "./hooks/useDragAndDrop";
import { ModalPostulantEdit } from "./components/modal-postulant-edit";
import { ModalPostulantCreate } from "./components/modal-postulant-create";

// FIX: Establecer estos estados de modal en un custom hook
// FIX: fix responsive
// FIX: fix refactor
// FIX: fix rerenders

export const CallBoard = () => {
   const [call, setCall] = useState<CallDetail>({} as CallDetail);
   const [activeModal, setActiveModal] = useState<string | null>(null);
   const [selectedCardPostulation, setSelectedCardPostulation] = useState(
      {} as Postulant
   );
   const valuesDragAndDrop = useDragAndDrop();
   const { containers, setContainers } = valuesDragAndDrop;

   const params = useParams();

   const handleGetCallByIdService = async () => {
      const { data } = await getCallByIdService(+params.id!);
      setCall(data);
   };

   const openModal = (modalName: string) => setActiveModal(modalName);

   const closeModal = () => setActiveModal(null);

   const openModalForState = useCallback(
      (columnState?: string, postulant?: Postulant) => {
         openModal(columnState!);
         setSelectedCardPostulation(postulant!);
      },
      []
   );

   const handleWithdrawProcess = (postulant: Postulant) => {
      const updatedContainers = containers.map((container) => {
         if (container.title === "Postulaciones") {
            return {
               ...container,
               items: container.items.filter(
                  (item) => item.id !== postulant.id
               ),
            };
         }
         return container;
      });

      setContainers(updatedContainers);
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
               onClick={() => openModal("details")}
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
            <DragAndDrop
               openModal={openModal}
               openModalForState={openModalForState}
               setSelectedCardPostulation={setSelectedCardPostulation}
               {...valuesDragAndDrop}
            />
         </Box>

         <ModalDetailsCall
            openModalDetails={activeModal === "details"}
            handleOpenModalDetailsEdit={() => openModal("detailsEdit")}
            handleCloseModal={closeModal}
         />

         <ModalDetailsEditCall
            openModalDetailsEdit={activeModal === "detailsEdit"}
            handleCloseModal={closeModal}
         />

         <ModalInformationInduction
            openModalInfInduction={activeModal === "induction"}
            handleCloseModal={closeModal}
         />

         <ModalEntreview
            openModalEntreview={activeModal === "entreview"}
            handleCloseModal={closeModal}
         />

         <ModalCreationProfile
            openModalCreationProfile={activeModal === "creationProfile"}
            handleCloseModal={closeModal}
         />

         <ModalPostulantCreate
            isOpenModal={activeModal === "Postulante-Crear"}
            handleCloseModal={closeModal}
            selectedCardPostulation={selectedCardPostulation}
         />

         <ModalPostulantEdit
            isOpenModal={activeModal === "Postulante-Edit"}
            handleCloseModal={closeModal}
            selectedCardPostulation={selectedCardPostulation}
         />

         <ModalPostulantPreview
            isOpenModal={activeModal === "Postulante"}
            handleCloseModal={closeModal}
            selectedCardPostulation={selectedCardPostulation}
            openModal={openModal}
            handleWithdrawProcess={handleWithdrawProcess}
         />
      </Container>
   );
};
