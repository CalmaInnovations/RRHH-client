import { Backdrop, Box, Modal } from "@mui/material";
import { ReactNode } from "react";

interface PropsChildren {
   children: ReactNode;
   open: boolean;
   onClose: () => void;
   width?: number;
}

const style = {
   position: "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   bgcolor: "background.paper",
   boxShadow: 24,
   p: 4,
   borderRadius: 3,
};

export default function TransitionsModal({
   children,
   open,
   onClose,
   width = 600,
}: PropsChildren) {
   return (
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
         <Box sx={{ ...style, width }}>{children}</Box>
      </Modal>
   );
}
