import RequestsTable from "./components/table/status-table";
import TransitionsModal from "./components/modal/modal";
import { NewRequest } from "./components/forms/new-request";
import { SuccessfulSending } from "./components/forms/components/successful-sending";
import { useState } from "react";
import { Box, Button, CircularProgress } from "@mui/material";
import { PreviewRequest } from "./components/forms/preview-request";
import { CollaboratorGet } from "./interface/request-items.model";
import { TableItem } from "./components/table/components/card-item";

import { useCollaborator } from "./hooks/useColaboradores";

export function Requests() {
   const [modalStep, setModalStep] = useState(0);

   const handleNextModal = () => {
      setModalStep((prevStep) => prevStep + 1);
   };
   const handleCloseAllModals = () => setModalStep(0);

   const [formData, setFormData] = useState<CollaboratorGet | null>(null);

   const [editId, setEditId] = useState<number | null>(null);

   const { cards, updateCollaborator, Loading } = useCollaborator();

   const handleData = (data: CollaboratorGet) => {
      updateCollaborator(data, editId);
      setEditId(null);
   };

   const handlePreview = (card: CollaboratorGet) => {
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

         {Loading && (
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

         <TableItem cards={cards} onPreview={handlePreview} />

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
               handleData={handleData}
            />
         </TransitionsModal>
      </>
   );
}
