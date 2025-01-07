// components/GlobalModal.tsx
import React from 'react';
import { Modal, Box, Typography } from '@mui/material';

interface MainModalProps {
  open: boolean;
  handleClose: () => void;
  title: string;
  children: React.ReactNode;
}

const MainModal: React.FC<MainModalProps> = ({ open, handleClose, title, children }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 3,
        }}
      >
        <Typography variant="h6" id="modal-title">
          {title}
        </Typography>
        <Box>
          {children}
        </Box>

      </Box>
    </Modal>
  );
};

export default MainModal;
