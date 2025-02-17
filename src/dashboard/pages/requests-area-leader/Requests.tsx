import RequestsTable from "./components/table/status-table";
import TransitionsModal from "./components/modal/modal";
import { NewRequest } from "./components/forms/new-request";
import { SuccessfulSending } from "./components/forms/components/successful-sending";
import { useState } from "react";
import { Box, Button, CircularProgress } from "@mui/material";
import { PreviewRequest } from "./components/forms/preview-request";
import { Collaborator } from "./interface/request-items.model";
import { CardsItem } from "./components/table/components/card-item";
import { useCollaborator } from "./hooks/useColaboradores";
import { Paginations } from "./components/table/components/Paginations";

export function Requests() {
   const [modalStep, setModalStep] = useState(0);

   const handleNextModal = () => {
      setModalStep((prevStep) => prevStep + 1);
   };
   const handleCloseAllModals = () => setModalStep(0);

   const [formData, setFormData] = useState<Collaborator | null>(null);
   const [editId, setEditId] = useState<number | null>(null);
   const { cards, updateCollaborator, loading, postCollaborator, setCards } =
      useCollaborator();

   const [dataQt, setdataQt] = useState(3);
   const [currentPage, setcurrentPage] = useState(1);

   const indexFin = currentPage * dataQt;
   const indexIni = indexFin - dataQt;

   const nData = cards.slice(indexIni, indexFin);
   const nPages = Math.ceil(cards.length / dataQt);

   const handleData = (data: Collaborator) => {
      postCollaborator(data);
      updateCollaborator(data, editId);
      setEditId(null);
   };

   const handlePreview = (card: Collaborator) => {
      setFormData(card);
      setEditId(card.id ?? null);
      setModalStep(3);
   };

   return (
      <>
         <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <RequestsTable />
            <Button
               variant="contained"
               onClick={() => setModalStep(1)}
               sx={{ color: "white", margin: "10px" }}
            >
               + Nueva
            </Button>
         </Box>

         {loading && (
            <Box
               sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "400px",
               }}
            >
               <CircularProgress size={"300px"} />
            </Box>
         )}

         <CardsItem cards={nData} onPreview={handlePreview} />
         <Paginations
            setcurrentPage={setcurrentPage}
            currentPage={currentPage}
            nPages={nPages}
         />
         <TransitionsModal
            open={modalStep === 1}
            onClose={handleCloseAllModals}
         >
            <NewRequest
               handleNextModal={handleNextModal}
               handleData={handleData}
            />
         </TransitionsModal>

         <TransitionsModal
            open={modalStep === 2}
            onClose={handleCloseAllModals}
            width={480}
         >
            <SuccessfulSending onClose={handleCloseAllModals} />
         </TransitionsModal>

         <TransitionsModal
            open={modalStep === 3}
            onClose={handleCloseAllModals}
         >
            <PreviewRequest
               {...formData}
               onClose={handleCloseAllModals}
               setCards={setCards}
            />
         </TransitionsModal>
      </>
   );
}