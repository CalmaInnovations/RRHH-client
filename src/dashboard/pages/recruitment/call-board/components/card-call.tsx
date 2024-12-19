import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
// import { useNavigate } from "react-router";
import { Call } from "../../job-openings/interfaces/calls-interface";
import CircleIcon from "@mui/icons-material/Circle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState } from "react";
import { ModalAsingReclutador } from "./modal-asing-reclutador";

interface Props {
   call: Call;
}

// FIX: fix responsive

export const CardCall = ({ call }: Props) => {

   const [activeModal, setActiveModal] = useState<string | null>(null);
   // const navigation = useNavigate();


   const openModal = (modalName: string) => setActiveModal(modalName);
   const closeModal = () => setActiveModal(null);

   return (
      <Card
         sx={{
            boxShadow: 3,
            cursor: "pointer",
            borderRadius: 2,
            "&:hover": { boxShadow: 5 },
         }}
         // onClick={() => navigation(`/recruitment/call/${call.idConvocatoria}`)}
      >
         <CardContent>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
               <Box>
                  <CircleIcon sx={{ fontSize: 12, mr: 1, color: "#9EA5B0" }} />
                  <Typography
                     component="span"
                     gutterBottom
                     sx={{ fontSize: 15 }}
                     color="#9EA5B0"
                  >
                     {call.estadoSolicitud}
                  </Typography>
               </Box>
               <Box>
                  <IconButton sx={{ pl: 2 }} onClick={() => openModal("asign")}>
                     <MoreHorizIcon sx={{ mr: 1, color: "#9EA5B0" }} />
                  </IconButton>
               </Box>
            </Box>
            <Box sx={{ mt: 2 }}>
               <Typography
                  sx={{ fontWeight: 600, color: "#5BC1E6", fontSize: "28px" }}
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
                  {call.cantidad}
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
                  Reclutador(a) asginado:
               </Typography>

               <Typography sx={{ fontWeight: 500, color: "#B5B5C3" }}>
                  no definido
               </Typography>
            </Box>
         </CardContent>


         <ModalAsingReclutador
            openModalDetails={activeModal === "asign"}
            handleCloseModal={closeModal}
         />
      </Card>
   );
};
