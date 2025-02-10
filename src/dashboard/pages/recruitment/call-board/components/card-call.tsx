import { Box, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import {
   Call,
   RecruiterRes,
} from "../../request-area-recruiter/interfaces/calls-interface";
import CircleIcon from "@mui/icons-material/Circle";
import { useState } from "react";
import { ModalAsingReclutador } from "./modal-asing-reclutador";
// import { getRecruitersAvailableService } from "../../request-area-recruiter/services/request-service";

interface Props {
   call: Call;
   handleGetCallsService: () => void;
}

// FIX: fix responsive

export const CardCall = ({ call, handleGetCallsService }: Props) => {
   const [recruiters, setRecruiters] = useState<RecruiterRes>(
      {} as RecruiterRes
   );
   const [idConvocatoria, setIdConvocatoria] = useState<number>(0);

   const [isLoading, setIsLoading] = useState(false);
   const [activeModal, setActiveModal] = useState<string | null>(null);

   const navigation = useNavigate();

   /*
      const openModal = async (modalName: string) => {
      const currentId = call.idConvocatoria;
      setIdConvocatoria(currentId);

      if (modalName === "asign") {
         setIsLoading(true);
         try {
            const { data } = await getRecruitersAvailableService();
            setRecruiters(data); // Actualiza el estado con los datos de la API
         } catch (error) {
            console.error("Error al obtener los reclutadores:", error);
         } finally {
            setIsLoading(false);
         }
      }
       setActiveModal(modalName);
      };}
   */

   const closeModal = () => setActiveModal(null);

   return (
      <Card
         sx={{
            boxShadow: 3,
            cursor: "pointer",
            borderRadius: 2,
            "&:hover": { boxShadow: 5 },
         }}
      >
         <CardContent>         
            <Box
               onClick={() =>
                  navigation(`/recruitment/call/${call.idConvocatoria}`)
               }
            >
               <Box sx={{ mt: 2 }}> 
                  <Typography
                     sx={{
                        fontWeight: 600,
                        color: "#5BC1E6",
                        fontSize: "28px",
                     }}
                  > 
                     {call.nombrePuesto}
                  </Typography> 
                  <Typography
                     sx={{ mb: 1.5, fontSize: "18px", fontWeight: 500 }}
                     color="#7E8299"
                  >
                     {call.modalidad}
                  </Typography>
               </Box>
               <Box
                  sx={{
                     display: "flex",
                     justifyContent: "space-between",
                     alignItems: "center",
                     gap: 1,
                  }}
               >
                  <Typography sx={{ fontWeight: 500, color: "#B5B5C3" }}>
                     <span style={{ color: "#2E384D" }}>Subárea:</span>{" "}
                     {call.nombreArea}
                  </Typography>

                  <Typography sx={{ fontWeight: 500, color: "#B5B5C3" }}>
                     <span style={{ color: "#2E384D" }}>Cantidad:</span>{" "}
                     {call.cantidadSolicitada}
                  </Typography>
               </Box>

               <Box
                  sx={{
                     display: "flex",
                     justifyContent: "space-between",
                     alignItems: "center",
                  }}
               >
                  <Typography sx={{ fontWeight: 500, color: "#2E384D" }}>
                     Reclutador(a) asignado:
                  </Typography>

                  <Typography sx={{ fontWeight: 500, color: "#B5B5C3" }}>
                     {call.reclutador}
                  </Typography>
               </Box>
            </Box>
         </CardContent>

         <ModalAsingReclutador
            openModalDetails={activeModal === "asign"}
            handleCloseModal={closeModal}
            recruiters={recruiters}
            isLoading={isLoading}
            idConvocatoria={idConvocatoria}
            handleGetCallsService={handleGetCallsService}
         />
      </Card>
   );
};