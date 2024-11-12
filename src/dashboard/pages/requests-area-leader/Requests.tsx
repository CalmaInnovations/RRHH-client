import RequestsTable from "./components/table/requests-table";
import TransitionsModal from "./components/modal/modal";
import { NewRequest } from "./components/forms/new-request";
import { SuccessfulSending } from "./components/forms/components/successful-sending";
import { useState } from "react";
import { Box, Button } from "@mui/material";
import { PreviewRequest } from "./components/forms/preview-request";

export function Requests() {
   const [modalStep, setModalStep] = useState(0);

   const handleNextModal = () => {
      setModalStep((prevStep) => prevStep + 1);
   };

   const handleCloseAllModals = () => setModalStep(0);
   return (
      <>
         <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
            <Button
               variant="contained"
               onClick={() => setModalStep(1)}
               sx={{ color: "white" }}
            >
               + Nueva
            </Button>
         </Box>

         <RequestsTable />

         <TransitionsModal
            open={modalStep === 1}
            onClose={handleCloseAllModals}
         >
            <NewRequest handleNextModal={handleNextModal} />
         </TransitionsModal>

         <TransitionsModal
            open={modalStep === 2}
            onClose={handleCloseAllModals}
            width={480}
         >
            <SuccessfulSending handleNextModal={handleNextModal} />
         </TransitionsModal>

         <TransitionsModal
            open={modalStep === 3}
            onClose={handleCloseAllModals}
         >
            <PreviewRequest onClose={handleCloseAllModals} />
         </TransitionsModal>
      </>
   );
}
