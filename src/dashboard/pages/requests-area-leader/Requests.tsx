import RequestsTable from "./components/table/status-table";
import TransitionsModal from "./components/modal/modal";
import { NewRequest } from "./components/forms/new-request";
import { SuccessfulSending } from "./components/forms/components/successful-sending";
import { useState } from "react";
import { Box, Button } from "@mui/material";
import { PreviewRequest } from "./components/forms/preview-request";
import { RequestItems } from "./models/request-items.model";
import { initialRows } from "./components/table/mocks/request-items";
import { TableItem } from "./components/table/components/card-item";

export function Requests() {
   const [modalStep, setModalStep] = useState(0);

   const handleNextModal = () => {
      setModalStep((prevStep) => prevStep + 1);
   };
   const handleCloseAllModals = () => setModalStep(0);

   const [formData, setFormData] = useState<RequestItems | null>(null);
   const [rows, setRows] = useState<RequestItems[]>(initialRows);
   const [editId, setEditId] = useState<number | null>(null);

   const handleData = (data: RequestItems) => {
      if (editId) {
         setRows((prevRows) =>
            prevRows.map((row) =>
               row.id === editId ? { ...row, ...data } : row
            )
         );
      } else {
         setRows((prevRows) => [
            ...prevRows,
            { ...data, id: Date.now(), status: "Pendiente" },
         ]);
      }
      setEditId(null);
   };

   const handlePreview = (row: RequestItems) => {
      setFormData(row);
      setEditId(row.id ?? null);
      setModalStep(3);
   };

   return (
      <>
         <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <RequestsTable rows={rows} onPreview={handlePreview} />
            <Button
               variant="contained"
               onClick={() => setModalStep(1)}
               sx={{ color: "white", margin: "10px" }}
            >
               + Nueva
            </Button>
         </Box>

         <TableItem rows={rows} onPreview={handlePreview}/>

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
