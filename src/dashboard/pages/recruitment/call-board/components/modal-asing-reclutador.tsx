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
import {
   RecruiterRes,
   RequestUpdateReq,
} from "../../request-area-recruiter/interfaces/calls-interface";
import { useState } from "react";
import { Spinner } from "../../../../components/spinner/spinner";
import { updateRequestService } from "../../request-area-recruiter/services/request-service";

interface Props {
   openModalDetails: boolean;
   handleCloseModal: () => void;
   recruiters: RecruiterRes;
   isLoading: boolean;
   idConvocatoria: number;
   handleGetCallsService: () => void;
}

export const ModalAsingReclutador = ({
   openModalDetails,
   handleCloseModal,
   recruiters,
   isLoading,
   idConvocatoria,
   handleGetCallsService,
}: Props) => {
   const [selectedRecruiter, setSelectedRecruiter] = useState<string | null>(
      null
   );

   const handleSelectRecruiter = (
      event: React.ChangeEvent<HTMLInputElement>
   ) => {
      setSelectedRecruiter(event.target.value);
   };

   const handleAssignRecruiter = async () => {
      if (!selectedRecruiter) {
         alert("Seleccione un reclutador");
         return;
      }

      const [type, id] = selectedRecruiter.split("-");

      const requestPayload: RequestUpdateReq = {
         ...(type === "senior"
            ? {
                 reclutadorSeniorId: parseInt(id),
                 reclutadorGeneralId: undefined,
              }
            : {
                 reclutadorGeneralId: parseInt(id),
                 reclutadorSeniorId: undefined,
              }),

         estado: "Completado",
         observaciones: "",
         beneficios: "",
         fechaPublicacion: new Date().toISOString(),
      };

      try {
         const response = await updateRequestService(
            idConvocatoria,
            requestPayload
         );

         console.log("Actualización exitosa:", response.data);


         await handleGetCallsService();
         handleCloseModal();
      } catch (error) {
         alert("Ocurrió un error al asignar el reclutador.");
      }
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
                  <Spinner className="ml-36" width="45" height="45" />
               ) : (
                  <>
                     <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">
                           Reclutadores senior
                        </FormLabel>
                        <RadioGroup
                           aria-labelledby="demo-radio-buttons-group-label"
                           name="radio-buttons-group"
                           value={selectedRecruiter}
                           onChange={handleSelectRecruiter}
                        >
                           {recruiters.reclutadoresSenior?.map((recruiter) => (
                              <FormControlLabel
                                 key={`senior- ${recruiter.id}`}
                                 value={`senior- ${recruiter.id}`}
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
                           value={selectedRecruiter}
                           onChange={handleSelectRecruiter}
                        >
                           {recruiters.reclutadoresGeneral?.map((recruiter) => (
                              <FormControlLabel
                                 key={`general- ${recruiter.id}`}
                                 value={`general- ${recruiter.id}`}
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
                  onClick={handleAssignRecruiter}
               >
                  Asignar Reclutador
               </Button>
            </Box>
         </Box>
      </Modal>
   );
};
