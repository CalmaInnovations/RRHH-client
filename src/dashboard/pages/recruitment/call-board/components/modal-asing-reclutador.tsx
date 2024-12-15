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
import { RecruiterRes } from "../../request-area-recruiter/interfaces/calls-interface";
import { useState } from "react";
import { Spinner } from "../../../../components/spinner/spinner";

interface Props {
   openModalDetails: boolean;
   handleCloseModal: () => void;
   recruiters: RecruiterRes;
   isLoading: boolean;
}

export const ModalAsingReclutador = ({
   openModalDetails,
   handleCloseModal,
   recruiters,
   isLoading,
}: Props) => {
   const [selectedRecruiterSenior, setSelectedRecruiterSenior] = useState<
      string | null
   >(null);
   const [selectedRecruiterGeneral, setSelectedRecruitergeneral] = useState<
      string | null
   >(null);

   const handleSelectRecruiterSenior = (
      event: React.ChangeEvent<HTMLInputElement>
   ) => {
      setSelectedRecruiterSenior(event.target.value);
      console.log("Seleccionaste el reclutador senior:", event.target.value);
   };

   const handleSelectRecruiterGeneral = (
      event: React.ChangeEvent<HTMLInputElement>
   ) => {
      setSelectedRecruitergeneral(event.target.value);
      console.log("Seleccionaste el reclutador general:", event.target.value);
   };

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
               bgcolor: "#FFFFFF",
               boxShadow: 24,
               p: 4,
               borderRadius: 2,
            }}
         >
            <Box className="flex flex-col w-full items-start gap-y-4">
               <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                  Asignar Reclutador
               </Typography>

               {isLoading ? (
                  <Spinner className="ml-36" width="45" height="45"/>
               ) : (
                  <>
                     <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">
                           Reclutadores senior
                        </FormLabel>
                        <RadioGroup
                           aria-labelledby="demo-radio-buttons-group-label"
                           name="radio-buttons-group"
                           value={selectedRecruiterSenior}
                           onChange={handleSelectRecruiterSenior}
                        >
                           {recruiters.reclutadoresSenior?.map((recruiter) => (
                              <FormControlLabel
                                 key={recruiter.id}
                                 value={recruiter.id}
                                 control={<Radio sx={{ color: "#5BC1E6" }} />}
                                 label={recruiter.nombre}
                              />
                           ))}
                        </RadioGroup>
                     </FormControl>

                     <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">
                           Reclutadores generales
                        </FormLabel>
                        <RadioGroup
                           aria-labelledby="demo-radio-buttons-group-label"
                           name="radio-buttons-group"
                           value={selectedRecruiterGeneral}
                           onChange={handleSelectRecruiterGeneral}
                        >
                           {recruiters.reclutadoresGeneral?.map((recruiter) => (
                              <FormControlLabel
                                 key={recruiter.id}
                                 value={recruiter.id}
                                 control={<Radio sx={{ color: "#5BC1E6" }} />}
                                 label={recruiter.nombre}
                              />
                           ))}
                        </RadioGroup>
                     </FormControl>
                  </>
               )}

               <Button
                  fullWidth
                  sx={{ backgroundColor: "#5BC1E6", color: "#ffffff" }}
               >
                  Asignar
               </Button>
            </Box>
         </Box>
      </Modal>
   );
};
