import RequestTable from "./components/table/RequestTable";
import TransitionsModal from "./components/modals/components/modal";
import { NewRequest } from "./components/modals/new-request";
import { SuccessfulSending } from "./components/modals/successful-sending";
import { useState } from "react";
import { Box, Button } from "@mui/material";
import { PreviewRequest } from "./components/modals/preview-request";

export function Requests() {
    const [modalStep, setModalStep] = useState(0);

    const handleNextModal = () => {
        setModalStep((prevStep) => prevStep + 1);
    };

    const handleCloseAllModals = () => setModalStep(0);
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
                <Button variant="contained" onClick={() => setModalStep(1)}>
                    + Nueva
                </Button>
            </Box>

            <RequestTable />

            <TransitionsModal
                open={modalStep === 1}
                onClose={handleCloseAllModals}
            >
                <NewRequest handleNextModal={handleNextModal} />
            </TransitionsModal>

            <TransitionsModal
                open={modalStep === 2}
                onClose={handleCloseAllModals}
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
