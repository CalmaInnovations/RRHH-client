import React, { useState } from 'react';
import { Box, Fade, Pagination, Paper, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Asegúrate de tener los iconos

const imageData = [
  { id: 1, src: 'https://media.licdn.com/dms/image/v2/C4E1BAQETCH_YC7HXrQ/company-background_10000/company-background_10000/0/1584192216316/calma_fundacin_cover?e=2147483647&v=beta&t=KL3FuVJ9CYzhKPcfL2twQTTZZ0d2H5ZkoqJXH6wzxsw' },
  { id: 2, src: 'https://media.licdn.com/dms/image/v2/D4E3DAQFsHYZsFx8koA/image-scale_191_1128/image-scale_191_1128/0/1681968385249/fundacin_calma1_cover?e=2147483647&v=beta&t=LpalcrEkLcBuE5BVBgce-lYFTL5gtdKlt4s7YmjXWkM' },
  { id: 3, src: 'https://pbs.twimg.com/media/GaM1CfLbUAcYC5q?format=jpg&name=large' },
  { id: 4, src: 'https://pbs.twimg.com/media/GaM1DW4bUAIwulF?format=jpg&name=large' },
  { id: 5, src: 'https://pbs.twimg.com/media/GaM1EDBbUAMeCpQ?format=jpg&name=large' },
  { id: 6, src: 'https://pbs.twimg.com/media/GaM1E2vbUAYBJy1?format=jpg&name=large' },
];

export const ImageCarousel = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const [showImage, setShowImage] = useState(true);

  const handlePaginationChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setShowImage(false);
    setTimeout(() => {
      setCurrentImage(value);
      setShowImage(true);
    }, 200);
  };

  const handleNext = () => {
    setShowImage(false);
    setTimeout(() => {
      setCurrentImage((prev) => (prev === imageData.length ? 1 : prev + 1));
      setShowImage(true);
    }, 200);
  };

  const handlePrev = () => {
    setShowImage(false);
    setTimeout(() => {
      setCurrentImage((prev) => (prev === 1 ? imageData.length : prev - 1));
      setShowImage(true);
    }, 200);
  };

  return (
    <Box sx={{ maxWidth: '100%', height: 400, display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 4 }}>
      <Paper elevation={12} sx={{ overflow: 'hidden', width: '100%', height: '100%', borderRadius: '16px' }}>
        <Fade in={showImage} timeout={500}>
          <Box
            component="img"
            src={imageData[currentImage - 1].src}
            alt={`Image ${currentImage}`}
            sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: '16px' }}
          />
        </Fade>
      </Paper>

      {/* Navegación de imágenes */}
      <Box sx={{ position: 'absolute', top: '50%', left: '8px', zIndex: 10 }}>
        <IconButton onClick={handlePrev} sx={{ background: 'rgba(0, 0, 0, 0.5)', color: 'white', borderRadius: '50%', '&:hover': { background: 'rgba(0, 0, 0, 0.7)' } }}>
          <ChevronLeft size={30} />
        </IconButton>
      </Box>
      <Box sx={{ position: 'absolute', top: '50%', right: '8px', zIndex: 10 }}>
        <IconButton onClick={handleNext} sx={{ background: 'rgba(0, 0, 0, 0.5)', color: 'white', borderRadius: '50%', '&:hover': { background: 'rgba(0, 0, 0, 0.7)' } }}>
          <ChevronRight size={30} />
        </IconButton>
      </Box>

      {/* Paginación */}
      <Pagination
        hideNextButton
        hidePrevButton
        count={imageData.length}
        page={currentImage}
        onChange={handlePaginationChange}
        shape="rounded"
        color="primary"
        sx={{ marginTop: 2 }}
      />
    </Box>
  );
};
