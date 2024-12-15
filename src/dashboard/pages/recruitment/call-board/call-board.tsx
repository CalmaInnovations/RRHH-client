import { SyntheticEvent, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Box, Container, Typography } from "@mui/material";
import { DragAndDrop } from "./components/drag-and-drop";
import { ModalDetailsCall } from "./components/modal-details-call";
import { ModalDetailsEditCall } from "./components/modal-details-edit-call";
import { ModalCreationProfile } from "./components/modal-creation-profile";
import {
   getCallByIdService,
   getDataPostulantService,
} from "./services/call-board-service";
import { CallDetail } from "../request-area-recruiter/interfaces/calls-interface";
import { PostulantDataComplete } from "./interface/call.interface";
import { useDragAndDrop } from "./hooks/useDragAndDrop";
import { ModalPostulantCreate } from "./components/modal-postulant-create";
import { ModalPreviewCard } from "./components/modal-preview-card";
import { ModalEditCard } from "./components/modal-edit-card";

// FIX: Establecer estos estados de modal en un custom hook
// FIX: Colocar estados en un contexto
// FIX: fix responsive
// FIX: fix refactor
// FIX: fix rerenders

export const CallBoard = () => {
   const [call, setCall] = useState<CallDetail>({} as CallDetail);
   const [activeModal, setActiveModal] = useState<string | null>("");
   const [selectedCardPostulation, setSelectedCardPostulation] = useState(
      {} as PostulantDataComplete
   );
   const [modalPreviewCard, setModalPreviewCard] = useState(false);
   const [modalEditCard, setModalEditCard] = useState(false);

   const valuesDragAndDrop = useDragAndDrop();
   // const { containers, setContainers } = valuesDragAndDrop;

   const [value, setValue] = useState(0);

   const params = useParams();

   const changeModalPreviewCard = useCallback((newValue?: number) => {
      handleChange({} as unknown as SyntheticEvent, newValue!);
      setModalPreviewCard(!modalPreviewCard);
   }, []);

   const changeModalEditCard = () => {
      setModalPreviewCard(!modalPreviewCard);
   };

   const closeModalPreviewCard = () => {
      setModalPreviewCard(false);
   };
   const closeModalEditCard = () => {
      setModalEditCard(false);
   };

   const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
   };

   const handleGetCallByIdService = async () => {
      const { data } = await getCallByIdService(+params.id!);
      setCall(data);
   };

   const closeModal = () => setActiveModal(null);

   const openModal = (modalName: string) => setActiveModal(modalName);

   const handleGetDataPostulantService = async (id_postulant: number) => {
      const { data } = await getDataPostulantService(id_postulant);
      setSelectedCardPostulation(data);
   };

   // const handleWithdrawProcess = (postulant: Postulant) => {
   //    const updatedContainers = containers.map((container) => {
   //       if (container.title === "Postulaciones") {
   //          return {
   //             ...container,
   //             items: container.items.filter(
   //                (item) => item.id !== postulant.id
   //             ),
   //          };
   //       }
   //       return container;
   //    });

   //    setContainers(updatedContainers);
   // };

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
               changeModalPreviewCard={changeModalPreviewCard}
               handleGetDataPostulantService={handleGetDataPostulantService}
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

         <ModalCreationProfile
            openModalCreationProfile={activeModal === "creationProfile"}
            handleCloseModal={closeModal}
         />

         <ModalPostulantCreate
            isOpenModal={activeModal === "Postulante-Crear"}
            handleCloseModal={closeModal}
         />

         <ModalPreviewCard
            isOpenModal={modalPreviewCard}
            value={value}
            handleChange={handleChange}
            changeModalPreviewCard={changeModalPreviewCard}
            closeModalPreviewCard={closeModalPreviewCard}
            selectedCardPostulation={selectedCardPostulation}
            setModalEditCard={setModalEditCard}
         />

         <ModalEditCard
            isOpenModal={modalEditCard}
            value={value}
            handleChange={handleChange}
            changeModalEditCard={changeModalEditCard}
            closeModalEditCard={closeModalEditCard}
            selectedCardPostulation={selectedCardPostulation}
         />
      </Container>
   );
};
