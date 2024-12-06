import {
   Box,
   Button,
   FormControl,
   FormControlLabel,
   FormLabel,
   Modal,
   Radio,
   RadioGroup,
   Typography,
} from "@mui/material";

interface Props {
   openModalDetails: boolean;
   handleCloseModal: () => void;
}

export const ModalAsingReclutador = ({
   openModalDetails,
   handleCloseModal,
}: Props) => {
   return (
      <Modal
         open={openModalDetails}
         onClose={handleCloseModal}
         aria-labelledby="modal-asign-reclutador"
      >
         <Box
            sx={{
               position: "absolute",
               top: "50%",
               left: "50%",
               transform: "translate(-50%, -50%)",
               width: 400,
               bgcolor: "#EBF2F5",
               boxShadow: 24,
               p: 4,
               borderRadius: 2,
            }}
         >
            <Box className="flex flex-col w-full items-start gap-y-4">
               <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                  Asignar Reclutador
               </Typography>

               <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                     Reclutadores senior
                  </FormLabel>
                  <RadioGroup
                     aria-labelledby="demo-radio-buttons-group-label"
                     name="radio-buttons-group"
                  >
                     <FormControlLabel
                        value="Valeria Lizana"
                        control={<Radio sx={{color:"#5BC1E6"}}/>}
                        label="Valeria Lizana"
                     />
                     <FormControlLabel
                        value="Martha Chavez"
                        control={<Radio sx={{color:"#5BC1E6"}}/>}
                        label="Martha Chavez"
                     />
                     <FormControlLabel
                        value="Jair Alcides"
                        control={<Radio sx={{color:"#5BC1E6"}}/>}
                        label="Jair Alcides"
                     />
                  </RadioGroup>
               </FormControl>

               <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                  Reclutadores generales
                  </FormLabel>
                  <RadioGroup
                     aria-labelledby="demo-radio-buttons-group-label"

                     name="radio-buttons-group"
                  >
                     <FormControlLabel
                        value="José Quintero"
                        control={<Radio sx={{color:"#5BC1E6"}}/>}
                        label="José Quintero"
                     />
                     <FormControlLabel
                        value="Alexandra Mariátegui"
                        control={<Radio sx={{color:"#5BC1E6"}}/>}
                        label="Alexandra Mariátegui"
                     />
                     <FormControlLabel
                        value="Julio Torres"
                        control={<Radio sx={{color:"#5BC1E6"}}/>}
                        label="Julio Torres"
                     />
                  </RadioGroup>
               </FormControl>

               <Button fullWidth sx={{backgroundColor:"#5BC1E6",color:"#ffffff"}}>Asignar</Button>
            </Box>
         </Box>
      </Modal>
   );
};
