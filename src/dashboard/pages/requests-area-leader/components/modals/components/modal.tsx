import { Backdrop, Box, Modal } from "@mui/material";
import { ReactNode } from "react";

interface PropsChildren {
    children: ReactNode;
    open: boolean;
    onClose: () => void;
}

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

export default function TransitionsModal({
    children,
    open,
    onClose,
}: PropsChildren) {
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={onClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Box sx={style}>{children}</Box>
            </Modal>
        </div>
    );
}
