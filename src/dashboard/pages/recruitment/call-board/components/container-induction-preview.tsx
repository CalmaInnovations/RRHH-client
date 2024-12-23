import dayjs from "dayjs";
import { Box, Button, Link, Typography } from "@mui/material";
import { PostulantDataComplete } from "../interface/call-interface";
import { useCallBoardProvider } from "../hooks/use-call-board-provider";

interface Props {
   selectedCardPostulation: PostulantDataComplete;
   setModalEditCard: React.Dispatch<React.SetStateAction<boolean>>;
   closeModalPreviewCard: () => void;
}

export const ContainerInductionPreview = ({
   closeModalPreviewCard,
   setModalEditCard,
   selectedCardPostulation,
}: Props) => {
   const { recruiters } = useCallBoardProvider();

   const handleOpenModalEdit = () => {
      closeModalPreviewCard();
      setModalEditCard(true);
   };

   console.log(recruiters);

   return (
      <Box>
         <Box>
            <Typography
               component="p"
               sx={{
                  marginBottom: 2,
               }}
            >
               Nombre: {selectedCardPostulation?.postulante?.nombres}{" "}
               {selectedCardPostulation?.postulante?.apellidoPaterno}{" "}
               {selectedCardPostulation?.postulante?.apellidoMaterno}
            </Typography>

            <Typography
               component="p"
               sx={{
                  marginBottom: 2,
               }}
            >
               Correo:{selectedCardPostulation?.postulante?.email}
            </Typography>

            <Typography
               component="p"
               sx={{
                  marginBottom: 2,
               }}
            >
               Puesto:
            </Typography>

            <Typography
               component="p"
               sx={{
                  marginBottom: 2,
               }}
            >
               Enlace de Cv:{" "}
               <Link
                  href={selectedCardPostulation?.postulante?.cvUrl}
                  rel="noreferrer"
                  target="_blank"
               >
                  {selectedCardPostulation?.postulante?.cvUrl}
               </Link>
            </Typography>

            <Typography
               component="p"
               sx={{
                  marginBottom: 2,
               }}
            >
               Enlace de evidencia:{" "}
               {
                  selectedCardPostulation?.induccionGeneral
                     ?.linkEvidenciaInduccion
               }
            </Typography>

            <Typography
               component="p"
               sx={{
                  marginBottom: 2,
               }}
            >
               Coordinador de Onboarding:{" "}
               {recruiters?.reclutadoresGeneral.map((recruiter) => {
                  if (
                     recruiter.id ===
                     selectedCardPostulation?.induccionGeneral?.encargadoId
                  ) {
                     return recruiter.nombre;
                  }
               })}
            </Typography>

            <Typography
               component="p"
               sx={{
                  marginBottom: 2,
               }}
            >
               Enlace de Meet:{" "}
               {selectedCardPostulation?.induccionGeneral?.linkMeet}
            </Typography>

            <Typography
               component="p"
               sx={{
                  marginBottom: 2,
               }}
            >
               Inducción:{" "}
               {dayjs(
                  selectedCardPostulation?.induccionGeneral?.fechaHoraInduccion
               ).format("DD-MM-YYYY HH:mm:ss")}
            </Typography>

            <Typography
               component="p"
               sx={{
                  marginBottom: 2,
               }}
            >
               Observaciones:{" "}
               {selectedCardPostulation?.induccionGeneral?.observaciones}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 4, mb: 2 }}>
               <Button
                  onClick={() => handleOpenModalEdit()}
                  variant="contained"
                  sx={{ width: "100%", color: "white" }}
               >
                  Editar
               </Button>

               <Button
                  onClick={() => console.log("handleWithdrawProcessService()")}
                  variant="outlined"
                  sx={{
                     width: "100%",
                     color: "#35b1f6",
                  }}
               >
                  Enviar correo de inducción
               </Button>
            </Box>

            <Button
               onClick={() => console.log("Retirar Proceso")}
               variant="contained"
               sx={{
                  width: "100%",
                  color: "white",
                  backgroundColor: "#F63535",
               }}
            >
               Retirar del proceso
            </Button>
         </Box>
      </Box>
   );
};
